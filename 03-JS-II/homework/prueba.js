function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    let tabla=[];
  
    for(let i=0; i<10;i++){
      let val=i*6;
      tabla.push(val);
    }
    return tabla;
  }
  tablaDelSeis();