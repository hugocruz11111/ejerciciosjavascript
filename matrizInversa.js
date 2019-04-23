function matriz(){

var matriz = new Array(3);

for (i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3);
}

        matriz[0][0] = 1;
        matriz[0][1] = 2;
        matriz[0][2] = 3;

        matriz[1][0] = 4;
        matriz[1][1] = 5;
        matriz[1][2] = 6;

        matriz[2][0] = 7;
        matriz[2][1] = 8;
        matriz[2][2] = 9;

for (i = 0; i < matriz.length; i++) {
    //for (e = 0; e < matriz[i].length; e++) { 
        document.write(matriz[i] + "<br>"+ " " );
    }
    //document.write("<br>");
//}

document.write( "<br>");

}


function inversa(){

    var matriz = new Array(3);

    for (i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(3);
    }

    matriz[0][0] = 1;
    matriz[0][1] = 2;
    matriz[0][2] = 3;

    matriz[1][0] = 4;
    matriz[1][1] = 5;
    matriz[1][2] = 6;

    matriz[2][0] = 7;
    matriz[2][1] = 8;
    matriz[2][2] = 9;



    for (i = 0; i < matriz.length; i++) {
        var reversed = matriz.reverse();
        document.write(reversed[i] + "<br>" + " ")
    } 
}   

function palindromo() {

    var palabra = prompt("Escribe una palabra").toLowerCase();

    
    palabra = palabra.replace(/ /g, "");

    for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] != palabra[palabra.length - i - 1]) {
            return document.write("No es palindromo");
        }else{
            return document.write("Es un palindromo ")
        }
    }
}

function numero(){

    numeros = prompt("Ingrese un numero");

    if(numeros % 2 == 0){
        return document.write("el numero es par");
    }else{
        return document.write("el numero no es par");
    }
    
}

function goBack() {
    window.history.back()
}