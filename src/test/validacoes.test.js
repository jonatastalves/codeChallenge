import Validacoes from "../services/validacoes.js";

test("Validar altura se tiver porta e altura menor",()=>{
    expect(Validacoes.validaAltura({numeroDePortas:1,altura:1})).toBe(false);
});

test("Validar altura se não tiver porta",()=>{
    expect(Validacoes.validaAltura({numeroDePortas:0,altura:1})).toBe(true);
});

test("Validar altura se tiver porta e altura estiver correta",()=>{
    expect(Validacoes.validaAltura({numeroDePortas:1,altura:3})).toBe(true);
});

test("Validar se tem 1 porta", ()=>{
    expect(Validacoes.temPorta({numeroDePortas: 1})).toBe(true);
});

test("Validar se tem 0 porta", ()=>{
    expect(Validacoes.temPorta({numeroDePortas: 0})).toBe(false);
});

test("Validar se não existe numero de porta", ()=>{
    expect(Validacoes.temPorta({})).toBe(false);
});

test("Validação de objeto", ()=>{
    expect(Validacoes.objValido([false])).toBe(false);
})

test("Validação de objeto", ()=>{
    expect(Validacoes.objValido([])).toBe(true);
})

test("Validação de área de portas e janelas", ()=>{
    expect(Validacoes.validaAreaPortasEJanelas({altura: 3, largura: 3, numeroDePortas: 1, numeroDeJanelas: 1})).toBe(true)
})

test("Validação de área de portas e janelas", ()=>{
    expect(Validacoes.validaAreaPortasEJanelas({altura: 3, largura: 3, numeroDePortas: 2, numeroDeJanelas: 2})).toBe(false)
})

test("Validação de área da parede", ()=>{
    expect(Validacoes.validaArea({altura: 3, largura: 3, numeroDePortas: 1, numeroDeJanelas: 1})).toBe(true)
})

test("Validação de área da parede", ()=>{
    expect(Validacoes.validaArea({altura: 3, largura: 3, numeroDePortas: 2, numeroDeJanelas: 2})).toBe(false)
})

test("Validação de área da parede", ()=>{
    expect(Validacoes.validaArea({altura: 0.5, largura: 0.5, numeroDePortas: 0, numeroDeJanelas: 0})).toBe(false)
})

test("Validação de área da parede", ()=>{
    expect(Validacoes.validaArea({altura: 1, largura: 1, numeroDePortas: 0, numeroDeJanelas: 0})).toBe(true)
})

test("Validação de área da parede com area igual a 15m2", ()=>{
    expect(Validacoes.validaArea({altura: 3, largura: 5, numeroDePortas: 0, numeroDeJanelas: 0})).toBe(true)
})

test("Validação de área da parede com area maior que 15m2", ()=>{
    expect(Validacoes.validaArea({altura: 4, largura: 5, numeroDePortas: 0, numeroDeJanelas: 0})).toBe(false)
})