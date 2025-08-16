const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ResQ API',
      version: '1.0.0',
      description: 'API documentation for ResQ backend',
    },
  },
  apis: ['./routes.js'], // This must be correct
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', routes);

// Start server
const PORT = 3000;
app.get('/api/health', (req, res) => {
  res.json({ status: "Backend is working!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

