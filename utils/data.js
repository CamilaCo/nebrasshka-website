const request = require('postman-request');
// http://localhost:3001/productos
// 'https://nebrasshka.herokuapp.com/productos'
const getAllProductos = (callback) => {
    request('http://localhost:3001/productos', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}
const getAllCategoria = (categoria,callback) => {
 
  request(`http://localhost:3001/productos/${categoria}`, (error, res, body) => {
  console.log(body)    
  if(error){
        console.log('Error', error)  
        return callback(error, undefined);
      }
      if (res){
          if(body){
             return callback(undefined, body);
          }
          callback("No se encontraron productos.", undefined);
      }
  });
}
module.exports= {
 
  getAllProductos, 
  getAllCategoria

}