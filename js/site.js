let championship = 'Campeonato Brasileiro';
console.log(championship);

let teams = ["Palmeiras", "Flamengo", "Bragantino", "Cruzeiro", "Fluminense"];
console.log(`Times que estão participando do ${championship}: ${teams}`);

function showTeamPosition(posicao) {
    if (posicao >= 0 && posicao < teams.length) {
        return `O time que está em ${posicao + 1}° lugar é o ${teams[posicao]}.`;
    }else{
        return `Não temos a informação do time que está nessa posição.`;
    }
}
console.log(showTeamPosition(0));
console.log(showTeamPosition(1));
console.log(showTeamPosition(3));
console.log(showTeamPosition(6));

let numero = 20
while (numero <= 30) {
    console.log(numero);
    numero++;
}

function convertToHex(cor) {
    let hex;
    
    switch (cor) {
        case "vermelho":
            hex = "#FF0000";
            break;
        case "azul":
            hex = "#0000FF";
            break;
        case "verde":
            hex = "#00FF00";
            break;
        case "amarelo":
            hex = "#FFFF00";
            break;
        case "preto":
            hex = "#000000";
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${cor}.`;
            break;
    }
    return `O hexadecimal para a cor ${cor} é ${hex}`;
}

const cores = [
    "vermelho",
    "azul",
    "verde",
    "amarelo",
    "preto",
    "branco",
    "laranja",
    "roxo"
  ];

cores.forEach(cor =>{
    console.log(convertToHex(cor));
})