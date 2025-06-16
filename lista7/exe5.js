function cadastra(mat, vet){
    //sera 12 x 4
    for(let i=0;i<12;i++){
        mat[i]= []// cria espaço na memoria para cada vetor da matriz
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe as vendas na semana ${j+1} do mês ${vet[i]}`))
        }
    }
}
function calculaTotalMes(mat, vet){
    for(let i=0;i<mat.length;i++){
         let soma = 0 //vamos iniciar um novo mes
        for(let j=0;j<4;j++){ //ou for(let j=0;j<mat[i].length;j++){}
            soma + mat[i][j]
        }
        alert(`Total vendido em ${vet[i]}: ${soma}`)
    }
}
function calculaTotalSemana(mat){
    for(let j=0;j<4;j++){ //para cada semana
         let soma = 0
        for(let i=0;i<12;i++){// para cada mes
            soma = soma + mat[i][j]
        }
        alert(`Total vendido na semana ${j} foi de ${soma}`)
    }
}
function calculaTotalAno(mat){
    let soma = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<4;j++){
            soma += mat[i][j]
        }
    }
    return soma
}
    function exe5(){
        let mat = []
        const vet = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
            "Outubro", "Novembro", "Dezembro"]
        cadastra(mat, vet)
        calculaTotalMes(mat, vet)
        calculaTotalSemana(mat)
        calculaTotalAno(mat)
        alert(`Total vendido no ano ${calculaTotalAno(mat)}`)
    }
    exe5()