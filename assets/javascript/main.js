function calcularImc(){
	var peso = prompt("Ingresa tu peso en kilos");
	var estatura = prompt("Ingresa tu estatura en centímetros. Ej. 157 cm");
	var calculo = (peso/(estatura*estatura)).toFixed(2);

return alert("Tu Indice de Masa Corporal (IMC) es " + calculo);
}

calcularImc();



