

let container = document.getElementById("container");

const productos= [
{ id: 1, nombre: "Camisa blanca", precio: 1250, seccion: "verano" },
{ id: 2, nombre: "Camisa verde ", precio: 1150, seccion: "invierno" },
{ id: 3, nombre: "Camisa Amarilla", precio: 1350, seccion: "primavera"},
{ id: 4, nombre: "Camisa Gris", precio: 1450, seccion: "otoño" },
{ id: 5, nombre: "Camisa Azul", precio: 750, seccion: "indefinido"},
];


productos.forEach(item => {
let div = document.createElement("div");
div.innerHTML = `
<h1>Id: ${item.id}</h1>
<p>Nombre:${item.nombre}<p>
<b>Precio: ${item.precio}</b>
<h2>Seccion: ${item.seccion}</h2>`;

container.append(div);
})






