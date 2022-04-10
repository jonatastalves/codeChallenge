import Utils from "../utils/utils.js"
import { paredeTestes } from "../services/constantes.js";


test("Calculo da area de uma parede",()=>{
    expect(Utils.calculaArea(paredeTestes[0])).toBe(5.08)
})

test("Soma da area das 4 paredes",()=>{
    expect(Utils.somaArea(paredeTestes)).toBe(29.68)
})

test("Quantidade de litros necessario",()=>{
    expect(Utils.converteTinta(paredeTestes)).toBe(5.936)
})

test("Quantidade de latas necessarias",()=>{
    expect(Utils.quantidadeDeLatas(paredeTestes)).toStrictEqual([0, 2, 0, 0])
})