 // function addNumber(a:any, b:number)
 // no recibe el tipo de dato 'any' any = no se que tipo de dato es, para que no genere ningun error
 // en la variable 'b' es necesary agregar el type en ':any' explicitamente por buena practica.

function addNumber(a:number, b:number){
    return a + b;
}


const result: number = addNumber(2,5);