const path = require("path");
    class VeiculoController{
        static formCadastro(req,res){
            res.sendFile(path.join(__dirname, "..", "views", "formVeiculo.html"));
        }
        static cadastro(req, res){}

        static buscarTodos(req, res){}
    }
module.exports = VeiculoController;