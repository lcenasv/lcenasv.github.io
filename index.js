//sirve para monstrar un mensaje emergente 

// ejemplo de variable tipo string
var mensajeInicio="Hola a todos";
document.getElementById('ejmvariables').innerHTML=mensajeInicio;

// ejemplo de variable tipo entero
var _verdadero = true;
var $falso = false;

var _num1 = 10.45;
var $num2 = 10;
var _num3 = undefined;
var $suma = _num1 + $num2 - _num3;
//document.getElementById('resultadosuma').innerHTML="el resultado de la suma es "+ $suma;

// declarar una variable tipo arreglo (array)
var listaNumeros = [101,102,103,204];

var $sumaNumeros = listaNumeros[0] + listaNumeros[1] + listaNumeros[2] + listaNumeros[3];

document.getElementById('resultadosuma').innerHTML="tipo de dato: "+ typeof(listaNumeros);



//como declarar una variable tipo objeto (propiedades, métodos)
var objProducto = {
        code: "001",
        name: "laptop",
        price: 4500.00,
        color: ["ploma","negra","blanca","rosada"],
        showPriceIGV: function(){
            return this.price*0.18;
        }

}

document.getElementById('resultadoObj').innerHTML="Código: "+ objProducto.code
+ "  /Nombre: "+ objProducto.name + "  /Precio: " + objProducto.price
+ "  /Color favorito: "+ objProducto.color[0] + " , " + objProducto.color[1]
+ "  /Precio con IGV: " + objProducto.showPriceIGV();




function mostrarMensaje2(){
var numero = 346;
switch(numero){
    case 12:
        alert("el valor es 12");
        break;
    
    case 34:
        alert("el valor es 34");
        break;

    default:
        alert("esto es un valor por defecto");
}

}






function mostrarMensaje(){ 
    
    if (5 != 5) {
        alert("el resultado es incorrecto ");
    }else if (5 == 5)
    {
        alert("el resultado es correcto ");
    }else{
        alert("el resultado es ----");
    }

//operadores lógicos
    // && AND
    // || OR
    // !() NOT


//operadores de comparación
    //igualdad de números
    //document.write((1 == 1) + "<br>");
    //igualdad tipos de datos
    //document.write((1 === "1") + "<br>");
    //si es mayor
    //document.write((3 > 2) + "<br>");
    //si es menor
    //document.write((3 < 2) + "<br>");
    //si son diferentes
    //document.write((4 != 3) + "<br>");
    //si son diferentes tipos de datos
    //document.write((4 !== "3") + "<br>");

    //verMas();
    
}


function verMas(){
    return objProducto.name;
}

// funcion para sumar numeros
 function sumaNumeros(num1, num2){
     var $sumaTotal = num1 + num2;
     alert("La suma de los números es: " + $sumaTotal);

 }

//OPERADOR CONDCIONAL O TERNARIO
function initWebPage(){
    var valorOpCon = (12<2) ? "Mayor" : "No es Menor, xq 12 es mayor que 2";
    verValor(valorOpCon);
}


function verValor(valOp){
    alert("el valor de la condicion es " + valOp);
}


