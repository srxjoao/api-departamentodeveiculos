const app = require("express")();

app.get("/", (req, res)=>{
    res.send("Olá esta e a primeira atividade de PTAS2")
});

app.listen(8001)