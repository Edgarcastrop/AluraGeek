import { cliente_productos } from "../service/client-service.js";

const informacion = (url, producto, precio, descripcion ) => {
    const section = document.querySelector("[data-producto]");
    const div = document.createElement("div");
    div.className = "producto";
    const contenido = `
        <img src="../${url}" alt="${producto}" class="img_producto">
        <div class="texto_container">
            <p class="nombre_producto" data-titulo>${producto}</p>
            <p class="precio" data-precio>$${precio}</p>
            <p class="descripcion" data-descripcion>${descripcion}</p>
        </div>
    `;
    div.innerHTML = contenido;
    section.appendChild(div);
    return section;
}

const mostrarInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const categoria = url.searchParams.get("categoria");

    try{
        const info_producto = await cliente_productos.detallesProducto(categoria, id);
        const producto = info_producto.producto;
        const precio = info_producto.precio;
        const descripcion = info_producto.descripcion;
        const imagen = info_producto.imagen;
        informacion(imagen, producto, precio, descripcion)
    }catch(err){
        console.log(err);
    }
}
mostrarInformacion()