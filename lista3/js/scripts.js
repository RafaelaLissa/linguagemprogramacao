function exe1() {
    //recupera os dados do usuario
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let d = Number(document.getElementById("d").value)

    let i = 1 //variavel que conta quantas vezes o laço vai se repetir
    let aux //sera utilizada nas trocas das variaveis a,b,c,d
    while (i <= 3) {
        if (a > b) {
            aux = a
            a = b
            b = aux
        }
        if (b > c) {
            aux = b
            b = c
            c = aux
        }
        if (c > d) {
            aux = c; c = d; d = aux;
        }
        i++//incrementa i
        document.getElementById("resultado").innerHTML = `Ordem crescente ${a} ,${b} ,${c} ,${d} <br/>ordem 
        decrescente ${d} ,${c} ,${b} ,${a}`
    }
}
function exe2() {
    let preco = 5.0
    let qtde = 120
    const despesa = 200 //define uma variável constante, ou seja, uma variável que não pode ser alterada ou reatribuída
    let lucro // guarda o lucro do preco do teatro
    let saida = "" // para ser vazia tem que colocar as aspas pois não funciona
    while (preco >= 1.0) {
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr><td>${preco}</td> <td>${qtde}</td> <td>${despesa}</td> <td>${lucro}</td></tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    document.getElementById("tabela").innerHTML = saida
}
function exe3() {
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0
    let idade  //inicializa as variavies
    //estrutura de repetição for(para)
    //let i = 1 sera executado uma unica vez, logo no inicio
    //i <= 8 sera exucutado toda vez, antes de entrar no loop
    //i++ sera executado toda vez, antes de ir para proxima iteração
    for (let i = 1; i <= 8; i++) {
        idade = Number(prompt(`digite a idade ${i}`)) //recebe a idade do usuario
        if (idade >= 0 && idade <= 15) {
            faixa1++ //incrementa a faixa etaria
        }
        else if (idade > 15 && idade <= 30) {
            faixa2++
        }
        else if (idade > 30 && idade <= 45) {
            faixa3++
        }
        else if (idade > 45 && idade <= 60) {
            faixa4++
        }
        else if (idade > 60) {
            faixa5++
        }
        else {
            alert(`Idade negativa`) //caso o usuario digite uma idade invalida
        }
    }
    // imprime os resultados
    document.getElementById("resultado").innerHTML =
        `F1: ${faixa1} <br/>F2: ${faixa2} <br/>F3: ${faixa3} <br/>F4: ${faixa4} <br/>F5: ${faixa5} 
   <br/>%F1: ${faixa1 / 8 * 100} <br/>%F5: ${faixa5 / 8 * 100}`
}
function exe4() {
    //tabuada do 5
    let numero = Number(document.getElementById("numero").value) //recebe o numero do usuario
    let resultado = ""
    for (let i = 0; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i} <br/>`
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe5() {
    let resultado = ""
    for (let numero = 1; numero <= 10; numero++) {
        resultado += `Tabuada do ${numero}<br/>`
        for (let i = 0; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i}<br/>`
        }
    }
    document.getElementById("resultado2").innerHTML = resultado
}
function exe6() {
    //o do faz pelo menos uma vez
    let codigo, valor, totalVista = 0, totalPrazo = 0
    for (let i = 1; i <= 5; i++) {
        do { //vai permanecer no do while enquanto o usuario não digitar V ou P
            codigo = prompt(`Digite V(à vista) ou P(à prazo)`).toUpperCase()//forçar a letra ser maiuscula 
        }
        while (codigo != 'V' && codigo != 'P')
        valor = Number(prompt(`Digite o valor da transação`))
        if (codigo == 'V') {
            totalVista += valor
        }
        else {
            totalPrazo += valor
        }
    }
    document.getElementById("resultado").innerHTML = `Total à vista ${totalVista}<br/>Total à prazo ${totalPrazo}
    <br/>Total Geral ${totalPrazo + totalVista}<br/>Valor da primeira parcela ${totalPrazo / 3}`
}
function exe7() {
    let idade, altura, peso, idade50 = 0, idade10e20 = 0, somaaltura = 0, peso40 = 0
    for (let i = 1; i <= 5; i++) {
        do {
            idade = Number(prompt(`Informe a idade`))
        }
        while (idade < 0)
        do{
            altura = Number(prompt(`Informe a altura`))
        }
        while(altura < 0)
            
        do{
            peso = Number(prompt(`Informe o peso`))
        }
        while(peso < 0)
        if(idade > 50){//item 1
            idade50++
        }
        if(idade >= 10 && idade <= 20){//item 2
            idade10e20++//conta as pessoas com idade entre 10 e 20
            somaaltura += altura
        }
        if(peso < 40){ //item3
            peso40++
        }
    }
    document.getElementById("resultado").innerHTML = `item 1 ${idade50}<br/> item 2 ${somaaltura/idade10e20}
    <br/> item 3 ${peso40}`
}