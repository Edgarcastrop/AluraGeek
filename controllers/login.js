const formulario = document.querySelector("[data-login]");

formulario.addEventListener("submit", (evento) => {
    const email = document.getElementById("correo").value;
    const contrasenha = document.getElementById("password").value;
    evento.preventDefault();

    if(email === 'admin@admin.com' && contrasenha  === 'admin'){
        window.location.href = "productos.html";
    }
    else{
        console.log("error");
    }

})