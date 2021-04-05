import validator from './validator.js';

/* Para mostrar solo la ventana de inicio */

document.getElementById('fondoTienda').style.display='none';
document.getElementById('fondoTarjeta').style.display='none';

/* Para mostrar la vista de la tienda y ocultar la vista de inicio y la de tarjeta de crédito*/

let comprar=document.getElementById('botonTienda');
comprar.addEventListener('click',comprarTienda);

function comprarTienda() {
document.getElementById('fondoTienda').style.display='block';
document.getElementById('fondoTarjeta').style.display='none';
document.getElementById('fondoPaginaUno').style.display='none';
}

/*Se selecciona el articulo */

let tarjetaPagarDragopavo=document.getElementById('pagarDragopavo');
tarjetaPagarDragopavo.addEventListener('click',ingresarTarjeta);
let tarjetaPagarMulagua=document.getElementById('pagarMulagua');
tarjetaPagarMulagua.addEventListener('click',ingresarTarjeta);
let tarjetaPagarActitud=document.getElementById('pagarActitud');
tarjetaPagarActitud.addEventListener('click',ingresarTarjeta);

/*Acá se muestra la vista de la tarjeta de crédito */

function ingresarTarjeta(){
document.getElementById('fondoTienda').style.display='none';
document.getElementById('fondoTarjeta').style.display='block';
document.getElementById('fondoPaginaUno').style.display='none';
}

/*Permite regresar a la vista de la tienda si se quiere cambiar de articulo*/

let regresar=document.getElementById('botonParaRegresarATienda');
regresar.addEventListener('click',volverTienda);

function volverTienda(){
document.getElementById('fondoTienda').style.display='block';
document.getElementById('fondoTarjeta').style.display='none';
document.getElementById('fondoPaginaUno').style.display='none';
}

//Maskify y isValid

const numeroTarjeta=document.getElementById("numeroDeTarjeta");
const llamarBoton=document.getElementById("enviarCodigoDeTarjeta");
llamarBoton.addEventListener('click',procesar);


function procesar(){
    const valorEnmascarado=validator.maskify(numeroTarjeta.value);
    const validar=validator.isValid(numeroTarjeta.value);
    validar?alert(`El numero ${valorEnmascarado} es válido.`): alert(`El numero ${valorEnmascarado} no es válido.`);
}


