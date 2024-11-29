var login = document.querySelector('.enter');
var form = document.querySelector('.form');

login.addEventListener ('click', ()=>{
    if (form.style.display === "none" || form.style.display === ""){
        form.style.display = "block";
    }
    
    else{
        form.style.display  = "none";
    }
});