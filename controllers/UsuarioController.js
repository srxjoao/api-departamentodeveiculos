const path = require("path");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

class usuarioController {
    static async cadastrar(req, res) {
        
        console.log(req.body);

        const { nome, email, senha } = req.body;

        const salt = bcryptjs.genSaltSync(8);
        const hashSenha = bcryptjs.hashSync(senha, salt);

     


        const usuario = await client.usuario.create({
            data: {
                nome,
                email,
                senha: hashSenha,
            },
        });

        res.json({
            usuarioId: usuario.id,
        });

    }

    static async login(req, res) {
        const { email, senha } = req.body;

        const usuario = await client.usuario.findUnique({
            where: {
                email: email,
            },
        });

        if (!usuario) {
            return res.json({
                msg: "Usuário não encontrado :(",
            });
        }

        const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.json({
                msg: "Senha incorreta :(",
            });
        }

        const token = jwt.sign({ id: usuario.id }, process.env.SENHA_SERVIDOR, { expiresIn: "1h" });
        res.json({
            msg: "Autenticado! :D",
            token: token,
        });
    }

    static async verificaAutenticacao(req, res, next){
        const authHeader = req.headers["authorization"];
        if(authHeader){
            const token  = authHeader.split(" ")[1];
        }
        res.json({
            msg: "token não encontrado"
        });

        jwt.verify(token, process.env.SENHA_SERVIDOR, (err, payload) =>{
            if(err){
                return res.json({
                msg: "token invalido"
            });
            req.usuarioId = payload.id;
            next();
            }
        })
    }
}

module.exports = usuarioController