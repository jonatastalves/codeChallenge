import { medidasPadroes, areas, alturaMinima } from "../services/constantes.js";

class Validacoes {
  /**
   * 
   * @param {object} parede 
   * @returns boolean 
   */
  static validaAltura(parede) {
    let alturaMinimaParede = 0;
    const altura = parseInt(parede.altura);

    if (this.temPorta(parede)) alturaMinimaParede = alturaMinima;
    
    if (altura && altura > alturaMinimaParede) {
      return true;
    } else {
      return false;
    }
  }
/**
 * 
 * @param {object} parede 
 * @returns boolean
 */
  static temPorta(parede) {
    
    if (parede.numeroDePortas && parede.numeroDePortas > 0) {
      return true;
    } else {
      return false;
    }
  }
/**
 * 
 * @param {Array<object>} body 
 * @param {number} length 
 * @returns {Array<object>}
 */
  static validaBody(body, length) {
    if (!body.length == length) return [false];
    
    let arrReturn = [];

    for (let i = 0; i < body.length; i++) {
            
      if (this.validaAltura(body[i]) && this.validaArea(body[i])) {
        arrReturn.push(body[i]);
      } else {
        arrReturn.push(false);
      }
    }
    return arrReturn;
  }
/**
 * 
 * @param {object} objValidado 
 * @returns boolean
 */
  static objValido(objValidado) {
    if (!objValidado.includes(false)) {
      return true;
    } else {
      return false;
    }
  }
/**
 * 
 * @param {object} parede 
 * @returns boolean
 */
  static validaAreaPortasEJanelas(parede) {
    const areaParede = parede.altura * parede.largura;
    const areaPortas = parede.numeroDePortas * areas.areaPorta;
    const areaJanelas = parede.numeroDeJanelas * areas.areaJanela;

    if (areaPortas + areaJanelas <= areaParede / 2) {
      return true;
    } else {
      return false;
    }
  }
/**
 * 
 * @param {object} parede 
 * @returns boolean
 */
  static validaArea(parede) {
    if (!this.validaAreaPortasEJanelas(parede)) return false;

    const areaParede = parede.altura * parede.largura;

    if (areaParede >= 1 && areaParede <= 15) {
      return true;
    } else {
      return false;
    }
  }
}

export default Validacoes;