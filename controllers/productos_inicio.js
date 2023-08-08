const ponerproducto = (producto, precio, imagen, id, categoria) =>{
    const lista = document.createElement("li");
    const contenido = `
        <img src="${imagen}" alt="${producto}" class="imagen_producto">
        <p class="nombre_producto">${producto}</p>
        <p class="precio">$${precio}.00</p>
        <a href="../screens/producto.html?id=${id}&categoria=${categoria}" class="a_ver_productos">Ver producto</a>`
    lista.innerHTML = contenido;
    return lista;

}
const lista_starwars = document.querySelector("[data-starwars]");
const lista_consolas = document.querySelector("[data-consolas]");
const lista_diversos = document.querySelector("[data-diversos]");

const urlStarwars = "http://localhost:3000/starwars";
const urlConsolas = "http://localhost:3000/consolas";
const urlDiversos = "http://localhost:3000/diversos";

console.log(window.screen.width);
fetch(urlStarwars).then((res) =>{
    return res.json();
}).then((data) =>{
    const categoria = "starwars"
    for(let i = 0; i <= 5; i++){
        lista_starwars.appendChild(ponerproducto(data[i].producto, data[i].precio, data[i].imagen, data[i].id, categoria))
    }
})
fetch(urlConsolas).then((res) =>{
    return res.json();
}).then((data) =>{
    const categoria = "consolas"
    for(let i = 0; i <= 5; i++){
        lista_consolas.appendChild(ponerproducto(data[i].producto, data[i].precio, data[i].imagen, data[i].id, categoria))
    }
})
fetch(urlDiversos).then((res) =>{
    return res.json();
}).then((data) =>{
    const categoria = "diversos"
    for(let i = 0; i <= 5; i++){
        lista_diversos.appendChild(ponerproducto(data[i].producto, data[i].precio, data[i].imagen, data[i].id, categoria))
    }
})