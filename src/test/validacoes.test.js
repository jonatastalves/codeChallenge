import Validacoes from "../services/validacoes.js";

test("Validar altura se tiver porta e altura menor",()=>{
    expect(Validacoes.validaAltura({numeroDePortas:1,alturaDaParede:1})).toBe(false);
});

test("Validar altura se não tiver porta",()=>{
    expect(Validacoes.validaAltura({numeroDePortas:0,alturaDaParede:1})).toBe(true);
});

test("Validar altura se tiver porta e altura estiver correta",()=>{
    expect(Validacoes.validaAltura({numeroDePortas:1,alturaDaParede:3})).toBe(true);
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