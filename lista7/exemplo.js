function entrada(mat){
    //sera 3 x 3
    for(let i=0;i<3;i++){
        mat[i] = [] // vai criar cada linha da matriz
        for(let j=0;j<3;j++){
            mat[i][j] = Number(prompt(`Informe o elemento [${i}][${j}] da matriz`))
        }
    }
}
function calculaSomaDiagonalPrincipal(mat){
    let soma = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i == j){
                soma += mat[i][j]
            }
        }
    }
    //função vai retornar a soma
    return soma
}

function exemplo(){
    let mat = []
    entrada(mat)
    //outra forma para exibir
    let soma = calculaSomaDiagonalPrincipal(mat)
    alert(`A soma da diagonal principal é ${calculaSomaDiagonalPrincipal(mat)}`)
}
exemplo()