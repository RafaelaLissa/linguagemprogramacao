function entrada(vet){
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
        vet.push(objeto)
    }
}
function gerarRelatorio(vet){
     //relação dos vendedores e os valores a receber
    let relatorio = ''  
    for(let i=0;i<3;i++){
        relatorio += `\nVendedor: ${vet[i].nome} vai receber ${vet[i].comissao}`
    }
    alert(relatorio)
}
function totalVendas(vet){
    //total de vendas de todos os vendedores
    let somaVendas = 0
    for(let i=0;i<3;i++){
        somaVendas = somaVendas + vet[i].vendas
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
}
function maioreMenor(vet){
    //calcula o maior e o menor valor da comissão
    let objMaior = vet[0]//primeiro funcionario é maior
    let objMenor = vet[0]//primeiro funcionario é o menor
    let i
    for( i=0;i<3;i++){
        if(vet[i].comissao > objMaior.comissao){
            objMaior = vet[i]
        }
        if(vet[i].comissao < objMenor.comissao){
            objMenor = vet[i]
        }
    }
    alert(`${objMaior.nome} vai receber maior comissão de ${objMaior.comissao}`)
    alert(`${objMenor.nome} vai receber menor comissão de ${objMenor.comissao}`)
}
function exe6(){
    //declarar vetores
    let vetor = []
    entrada(vetor)
    gerarRelatorio(vetor)
    totalVendas(vetor)
    maioreMenor(vetor)
}
exe6()