import { cliente_productos } from "../service/client-service.js";


const formulario = document.querySelector("[data-form]");

const mostrarInformacion = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id")
    const categoria_url = url.searchParams.get("categoria");

    if(id == null || categoria_url == null){
        alert("No estas en una URl valida")
    }
    const nombre = document.querySelector("[data-nombre]");
    const input_url = document.querySelector("[data-url]");
    const input_categoria = document.querySelector("[data-opcion]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try{
        const producto = await cliente_productos.detallesProducto(categoria_url, id);
        if(producto.id){
            nombre.value = producto.producto;
            input_url.value = producto.imagen;
            input_categoria.value = producto.categoria;
            precio.value = producto.precio; 
            descripcion.value = producto.descripcion;
        }
        else{
            throw new Error();
        }
    }catch(err){
        console.log(err);
    }
}

mostrarInformacion()

formulario.addEventListener("submit", (evento)=> {
    const url = new URL(window.location);
    const id = url.searchParams.get("id")
    const categoria = url.searchParams.get("categoria");
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const input_url = document.querySelector("[data-url]").value;
    const input_categoria = document.querySelector("[data-opcion]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    cliente_productos.actualizarProducto(nombre, precio, descripcion, input_url, input_categoria, id).then(() =>{
        window.location.href = "../screens/productos.html";
    }).catch(err => console.log(err))
})