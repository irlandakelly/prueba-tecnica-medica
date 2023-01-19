const express =  require("express");
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world from NodeJS Express");
});

app.listen(app.get('port'),() => {
    console.log("Start server on port " + app.get('port'));
});

const routes = require('./routes');
app.use('/test', routes);