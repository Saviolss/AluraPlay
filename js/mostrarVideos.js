import { conectarApi } from "./conectar.js";

const lista = document.querySelector("[data-lista]")

export default function construindoCards(titulo, imagem, descricao, url) {
    const video = document.createElement("li")
    video.className = "videos__item"
    video.innerHTML = `
         <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
` 
    return video 
}

async function listaVideos() {
    try { 
    const listaApi = await conectarApi.listaVideos()
    listaApi.forEach(elemento => lista.appendChild(construindoCards(elemento.titulo, elemento.imagem, elemento.descricao, elemento.url)))
    } catch{
       lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar os videos.</h2>`
     }
}

listaVideos()