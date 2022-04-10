import Validacoes from "../services/validacoes.js";
import Utils from "../utils/utils.js";
import Saida from "../model/saida.js";


export class Tintas{
    static router(app){
     
        app.post("/tintas", async(req,res)=>{
            
            const objParedes = req.body;
            const objValidado = Validacoes.validaBody(objParedes, 4)

            if(Validacoes.objValido(objValidado)){
                const latas = Utils.quantidadeDeLatas(objValidado);
                const resposta = new Saida(...latas)
                res.status(200).json(resposta);
            }else{
                res.status(400).json({Erro: "Valores inválidos, favor revisar a requisição!"});
            }
        })
    }
}

export default Tintas;

