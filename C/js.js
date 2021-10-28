var entrada = []
var resultado;
var limit = 1;
entrada4 = [];
var soma = 0;
var media;   
function calcC(){
        let notas = document.getElementById("notas").value;
            if(limit < 21){
                entrada4.push(notas);
                limit++
                soma += parseFloat(notas);
            }
        media = soma/20;
        console.log(soma);
        console.log(entrada4);
}
var quantidade = 0;
var mediaresult = []
function calcC2(){
        for (let index = 0; index <= 19; index++) {
            if(entrada4[index] >= media){
                quantidade++
            }
        }
        var array = JSON.stringify(Object.assign({"Média: " : media}, {"Quantidade: " : quantidade})); 
        var stringToJson = JSON.parse(array);
        console.log(stringToJson);
        console.log("Quantidade: " + quantidade);
        console.log("Média: " + media);
}
function saveCRUD() {
    let notas = document.getElementById("notas").value;
    console.log(notas);
    localStorage.setItem("notasCRUD", notas);
    document.getElementById("output").innerHTML = ('Salvo com sucesso.');
    document.getElementById("notas").value = "";
}
function listarCRUD() {
    document.getElementById("textid").value = localStorage.notasCRUD;
    document.getElementById("output").innerHTML = ('listado com sucesso');
}
function deletarCRUD() {
    localStorage.removeItem("notasCRUD");
    document.getElementById("output").innerHTML = ('removido com sucesso');
    document.getElementById('textid').value = '';
}