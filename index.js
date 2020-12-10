const express = require('express');
const PORT = process.env.PORT || 3000;
const secureRoute = require('./routes/secure');
const pages = require('./routes/pages');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use('/secure', secureRoute);
app.use('/', pages);


app.listen(PORT, () => {
    console.log('listening on Port ' + PORT);
});