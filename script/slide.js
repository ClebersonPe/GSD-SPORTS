var radio = document.querySelector('.botao-manual')
var contagem = 1             

document.getElementById ('radio1').checked = true

setInterval(() =>{
    proximaImg()
}, 5000)  //seta o tempo de cada slide, no caso 5 segundos

function proximaImg(){
    contagem++

    if(contagem > 5){
        contagem = 1             
    }

    document.getElementById ('radio' + contagem).checked = true
}