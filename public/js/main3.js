const form = document.querySelector('.main-form')

form.addEventListener('submit', (e) => {
    e.preventDefault() //Previene el comportamient del cambio de pagina
    const formData = new FormData(form) //Nos permite ingresar a nuestro formulario
    const body = Object.fromEntries(formData)
    const stringJson = JSON.stringify(body)

    console.log(stringJson);
    
    // La funcion fetch nos permite hacer consultas HTTP y mandarle esa informacion al backend

    fetch('http://localhost:3001/productos',{
        method:'POST',
        body: stringJson,
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res) => {console.log(res)})
    .catch(err => console.log(err));
})