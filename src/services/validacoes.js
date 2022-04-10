import { medidasPadroes, areas, alturaMinima } from "../services/constantes.js"

class Validacoes{
    
    static validaAltura(parede){

        let alturaMinimaParede = 0
        const altura = parede.alturaDaParede

        if(this.temPorta(parede)) alturaMinimaParede = alturaMinima;

        if(typeof altura == 'number' && altura > alturaMinimaParede){
            return true
        }else{
            return false;
        }
    }

    static temPorta(parede){
        
        if(parede.numeroDePortas && parede.numeroDePortas > 0 ){
            return true;
        }else{
            return false;
        }
    }


    static validaBody(body, length){
        
        if(!body.length == length) return [false];

        let arrReturn = [];
    
        for(let i =0; i < body.length; i++){
          if( 
                this.validaAltura(body[i].altura) &&
                this.validalargura(body[i].largura) &&
                this.validaPortas(body[i].numeroPortas) &&
                this.validaJanelas(body[i].numeroJanelas)
            ){
            arrReturn.push(body[i])
          } else {
            arrReturn.push(false)
          }
        }
        return arrReturn;
    }

    static objValido(objValidado){
        if(!objValidado.includes(false)){
            return true;
        }else{
            return false;
        }
    }

}

export default Validacoes;

// Regras de negócio

// A parede pode ter menos de 1 metro quadrado
// nem mais de 15 metros quadrados, mas pode 
//possuir alturas e larguras diferentes

// O total de área das portas e 
//janelas deve ser no máximo 50% 
//da área de parede

// A altura de paredes com porta 
//deve ser, no mínimo, 30 centímetros maior 
//que a altura da porta

// Cada janela possui as 
//medidas: 2,00 x 1,20 mtos

// Cada porta possui as medidas: 0,80 x 1,90

// Cada litro de tinta é capaz de pintar 
//5 metros quadrados

// Não considero teto nem piso.
// As variações de tamanho das latas de tinta são:

// 0,5L
// 2,5L
// 3,6 litros
// 18 litros