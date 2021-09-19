require('dotenv').config();

const express = require('express');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const response = require('./helpers/response');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Prefixes
app.use('/', indexRouter);
app.use('/api/', apiRouter);

// Throw 404 if URL not found
app.all('*', function (req, res) {
  return response.notFoundResponse(res, 'Not Found');
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return response.unauthorizedResponse(res, err.message);
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log('API running http://localhost:' + process.env.PORT);
});

module.exports = app;
