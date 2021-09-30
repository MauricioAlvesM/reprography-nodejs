const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const cors = require("cors");

// var corsOptions = {
//   origin: "http://localhost:3000"
// };
// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//Models
const db = require("./models");

//Função para inserir os registros fixos de alguams tabelas (como tipo_usuario, tipo_copia, etc...)
const registros = require("./helpers/inserirRegistros")

// Routers

//Usuario router
require("./routes/usuario-routes")(app)
//Pedido router
require("./routes/pedido-routes")(app)
//Deatlhes do Pedido router
require("./routes/det_pedido-routes")(app)
//Auth Router
require('./routes/auth-routes')(app)
//ResetToken Router
require('./routes/resettoken-routes')(app)
//Swagger Routes
require('./routes/swagger')(app)


db.sequelize.sync({force: true}).then(() => {
  app.listen(3002, async () => {
<<<<<<< HEAD
    // await registros.Inserir();
=======
    await registros.Inserir()
>>>>>>> 94523ed4fa8bde10e600f11f8eb470f5d2d0f308
    console.log("(||||||||| | | -------- Server running on port 3002 -------- | | |||||||||)");
  });
});