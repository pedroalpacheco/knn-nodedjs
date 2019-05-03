const KNN = require('ml-knn')

var entrada = [[0, 0, 0], [0, 1, 1], [1, 1, 0], [2, 2, 2], [1, 2, 2], [2, 1, 2]];
var predicao = [0, 0, 0, 1, 1, 1];
var knn = new KNN(entrada , predicao);

//const dados = [1,1,1];

const dados = [0,0,1];

const pr = knn.predict(dados);

console.log(pr);

