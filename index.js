const express = require ("express");
const cors = require ("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 8080;


const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");


app.get('/' ,( req, res) => {
    res.send("Hola Funka")
})

app.get('/about' ,( req, res) => {
    res.json(about)
})

app.get('/portfolio' ,( req, res) => {
    res.json(portfolio)
})


app.listen(port, () => {
    console.log('App listening on port !');
    console.log(`Server on : ${port}`);
});