import { medidasPadroes, areas, alturaMinima, latas } from "../services/constantes.js";

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

    static quantidadeDeLatas(parede){
        
        let litros = this.converteTinta(parede)
        const qtdLatas = []

        if(litros >= latas.lata1){
            const lata1 = litros / latas.lata1
            qtdLatas.push(lata1);
            litros = litros%latas.lata1;
        }else{
            qtdLatas.push(0);
        }

        if(litros >= latas.lata2){
            const lata2 = litros / latas.lata2
            qtdLatas.push(lata2);
            litros = litros%latas.lata2;
        }else{
            qtdLatas.push(0);
        }

        if(litros >= latas.lata3){
            const lata3 = litros / latas.lata3
            qtdLatas.push(lata3);
            litros = litros%latas.lata3;
        }else{
            qtdLatas.push(0);
        }

        if(litros > 0){
            const lata4 = litros / latas.lata4
            litros = litros%latas.lata4;
            lata4 = litros > 0? lata4+1:lata4;
            qtdLatas.push(lata4);          
            
        }else{
            qtdLatas.push(0);
        }

        return qtdLatas;
        
    }
    

}