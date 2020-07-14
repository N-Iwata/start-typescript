export {}; // モジュール化をすることで、変数のダブりを回避する

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 型推論
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------
// let
//------------------------
// let a = 0; //let a: number
// let b = "Taro"; //let b: string
// let c = false; //let c: boolean
// let d; //let d: boolean
// let e = a + 5; //let e: number
// let f = a + "5"; //let f: string
// let g = b + 5; //let g: string
// let h = b + "5"; //let h: string
// let i = c + 5; //NG
// let j = c + "5"; //let j: string

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);

//------------------------
// const
//------------------------
// const a = 0; //const a: 0
// const b = "Taro"; //const b: "Taro"
// const c = false; //const c: false
// const d; //NG
// const e = a + 5; //const e: number
// const f = a + "5"; //const f: string
// const g = b + 5; //const g: string
// const h = b + "5"; //const h: string
// const i = c + 5; //NG
// const j = c + "5"; //const j: string

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);

//------------------------
// Widening Literal Types
//------------------------
// const a = 0; //const a: 0
// const b: 0 = 0; //const b: 0
// const c = 0 as 0; //const c: 0

// let d = 0; //let d: number
// let e = a; //let e: number
// let f = b; //let f: 0
// let g = c; //let g: 0

//------------------------
// Array
//------------------------
// const a = [true, false]; // const a: boolean[]
// const b = [0, 1]; // const b: number[]
// const c = ["Taro", "Hanako"]; // const c: string[]
// const d = [0, 1, "Taro"]; // const d: (string | number)[]
// const e = [0, false, "Jiro"]; // const e: (string | number | boolean)[]

// const f = [0 as 0, 1 as 1]; // const f: (0 | 1)[]
// f.push(0); // OK
// f.push(1); // OK
// f.push(2); // NG

// const g: 0 = 0; //const g: 0
// const h: 1 = 1; //const h: 1
// const i = [g, h]; //const i: (0 | 1)[]

// i.push(0); // OK
// i.push(1); // OK
// i.push(2); // NG

// const j = [];
// for (let i = 0; i < 10; i++) {
//   j.push(i);
// }
// console.log(j); //const j: number[]
// j.push("Taro");
// console.log(j); //const j: (string | number)[]

//------------------------
// Tuple
//------------------------
// const a = [false, 1] as [boolean, number]; //const a: [boolean, number]
// const b = ["Taro", false, 1] as [string, boolean, number]; //const b: [string, boolean, number]
// const c = b[0]; //const c: string
// const d = b[1]; //const d: boolean
// const e = b[2]; //const e: number
// const f = b[3]; //NG
// a.push(true); //OK
// a.push(2); //OK
// a.push("Taro"); //NG

//------------------------
// Object
//------------------------
// const obj1 = {
//   a: 0,
//   b: false,
//   c: "Taro",
// };
// const obj1: {
//   a: number;
//   b: boolean;
//   c: string;
// }

// obj1.a = 10; //OK
// obj1.a = true;  //NG
// obj1.a = "Taro";  //NG

//------------------------
// 関数の戻り値
//------------------------
//function a(num: number): number
function a(num: number) {
  return num;
}
//function b(age: number): string
function b(age: number) {
  return `私は${age}歳です。`;
}
//function c(message: string): void
function c(message: string) {
  console.log(`Hello ${message}`);
}
//function d(num: number): "Taro" | "Jiro"
function d(num: number) {
  if (num > 0) {
    return "Taro";
  } else {
    return "Jiro";
  }
}
//function e(num: number): "Taro" | undefined
//noImplicitReturns=Trueにするとエラー
function e(num: number) {
  if (num > 0) {
    return "Taro";
  }
}
//------------------------
// 関数の引数
//------------------------
//function a(num: any): "Taro" | undefined
// function a(num) {
//   if (num > 0) {
//     return "Taro";
//   }
// }
// a(0);
