const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: '1.0.0',      // by default: '1.0.0'
    title: 'API para Sistema Reprográfico',        // by default: 'REST API'
    description: '',  // by default: ''
  },
  host: 'localhost:3002',      // by default: 'localhost:3000'
  basePath: '',  // by default: '/'
  schemes: ['http'],   // by default: ['http']
  consumes: [],  // by default: ['application/json']
  produces: [],  // by default: ['application/json']
  tags: [        // by default: empty Array
    {
      name: '',         // Tag name
      description: '',  // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {},  // by default: empty object
  definitions: {},          // by default: empty object
};

const outputFile = './.config/swagger.config.json';
const endpointsFiles = ['./routes/detPedido-routes.js', './routes/pedido-routes.js', './routes/resetToken-routes.js', "./routes/usuario-routes.js", "./routes/servico-routes.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */
const generateFile = swaggerAutogen(outputFile, endpointsFiles, doc);

module.exports = { generateFile: generateFile }