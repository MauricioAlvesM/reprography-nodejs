<h3 align="center">🚧 ⚠️ Em Desenvolvimento... ⚠️ 🚧</h3>
 
 
<h2 align="center">Sistema Reprográfico - Back-end</h2>

<div align="center">
 <img src="https://img.shields.io/badge/Node.js-43853D?style=&logo=node-dot-js&logoColor=white" />
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=&logo=javascript&logoColor=black" />
 <img src="https://img.shields.io/badge/Express.js-000000?style=&logo=express&logoColor=white" />
<img src="https://img.shields.io/github/license/luccazx12/reprography-nodejs">
 <img src="https://img.shields.io/github/repo-size/luccazx12/reprography-nodejs">
 <img src="https://img.shields.io/github/last-commit/luccazx12/reprography-nodejs">
 </div>

<a href="https://github.com/Squad-Back-End/reprography-nodejs/blob/master/README-en.md">English Version</a>

 # Índice
- [Sobre o Projeto](#SobreoProjeto)
- [Recursos Utilizados Neste Projeto](#RecursosUtilizadosNesteProjeto)
- [Dependências Do Projeto](#DependênciasDoProjeto)
- [Como iniciar a aplicação](#ComoIniciarAAplicação)
- [Configurando](#Configurando)
- [Iniciando O Servidor](#IniciandoOServidor)
- [Documentações](#Documentações)
- [Swagger](#Swagger)
- [Como Contribuir Para O Projeto](#ComoContribuirParaOProjeto)
- [Desenvolvedores](#Desenvolvedores)


## Apresentação
Bem-vindo, este projeto é o nosso Trabalho de Conclusão de Curso <a href="https://pt.wikipedia.org/wiki/Trabalho_de_conclus%C3%A3o_de_curso">(TCC)</a> do curso técnico de Desenvolvimento de sistemas da a Escola SENAI Suíço-Brasileira Paulo Ernesto Tolle.

#### [Github do Front-end do projeto](https://github.com/ViictorSR388/reprografia_front-end)
 

## <a name="SobreoProjeto"></a> Sobre o Projeto
Esta aplicação foi requerida pela coordenadora da escola Senai Suiço-Brasileira, com o intuito de fazer o controle das impressões realizadas pelos diversos setores da escola (professores, funcionários, etc), podendo assim, administrar melhor gastos e desperdícios.

## <a name="RecursosUtilizadosNesteProjeto"></a>📌 Recursos utilizados neste projeto:

<table align="center">
 <th><h3>Runtime environment</h3></th>
 <th><h3>Linguagem</h3></th>
 <th><h3>Banco de dados</h3></th>
 <th><h3>Framework</h3></th>
 <th><h3>Editor de código</h3></th>
 <th><h3>Documentação</h3></th>
  <tr>
    <td valign="top" align="center">
      <img height="80" width="80" href="https://nodejs.org/en/" src="https://cdn-icons-png.flaticon.com/512/919/919825.png" style="max-width:100%;"></img>
    </td>

   <td valign="top" align="center">
      <img height="80" width="80" href="https://www.javascript.com" src="https://www.seekpng.com/png/full/80-803501_javascript-logo-logo-de-java-script-png.png" style="max-width:100%;"></img>
      </td>
  
   <td valign="top" align="center">
      <img height="80" width="80" href="https://mariadb.org" src="https://e3z7c6v7.rocketcdn.me/blog/wp-content/uploads/2018/03/mariadb.png" style="max-width:100%;"></img>
    </td>

   <td valign="top" align="center">
      <img height="80" width="80" href="https://expressjs.com" src="https://hackr.io/tutorials/learn-express-js/logo/logo-express-js?ver=1557508379" style="max-width:100%;"></img>
    </td>

   <td valign="top" align="center">
      <img height="80" width="80" href="https://code.visualstudio.com/Download" src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png" style="max-width:100%;"></img>
    </td>

   <td valign="top" align="center">
      <img height="80" width="80" href="https://swagger.io" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" style="max-width:100%;"></img>
    </td>
  </tr>
</table>

### <a name="DependênciasDoProjeto"></a>Dependências do projeto

- Nodejs
  * Express 4.17.1 - É um framework para Node.js que fornece recursos mínimos para construção de servidores web.
  * Swagger-autogen 2.11.2
  * Nodemon 2.0.13 - Para restartar o server sempre que houver uma alteração. 
  * Jwt - Para verificação de token.
  * Bcrypt 5.0.1 - Para Cryptografar as senhas de usuários antes de salvar no banco.
  * Cors 2.8.5 - É um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens
  * Multer 1.4.2 - É um middleware node.js para lidar com multipart, que é usado principalmente para fazer upload de arquivos.
  * Body-Parser 1.19.0 - Analisa os dados codificados JSON, buffer, string e URL enviados usando a solicitação HTTP POST.
  * MariaDB 2.5.4 - É o banco de dados que nos usamos. 


## <a name="ComoIniciarAAplicação"></a> :arrow_forward: Como iniciar a aplicação:

### Pré-requisitos

* Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

* Além disto é bom ter um editor para trabalhar com o código como: [VSCode](https://code.visualstudio.com).



### <a name="Configurando"></a>Configurando

1. Clone ou baixe esse repositório na sua máquina.

2.  Instale as dependências do projeto, com o comando `npm install` ou `yarn install` caso tenha o [yarn](https://yarnpkg.com) instalado.

3. O arquivo `.env.sample` é usado para configurar todas as variáveis de ambiente que você precisa, como as informações sobre o seu **banco de dados**. Altere todas as informações para que a aplicação funcione adequadamente.

```bash
# Banco de Dados
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
DB_DIALECT=

# Mailer
#exemplo: hotmail
MAILER_SERVICE= 
MAILER_USER=
MAILER_PASS=
#Email que serão enviadas as solicitações/avaliações de reprografia
MAILER_COMPANY_EMAIL=
#Host e porta do front-end que será enviado no e-mail de recuperação de senha 
#exemplo: http://localhost:3002
MAILER_HOST_PORT= 

#JWT 
JWT_SECRET_KEY=
HEADER_KEY=
SALT_ROUNDS=

#First Account in application
ADMIN_EMAIL=
ADMIN_PASS=
```

3. Lembre-se de renomear este arquivo para `.env` para conseguir executar a aplicação.


### <a name="IniciandoOServidor"></a>Iniciando o servidor

**Importante:** Antes de iniciar a aplicação, primeiro crie o **banco de dados** que você inseriu em DB_DATABASE no arquivo de configuração das variáveis de ambiente.

Execute o comando abaixo para iniciar o Nodejs e conectar ao banco de dados:
``` bash
# Para iniciar em modo de desenvolvimento (requer nodemon) -> Executará o script "dev" do package.json.
$ npm run start

# Para iniciar normalmente -> Executará o script "start" do package.json.
$ npm run dev
```

Caso prefira o Yarn:
```bash
# Para iniciar em modo de desenvolvimento (requer nodemon) -> Executará o script "dev" do package.json.
$ yarn start

# Para iniciar normalmente -> Executará o script "start" do package.json.
$ yarn dev
```

⚡ Aguarde a execução e a API estará rodando na URL:  `http://localhost:3002`

<br>
E assim você terá sua aplicação rodando localmente.
<br>


## <a name="Documentações"></a> 📄 Documentações:

 * [Área de documentação](https://github.com/Squad-Back-End/reprography-nodejs/tree/master/docs)

### <a name="Swagger"></a> :triangular_flag_on_post: Swagger


Criando a documentação com o Swagger, conseguimos simplificar não só o desenvolvimento da nossa API e da squad como um todo, mas também o relacionamento com as outras partes do projeto (squad front-end, infra...). Por isso tentamos ao máximo deixa-lá autoexplicativa e completa. 

⚡ Swagger rodando em: `http://localhost:3002/docs/`

![image](https://raw.githubusercontent.com/Squad-Back-End/reprography-nodejs/master/docs/screenshots/swagger/swagger.png)


## <a name="ComoContribuirParaOProjeto"></a>😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## <a name="Desenvolvedores"></a> :rocket: Desenvolvedores :octocat:

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/Luccazx12">
    <img src="https://avatars.githubusercontent.com/u/71888383?v=4" width="100px" alt="Imagem do perfil de Lucca"/>
    <br />
     <sub><b>Lucca</b></sub><br />:snowflake:TechLead:snowflake:
     </td>
    <td align="center"><a href="https://github.com/patricksp08">
    <img src="https://avatars.githubusercontent.com/u/71887999?v=4" width="100px" alt="Imagem do perfil de Ṕatrick"/>
    <br />
    <sub><b>Patrick</b></sub><br />:snowflake::snowman::snowflake:
     </td>
    <td align="center"><a href="https://github.com/MrCyberpunKx">
    <img src="https://avatars.githubusercontent.com/u/71890228?v=4" width="100px" alt="Imagem do perfil de Daniel"/>
    <br />
    <sub><b>Daniel Santos</b></sub><br />:snowflake::snowman::snowflake:
     </td>
     <td align="center"><a href="https://github.com/Oseias-maker">
    <img src="https://avatars.githubusercontent.com/u/71889159?v=4" width="100px" alt="Imagem do perfil de Oséias"/>
    <br />
    <sub><b>Oseias Farias Jesus</b></sub><br />:snowflake::snowman::snowflake:
     </td>
    <td align="center"><a href="https://github.com/JoaoOFS">
    <img src="https://avatars.githubusercontent.com/u/71888050?v=4" width="100px" alt="Imagem do perfil de João"/>
    <br />
    <sub><b>João Otávio</b></sub><br />:snowflake::snowman::snowflake:
     </td>
         <td align="center"><a href="https://github.com/Tiagogtr">
    <img src="https://avatars.githubusercontent.com/u/71888086?v=4" width="100px" alt="Imagem do perfil de Tiago"/>
    <br />
    <sub><b>Tiago Soares</b></sub><br />:snowflake::snowman::snowflake:
     </td>
          
    <td align="center"><a href="https://github.com/MauricioAlvesM">
    <img src="https://avatars.githubusercontent.com/u/39388652?v=4" width="100px" alt="Imagem do perfil de Mauricio"/>
    <br />
    <sub><b>Mauricio Moreira</b></sub><br />:snowflake::snowman::snowflake:
     </td>
 </tr>
</table>

## 📝 Licença

Este projeto está sobre a licença MIT.
