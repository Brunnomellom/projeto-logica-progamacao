// Variáveis responsáveis por armazenar o nome e a quantidade de XP do herói
let nomeHeroi = "Cronnors"
let xpHeroi = 10001


// Estrutura condicional (if / else if) para definir o nível do herói com base no XP 
if (xpHeroi < 1000) {
    console.log("O herói " + nomeHeroi + " está no nível Ferro")
} else if (xpHeroi <= 2000){
    console.log("O herói " + nomeHeroi + " está no nível Bronze")
} else if (xpHeroi <= 5000){
    console.log("O herói " + nomeHeroi + " está no nível Prata")
} else if (xpHeroi <= 7000){
    console.log("O herói " + nomeHeroi + " está no nível Ouro")
} else if (xpHeroi <= 8000){
    console.log("O herói " + nomeHeroi + " está no nível Platina")
} else if (xpHeroi <= 9000){
    console.log("O herói " + nomeHeroi + " está no nível Ascendente")
} else if (xpHeroi <= 10000){
    console.log("O herói " + nomeHeroi + " está no nível Imortal")
}else (xpHeroi <= 10001){
    console.log("O herói " + nomeHeroi + " está no nível Radiante")
}