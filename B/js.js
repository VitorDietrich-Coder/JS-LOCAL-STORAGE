var entrada = []
var resultado;
var limit = 1;

function letrab() {

    let entrada1 = document.getElementById("entrada1").value;
    if (limit < 21) {
        entrada.push(entrada1);
        limit++
    }
    console.log(entrada);

}
var result4 = [];

function letrab2() {
  
    for (index = 0; index < entrada.length; index++) {

        result4.push(entrada[(entrada.length - 1) - index]);
        var array = JSON.stringify(Object.assign({ "Exibe ao contrario": result4.join(",") }));
        var stringToJson = JSON.parse(array);
      
    }
    console.log(result4);
    console.log(stringToJson);
    console.log("Exibe ao Contrário JS:" + result4.join(", "));
}
entrada4 = [];
var soma = 0;
var media;

function salvarResultado() {
	localStorage.setItem("Resultado", result4);
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