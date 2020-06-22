export {}; // モジュール化をすることで、変数のダブりを回避する

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 基本的な型
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------
// boolean型
//------------------------
let isOpen: boolean = false;
console.log(isOpen); //→false

isOpen = true;
console.log(isOpen); //→true

// isOpen = 1;
// 型 '1' を型 'boolean' に割り当てることはできません。

// isOpen = "Hello world";
// 型 '"Hello world"' を型 'boolean' に割り当てることはできません。

//------------------------
// number型
//------------------------
let counter: number = 0;
console.log(counter); //→0

counter++;
console.log(counter); //→1

counter = 1.5;
console.log(counter); //→1.5

counter = 15;
console.log(counter); //→15

counter = 0x0f; //16進数
console.log(counter); //→15

counter = 0b1111; //2進数
console.log(counter); //→15

counter = 0o17; //8進数
console.log(counter); //→15

// counter = "Tom";
// 型 '"Tom"' を型 'number' に割り当てることはできません。

// counter = false;
// 型 'false' を型 'number' に割り当てることはできません。

//------------------------
// string型
//------------------------
let name: string = "Tom";
console.log(name); //→Tom

name = "Mike";
console.log(name); //→Tom

let message = `Hello My Name is ${name}`;
console.log(message); //→Hello My Name is Mike

// name = 10;
// 型 '10' を型 'string' に割り当てることはできません。

// name = false;
// 型 'false' を型 'string' に割り当てることはできません。

//------------------------
// array型
//------------------------
let counters: number[] = [0, 1, 2, 3, 4];
console.log(counters); //→[0, 1, 2, 3, 4]
console.log(counters[0]); //→0

let counters2: Array<number> = [0, 1, 2, 3, 4]; // 非推奨
console.log(counters2); //→[0, 1, 2, 3, 4]

let counters3: number[][] = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
];
console.log(counters3); //→[ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ] ]

let array: (number | boolean | string)[] = [0, false, "Tom"];
console.log(array); //→[ 0, false, 'Tom' ]

array = [false, 0, "Tom"];
console.log(array); //→[ 0, false, 'Tom' ]

//------------------------
// tuple型
//------------------------
let profile: [string, number] = ["Tom", 20];
console.log(profile); //→[ 'Tom', 20 ]

// profile = [2, "Tom"];
// 型 'number' を型 'string' に割り当てることはできません。
// 型 'string' を型 'number' に割り当てることはできません。

//------------------------
// any型
//------------------------
let anyVariable: any = 0;
console.log(anyVariable); //→0

anyVariable = "Tom";
console.log(anyVariable); //→Tom

anyVariable = false;
console.log(anyVariable); //→false

//------------------------
// unknown型
//------------------------

//------------------------
// void型
//------------------------
function logger(message: string): void {
  console.log(message); //→Hello World!
}
logger("Hello World!");
//------------------------
// null/undefine型
//------------------------
let u: undefined = undefined;
let n: null = null;

console.log(u); //→undefined
console.log(n); //→null

//------------------------
// never型
//------------------------
// function error(message: string): never {
//   throw new Error(message);
// }
// error("Error!");
//------------------------
// object型
//------------------------
let profile1: object = { name: "Tom" };
profile1 = { age: 20 };

// let profile2: {} = { name: "Tom" };
// profile2 = { age: 20 };

let profile2: { name: string } = { name: "Tom" };
profile2 = { name: "Mike" }; //→OK
// profile2 = { age: 20 };  //→NG
// Type '{ age: number; }' is not assignable to type '{ name: string; }'.
//------------------------
// intersection型（交差型）
//------------------------

//------------------------
// union型（共用体型）
//------------------------

//------------------------
// literal型
//------------------------

//------------------------
// Union型（共用体型）
//------------------------

//------------------------
// enum型（列挙型）
//------------------------
