function calculardoraImc(peso, altura){   // imc= kg/m^2
  var peso = document.getElementById('peso').value;
  var altura = (document.getElementById('altura').value / 100);
  var imc = peso / Math.pow(altura,2);
  alert("Su indice de masa corporal es: " + imc.toFixed(2));
};
