var menuIcon = document.querySelector('.menu');       //menu icon
var nav = document.querySelector('.ul');

menuIcon .addEventListener('click', ()=>{
    if (nav.classList.contains('ativo')){
        nav.classList.remove('ativo')
        document.querySelector('.menu img') .src = 'img/menu_icon.png';
    }

    else{
        nav.classList.add('ativo')
        document.querySelector('.menu img') .src = 'img/close.png';
    }
})
                                                //lupa

var lupa = document.querySelector('.lupa');
var pesquisa = document.querySelector ('.pesquisa');

lupa .addEventListener('click', ()=>{
    if (pesquisa.classList.contains('ativado')){
        pesquisa.classList.remove('ativado')
        document.querySelector('.lupa img') .src = 'img/procurar.png';
    }

    else {
        pesquisa.classList.add("ativado")
        document.querySelector('.lupa img') .src = 'img/procurar_direita.png';
    }
})

var filtro = document.querySelector('.fi');
var whitebar = document.querySelector ('.container3');

filtro .addEventListener('click', ()=>{
    if (whitebar.classList.contains('active')){
        whitebar.classList.remove('active')
        
    }

    else {
        whitebar.classList.add("active")
        
    }
})


