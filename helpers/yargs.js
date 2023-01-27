const argv = require('yargs')
            .option('b', {
                alias:'base',
                type:'number',
                demandOption: true

            })
            .option('h', {
                alias:'hasta',
                type:'number',
                demandOption: false,
                default:8
            })
            .option('l', {
                alias:'listar',
                type:'boolean',
                demandOption: true,
                default: false})

            .check((argv, options) =>{
                if(isNaN(argv.b)){
                    throw new Error('la base tiene que ser un numero'.bgRed)
                }
                else if(isNaN(argv.h)) {
                    throw new Error (`ERROR! La table tiene que ser un numero`.bgRed)
                }
                else{
                    return true;
                }
            }).argv;
module.exports = argv;
//exports.argv = argv;
//exports.argv.l = argv.l;