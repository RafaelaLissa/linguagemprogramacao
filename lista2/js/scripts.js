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
function exe6(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let selecao = Number(document.getElementById("selecao").value)
    //utilização do escolha
    switch (selecao){
        case 1:
            // O primeiro número elevado ao segundo
            document.getElementById("resultado").innerText = "a potencia é: " + Math.pow(num1, num2) //math função pronta para potencia
            break
        case 2:
            // Raiz quadrada de ambos os números
            document.getElementById("resultado").innerHTML = "raiz quadrada do primeiro é "+ Math.sqrt(num1).toFixed(2)+ 
            "<br/> raiz quadrada do segundo é: " + Math.sqrt(num2).toFixed(2)
            break
        case 3:
            // Raiz cúbica de ambos os números
            document.getElementById("resultado").innerHTML = "a raiz cubica do primeiro é: " + Math.cbrt(num1).toFixed(2) + 
            "<br/> raiz cubica doo segundo: " + Math.cbrt(num2).toFixed(2)
            break
    }
}
function exe7(){
    let numero1 = Number(document.getElementById("numero1").value)

    let aumento = numero1 * 0.30
    let salariofinal = numero1 + aumento
    if (numero1 < 500){
        document.getElementById("resultado").innerText = "O salario modificado é: " + salariofinal
    }
    else{
        document.getElementById("resultado").innerText = "Não tem direito á aumento."
    }
}
function exe8(){
    let numero1 = Number(document.getElementById("numero1").value)

    if(numero1 <= 300){
        aumento = 0.35
    }
    //vamos usar template string
    else{
        aumento = 0.15
    }
    let salariofinal = numero1 + (numero1 * aumento);
    document.getElementById("resultado").innerHTML = `O salario final é ${salariofinal}`//fazer assim daqui pra frente
}
function exe9(){
    let numero1 = Number(document.getElementById("numero1").value)
    let credito

    if(numero1 > 400){
         credito = (numero1 * 0.30)
    }
    else if(numero1 > 300 && numero1 <=400){
         credito =(numero1 * 0.25)
    }
    else if (numero1 > 200 && numero1 <= 300){
        credito = (numero1 * 0.20)
    }
    else if (numero1 <= 200){
        credito = (numero1 * 0.10)
    }
    else{//saldo negativo
        document.getElementById("credito").innerHTML = "saldo não pode ser negativo"
        return //saiu da função
    }
    document.getElementById("resultado").innerHTML =`o salario medio é:  ${numero1}` + 
    `<br/> valor credito disponivel:  ${credito}`
}
function exe10(){
    let numero1 = Number(document.getElementById("numero1").value)

    if (numero1 <= 12000){
        consumidor = numero1 + (numero1 * 0.5)
    }
    else if (numero1 > 12000 && numero1 <= 25000){
        consumidor = numero1 + (numero1 * 0.10) + (numero1 * 0.15)
    }
    else if (numero1 > 25000){
        consumidor = numero1 + (numero1 * 0.15) + (numero1 * 0.20)
    }
    else{
        document.getElementById("consumidor").innerHTML = "custo negativo"
    }
    document.getElementById("resultado").innerHTML = `preço ao consumidor: R$  ${consumidor}`
}
function exe22(){
    
}
function exe24(){
    
}