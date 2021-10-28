


var mercadoriaN = [];
var mercadoriaV = [];
var somaN = 0;
var somaV = 0;
var media1;
var parar5 = false;
var a = [];
var res = {};
var p = 'NUMERO';

function Calcular4() {

	var vetor4 = parseFloat(document.querySelector("#vetor4").value);
	var vetor41 = parseFloat(document.querySelector("#vetor41").value);


	if(mercadoriaN.length <= 9 && mercadoriaV.length <= 9){

		mercadoriaN.push(vetor4);
		mercadoriaV.push(vetor41);

		console.log(mercadoriaN);
		console.log(mercadoriaV);

		somaN +=  vetor41 * vetor4;
		somaV++

		if(mercadoriaN.length == 10 && parar5 == false ){
			parar5 = true;

			for(loop5 = 0 ; loop5 < mercadoriaN.length; loop5++){

				a.push(p+ " " + loop5)
				res[a[loop5]] = mercadoriaV[loop5]
			}

			console.log(res);
			console.log(JSON.parse(JSON.stringify(Object.assign({}, mercadoriaN))));
			console.log(JSON.parse(JSON.stringify(Object.assign({}, mercadoriaV))));
			console.log(JSON.parse(JSON.stringify(Object.assign({}, [somaN]))));
			console.log(JSON.parse(JSON.stringify(Object.assign({}, [media1]))));
		}

		media1 = somaN/somaV;
	}
}
function Calcular41(){
	localStorage.setItem("Estoque", JSON.stringify(Object.assign({}, res)))
	localStorage.setItem("Media1", JSON.stringify([media1]));
	localStorage.setItem("Soma", JSON.stringify([somaN]));
}
function Calcular42(){
	localStorage.removeItem("Estoque")
	localStorage.removeItem("Media1")
	localStorage.removeItem("Soma")
}
function Calcular43(){
	var Resultado4 = document.querySelector("#Resultado4");
	var Resultado41 = document.querySelector("#Resultado41");
	var Resultado42 = document.querySelector("#Resultado42");

	Resultado4.innerHTML = localStorage.Estoque;
	Resultado41.innerHTML = "Media: " + localStorage.Media1;
	Resultado42.innerHTML = "Soma: " + localStorage.Soma;
}

var v1 = [];
var v2 = [];
var comparar = 0;
var parar2 = false;

function Calcular5() {

	var vetor5 = parseFloat(document.querySelector("#vetor5").value);
	var vetor51 = parseFloat(document.querySelector("#vetor51").value);

	if(v1.length <= 14 && v2.length <= 14){
		v1.push(vetor5);
		v2.push(vetor51);

		console.log(v1);
		console.log(v2);
	}

	if(v1.length == 15 && parar2 == false ){
		parar2 = true;

		for(loop2 = 0 ; loop2 < v1.length; loop2++){

			if(v1[loop2] == v2[loop2]){
				comparar++
			}
		}

		console.log(JSON.parse(JSON.stringify(Object.assign({}, v1))));
		console.log(JSON.parse(JSON.stringify(Object.assign({}, v2))));
		console.log(comparar);
	}
}
function Calcular51(){
	localStorage.setItem("V1", JSON.stringify(Object.assign({}, v1)))
	localStorage.setItem("V2", JSON.stringify(Object.assign({}, v2)))
	localStorage.setItem("Quantidade",JSON.stringify([comparar]))
}
function Calcular52(){
	localStorage.removeItem("V1")
	localStorage.removeItem("V2")
	localStorage.removeItem("Quantidade")
}
function Calcular53(){
	var Resultado5 = document.querySelector("#Resultado5");
	var Resultado51 = document.querySelector("#Resultado51");
	var Resultado52 = document.querySelector("#Resultado52");

	Resultado5.innerHTML = localStorage.V1;
	Resultado51.innerHTML = localStorage.V2;
	Resultado52.innerHTML = "Quantidade: " + localStorage.Quantidade;
}
