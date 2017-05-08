

var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;

function imc(peso, estatura){
	var peso = prompt('ingrese su peso');
	var estatura = prompt('ingrese su estatura');

	alert(peso/Math.pow(altura, 2);
}
imc();

function calcularImc(){
	var peso = prompt("Ingresa tu peso en kilos");
	var estatura = prompt("Ingresa tu estatura en centímetros. Ej. 157 cm");
	var calculo = (peso/(estatura*estatura)).toFixed(2);

return alert("Tu Indice de Masa Corporal (IMC) es " + calculo);
}

calcularImc();




function calculardoraImc(peso, altura){   // imc= kg/m^2
  var peso = document.getElementById('peso').value;
  var altura = (document.getElementById('altura').value / 100);
  var imc = peso / Math.pow(altura,2);
  alert("Su indice de masa corporal es: " + imc.toFixed(2));
};

