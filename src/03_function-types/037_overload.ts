export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// オーバーロード
//////////////////////////////////////////////////////////
function sum(a: number): number;
function sum(a: number, b: number): number;
function sum(a: string): string;
function sum(a: number | string, b?: number): number | string {
  if (typeof a === "number") {
    if (b) {
      return a * b;
    } else {
      return a * 2;
    }
  } else {
    return `${a} ${a}`;
  }
}

console.log(sum(100));
console.log(sum(100, 3));
console.log(sum("Hey"));
// console.log(sum("Hey",3));
// console.log(sum(false));

// type Type = {
//   (a: number): number;
//   (a: number, b: number): number;
//   (a: string): string;
// }
// const sum2: Type = (a: number | string, b?:number): number | string => {
//   if (typeof a === "number") {
//     if(b){
//       return a * b;
//     }
//     else{
//     return a * 2;
//   }
//   } else {
//     return `${a} ${a}`;
//   }
// };

// console.log(sum2(100));
// console.log(sum2(100,3));
// console.log(sum2("Hey"));
// console.log(sum2("Hey",3));
// console.log(sum(false));
