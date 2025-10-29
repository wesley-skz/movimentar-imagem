// script.js

const imagem = document.getElementById('imagemMovel');
const passo = 10; // Quantidade de pixels que a imagem se moverá a cada tecla
let posicaoX = 50; // Posição inicial X (sincronizar com o CSS)
let posicaoY = 50; // Posição inicial Y (sincronizar com o CSS)

// Função para atualizar a posição da imagem no DOM
function atualizarPosicao() {
    // Define as propriedades CSS 'top' e 'left'
    imagem.style.top = `${posicaoY}px`;
    imagem.style.left = `${posicaoX}px`;
}

// Adiciona um "listener" para capturar as teclas pressionadas
document.addEventListener('keydown', (evento) => {
    // Verifica qual tecla foi pressionada
    switch (evento.key) {
        case 'ArrowUp': // Seta para cima
            posicaoY -= passo;
            break;
        case 'ArrowDown': // Seta para baixo
            posicaoY += passo;
            break;
        case 'ArrowLeft': // Seta para a esquerda
            posicaoX -= passo;
            break;
        case 'ArrowRight': // Seta para a direita
            posicaoX += passo;
            break;
        default:
            return; // Sai da função se não for uma tecla de seta
    }

    // Impede o comportamento padrão do navegador (como rolar a tela com as setas)
    evento.preventDefault();

    // Chama a função para aplicar a nova posição
    atualizarPosicao();
});

// Garante que a posição inicial do JS e CSS estejam sincronizadas
atualizarPosicao();
