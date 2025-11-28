//==========================================USADO NA NEXT==============================
document.addEventListener('DOMContentLoaded', () => {
    // Fade from black (inalterado)
    const overlay = document.createElement('div');
    overlay.id = 'fade-from-black';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = '#000000';
    overlay.style.opacity = '1';
    overlay.style.transition = 'opacity 6s cubic-bezier(0.22, 0.61, 0.36, 1)'; // 6s ultra suave
    overlay.style.zIndex = '99999';
    overlay.style.pointerEvents = 'none';
    document.documentElement.appendChild(overlay);

    requestAnimationFrame(() => {
        overlay.style.opacity = '0';
    });

    overlay.addEventListener('transitionend', () => {
        overlay.remove();
    });

    // Efeito de panning FNAF-style (agora no container, para mover BG + coffee juntos)
    const panContainer = document.getElementById('pan-container');
    const coffee = document.querySelector('.coffee');
    const maxPan = 10; // Limite de pan em % para cada lado (ajuste para mais/menos)
    const initialCoffeeLeft = 650; // Valor original em px (ajuste se mudou)
    const initialCoffeeTop = 440; // Valor original em px (para top, inalterado)

    // Função para ajustar posição inicial do coffee (compensa o shift central do pan)
    const adjustCoffeePosition = () => {
        const viewportWidth = window.innerWidth;
        const initialShift = (viewportWidth * (maxPan / 100));
        coffee.style.left = `${initialCoffeeLeft + initialShift}px`;
        coffee.style.top = `${initialCoffeeTop}px`; // Top inalterado
    };

    // Ajusta na load e centraliza o pan-container
    adjustCoffeePosition();
    panContainer.style.transform = `translateX(-${maxPan}%)`; // Centro inicial

    // Movimento com mouse
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth; // 0 a 1
        const panOffset = (mouseX - 0.5) * (maxPan * 2); // De -maxPan a +maxPan
        panContainer.style.transform = `translateX(calc(-${maxPan}% - ${panOffset}%))`;
    });

    // Reset para centro ao sair da janela
    document.addEventListener('mouseleave', () => {
        panContainer.style.transform = `translateX(-${maxPan}%)`;
    });

    // Reajusta posição do coffee em resize (mantém responsivo)
    window.addEventListener('resize', adjustCoffeePosition);
});
