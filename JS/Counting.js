var texto = document.getElementById("texto");
var num   = document.getElementById("num");

function contar() {
  var words  = texto.value.split(' ');
  num.value = words.length;
}