import { conectarApi } from "./conectar.js"

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evento) {
    evento.preventDefault()
    const titulo = document.querySelector("[data-titulo]").value 
    const url = document.querySelector("[data-url]").value 
    const imagem = document.querySelector("[data-imagem]").value 
    const descricao = Math.floor(Math.random() * 10).toString()

    await conectarApi.criaVideo(titulo,imagem,descricao,url)
    
    window.location.href="../pages/envio-concluido.html"
}

formulario.addEventListener('submit', evento => criarVideo(evento))


// https://www.youtube.com/embed/UelauoeMaGw
// Gemini como usar
// https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/07/528914834-i832645.jpeg