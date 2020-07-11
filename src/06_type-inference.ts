export {}; // モジュール化をすることで、変数のダブりを回避する

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 型推論
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------
// let
//------------------------
let a = 0; //let a: number
let b = "Taro"; //let b: string
let c = false; //let c: boolean
let d; //let c: boolean
let e = a + 5; //let e: number
let f = a + "5"; //let f: number
let g = b + 5; //let g: string
let h = b + "5"; //let h: string
let i: number = 0; //let i: number
let j: string = "Taro"; //let j: string
let k: boolean = false; //let k: boolean
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);

//------------------------
// const
//------------------------
// const a = 0;  //const a: 0
// const b = "Taro"; //const b: "Taro"
// const c = false;  //const c: false
// const d = a + 5;  //const d: number
// const e = a + "5";  //const e: string
// const f = b + 5;  //const f: string
// const g = b + "5";  //const g: string
// const h: number = 0;  //const h: number
// const i: string = "Taro"; //const h: number
// const j: boolean = false; //const h: number

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
// const a = 0;  //const a: 0
// const b: 0 = 0; //const b: 0
// const c = 0 as 0; //const c: 0

// let d = 0;  //let d: number
// let e = a;  //let d: number
// let f = b;  //let f: 0
// let g = c;  //let g: 0

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
// const d = b[1]; //const c: string
// const e = b[2]; //const e: number
// const f = b[3]; //NG
// a.push(true); //OK
// a.push(2) //OK
// a.push("Taro") //NG
