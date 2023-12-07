<H2>DESCRIÇÃO</H2>
Esta api tem como função conectar o banco a aplicação, em forma de campo, sendo assim não tem uma chamada especifica, mas os campos de uso. Nesta api temos a pasta "modelos", onde há os modelos de inserção de dados, junto dos tipos dos dados que hão de ser inseridos.
Há tambem na pasta rotas, o arquivo "img", que sua função é faser inserção de imagens em um outro banco.

<h3>BANCOS USADOS</h3>
MongoDB: recebe os dados de informações como usuario... 
azure: recebe as imagens 

<h2>RESPOSTA</h2>

As informações são alocadas de forma indicada em "modelos"

<h3>categoria</h3>

   utiliza as categorias de informação para alocar em receitas

  * pk_categoria: utiliza as categorias aceitas

<h3>receita</h3>

   aqui são alocadas as informações da receita

  * id: indentificação da receita
  * apresentacao: uma descrição da receita
  * tempo_preparo: o tempo para finalizar a receita
  * ingredientes: informa os ingrdientes usados
  * modo_de_preparo: passo a passo do preparo
  * imagem: imagem da receita (traz as informações do arquivo imagem)
  * categoria: tipo de receita (traz as informações de categoria)

<h3>usuario</h3>

   aqui são alocadas as informações so usuario

  * nome: nome do usuario
  * sobenome: sobrenome do usuario
  * email: email do usuario para login
  * senha: senha para o login
  * telefone: numero de telefone
  * cpf: informação do documento do usuario
  * usuario: o "@" do usuario
  * sobre: informação do usuario como uma bio

  <h3>*img*</h3>
  em img é feito a alocação e recsição da imagem informada em receita, la se encontra a recsição do banco e a forma que é alocado

  <h2>Diretrizes</h2>
  A plataforma possui uma média de pedidos por hora, então atenção ao executá-los, são aproximadamente 10 solicitações autorizadas em 10 minutos. Se ultrapassar esse limite você está vulnerável a complicações no recebimento das informações.

<h2>url</h2>
Caso não queira usar esse serviço na sua máquina local, você pode utilizar está API que já está na nuvem. A base URL para todas as requisições da API é:
(https://sore-gray-dolphin-cape.cyclic.app/) 
