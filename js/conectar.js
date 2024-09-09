async function listaVideos() {
    const conecao = await fetch("http://localhost:3000/videos")
    const conecaoConvertida = await conecao.json()

    return conecaoConvertida
}

async function criaVideo(titulo,imagem, descricao,url) {
    const conecao = await fetch("http://localhost:3000/videos", {
        method:"POST",
        headers:{
            "content-type":"aplication/json"
        },
        body:JSON.stringify({
            titulo:titulo,
            descricao:`${descricao} mil visualizações`,
            url:url,
            imagem:imagem
        }),
    })  
    
    const conecaoConvertida = await conecao.json()
    return conecaoConvertida;

}

async function buscaVideo(termoBusca) {
    const conecao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`)
    const conecaoConvertida = conecao.json()

    return conecaoConvertida
}

export const conectarApi = {
    listaVideos,
    criaVideo,  
    buscaVideo
}