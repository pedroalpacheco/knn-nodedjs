const KNN = require('ml-knn');

const entrada = [[0,0,0],[0,1,1],[1,1,0],[2,2,2],[1,2,2],[2,1,2]];
const predicao = [0,0,0,1,1,1];

const knn = new KNN(entrada, predicao);

//Como gerar automaticamente este 3 numeros?
//Gera sequencia
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
    //console.log(a)
}

const sequencia = shuffle([0,1,2])


const dados = sequencia;


const pr = knn.predict(dados)


if(pr=='0'){
    console.log('Dados: '+ '- [ '+dados+' ] - ' +'Resultado = '+pr+ ' - Considerado: NEGATIVO')
}else{
    console.log('Dados: '+ '- [ '+dados+' ] -' +'Resultado = '+pr+ ' - Considerado: POSITIVO')
}