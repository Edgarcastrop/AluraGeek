import { cliente_productos } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
formulario.querySelector("[data-precio]").value = "$";

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-opcion]").value;
    const producto = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    console.log(url, "--", categoria, "--", producto, "--", precio, "--", descripcion);
    cliente_productos.agregarProducto(producto, precio, descripcion, url, categoria).then().catch(err => console.log(err));


})