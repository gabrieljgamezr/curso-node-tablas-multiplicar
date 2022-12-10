const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta = 10) => {

    try{
        let salida = '';
        let consola = '';
    
        for(let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base*i}\n`;
            consola += `${colors.yellow(base)} ${colors.blue('*')} ${colors.yellow(i)} ${colors.blue('=')} ${colors.green(base*i)}\n`;

        }
        
        if(listar){
            console.log('==============='.rainbow);
            console.log('Tabla del: ', base);
            console.log('==============='.rainbow);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}-hasta-${hasta}.txt`, salida);
    
        return `Tabla-${base}.txt`.green;
    }catch (err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}