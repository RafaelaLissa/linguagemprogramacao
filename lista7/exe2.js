function entrada(mat){
    //sera 2 x 4
    for(let i=0;i<2;i++){
        mat[i] = [] // vai criar cada linha da matriz
        for(let j=0;j<4;j++){
            mat[i][j] = Math.floor(Math.random() * 21)//gera numero aleatorio entre 0 e 20
        }
    }
}
function elementoEntre12e20(mat){
    let conta
    for(let i=0;i<2;i++){ //para cada linha
        conta = 0 // zera a contagem pois cada vez começa uma nova linha
        for(let j=0;j<4;j++){
            if(mat[i][j]>= 12 && mat[i][j] <= 20){
                conta++
            }
        }
        alert(`A qtde de elementos entre 12 e 20 ${i} é ${conta}`)
    }
}
function exibeMatriz(mat){
    let saida = ''
    for(let i=0;i<mat.length;i++){
        saida = saida + '\n'
        for(let j=0;j<mat[i].length;j++){
            saida = saida + " " + mat[i][j]
        }
    }
    alert(saida)
}
function elementosPares(mat){
    let soma = 0
    let qtde = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j] % 2 == 0){
                soma = soma + mat[i][j]
                qtde++
            }
        }
    }
    return soma / qtde
}
function exe2(){
    let mat = []
    entrada(mat)
    elementosPares(mat)
    elementoEntre12e20(mat)
    exibeMatriz(mat)
    alert(`A media dos elementos pares é ${elementosPares(mat)}`)
}
exe2()