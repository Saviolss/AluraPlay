import { conectarApi } from "./conectar.js";
import construindoCards from "./mostrarVideos.js"

async function buscarVideo (evento) {
    evento.preventDefault()
    const dadoPesquisa = document.querySelector("[data-Pesquisa]").value 
    const buscar = await conectarApi.buscaVideo(dadoPesquisa)
    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    buscar.forEach(elemento => lista.appendChild(construindoCards(elemento.titulo, elemento.imagem, elemento.descricao, elemento.url)))

    if(buscar.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Video não encontrado.</h2>`
    }
}

const btnPesquisa = document.querySelector("[data-Btn-Pesquisa]")
btnPesquisa.addEventListener('click', evento => buscarVideo(evento))