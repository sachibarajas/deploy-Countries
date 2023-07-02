const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Metadata info about the API
const options = {
    definition:{
        openapi: "3.0.0",
        info: {title: 'The countries APP', version: '1.0.0'}
    },
    apis: ['../routes/index.js']
}

//docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

//function to setup our docs
const swaggerDocs = (app,port) => {
    app.use('/api/V1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


    console.log(`Version 1 Docs are available at http://localhost:${port}/api/V1/docs`);
}

module.exports = { swaggerDocs }

