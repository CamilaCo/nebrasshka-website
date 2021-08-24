let hamburguesa=document.querySelector(".hamburguesa")
let menu=document.querySelector(".menu");
let submenu = document.querySelector(".hola")
let children = document.querySelector(".submenu")

hamburguesa.addEventListener("click",()=>{
 
    menu.classList.toggle("showMenu");
    

});

children.addEventListener("click",()=>{
    submenu.classList.toggle("showMenu")
})