const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.use(bodyparser.text());

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require(path.join(__dirname, "./app/routes/apiRoutes"))(app);
require(path.join(__dirname, "./app/routes/htmlRoutes"))(app);

app.listen(3030, () => console.log('http://localhost:3030'))