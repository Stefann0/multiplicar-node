//requires
const fs = require('fs'); //file system
const colors = require('colors'); //colors, hacer esto por cada archivo que necesite la libreria

let crearArchivo = (base, limite=10) =>{
	return new Promise((resolve, reject) => {
		let datos = "";

		if(!Number(base)){
			reject(`La valor introducido "${base}" no es valido`);
			return;
		}
		for(let i = 1; i<= limite; i++){
			datos += `${base} * ${i} = ${ base * i}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
		  
		  if (err) 
		  	reject(err);
		  else
		  	resolve(`tabla-${base}`)
		});
	});
}

let listarTabla = (base,limite = 10) => {
	console.log("================================".green);
	console.log(`========= tabla de ${base} =========`.green);
	console.log("================================".green);
	for(let i = 1; i<= limite; i++){
		// console.log(`${base} * ${i} = ${ base * i}`);
		console.log(`${base} * ${i} = ${ base * i}\n`);
	}
}

module.exports = {
	crearArchivo, listarTabla
}