//INDEX.HTML

const falas = [
    "Já passou da hora de você acordar...",
    "Tem café em cima do balcão",
    "...",
    "Ainda temos muito trabalho a ser feito, não é verdade?",
];

let indiceFala = 0;
let indiceLetra = 0;
let escrevendo = false;

function proximoDialogo() {
    if (escrevendo) return; // Impede de avançar durante a escrita

    const caixa = document.getElementById("dialogo");
    caixa.innerHTML = ""; // Limpa o diálogo anterior
    indiceLetra = 0; // Reseta o índice de letras
    escrevendo = true;
    const texto = falas[indiceFala];

    const intervalo = setInterval(() => {
        caixa.innerHTML += texto[indiceLetra];
        indiceLetra++;

        if (indiceLetra >= texto.length) {
            clearInterval(intervalo);
            escrevendo = false;
            indiceFala++;

            if (indiceFala >= falas.length) {
                // Em vez de reiniciar, chama a função para prosseguir
                endDialog();
            }
        }
    }, 70); // Velocidade da digitação (ms)
}

// Função para encerrar o diálogo e prosseguir com fade-out e redirecionamento
function endDialog() {
    // Cria um overlay preto para o fade-out
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 5s ease-in-out'; // Duração do fade (1 segundo, ajuste se quiser)
    overlay.style.zIndex = '9999'; // Garante que fique por cima de tudo
    document.body.appendChild(overlay);

    // Inicia o fade-out (aumenta opacidade para 1)
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 100); // Pequeno delay para garantir que a transição funcione

    // Após o fade-out terminar, redireciona para a próxima página
    overlay.addEventListener('transitionend', () => {
        window.location.href = 'next.html'; // Substitua 'next.html' pelo nome da sua próxima página
    });
}

// Inicia o primeiro diálogo automaticamente
proximoDialogo();

document.addEventListener("keydown", function(e) {
    if (e.key === " ") { // Espaço para avançar
        e.preventDefault(); // Previne o comportamento padrão do espaço
        proximoDialogo();
    }
});