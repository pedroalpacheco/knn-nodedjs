const KNN = require('ml-knn')

const entrada = [[0, 0, 0], [0, 1, 1], [1, 1, 0], [2, 2, 2], [1, 2, 2], [2, 1, 2]];
const predicao = [0, 0, 0, 1, 1, 1];
const knn = new KNN(entrada , predicao);

//const dados = [2,1,1];

const dados = [0,1,1]


const pr = knn.predict(dados);

if(pr=='0'){
    console.log('Resultado = '+pr+ ' - Considerado: NEGATIVO')
}else{
    console.log('Resultado = '+pr+ ' - Considerado: POSITIVO')
}

