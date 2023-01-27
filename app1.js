

console.clear();
const { boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar') ;
const argv = require('./helpers/yargs');
const colores = require ('colors');
            

//const[ , , arg3='base = 5'] =process.argv;
//const[,base] = arg3.split('=');
//console.log(base);console.log(process.argv);


console.log(colores.blue(argv));


//const base = 5;

crearArchivo(argv.b, argv.h, argv.l)

    .then(nombreArchivo => console.log(nombreArchivo,' creada exitosamente'))
    .catch( err =>{ 
        console.log('upps algo salio mal')
        console.log(err)});

