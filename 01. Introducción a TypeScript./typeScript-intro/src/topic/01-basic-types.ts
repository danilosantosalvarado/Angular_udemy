const nameExample: string = "alejandro";
let hpPoint: number | string = 1111;
let hpPoint2: number | "Full" = 1111;
const isValue: boolean = true;

hpPoint2 = "Full"; //Error solo acepta numero o la palabra 'Full'.

console.log({nameExample,hpPoint,hpPoint2,isValue});