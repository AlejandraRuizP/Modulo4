/* //codigo Es6
let palabra="Altura!";
if(palabra[0]=="H"){
    alert("Empieza con H")
}else{
    alert("No empiezan con H");
} */

/* //Es6
let palabraMay=palabra.toUpperCase();
console.log(palabraMay);

let resultado=palabraMay.startsWith("A");
console.log(resultado);
//-------------------
function ejecutar(){
    console.log("fuera");
}

let objeto={
    ejecutar:function(){
        console.log("dentro");
    },
    comprobar:function(){
        ejecutar();
        this.ejecutar();
    }
}

objeto.comprobar(); */

//---functions tradicional
function escribir(texto){
    console.log(texto);
}
//f de flecha con un parametro
let e= texto=>console.log(texto);
//f de flecha sin parametro
let s=()=>alert("No tiene parametro");
//f de flecha con dos parametros
let x=(parametro1,parametro2)=>alert("Dos parametros");
//--------
//map para evaluar arreglos, se puede usar para sustituir el ciclo for
let  notas=[6.5, 5.4, 3.0, 7.0];
let notasCopia=notas.slice();//crear copia de notas

for(i=0; i<notas.length; i++){
    console.log(notas[i]);
}

//map=mapea elemento por elemento de la coleccion
notas.map(n=>console.log(n));
notasCopia=notasCopia.map(n=>n+0.2);
console.table(notasCopia);

//spread= ...
let palabras=["hola","que","tal"];
function concatenar(a,b,c){
    console.log(a+":"+b+":"+c);
}
concatenar(...palabras);//convierte cada elemento del arreglo en un elemento individual


//concatenar los soguientes arreglos
let array1=["a","b","c"];
let array2=["d","e","f"];

/* for(i=0; i<array2.length; i++){//metodo clasico con for
    array1.push(array2[i]);
}
console.log(array1);

//solucion avanzada
array2.map(e=>array1.push(e));
console.log(array1); */
//profecional
array1.push(...array2);
console.log(array1);

//-------------
//Destructuracion
 const frutas=["pera","manzana","limon","naranja"];
 //let fruta1=frutas[0];
 //let fruta2=frutas[1];

 //otra solucion
 let [fruta1,frutas2,fruta2,fruta4]=frutas;//creamos unarreglo de variables(cada variable corresponde al indice de cada elemento)
 console.log(fruta4);









