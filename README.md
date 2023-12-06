<H2>DESCRIÇão</H2>
Esta api tem como função conectar o banco a aplicação, em forma de campo, sendo assim não tem uma chamada especifica, mas os campos de uso. Nesta api temos a pasta "modelos", onde há os modelos de inserção de dados, junto dos tipos dos dados que hão de ser inseridos.
Há tambem na pasta rotas, o arquivo "img", que sua função é faser inserção de imagens em um outro banco.

<h3>BANCOS USADOS</h3>
MongoDB: recebe os dados de informações como usuario... 
azure: recebe as imagens 

<h2>RESPOSTA</h2>

As informações são alocadas de forma indicada em "modelos"

<h3>categoria</h3>

  - utiliza as categorias de informação para alocar em receitas

  * pk_categoria: utiliza as categorias aceitas

<h3>receita</h3>

  - aqui são alocadas as informações da receita

  * id: indentificação da receita
  * apresentacao: uma descrição da receita
  * tempo_preparo: o tempo para finalizar a receita
  * ingredientes: informa os ingrdientes usados
  * modo_de_preparo: passo a passo do preparo
  * imagem: imagem da receita (traz as informações do arquivo imagem)
  * categoria: tipo de receita (traz as informações de categoria)

<h3>usuario</h3>

  - aqui são alocadas as informações so usuario

  *
