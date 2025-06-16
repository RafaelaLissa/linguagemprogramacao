function entrada(mat){
    //sera 3 x 5
    for(let i=0;i<3;i++){
        mat[i] = [] // vai criar cada linha da matriz
        for(let j=0;j<5;j++){
            mat[i][j] = parseInt(Math.random() * 10) +15 //gera numero aleatorio
        }
    }
}
function somaEntre15e20(mat){
    let soma = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if(mat[i][j] >= 15 && mat[i][j] <= 20){
                soma++
            }
        }
    }
    return soma
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
function exe1(){
    let mat = []
    entrada(mat)
    //let soma = somaEntre15e20(mat)
    alert(`A quanttidade de elemtenos entre 15 e 20 é ${somaEntre15e20(mat)}`)
    exibeMatriz(mat)
}
exe1()