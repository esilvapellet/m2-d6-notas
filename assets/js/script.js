// carga el documento antes que el script

document.addEventListener("DOMContentLoaded", (event) => {

// mensaje de bienvenida

alert(`Bienvenido a la calculadora de notas`);

// pide ingreso de notas html

alert(`Ingrese notas del ramo HTML`);

var inputHtmlNota1 = Number(prompt("ingrese nota 1 [Html]"));
var inputHtmlNota2 = Number(prompt("ingrese nota 2 [Html]"));
var inputHtmlNota3 = Number(prompt("ingrese nota 3 [Html]"));
var promedioHtml = 0;

promedioHtml = (inputHtmlNota1 + inputHtmlNota2 + inputHtmlNota3) / 3;
console.log("Promedio Html: ", promedioHtml);

// pide ingreso de notas css

alert(`Ingrese notas del ramo CSS`);

var inputCssNota1 = Number(prompt("ingrese nota 1 [Css]"));
var inputCssNota2 = Number(prompt("ingrese nota 2 [Css]"));
var inputCssNota3 = Number(prompt("ingrese nota 3 [Css]"));
var promedioCss = 0;

promedioCss = (inputCssNota1 + inputCssNota2 + inputCssNota3) / 3;
console.log("Promedio Css: ", promedioCss);

// pide ingreso de notas javascript

alert(`Ingrese notas del ramo Javascript`);

var inputJavascriptNota1 = Number(prompt("ingrese nota 1 [Javascript]"));
var inputJavascriptNota2 = Number(prompt("ingrese nota 2 [Javascript]"));
var inputJavascriptNota3 = Number(prompt("ingrese nota 3 [Javascript]"));
var promedioJavascript = 0;

promedioJavascript = (inputJavascriptNota1 + inputJavascriptNota2 + inputJavascriptNota3) / 3;
console.log("Promedio Javascript: ", promedioJavascript);

alert(`Gracias. Ahora puede revisar sus promedios.`);

// modificamos td en documento

// carga de datos en fila html

document.getElementById("htmlNota1").innerText = inputHtmlNota1;
document.getElementById("htmlNota2").innerText = inputHtmlNota2;
document.getElementById("htmlNota3").innerText = inputHtmlNota3;
document.getElementById("htmlPromedio").innerText = promedioHtml.toFixed(2);

// carga de datos en fila css

document.getElementById("cssNota1").innerText = inputCssNota1;
document.getElementById("cssNota2").innerText = inputCssNota2;
document.getElementById("cssNota3").innerText = inputCssNota3;
document.getElementById("cssPromedio").innerText = promedioCss.toFixed(2);

// carga de datos en fila javascript

document.getElementById("javascriptNota1").innerText = inputJavascriptNota1;
document.getElementById("javascriptNota2").innerText = inputJavascriptNota2;
document.getElementById("javascriptNota3").innerText = inputJavascriptNota3;
document.getElementById("javascriptPromedio").innerText = promedioJavascript.toFixed(2);

// calcula promedio final

var promedioFinal = (promedioHtml + promedioCss + promedioJavascript) / 3;
document.getElementById("promedio-final").innerText = promedioFinal.toFixed(2);

})