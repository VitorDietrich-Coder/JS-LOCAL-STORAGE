
var vetor1 = [];
var x;
var multe = [];
function Calcular1() {
	var vetor = parseFloat(document.querySelector("#vetor1").value);
	if(vetor1.length <= 9){
		vetor1.push(vetor);
		console.log(vetor1);
	}
	if(vetor1.length == 10 && (!x) ){
		x = vetor
		console.log(x);
		for(i = 0 ; i < vetor1.length; i++){
			multe.push(vetor1[i] * x);
		}
		console.log(multe);
		console.log(JSON.parse(JSON.stringify(Object.assign({}, multe))));
		alert('Deseja salvar o resultado?');
		localStorage.setItem("Resultado", multe);
		alert('Salvo com sucesso.');
	}
}
function salvarResultado() {

	localStorage.setItem("Resultado", multe);
	alert('Salvo com sucesso.');

}
function listar(){
	document.getElementById("textid").value = "Resultado:" + localStorage.Resultado;
	alert('listado com sucesso');
	
}
function deletar() {

	localStorage.removeItem("Resultado");
	alert('removido com sucesso');
	document.getElementById('textid').value = '';

}