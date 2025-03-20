const app = require("express")();

app.get("/", (req, res)=>{
    res.send("Está funcionando =)")
});

app.listen(1402)


// git pull 