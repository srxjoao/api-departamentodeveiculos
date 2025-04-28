const path = require("path");
const {PrismaClient} = require("@prisma/client")
const  prisma = new PrismaClient();


    class VeiculoController{
        static formCadastro(req,res){
            res.sendFile(path.join(__dirname, "..", "views", "formVeiculo.html"));
        }
        
        static async cadastro(req, res){
        const veiculo = await prisma.veiculo.create({
                data:{
                    placa: req.body.placa,
                    modelo: req.body.modelo,
                    ano: parseInt(req.body.ano),
                    cor: req.body.cor,
                },
            })
            res.send(`O Veículo foi cadastrado sob o ID ${veiculo.id}`);
        }

    // .body pegar dados que vieram via post e o query e usado para dados que vieram via get        
        static buscarTodos(req, res){}
    }

module.exports = VeiculoController;