import { cliente_productos } from "../service/client-service.js";

const ponerproducto = (producto, precio, imagen, id, categoria) =>{
    const lista = document.createElement("li");
    const contenido = `
        <img src="${imagen}" alt="${producto}" class="imagen_producto">
        <div class="div_botones">
            <button class="boton_eliminar" id="${id}" name="${categoria}" type="button"></button>
            <a href="../screens/editar_producto.html?id=${id}&categoria=${categoria}" class="boton_editar"></a>
        </div>
        <p class="nombre_producto">${producto}</p>
        <p class="precio">$${precio}.00</p>
        <a href="../screens/producto.html?id=${id}" class="a_ver_productos">Ver producto</a>`
        lista.innerHTML = contenido;
        const bton = lista.querySelector("button");        
        bton.addEventListener("click", () => {
            const name = bton.name;
            const id = bton.id;
            cliente_productos.eliminarProducto(name, id)
        })
        return lista;
    }



const lista_starwars = document.querySelector("[data-starwars]");
const lista_consolas = document.querySelector("[data-consolas]");
const lista_diversos = document.querySelector("[data-diversos]");


cliente_productos.productosStarwas().then((data) =>{
    data.forEach(({ producto, precio, imagen, id }) => {
        const categoria = "starwars"
        lista_starwars.appendChild(ponerproducto(producto, precio, imagen, id, categoria));
        
    })
}).catch(err => console.log(err));
cliente_productos.productosConsolas().then((data) =>{
    data.forEach(({ producto, precio, imagen, id }) => {
        const categoria = "consolas"
        lista_consolas.appendChild(ponerproducto(producto, precio, imagen, id, categoria));
    })
}).catch(err => console.log(err));
cliente_productos.productosDiversos().then((data) =>{
    data.forEach(({ producto, precio, imagen, id }) => {
        const categoria = "diversos"
        lista_diversos.appendChild(ponerproducto(producto, precio, imagen, id, categoria));
    })
}).catch(err => console.log(err));