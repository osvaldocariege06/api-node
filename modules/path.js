
const path = require('path');

//basename
//Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//dirname
//Apenas o nome do directorio atual
console.log(path.dirname(__filename));

//extname
//Apenas a extensão do arquivo
console.log(path.extname(__filename));

//Criar objecto Path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'index.html'));