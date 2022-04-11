<p align="center">
  <h1 align="center">API REST - Code Challenge</h1>
</p>  


# Pré-requisitos:

### Instalando e executando a API localmente:

Você precisará instalar em seu PC: <br>

[Git](https://git-scm.com) ✔ <br>
[Node.js](https://nodejs.org/en/) ✔ <br>
[Insomnia](https://insomnia.rest/download) ✔ <br>
[VSCode](https://code.visualstudio.com/) ✔ <br>

# Passo a Passo
## no terminal digite os comandos:

1 - git clone https://github.com/jonatastalves/API-HAMBURGUERIA.git<br>
2 - cd codeChallenge<br>
3 - npm install: Para instalar as dependencias necessárias para rodar o projeto<br>
4 - npm start: Para iniciar o Projeto<br>

# Sobre

API Rest criada para desafio (Code Challenge) proposto pela Digital Republic como parte do processo seletivo!

### O que deveria ser desenvolvido

Uma aplicação web ou móvel que ajude o usuário a calcular uma quantidade de tinta necessária para pintar a sala. Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede. Com base na quantidade necessária o sistema deve projetar tamanhos de lata de tinta que o usuário, sempre priorizando as latas maiores. Ex: se o usuário de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L

### Regras de negócio

1 - A parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados, mas pode possuir alturas e larguras diferentes<br>
2 - O total de área das portas e janelas deve ser no máximo 50% da área de parede<br>
3 - A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta<br>
4 - Cada janela possui as medidas: 2,00 x 1,20 mtos<br>
5 - Cada porta possui as medidas: 0,80 x 1,90<br>
6 - Cada litro de tinta é capaz de pintar 5 metros quadrados<br>
7 - Não considero teto nem piso.<br>
8 - As variações de tamanho das latas de tinta são:<br>

-0,5L
-2,5L
-3,6 litros
-18 litros

# Rota da API

## Endereço

<b>[POST] </b> /tintas - A rota enviará os dados necessários para executar todo o cálculo através da lógica aplicada, caso seja bem sucedida retornará a resposta com a quantidade de latas necessárias através do status 200. <br>

### Schema da requisição 

```javascript
[
  {
    "altura": 3,
    "largura": 2,
    "numeroDePortas": 0,
    "numeroDeJanelas": 1
  },
  {
    "altura": 3,
    "largura": 3,
    "numeroDePortas": 0,
    "numeroDeJanelas": 0
  },
  {
    "altura": 3,
    "largura": 2,
    "numeroDePortas": 1,
    "numeroDeJanelas": 0
  },
  {
    "altura": 3,
    "largura": 3,
    "numeroDePortas": 0,
    "numeroDeJanelas": 0
  }
]
```
<h4>Observações:</h4>
Cada objeto acima representa 1 parede, informe a medida referente a altura, largura, e se a parede possui porta e janela insira o numero referente no campo descrito!

### Schema da resposta 

```javascript
{
	"QuantidadeLatasDe18L": "int",
	"QuantidadeGaloes3_6L": "int",
	"QuantidadeLatas2_5L": "int",
	"QuantidadeLatas0_5": "int"
}

```

