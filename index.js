const express = require('express');
const bodyParser = require('body-parser');
const { odiRoutes } = require('./routes/odi.js');
const { t20Routes } = require('./routes/t20.js');
const { testRoutes } = require('./routes/test.js');

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.json('welcome to player rankings api');
});

// Routes
app.use('/odi', odiRoutes);

app.use('/t20', t20Routes);

app.use('/test', testRoutes);
