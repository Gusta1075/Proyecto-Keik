//practicas de alert
let nombre = prompt("ingrese su nombre");
alert("Bienvenido a mi pagina " + nombre);


// practicas de condicionales
let edad = prompt("Introduce tu edad: ");
if (edad < 0 || edad == 0){
	alert("Todo es una mentira.");
}else if (edad  > 0 && edad < 18){
	alert("Eres menor de edad.");
}else if (edad >= 18 && edad < 100){
	alert("Eres mayor de edad.");
}else{
	alert("¿Seguro que tienes esa edad?");
}

 //practicas de for 
for (let precio = 50 ; precio <55 ; precio++){
    document.write("El precio es:" + precio);
    console.log("El precio de tu remera es: " + precio);
}
 //practicando switch 

let estacion = prompt("coloca la estacion del año");

switch (estacion){
	case "invierno":
		alert("Mira nuestras ofertas de invierno");
		break;

	case "primavera":
		alert("Nuestras prendas de primavera son de lujo");
		break;

	case "verano":
		alert("Las remeras tienen muchos colores");
		break;

	case "otoño":
		alert("Donde había color ya no queda nada.");
		break;

	default:
		alert("Eso no es una estación.");
		break;
}

// pracicando Funciones
// Calculadora
let operacion = prompt("¿Qué operación desea? 1-Sumar 2-Restar 3-Multiplicar 4-Dividir");
let operando1;
let operando2;
let resultado;

if (operacion >= 1 && operacion <= 4) {
	operando1 = parseInt(prompt("Introduce el primer número:"));
	operando2 = parseInt(prompt("Introduce el segundo número:"));
}

function suma(numero1, numero2){
	return numero1 + numero2;
}
function resta(numero1, numero2){
	return numero1 - numero2;
}
function multiplicacion(numero1, numero2){
	return numero1 * numero2;
}
function division(numero1, numero2){
	return numero1 / numero2;
}
switch (operacion)  {
case "1":
    resultado= suma(operando1, operando2);
    console.log("El valor de la suma es de: " + resultado);
    break;
case "2":
    resultado= resta(operando1, operando2);
    console.log("El valor de la resta es de: " + resultado);
    break;

case "3":
    resultado= multiplicacion(operando1, operando2);
    console.log("El valor de la multiplicacion es de: " + resultado);
    break;

case "4":
    resultado= division(operando1, operando2);
    console.log("El valor de la division es de: " + resultado);
    break;

    default:
    alert("La operacion que ha realizado no es correcta");
    break;
}


let productos = [ 
	{ id: 1, nombre: "camisa blanca", precio: 1250, seccion: "verano" },
	{ id: 2, nombre: "camisa verde", precio: 1150, seccion: "invierno" },
	{ id: 3, nombre: "camisa amarilla", precio: 1350, seccion: "primavera"},
	{ id: 4, nombre: "camisa gris", precio: 1450, seccion: "otoño" },
	{ id: 5, nombre: "camisa azul", precio: 750, seccion: "indefinido"},
	];
/*	
	//For each (recorro el arreglo.)
	productos.forEach(producto => console.log(producto.nombre + " " + producto.seccion + " " + producto.precio));
		
		//ciclo for
	for(let index = 0; index <productos.length; index++) {
		 console.log(productos[index]);
	}

		//find  encontrar element 
	let nombre = prompt("ingrese el nombre del producto");
	let buscar = productos.find(producto => producto.nombre === nombre);
		console.log(buscar);

	let mensaje = `
	id: ${buscar.id}
	nombre: ${buscar.nombre}
	seccion: ${buscar.seccion}
	precio: ${buscar.precio}`;

	alert(mensaje);


	//filter
	let filtrados = productos.filter(item => item.precio > 1000);
		//console.log(filtrados);

	//some verifico si existe algun elemente con una condicion.
	
	console.log(productos.some(item => item.precio === 1250));
	console.log(productos.some(item => item.nombre  === "pantalon"));
	console.log(productos.some(item => item.producto  === "camisa azul"));

		
	// map transformo los datos y los agrupo por nombre y seccion.

	let nombres = productos.map(item => item.nombre);
	console.log(nombres);
	let precio = productos.map(item => item.precio);
	console.log(precio);

	let precioPromocional = productos.map(item => {
		return {
			id: item.id,
			nombre: item.nombre, 
			seccion: item.seccion, 
			precio: item.precio - item.precio * 0.30}
		});
			console.log(precioPromocional);

		// reduce sumo el total de todos los productos del array

		let totalPrecios = productos.reduce((acum, item) => acum + item.precio, 0);
		console.log(totalPrecios);
	
	//.push (agrego linea 6 al array) unshift (agrego linea 0 al array).
	let index = productos.length;
	productos.push({id: 6, nombre:"Camisa floreada", precio: 350, seccion: "Alegria"});
	productos.unshift({id: 0, titulo:"CAMISAS", seccion: "estaciones del año"});
	console.log(productos);

		//saco productos de atras y de adelante del array
	 productos.pop();
	 productos.shift();
	 console.log(productos);

		// saco productos del posicones diferentes.
	 productos.splice(2, 1);
	 console.log(productos);

	 
	 console.log(productos.indexOf("Camisa verde"));

	 console.log(productos.includes("Camisa verde"));
	 console.log(productos.includes("pantalones"));

	//ejercicio para buscar un producto en Stock.
	productos = prompt("ingrese el producto a buscar");
	alert(productos.includes("Camisa verde"));
	alert(productos.includes("pantalones"));

	


