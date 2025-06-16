function entrada(vet){
    for(let i=0;i<3;i++){
        let objeto = {
            nome: prompt(`Informe o nome do produto ${i+1}`),
            codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
            preco: Number(prompt(`Informe o preço do produto ${i+1}`)),
            novo: 0
        }
        vet.push(objeto)
    }
}
function relatorio(vet){
     //gerar relatório com os novos preços
    let i
    for(i=0;i<3;i++){
        if(vet[i].codigo % 2 ==0 && vet[i].preco > 1000){
            vet[i].novo = vet[i].preco + vet[i].preco * 20/100
        }
        else if(vet[i].codigo % 2 == 0){
            vet[i].novo = vet[i].preco + vet[i].preco * 15/100
        }
        else if(vet[i].preco > 1000){
            vet[i].novo = vet[i].preco + vet[i].preco * 10/100
        }
        else{
            vet[i].novo = vet[i].preco
        }
        alert(`${vet[i].nome} - ${vet[i].codigo} - ${vet[i].preco} - ${vet[i].novo}`)
    }
}
function exe9(){
    let vetor = []
    entrada(vetor)
    relatorio(vetor)
}
exe9()