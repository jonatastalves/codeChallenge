import { medidasPadroes, areas, alturaMinima, latas } from "../services/constantes.js";

class Utils{

    static calculaArea(parede){

        const areaParede = parede.altura * parede.largura;
        const areaPortas = parede.numeroDePortas * areas.areaPorta;
        const areaJanelas = parede.numeroDeJanelas * areas.areaJanela;

        const area = areaParede - (areaPortas + areaJanelas)

        return area;

    }
    
    static somaArea(parede){
        
        let areaTotal = 0

        for(let i = 0; parede.length > i; i++){
            
            let areaAtual = this.calculaArea(parede[i])
            
            areaTotal += areaAtual
            
        }

        return areaTotal
    }

    static converteTinta(parede){
        
        const areaDeParedes = this.somaArea(parede)

        const litroDeTintas = areaDeParedes / medidasPadroes.metroPorLitro;

        return litroDeTintas;

    }

    static calculoLata(volumeLata, litros){
        
        const resposta = [];
        const lata = Math.round(litros / volumeLata)
        let sobra = litros - (lata * volumeLata);

        sobra = sobra > 0? sobra:0;

        if(lata > 0){
            resposta.push(lata) 
            resposta.push(sobra)
        }else{
            resposta.push(0);
            resposta.push(sobra);
        }

        return resposta;
    }

    static quantidadeDeLatas(parede){
        
        let litros = this.converteTinta(parede)
        const qtdLatas = []
        const arrLatas = Object.values(latas)
        let calculo = []

        arrLatas.forEach((elemento)=>{
            calculo = this.calculoLata(elemento, litros);
            qtdLatas.push(calculo[0]);
            litros = calculo[1];
        })

        return qtdLatas;
        
    }
    

}

export default Utils;