// script.js

const elemento = document.getElementById('movable-element');
const STEP_SIZE = 5; // Velocidade de movimento (pixels por "passo")
const INTERVAL_MS = 50; // Intervalo de repetição (em milissegundos). 
                        // Um valor menor torna o movimento mais rápido e fluido.

// Variáveis de posição e direção
let currentX = 20; 
let currentY = 20;
let directionX = 1; // 1 para direita, -1 para esquerda
let directionY = 1; // 1 para baixo, -1 para cima

// 1. Função para aplicar a nova posição ao CSS
function applyPosition() {
    elemento.style.left = `${currentX}px`;
    elemento.style.top = `${currentY}px`;
}

// 2. Função principal que calcula o movimento a cada intervalo
function updateMovement() {
    // ------------------------------------------
    // Lógica para que o elemento bata e volte (Movimento de "ping-pong")
    // ------------------------------------------
    
    const container = document.getElementById('game-area');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const elementSize = 60; // Tamanho do seu elemento (60px conforme CSS)

    // Movimento Horizontal (X)
    currentX += directionX * STEP_SIZE;
    
    // Verifica se atingiu a borda direita ou esquerda
    if (currentX + elementSize > containerWidth || currentX < 0) {
        directionX *= -1; // Inverte a direção horizontal
        // Ajusta a posição para que não fique "preso" na borda
        if (currentX < 0) currentX = 0;
        if (currentX + elementSize > containerWidth) currentX = containerWidth - elementSize;
    }

    // Movimento Vertical (Y)
    currentY += directionY * STEP_SIZE;

    // Verifica se atingiu a borda inferior ou superior
    if (currentY + elementSize > containerHeight || currentY < 0) {
        directionY *= -1; // Inverte a direção vertical
        // Ajusta a posição para que não fique "preso" na borda
        if (currentY < 0) currentY = 0;
        if (currentY + elementSize > containerHeight) currentY = containerHeight - elementSize;
    }

    // Aplica as novas coordenadas
    applyPosition();
}

// 3. Inicia o loop de animação
// O setInterval chama a função 'updateMovement' repetidamente no intervalo definido.
// Isto cria a ilusão de movimento contínuo.
setInterval(updateMovement, INTERVAL_MS);

// Aplica a posição inicial
applyPosition();
