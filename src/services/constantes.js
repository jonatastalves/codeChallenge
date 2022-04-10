export const medidasPadroes = {
  alturaPorta: 1.9,
  larguraPorta: 0.8,
  alturaJanela: 1.2,
  larguraJanela: 2,
  areaMinima: 1,
  areaMaxima: 15,
  metroPorLitro: 5,
};

export const areas = {
  areaPorta: medidasPadroes.alturaPorta * medidasPadroes.larguraPorta,
  areaJanela: medidasPadroes.alturaJanela * medidasPadroes.larguraJanela,
};

export const alturaMinima = medidasPadroes.alturaPorta + 0.3;

export const latas = {
  lata1: 18,
  lata2: 3.6,
  lata3: 2.5,
  lata4: 0.5,
};

export const paredeTestes = [
  {
    altura: 3,
    largura: 3,
    numeroDePortas: 1,
    numeroDeJanelas: 1
  },
  {
    altura: 3,
    largura: 3,
    numeroDePortas: 0,
    numeroDeJanelas: 1
  },
  {
    altura: 3,
    largura: 3,
    numeroDePortas: 0,
    numeroDeJanelas: 0
  },
  {
    altura: 3,
    largura: 3,
    numeroDePortas: 0,
    numeroDeJanelas: 0
  }
];
