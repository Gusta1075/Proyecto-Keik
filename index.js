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

// practicas de for 
for (let precio = 50 ; precio <55 ; precio++){
    document.write("El precio es:" + precio);
    console.log("El precio de tu remera es: " + precio);
}
// practicando switch 
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

// pasando productos de html a JavaSript en html accesorios de mujer 




