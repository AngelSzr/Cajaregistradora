/*let usuario = {
    nombre: "Ángel",
    email: "a@gmail.com",
    password: "123",
    dinero: 0
};
*/
let variable = JSON.parse(localStorage.getItem("usuario"));
let sizeVariable = (Object.keys(variable).length);

function login() {
    let username = document.getElementById("floatingInput").value;
    let contra = document.getElementById("floatingPassword").value;
    var comparador1 = 0;
    for (let i = 0; i < sizeVariable; i++) {
        if (variable[i].email === username && variable[i].password === contra) {
            comparador1++
            var valor = i;
        }
    }
    if (comparador1 === 1) {
        window.location.href = "index.html"
        let ocultarMonto = document.getElementById("monto")
        ocultarMonto.style.display = "none"

    } else {
        alert("Usuario y/o contraseña incorrectos")
    }
}

let usuarioTrue = variable[valor]

function registrarte() {
    window.location.href = "crearCuenta.html"
}

function crearCuenta() {

    let nombre = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let dinero = document.getElementById("money").value

    let comparador = 0;
    for (let i = 0; i < sizeVariable; i++) {
        if (variable[i].email == email) {
            comparador++
        }
    }
    if (comparador === 0) {
        let usuario = {
            nombre: nombre,
            email: email,
            password: password,
            dinero: dinero,
        }
        variable[sizeVariable] = usuario;
        let json = JSON.stringify(variable)
        localStorage.setItem("usuario", json) //* /
        window.location.href = "index.html";
    } else {
        alert("el correo ya ha sido utilizado");
    }
}

function nombres() {
    document.getElementById("nombre").innerText = usuarioTrue.nombre;
    document.getElementById("dinero").innerText = ("$ " + usuarioTrue.dinero);
}

function depositar() {
    document.getElementById("accion").innerText = "Depositar";
    document.getElementById("etiquetaAccion").innerText = "Depositar";
    document.getElementById("accion").className = "btn btn-success mt-2"
    ocultarMonto.style.display = "block"
}
function retirar() {
    document.getElementById("accion").innerText = "Retirar";
    document.getElementById("etiquetaAccion").innerText = "Retirar";
    document.getElementById("accion").className = "btn btn-danger mt-2"
    ocultarMonto.style.display = "block"
}
function transferir() {
    document.getElementById("accion").innerText = "Transferir";
    document.getElementById("etiquetaAccion").innerText = "Transferir";
    document.getElementById("accion").className = "btn btn-warning mt-2"
    ocultarMonto.style.display = "block"
}
function accion() {
    let accion = document.getElementById("accion").innerText;
    let nuevoDeposito = parseInt(document.getElementById("monto").value);
    let efectivoDinero = parseInt(usuarioTrue.dinero);
    switch (accion) {
        case "Depositar":
            usuario.dinero = nuevoDeposito + efectivoDinero;
            document.getElementById("dinero").innerText = ("$ " + usuarioTrue.dinero);
            break;
        case "Retirar":
            usuario.dinero = Math.abs(nuevoDeposito - efectivoDinero);
            document.getElementById("dinero").innerText = ("$ " + usuarioTrue.dinero);
            break;
    }
}