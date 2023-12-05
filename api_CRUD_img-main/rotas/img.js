const express = require('express');
const multer = require('multer');
const azureStorage = require('azure-storage');
const path = require('path');
const dotenv = require('dotenv')

dotenv.config({path: __dirname + "../../.env"})

const app = express();
const imagem = express.Router();

// Configuração do multer para o upload de imagens
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configuração do Azure Storage

const azureStorageConfig = {
    accountName: process.env.meupai,
    accountKey: process.env.senha,
    containerName: 'img', // Substitua com o nome do seu container no Azure Storage
  };
  
  const blobService = azureStorage.createBlobService(
    `DefaultEndpointsProtocol=https;AccountName=${azureStorageConfig.accountName};AccountKey=${azureStorageConfig.accountKey};EndpointSuffix=core.windows.net`
  );
  
// Rota para exibir o formulário HTML
imagem.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para lidar com o upload de imagens
imagem.post('/upload', upload.single('image'), (req, res) => {
  console.log(process.env.login)
  const blobName = req.file.originalname;
  const stream = require('stream');
  const streamifier = require('streamifier');
  const bufferStream = new stream.PassThrough();
  bufferStream.end(req.file.buffer);

  blobService.createBlockBlobFromStream(
    azureStorageConfig.containerName,
    blobName,
    bufferStream,
    req.file.size,
    { contentSettings: { contentType: req.file.mimetype } },
    (error, result, response) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        res.status(200).json({'Url':"https://cozinhacriativa.blob.core.windows.net/img/" + blobName});
      }
    }
  );
});

module.exports = imagem
