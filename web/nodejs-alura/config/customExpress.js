const express = require('express');
const consign = require('consign');
// const bodyParser = require('body-parser');

module.exports = () => {
  const app = express();

  // app.use(bodyParser.urlencoded({ extended: true })); => bodyParses foi deprecado, agora você pode usar o próprio express para identificar o formato de entrada:
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  consign().include('controllers').into(app);

  return app;
};
