# ⚔️ Calculadora de Partidas Ranqueadas

Este projeto implementa uma calculadora de nível de jogador para um jogo ranqueado, baseada na quantidade de vitórias e derrotas. Ele simula partidas e níveis de dificuldade, classificando o "Herói" em diferentes elos.

-----

## 🚀 Desafio DIO

Este projeto foi desenvolvido como parte do desafio "Calculadora de Partidas Ranqueadas" da plataforma DIO. O objetivo era aplicar conceitos fundamentais de lógica de programação para criar uma função que calculasse o saldo de vitórias de um jogador e o classificasse em um nível específico.

-----

## ✨ Funcionalidades

A calculadora simula um jogo onde o jogador pode passar por diferentes níveis de dificuldade e acumular vitórias e derrotas. Ao final de cada sessão de jogo (que pode se repetir várias vezes, simulando a escolha do usuário), o sistema exibe o saldo de vitórias e o nível do Herói.

### 📊 Níveis de Classificação

O nível do jogador é determinado pelo **número total de vitórias** acumuladas:

  * **Ferro:** Vitórias < 10  
  * **Bronze:** Vitórias entre 11 e 20 
  * **Prata:** Vitórias entre 21 e 50
  * **Ouro:** Vitórias entre 51 e 80
  * **Diamante:** Vitórias entre 81 e 90
  * **Lendário:** Vitórias entre 91 e 100
  * **Imortal:** Vitórias $\ge 101$

-----

## 💻 Como Rodar o Projeto

Este projeto é um script JavaScript simples que pode ser executado em um ambiente Node.js.

### Pré-requisitos

  * **Node.js** instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

### Passos para Executar

1.  **Clone o repositório** (ou copie o código para um arquivo `.js`):
    ```bash
    git clone https://github.com/Naygno/CalculadoraDePartidasRankeadas.git
    cd CalculadoraDePartidasRankeadas
    ```
2.  **Salve o código:** Certifique-se de que o código das funções (`simulaPartidas`, `simulaJogoNoNivel`, `mensagemFinal`, `geraNivelAleatorio`, `simulaJogo`) esteja em um arquivo `.js`, por exemplo, `index.js` ou `app.js`.
3.  **Execute o script:** Abra seu terminal e entre na pasta src do projeto e execute o comando:
    ```bash
    node index.js
    ```

O resultado da simulação será exibido diretamente no console.

-----

## 🛠️ Conceitos Utilizados

Este projeto demonstra a aplicação dos seguintes conceitos de programação:

  * **Variáveis:** Para armazenar estados e valores (vitórias, derrotas, níveis).
  * **Operadores:** Utilizados para cálculos (ex: `vitórias - derrotas`).
  * **Laços de Repetição (`for`, `do...while`):** Essenciais para simular múltiplas partidas e rodadas de jogo.
  * **Estruturas de Decisão (`if/else if`, `switch`):** Para determinar o nível do jogador e controlar o fluxo do jogo com base em diferentes cenários.
  * **Funções:** O código é modularizado em funções para organizar a lógica e promover a reutilização de código.
  * **Arrays:** Utilizados para retornar múltiplos valores (vitórias e derrotas) de uma função.
  * **`Math.random()` e `Math.floor()`:** Para geração de números aleatórios, simulando resultados de partidas e níveis.

-----

## 📚 Referências

  * **Documentação MDN Web Docs (JavaScript):** Uma fonte abrangente e confiável para a linguagem JavaScript.
      * [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  * **Node.js:** Ambiente de execução JavaScript.
      * [https://nodejs.org/](https://nodejs.org/)

-----

## ✒️ Autoria

Este projeto foi desenvolvido por **[Naygno Barbosa Noia](https://github.com/Naygno)**.

-----

## 📜 Licença

Este projeto está licenciado sob a Licença **MIT**. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.