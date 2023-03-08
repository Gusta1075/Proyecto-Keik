//practicas de alert
/*let nombre = prompt("ingrese su nombre");
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
*/
  //Segunda Preentrega
/*
let productos = [ 
	{ id: 1, nombre: "camisa blanca", precio: 1250, seccion: "verano" },
	{ id: 2, nombre: "camisa verde", precio: 1150, seccion: "invierno" },
	{ id: 3, nombre: "camisa amarilla", precio: 1350, seccion: "primavera"},
	{ id: 4, nombre: "camisa gris", precio: 1450, seccion: "otoño" },
	{ id: 5, nombre: "camisa azul", precio: 750, seccion: "indefinido"},
	];
	
	//For each (recorro el arreglo.)
	productos.forEach(producto => console.log(producto.nombre + " " + producto.seccion + 
	" " + producto.precio));
		
		//ciclo for (falto de la primera entrega.)
	for(let index = 0; index <productos.length; index++) {
		 console.log(productos[index]);
	}

		//find  encontrar element 
	nombre = prompt("ingrese el nombre del producto");
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
		console.log(filtrados);

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
	producto
     s = prompt("ingrese el producto a buscar");
	alert(productos.includes("Camisa verde"));
	alert(productos.includes("pantalones"));

	
	LIBRERIAS 

	//boton para acceder a mi porfolio
button.addEventListener("click", () => {
	Toastify({
	text: "Click aquí para ir a mi porfolio!",
	duration: 3000,
	destination: "https://gusta1075.github.io/Porfolio-Gustavo-Sanmartino/",
	  }).showToast();
	});
*/
//alerta de bienvenida a la mi pagina
    //wal.fire({
	//title: 'Gracias!!',
	//text: 'Te encuentras visitando mi pagina',
	//imageUrl: '/Assets/Logos/Foto perfil opcional.jpg',
	//imageWidth: 250,
	//imageHeight: 400,
	//imageAlt: 'Custom image',
 // })  


 

	const cards = document.getElementById('cards')
	const items = document.getElementById('items')
	const footer = document.getElementById('footer')
	const templateCard = document.getElementById('template-card').content
	const templatefooter = document.getElementById('template-footer').content
	const templateCarrito = document.getElementById('template-carrito').content
	const fragment = document.createDocumentFragment()
	let carrito = {}


	document.addEventListener("DOMContentLoaded", () => {
		fetchData()
    if (localStorage.getItem("carrito")) {
      carrito = JSON.parse(localStorage.getItem("carrito"))
      pintarCarrito()
    }   
    })
	cards.addEventListener('click', e => {
		addCarrito(e)
	})

  items.addEventListener('click', e => {
    btnAccion(e)
  })
	
	const fetchData = async () => {
		try {
			const res = await fetch("/api.json")
			const data = await res.json()
			console.log(data)
			pintarCards(data)
		} catch (err) {
			console.log(err)
	}
}

const pintarCards = data => {
	data.forEach(producto => {
		templateCard.querySelector('h5').textContent = producto.title
		templateCard.querySelector('p').textContent = producto.precio
		templateCard.querySelector('img').setAttribute('src', producto.thumbnailUrl)
		templateCard.querySelector('.btn-dark').dataset.id = producto.id
		const clone = templateCard.cloneNode(true)
		fragment.appendChild(clone)
	})
	cards.appendChild(fragment)
}

const addCarrito = e => {
	//console.log(e.target)
	//console.log(e.target.classList.contains('btn-dark'))
	if(e.target.classList.contains('btn-dark')) {
		setCarrito(e.target.parentElement)
		
	}
	e.stopPropagation();
}

const setCarrito = objeto => {
	//console.log(objeto);
	const producto = {
		id: objeto.querySelector('.btn-dark').dataset.id,
		title: objeto.querySelector('h5').textContent,
		precio: objeto.querySelector('p').textContent,
		cantidad: 1

	}
	if(carrito.hasOwnProperty(producto.id)) {
		producto.cantidad = carrito[producto.id].cantidad + 1
	}
	carrito[producto.id] = {...producto}	
	pintarCarrito()
}
const pintarCarrito = () => {
	//console.log(carrito)
	items.innerHTML = ''
	Object.values(carrito).forEach(producto => {
		templateCarrito.querySelector('th').textContent = producto.id
		templateCarrito.querySelectorAll('td')[0].textContent = producto.title
		templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
		templateCarrito.querySelector('.btn-info').dataset.id = producto.id
		templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
		templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
		const clone = templateCarrito.cloneNode(true)
		fragment.appendChild(clone)
	})
	items.appendChild(fragment)

	pintarFooter()

	

  localStorage.setItem('carrito', JSON.stringify(carrito))

}

	const pintarFooter = () => {
		footer.innerHTML = ''
		if(Object.keys(carrito).length === 0) {
			footer.innerHTML = `
			<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
			`	
			return 

	}
	const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
	const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
	console.log(nPrecio)

	templatefooter.querySelectorAll('td')[0].textContent = nCantidad
	templatefooter.querySelector('span').textContent = nPrecio

	const clone = templatefooter.cloneNode(true)
	fragment.appendChild(clone)
	footer.appendChild(fragment)

	const btnVaciar = document.getElementById('vaciar-carrito')
	btnVaciar.addEventListener('click', () => {
		carrito = {}
		pintarCarrito()
	})
	}

  const btnAccion = e => {
    //console.log(e.target)
    //Aumentar
    if(e.target.classList.contains('btn-info')) {
      console.log(carrito[e.target.dataset.id])
      //carrito.[e.target.dataset.id]
      const producto = carrito[e.target.dataset.id]
      producto.cantidad = carrito[e.target.dataset.id].cantidad + 1
      carrito[e.target.dataset.id] = {...producto}
      pintarCarrito()
    }
	//Disminuir
    if(e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0) {
          delete carrito[e.target.dataset.id] 
            }
            pintarCarrito()
            }
    e.stopPropagation()
  }
