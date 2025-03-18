function exe1(){
    //recupera os dados do usuario
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    //calcular media
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById("media").innerText = "Aprovado com media " + media
    }
    else {
        document.getElementById("media").innerText = "Reprovado com media " + media
    }

}
function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    let media = (nota1 + nota2) / 2
    if ((media >= 0) && (media < 3)){
        document.getElementById("media").innerHTML = "reprovado " + media
    }
    else if ((media >= 3) && (media < 7)){
        document.getElementById("media").innerHTML = "Exame " + media
    }
    else if ((media >= 7) && (media <= 10)){
        document.getElementById("media").innerHTML = "aprovado " + media
    }
    else {
        document.getElementById("media").innerHTML = "problema com notas " + media
    }

}
function exe3(){
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)

    let menor
    if (numero1 < numero2){
        document.getElementById("menor").innerText = "O menor é  " + numero1
    }
    else if (numero2 < numero1){
        document.getElementById("menor").innerText = "O menor é  " + numero2
    }
    else {
        document.getElementById("menor").innerText = "os dois são iguais "
    }
}
function exe4(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)

    let maior
    if (num1 >= num2 && num1 >= num3){
        document.getElementById("maior").innerText = "O maior é  " + num1
    }
    else if (num2 >= num1 && num2 >= num3) {
        document.getElementById("maior").innerText = "O maior é  " + num2
    }
    else if (num3 >= num1 && num3 >= num2){
        document.getElementById("maior").innerText = "O maior é  " + num3
    }
}
function exe5(){
    let = num1 = Number(document.getElementById("num1").value)
    let = num2 = Number(document.getElementById("num2").value)
    let selecao = Number(document.getElementById("selecao").value)
    //utilização do escolha
    switch (selecao){
        case 1: document.getElementById("resultado").innerText = (num1 + num2)/2
        break
        
        case 2: if (num1 >= num2){
            document.getElementById("resultado").innerText = num1 - num2
        }
        else {
            document.getElementById("resultado").innerText = num2 - num1
        }
        break

        case 3: document.getElementById("resultado").innerText = num1 * num2
        break
        
        case 4: if(num2 != 0){
            document.getElementById("resultado").innerText = num1 / num2
        }
        else{
            document.getElementById("resultado").innerText = "Divisão por zero"
        }
    }
        
}