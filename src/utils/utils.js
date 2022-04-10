import { medidasPadroes, areas, alturaMinima } from "../services/constantes.js";

class Utils{

    static calculaArea(parede){

        const areaParede = parede.alturaDaParede * parede.larguraDaParede;
        const areaPortas = parede.numeroDePortas * areas.areaPorta;
        const areaJanelas = parede.numeroDeJanelas * areas.areaJanela;

        const area = areaParede - (areaPortas + areaJanelas)

        return area;

    }
    
    static somaArea(parede){
        
        const areaTotal = 0

        for(let i = 0; parede > i; i++){
            
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

    

}

class Retorno {
    constructor(lata, galao, lata2, lata3){
        QuantidadeLatasDe18L = lata,
        QuantidadeGaloes3_6L = galao,
        QuantidadeLatas2_5L = lata2,
        QuantidadeLatas0_5 = lata3
       }
  }
  
