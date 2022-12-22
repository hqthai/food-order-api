const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const route = require('./routes')
var port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});