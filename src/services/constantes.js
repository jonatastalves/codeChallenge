export const medidasPadroes = {
    alturaPorta: 1.9,
    larguraPorta: 0.8,
    alturaJanela: 1.2,
    larguraJanela: 2,
    areaMinima: 1,
    areaMaxima: 15,
    metroPorLitro: 5
}

export const areas = {
    areaPorta: medidasPadroes.alturaPorta*medidasPadroes.larguraPorta,
    areaJanela: medidasPadroes.alturaJanela*medidasPadroes.larguraJanela,
}

export const alturaMinima = medidasPadroes.alturaPorta+0.3

