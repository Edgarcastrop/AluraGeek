const ponerproducto = (producto, precio, imagen, id, categoria) =>{
    const lista = document.createElement("li");
    const contenido = `
        <img src="${imagen}" alt="${producto}" class="imagen_producto">
        <p class="nombre_producto">${producto}</p>
        <p class="precio">$${precio}.00</p>
        <a href="screens/producto.html?id=${id}&categoria=${categoria}" class="a_ver_productos">Ver producto</a>`
    lista.innerHTML = contenido;
    return lista;

}
const Urls = ["http://localhost:3000/starwars","http://localhost:3000/consolas","http://localhost:3000/diversos"]
const listas = ["[data-starwars]", "[data-consolas]", "[data-diversos]"]
const categoria = ["starwars", "consolas", "diversos"]

for (let i = 0; i <= 2; i++) {
    fetch(Urls[i]).then((res) =>{
        return res.json()
    }).then((data) =>{
        for(let j = 0; j <= 5; j++){
            document.querySelector(listas[i]).appendChild(ponerproducto(data[j].producto, data[j].precio, data[j].imagen, data[j].id, categoria[i]))
        }
    })
}