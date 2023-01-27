const fs = require('fs');
const colores = require ('colors');


/*const crearArchivo = (base = 5)=>{
    return new Promise((resolve, reject) => {
        console.log('=====================================')
console.log(`=======   Tabla del ${base}    ============`)
console.log('=====================================')

let salida ='';

for (i=1; i<=10; i++){
    
    salida +=`${base} x ${i} = ${base * i} \n`;

;}

fs.writeFileSync(`tabla-del-${base}.txt`, salida);

resolve (`Tabla del ${base} `);

    })
}*/
const crearArchivo = async  (base = 5, hasta= 4,listar=true )=>{
    
console.log('====hasta============================'.green)
console.log(`   Thastadel ${base} hasta el ${hasta}`.red)
console.log('====================================='.green)
try{
let salida ='';

for (i=1; i<=hasta; i++){
    
    salida +=`${base} x ${i} = ${base * i} \n`;

;}

if (listar){
    console.log(salida.rainbow);
}


fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida.bgGreen);

return (`Tabla del ${base} `.green);
}
catch(error){
    throw error;
}

    }
exports.crearArchivo = crearArchivo;