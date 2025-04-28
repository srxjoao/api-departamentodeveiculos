const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Departamento de veículos");
});

const veiculoRoutes = require("./routes/veiculoRoutes")
app.use("/veiculos",veiculoRoutes)

app.listen(8080, (err)=>{
    if(err){
        console.log("Erro"+ JSON.stringify(err));
    }else{
        console.log(`Aplicação rodando em localhost:8080`);
    }
})