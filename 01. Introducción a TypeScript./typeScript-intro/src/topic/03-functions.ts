 // function addNumber(a:any, b:number)
 // no recibe el tipo de dato 'any' any = no se que tipo de dato es, para que no genere ningun error
 // en la variable 'b' es necesary agregar el type en ':any' explicitamente por buena practica.

function addNumber(a:number, b:number):number{
    return a + b;
}


const result: number = addNumber(2 ,5);

console.log({result}); //impime la variable como un  objet{} , para ver el consola el nombre de la variable.



// funcion en arrow

const addNumberArrow = (a: number, b: number): number => {
    return a + b;
}

const addNumberArrow2 = (a: number, b: number): string => {
    return `${ a + b}`;
}


function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}



const result3 : number = addNumberArrow(2,3);
const result4 : String = addNumberArrow2(2,3);
const multiplyResult = multiply(5);
console.log({result3, result4, multiplyResult});