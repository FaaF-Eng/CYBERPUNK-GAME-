// document.getElementById('dialogo').innerText = "Já está na hora de levantar..."

//INDEX.HTML

const falas = [
    "Já passou da hora de você acordar...",
    "Tem café em cima do balcão"
];

let indiceFala = 0;
let indiceLetra = 0;
let escrevendo = 0;

function proximoDialogo(){
    if (escrevendo) return; //Impede de clicar durante a escrita

    const caixa = document.getElementById("dialogo");
    caixa.innerHTML = "" //Limpa antes de começar
    indiceLetra = 0; //reseta
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
                indiceFala = 0; // reinicia se quiser
            }
        }

    }, 40); // velocidade da digitação (ms)
}
