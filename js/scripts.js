function seguir(){
    alert('Você agora está seguindo Rafaela Lissa')
}
//exercicio 1
function exe1(){
    //vamos usar DOM para recuperar os dados do html
    //DOM - Document Object Model
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //vamos fazer a subtração
    let sub = nro1 - nro2
    //vamos mostrar o resultado
    //alert("A subtração é " + sub)
    document.getElementById("sub").innerText = "o resultado é " + sub
}
//exercicio 2
function exe2(){

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let numero3 = document.getElementById("numero3").value;

    let multi = numero1 * numero2 * numero3

    document.getElementById("multi").textContent = "O Resultado é: " + multi;
}
function exe3(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if(numero2 != 0){
        let divisao = numero1 / numero2
        document.getElementById("divisao").textContent = "O Resultado é: " + divisao;
    }
    else{
        document.getElementById("divisao").textContent = "O Resultado é: " + "ERRO";
    }
}
function exe4(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let media = ((num1 * 2) + (num2 * 3)) / (2+3)

    document.getElementById("media").innerText = "O Resultado é: " + media;
}
function exe5(){
    let numero1 = Number(document.getElementById("numero1").value);

    let desconto = (numero1 * 10) / 100
    let resultado = numero1 - desconto

    document.getElementById("desconto").innerText = "O Novo Preço é: " + resultado;
}
function exe6(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let comissão = numero2 * 0.04;
    let salariofinal = numero1 + comissão;

    document.getElementById("comissão").innerText = "Valor da comissão: " + comissão;
    document.getElementById("salariofinal").innerText = "Salario Final: " + salariofinal;
}
function exe7(){
    let numero1 =  Number(document.getElementById("numero1").value);

    let engordar = numero1 * 1.15;//aumenta 15%
    let emagrecer = numero1 * 0.80; //diminui 20%

    document.getElementById("engordar").innerText = "O peso se engordar 15%: " + engordar.toFixed(2);
    document.getElementById("emagrecer").innerText = "O peso se emagrecer 20%: " + emagrecer;
}
function exe8(){
    let numero1 = Number(document.getElementById("numero1").value);

    let gramas = numero1 * 1000;

    document.getElementById("gramas").innerText = "O peso em gramas é:  " + gramas;
}
function exe9(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);

    let area = ((numero1 + numero2) * numero3) / 2;

    document.getElementById("area").innerText = "A área é: " + area;
}
function exe10(){
    let numero1 = Number(document.getElementById("numero1").value);

    let area = numero1 * numero1;
     document.getElementById("area").innerText = "A area é: " + area;
}