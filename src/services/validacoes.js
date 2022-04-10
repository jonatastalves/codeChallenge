import { medidasPadroes, areas, alturaMinima } from "../services/constantes.js";

class Validacoes {
  static validaAltura(parede) {
    let alturaMinimaParede = 0;
    const altura = parede.alturaDaParede;

    if (this.temPorta(parede)) alturaMinimaParede = alturaMinima;

    if (typeof altura == "number" && altura > alturaMinimaParede) {
      return true;
    } else {
      return false;
    }
  }

  static temPorta(parede) {
    if (parede.numeroDePortas && parede.numeroDePortas > 0) {
      return true;
    } else {
      return false;
    }
  }

  static validaBody(body, length) {
    if (!body.length == length) return [false];

    let arrReturn = [];

    for (let i = 0; i < body.length; i++) {
      if (this.validaAltura(body[i].altura) && this.validaArea(body[i])) {
        arrReturn.push(body[i]);
      } else {
        arrReturn.push(false);
      }
    }
    return arrReturn;
  }

  static objValido(objValidado) {
    if (!objValidado.includes(false)) {
      return true;
    } else {
      return false;
    }
  }

  static validaAreaPortasEJanelas(parede) {
    const areaParede = parede.alturaDaParede * parede.larguraDaParede;
    const areaPortas = parede.numeroDePortas * areas.areaPorta;
    const areaJanelas = parede.numeroDeJanelas * areas.areaJanela;

    if (areaPortas + areaJanelas <= areaParede / 2) {
      return true;
    } else {
      return false;
    }
  }

  static validaArea(parede) {
    if (!this.validaAreaPortasEJanelas(parede)) return false;

    const areaParede = parede.alturaDaParede * parede.larguraDaParede;

    if (areaParede >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

export default Validacoes;

