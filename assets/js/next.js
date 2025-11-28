let indice = 0;
const imagens = ["assets/img/coffee_drink.png"];

function drinkCoffee() {
    const container = document.getElementById("coffee_drink_container");
    if (!container) return;

    // 1. Mostra a imagem grande do café sendo bebido
    container.innerHTML = "";
    const img = document.createElement("img");
    img.src = imagens[indice];
    img.alt = "Café sendo bebido";
    container.appendChild(img);

    // 2. Toca o som
    tocarSom();

    // 3. Remove a caneca do balcão NA HORA (instantâneo)
    const xicaraNoBalcao = document.querySelector(".coffee");
    if (xicaraNoBalcao) {
        xicaraNoBalcao.remove();
    }

    // 4. A IMAGEM GRANDE (coffee_drink.png) SOME SÓ DEPOIS DE 5 SEGUNDOS
    setTimeout(() => {
        container.innerHTML = "";  // limpa a imagem grande
    }, 4000); // 5 segundos
}

function tocarSom() {
    const audio = document.getElementById("somCafe");
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}