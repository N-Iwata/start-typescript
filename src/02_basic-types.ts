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
// オブジェクト リテラルは既知のプロパティのみ指定できます。'age' は型 '{ name: string; }' に存在しません。

//------------------------
// 型エイリアスとinterface
//------------------------
type Age = number;
let age: Age = 20;

type Profile = {
  name: string;
  age: number;
};
let profile3: Profile = {
  name: "Tom",
  age: 20,
};
console.log(profile3);

interface Profile2 {
  name: string;
  age: number;
}

let profile4: Profile2 = {
  name: "Mike",
  age: 20,
};
console.log(profile4);

//------------------------
// unknown型
//------------------------
const getAge = (): number => 25;
let ageAny: any = getAge();
let ageUnknown: unknown = getAge();
console.log(ageAny + 10); //→OK
// console.log(ageUnknown + 10); //→NG
// オブジェクト型は 'unknown' です。

if (typeof ageUnknown === "number") {
  console.log(ageUnknown + 10); //→OK
}

//------------------------
// intersection型（交差型）
//------------------------
type Profile3 = {
  name: string;
  age: number;
};
type Profile4 = {
  height: number;
  weight: number;
};

type Profile5 = Profile3 & Profile4;

const profile5: Profile5 = {
  name: "Tom",
  age: 20,
  height: 1.7,
  weight: 60,
};
console.log(profile5);

//------------------------
// union型（共用体型）
//------------------------
let value1: number = 1; //→OK
// value1 = "Tom"; //→NG

let value2: number | string = 1; //→OK
value2 = "Tom"; //→OK
//------------------------
// literal型
//------------------------

let myName: "Tom";
myName = "Tom"; //→OK
//myName = "Mike"; //→NG
// 型 '"Mike"' を型 '"Tom"' に割り当てることはできません。

let zero: 0;
zero = 0;
// zero = 1; //→NG
// 型 '1' を型 '0' に割り当てることはできません。

let isTruth: true;
isTruth = true;
// isTruth = false;  //→NG
// 型 'false' を型 'true' に割り当てることはできません。

//------------------------
// enum型（列挙型）
//------------------------
enum Day1 {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Day1.Sun);

enum Day2 {
  Sun = 1,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Day2.Sun);

enum Day3 {
  Sun = "日曜日",
  Mon = "月曜日",
  Tue = "火曜日",
  Wed = "水曜日",
  Thu = "木曜日",
  Fri = "金曜日",
  Sat = "土曜日",
}
console.log(Day3.Sun);
