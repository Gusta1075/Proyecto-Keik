let container = document.getElementById("container");

const productos= [
{ id: 1, nombre: " Camia blanca", precio: 1500 },
{ id: 2, nombre: "Camisa verde ", precio: 1500 },
{ id: 3, nombre: "Camisa Amarilla", precio: 1500 },
{ id: 4, nombre: "Camisa Gris", precio: 1500 },
{ id: 5, nombre: "Camisa Azul", precio: 750 },
];


productos.forEach(item => {
let div = document.createElement("div");
div.innerHTML = `
<h2>Id: ${item.id}</h2>
<p>Nombre:${item.nombre}<p>
<b>Precio: ${item.precio}</b>`;

container.append(div);

})
