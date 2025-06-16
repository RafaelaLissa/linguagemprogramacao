function exe1(){
    let i = 0
    let numeros = []
    for(i =0;i < 6; i++){
        //insere numero no vetor
        numeros.push(Number(prompt(`Informe o elemento ${i}`)))
    }
    //calcula os pares e impares
    let pares = [] // guarda os numeros pares
    let impares = [] // guarda os numeros impares
    //numeros.length // retorna/guarda a qtde de elementos do vetor
    for(i = 0;i < numeros.length; i++){
        if(numeros[i] % 2 == 0){//par
            pares.push(numeros[i])
        }
        else{ //impar
            impares.push(numeros[i])
        }
    }
    alert(`Numeros pares ${pares} e qtde ${pares.length}`)
    alert(`Numeros impares ${impares} e qtde ${impares.length}`)
}
function exe2(){
    let i = 0
    let numeros = []
    for(i = 0;i < 7; i++){
        numeros.push(Number(prompt(`Informe o numero ${i}`)))
    }
    let mult2 = []
    let mult3 = []
    let mult2e3 = []
    for(i = 0;i < numeros.length; i++){
        if(numeros[i] % 2 == 0 && numeros[i] % 3 == 0){
            mult2e3.push(numeros[i])
        }
        else if(numeros[i] % 2 == 0){
            mult2.push(numeros[i])
        }
        else if(numeros[i] % 3 == 0){
            mult3.push(numeros[i])
        }
    }
    alert(`Numeros multiplos de 2 e 3: ${mult2e3.length}`)
    alert(`Numeros multiplos de 2: ${mult2.length}`)
    alert(`Numeros multiplos de 3: ${mult3.length}`)
}
function exe3(){
    // cadastra codigo e qtde em estoque
    let vetor=[]
    for(let i = 0;i < 3; i++){
        //cria objeto
        let objeto = {
            codigos: prompt(`Informe o código do produto`),
            estoque: Number(prompt(`Informe a qtde em estoque`)),
            preco: Number(prompt(`Informe o preco do produto`))
        }
        //adiciona objeto no vetor
        vetor.push(objeto)
    }
    //comprando ...
    let cliente = Number(prompt(`Informe código do cliente`))
    do{
        let codigos = prompt(`Informe código do produto para compra`)
        let qtde = Number(prompt(`Informe a qtde do produto para compra`))
        //procurar para ver se produto existe
        //posso fazer o for para procura ou usar uma função
        let produtoEncontrado
        let i
        for(i=0;i<3;i++){
            if(vetor[i].codigos == codigos){//produto encontrado
                produtoEncontrado = vetor[i]// guarda produto em produtoEncontrado
                break//para de procurar, significa sair do for
            }
        }
         if(i == 3){//produto não existe
            alert(`Codigo ${codigo} Inexistente`)
         }
         else{// produto existe
            //tem em estoque suficiente
            if(produtoEncontrado.estoque >= qtde){
                //atualizar o estoque
                produtoEncontrado.estoque =- qtde
                alert(`Pedido atendido. Obrigado e volte sempre`)
            }
            else{
                alert(`Não temos estoque suficiente desta mercadoria`)
            }
         } 
         cliente = Number(prompt(`Informe código do novo cliente. Digite 0 para encerrar`))   
    }// fecha o do
    while(cliente != 0)
    console.log(vetor)
    //alert(`${codigos} ${estoque}`)
}
function exe4(){
    //declaração do vetor
    let vetor = []
    //usuario informa 15 numeros
    for(let i = 0;i < 15; i++){
        //entrada de dados
        vetor.push(Number(prompt(`Informe o ${i+1}° número`)))
    }
    //verifica os numeros iguais a 30 e mostrar a posição onde estão
    let posicao = []
    for(let i = 0;i < 15;i++){
        if(vetor[i] == 30){
           posicao.push(i)
        }
    }
    alert(`Número 30 encontrado na posição ${posicao}`)
}
function exe5(){
    //declaração dos vetores
    let logica = [], linguagem = []
    //entrada de dados
    for(let i = 0; i<15;i++){
        logica.push(Number(prompt(`Informe o ${i+1}° que faz a diciplina Lógica`)))
    }
    for(let i=0;i<10;i++){
        linguagem.push(Number(prompt(`Informe o ${i+1}° aluno que faz a disciplina Linguagem`)))
    }
    //encontrar a intersecção
    let interseccao = []
    //indexOf() percorre o vetor logica
    for(let i=0;i<15;i++){
        //percorre o vetor logica
        let posicao = linguagem.indexOf(logica[i])
        if(posicao != -1){ // caso encontrou
            interseccao.push(logica[i])
        }
    }
    alert(`Alunos que fazem Lógica e Linguagem ${interseccao}`)
}
function exe6(){
    //declarar vetores
    let vetor = []
    //entrada de dados
    for(let i=0;i<3;i++){
        //cria objeto
        let objeto ={
            nome:prompt(`Informe o nome do ${i+1}° vendedor`),
            vendas:Number(prompt(`Informe total vendido pelo ${i+1}° vendedor `)),
            percentual:Number(prompt(`Informe o percentual de vendas do ${i+1}° vendedor`)),
        }
        //calcula comissão - vamos utilizar o . para acessar o campo/atributo do objeto
        //posso usar obj no lugar do objeto
        objeto.comissao = (objeto.vendas * objeto.percentual) / 100
        //adiciona objeto ao vetor
        vetor.push(objeto)
    }
    //relação dos vendedores e os valores a receber
    let relatorio = ''  
    for(let i=0;i<3;i++){
        relatorio += `\nVendedor: ${vetor[i].nome} vai receber ${vetor[i].comissao}`
    }
    alert(relatorio)
    //total de vendas de todos os vendedores
    let somaVendas = 0
    for(let i=0;i<3;i++){
        somaVendas = somaVendas + vetor[i].vendas
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
    //calcula o maior e o menor valor da comissão
    let objMaior = vetor[0]//primeiro funcionario é maior
    let objMenor = vetor[0]//primeiro funcionario é o menor
    let i
    for( i=0;i<3;i++){
        if(vetor[i].comissao > objMaior.comissao){
            objMaior = vetor[i]
        }
        if(vetor[i].comissao < objMenor.comissao){
            objMenor = vetor[i]
        }
    }
     alert(`${objMaior,nome} vai receber maior comissão de ${objMaior.comissao}`)
     alert(`${objMenor.nome} vai receber menor comissão de ${objMenor.comissao}`)
}
function exe7(){
    //declarar vetores
    let vetor = []
    let negativos = 0
    let somapositivos = 0
    for(let i=0;i<10;i++){
        vetor.push(Number(prompt(`Digite o ${i+1}° número real, positivos ou negativos`)))
    }
    for(let i=0;i<10;i++){
        if(vetor[i] < 0){
            negativos++;
        }
        else if(vetor[i] >= 0){
            somapositivos += vetor[i]
        }
    }
    alert(`A quantidade de números negativos é: ${negativos}`)
    alert(`A soma dos números positivos é: ${somapositivos}`)
}
function exe8(){
    let nomes = [], medias = []
    for(let i=0;i<7;i++){
        nomes.push(prompt(`Informe o nome do ${i+1}° aluno`))
        medias.push(Number(prompt(`Informe a media do ${i+1}° aluno`)))
    }
    //calcular a maior média
    let maior = medias[0]
    for(let i=0;i<7;i++){
        if(medias[i] > maior){
            maior = medias[i]
        }
    }
    //nome do aluno com maior média
    let pos = medias.indexOf(maior) // pos é posição
    alert(`Nome do aluno com maior média ${nomes[pos]}`)
    //calcular a nota necessária no exame final
    for(let i=0;i<7;i++){//percorre o vetor
        if(medias[i] < 5){//ficou o exame final
            //nota necessária sabendo que média deve ser no minimo 5
            alert(`${nomes[i]} precisa tirar ${10-medias[i]}`)
        }
    }
}
function exe9(){
    let vetor = []
    for(let i=0;i<3;i++){
        let objeto = {
            nome: prompt(`Informe o nome do produto ${i+1}`),
            codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
            preco: Number(prompt(`Informe o preço do produto ${i+1}`)),
            novo: 0
        }
        vetor.push(objeto)
    }
    //gerar relatório com os novos preços
    let i
    for(i=0;i<3;i++){
        if(vetor[i].codigo % 2 ==0 && vetor[i].preco > 1000){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 20/100
        }
        else if(vetor[i].codigo % 2 == 0){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 15/100
        }
        else if(vetor[i].preco > 1000){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 10/100
        }
        else{
            vetor[i].novo = vetor[i].preco
        }
        alert(`${vetor[i].nome} - ${vetor[i].codigo} - ${vetor[i].preco} - ${vetor[i].novo}`)
    }
}
function exe10(){
    let vetor1 = [], vetor2 = []
    let vetorr1 = [], vetorr2 = []
    //entada de dados
    for(let i=0;i<10;i++){
        vetor1.push(Number(prompt(`Informe o ${i+1}°, elemento do vetor 1`)))
    }
    for(let i=0;i<5;i++){
        vetor2.push(Number(prompt(`Informe o ${i+1}°, elemento do vetor 2`)))
    }
    // calcular o vetor resultante 1
    // calcular a soma dos elementos do vetor 2
    let somavet2 = 0
    for(let i=0;i<5;i++){
        somavet2 += vetor2[i]
    }
    //cria o vetor resultante 1
    for(let i=0;i<10;i++){
        if(vetor1[i] % 2 == 0){
            vetorr1.push(vetor1[i] + somavet2)
        }
    }
    alert(`Vetor resultante 1 ${vetorr1}`)
    //calcular vetor resultante 2
    for(let i=0;i<10;i++){//para cada elemento de vetor 1
        if(vetor1[i] % 2 == 1){// verifica se elemento é impar
            let qtdedivisores = 0
            for(let j=0;j<5;j++){//para cada elemento de vetor 2
                if(vetor1[i] % vetor2[j] == 0){//encontrou um divisivel
                    qtdedivisores++ //conta +1 nos divisores
                }
            }
            vetorr2.push(qtdedivisores) //adiciona contador no vetorr2
        }
    }
    alert(`Vetor resultante 2 ${vetorr2}`)
}
   