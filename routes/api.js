const app = require('express')();

app.use('/branch/', require('./branch'));
app.use('/buffet/', require('./buffet'));

module.exports = app;
