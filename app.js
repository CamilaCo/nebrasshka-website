const express = require('express');
const app = express();
const path = require ('path');
const data = require ('./utils/data')
const title = 'Nebrasshka'

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
    res.render('index',{
      title: `${title}`,      
    });
})

app.get('/contacto',(req,res) => {
    res.render('pages/contacto',{
        title: `${title} | Contacto'`,
    })
})
app.get('/admin',(req,res) => {
    res.render('pages/admin',{
        title: `${title} | Admin'`,
    })
})
app.get('/nosotros',(req,res) => {
    res.render('pages/nosotros',{
        title: `${title} | Admin'`,
    })
})

app.get('/desproduc',(req,res) => {
    res.render('pages/desproduc',{
        title: `${title} | Admin'`,
    })
})
// app.get('/productos/:categoria',(req,res) => {
//     Con 'params' recivo el parametro que le estoy pasando de categoria
//     const categoria = req.params.categoria
//     data.getAllProductos(categoria,(error,data) => {
//         if (error){
//             return res.send({
//                 error
//             })
//         }
//         const JSONBody = JSON.parse(data);
//         return res.render('pages/productos',{
//             title,
//             JSONBody
//         });
//     })
// })
app.get('/productos',(req,res) => {
    data.getAllProductos((error,data) => {
        if (error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('pages/productos',{
            title,
            JSONBody
        });
    })
})

app.listen(3000, ()=>{
    console.log('Funcionando en el puerto 3000')
})