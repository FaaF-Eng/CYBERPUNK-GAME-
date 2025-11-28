const imagens = [
    "assets/img/coffee_drink.png"
    // pode adicionar mais frames se quiser
];

let indice = 0;

function drinkCoffee() {
    const container = document.getElementById("coffee_drink_container");
    if (!container) return;

    // 1. Mostra a imagem do café sendo bebido (com a animação bonita que você já tem)
    container.innerHTML = "";
    const img = document.createElement("img");
    img.src = imagens[indice];
    img.alt = "Café sendo bebido";
    container.appendChild(img);

    indice = (indice + 1) % imagens.length;

    // 2. REMOVE A XÍCARA DO BALCÃO PARA SEMPRE
    const xicaraNoBalcao = document.querySelector(".coffee");
    if (xicaraNoBalcao) {
        xicaraNoBalcao.remove();        // remove completamente do DOM
        // ou se preferir só esconder: xicaraNoBalcao.style.display = "none";
    }
}