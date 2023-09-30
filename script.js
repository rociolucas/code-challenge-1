function enviar() {
minombre = document.getElementById("nombre").value;
miapellido = document.getElementById("apellido").value
mifecha = document.getElementById("fecha").value;

fetch('https://jsonplaceholder.typicode.com/users', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
        nombre: minombre,
        apellido: miapellido,
        fecha: mifecha,
    })
})
.then(response => response.json())
.then(data => console.log(data))
}