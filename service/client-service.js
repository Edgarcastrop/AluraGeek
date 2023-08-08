const productosStarwas = () => fetch("http://localhost:3000/starwars").then((respuesta) => respuesta.json());
const productosConsolas = () => fetch("http://localhost:3000/consolas").then((respuesta) => respuesta.json());
const productosDiversos = () => fetch("http://localhost:3000/diversos").then((respuesta) => respuesta.json());

const agregarProducto = async (producto, precio, descripcion , imagen, categoria) => {
    try{
        return await fetch(`http://localhost:3000/${categoria}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({producto, precio, descripcion, imagen, id: uuid.v4()})
        })}catch(err){
            console.log(err);
        }  
}
const eliminarProducto = async (categoria, id) => {
    try{
        return await fetch(`http://localhost:3000/${categoria}/${id}`, {
            method: "DELETE",
        })
    }catch(err){
        console.log(err);
    } 
}
const actualizarProducto = async (producto, precio, descripcion, imagen, categoria, id) => {
    try{
        return await fetch(`http://localhost:3000/${categoria}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ producto, precio, descripcion, imagen, categoria })
        })
    }catch(err){
        console.log(err);
    } 
}
const detallesProducto = async (categoria, id) =>{
    try{
        return await fetch(`http://localhost:3000/${categoria}/${id}`).then((reponse) => reponse.json());
    }catch(err){
        console.log(err);
    }
}



export const cliente_productos = {
    productosStarwas,
    productosConsolas,
    productosDiversos,
    agregarProducto,
    eliminarProducto,
    actualizarProducto,
    detallesProducto
};