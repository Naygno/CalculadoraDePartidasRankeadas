
// Simula partidas de um jogo.
function simulaPartidas(numeroDePartidas) {
    let vitoriasDerrotas = [0, 0]; // Array para armazenar vitórias e derrotas
    // O primeiro elemento do array será o número de vitórias e o segundo será o número de derrotas
    for (let i = 1; i <= numeroDePartidas; i++) {
        let valorAleatorio = Math.floor(Math.random() * i); // Gera números aleatoriamente onde 0 representa derrota e qualquer outro número representa vitória.
        if (valorAleatorio !== 0) {
            vitoriasDerrotas[0]++; // Incrementa o número de vitórias
        } else {
            vitoriasDerrotas[1]++; // Incrementa o número de derrotas
        }
    }
    return vitoriasDerrotas;
}

// Simula o jogo em um nível específico e retorna o número de vitórias e derrotas.
function simulaJogoNoNivel(nivel) {
    switch (nivel) {
        case 1:
            return simulaPartidas(10); // 10 partidas 
        case 2:
            return simulaPartidas(10); 
        case 3:
            return simulaPartidas(10); 
        case 4:
            return simulaPartidas(10);
        case 5:
            return simulaPartidas(10);
        case 6:
            return simulaPartidas(10); 
        case 7:
            return simulaPartidas(10);
        case 8:
            return simulaPartidas(10);
        case 9:
            return simulaPartidas(10); 
        case 10:
            return simulaPartidas(10);
        case 11:
            return simulaPartidas(10);
        case 12:
            return simulaPartidas(10);
        default:
            console.log("Nível inválido. Por favor, escolha um nível entre 1 e 12.");
            return null; // Retorna null se o nível for inválido
    }
}

function mensagemFinal(numeroDeVitoras){
    let nivelDoJogador = ""; // Nível inicial do jogador
    if (numeroDeVitoras <= 10) {
        nivelDoJogador = "Ferro";
    } else if (numeroDeVitoras  > 10 && numeroDeVitoras <= 20) {
        nivelDoJogador = "Bronze";
    } else if (numeroDeVitoras > 20 && numeroDeVitoras <= 50) {
        nivelDoJogador = "Prata";
    } else if (numeroDeVitoras > 50 && numeroDeVitoras <= 80) {
        nivelDoJogador = "Ouro";
    } else if (numeroDeVitoras > 80 && numeroDeVitoras <= 90) {
        nivelDoJogador = "Diamante";
    } else if (numeroDeVitoras > 90 && numeroDeVitoras <= 110) {
        nivelDoJogador = "Lendário";
    } else {
        nivelDoJogador = "Imortal";
    }
    return `O Herói tem um saldo de ${numeroDeVitoras} vitórias está no nível de ${nivelDoJogador}.`;
}

// Gera um número aleatório entre 1 e 12 para simular o nível de dificuldade
function geraNivelAleatorio() {
    return Math.floor(Math.random() * 12) + 1; // Gera um número entre 1 e 12
}

// Função para simular o jogo
// A função deve perguntar ao usuário se ele deseja jogar novamente após cada simulação
function simulaJogo() {
    let vitorias = 0;
    let derrotas = 0;
    let saldoDeVitorias = 0;
    let auxiliar = [0,0];
    do {
        let nivel = geraNivelAleatorio(); // Gera um nível aleatório
        /* Simula um jogo passando pelor níveis inferiores até achgar no nível "nivel". E enquanto o jogador responde que quer
        continuar a variável auxiliar vai acumulando os pontos do jogador.*/
        if (nivel === 1) {
            auxiliar = simulaJogoNoNivel(1);
            vitorias += auxiliar[0];
            derrotas += auxiliar[1];
        } else {
            for (let i = 1; i <= nivel; i++) {
                auxiliar = simulaJogoNoNivel(i);
                vitorias += auxiliar[0];
                derrotas += auxiliar[1];
            }
        }
        /*if (jogar === "s") {
            auxiliar = [0, 0]; // Reseta as vitórias e derrotas se o usuário decidir jogar novamente
        }*/
        jogar = Math.floor(Math.random() * 2) === 0 ? 's' : 'n'; // Simula a resposta do usuário aleatoriamente
    } while (jogar === 's'); // Continua jogando enquanto o usuário responder 's'
    saldoDeVitorias = vitorias - derrotas; // Calcula o saldo de vitórias
    return mensagemFinal(saldoDeVitorias); // Retorna o saldo  de vitórias e o nível do jogador
}
// Inicia o jogo
console.log(simulaJogo());