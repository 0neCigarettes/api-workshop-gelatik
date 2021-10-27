const mongo = require("./database/mongo");
const express = require('express')
const logger = require("./utils/logger");
const port = process.env.PORT

mongo.createConnection().then((_) => logger.info("MongoDB connected"));

const admin = require('./routes/routes_auth')

app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/admin', admin)
app.use((req, res) => {
    res.status(401).json({ message: 'err' });
});

require('http').createServer();

app.listen(port, function () {
    console.log('Listening on port ' + port);
});

console.log("Connected to server");

module.exports = app;

