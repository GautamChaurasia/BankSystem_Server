require("./db/conn")
const express = require("express");
const app = express();
const cookie = require('cookie-parser')
const cors = require('cors');

const port = process.env.PORT || 8000

app.use(cors({credentials:true, origin:true}));
app.use(express.json());
app.use(cookie());
app.use(require("./router/routes"));

app.get("/", (req, res)=>{
    res.send("You are connected to the server");
});

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
});