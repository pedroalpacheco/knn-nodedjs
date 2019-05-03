const KNN = require('ml-knn')

var entrada = [[0, 0, 0], [0, 1, 1], [1, 1, 0], [2, 2, 2], [1, 2, 2], [2, 1, 2]];
var predicao = [0, 0, 0, 1, 1, 1];
var knn = new KNN(entrada , predicao);

function avalia(dados){
    const pr = knn.predict(dados);
    if(pr=='0'){
        console.log('Resultado = '+pr+ ' - Considerado: RUIM')
    }else{
        console.log('Resultado = '+pr+ ' - Considerado: BOM')
    }
}

avalia([2,1,2])
