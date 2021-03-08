export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// boolean型
//////////////////////////////////////////////////////////
let isOpen: boolean = false;
console.log(isOpen); //→false

isOpen = true;
console.log(isOpen); //→true

// isOpen = 1;
// 型 'number' を型 'boolean' に割り当てることはできません。

// isOpen = "Hello world";
// 型 'string' を型 'boolean' に割り当てることはできません。

//////////////////////////////////////////////////////////
// number型
//////////////////////////////////////////////////////////

let counter: number = 0;
console.log(counter); //→0

counter++;
console.log(counter); //→1

counter = 1.5;
console.log(counter); //→1.5

counter = 15;
console.log(counter); //→15

counter = 0x0f; // 16進数
console.log(counter); //→15

counter = 0b1111; // 2進数
console.log(counter); //→15

counter = 0o17; // 8進数
console.log(counter); //→15

// counter = "Tom";
// 型 'string' を型 'number' に割り当てることはできません。

// counter = false;
// 型 'boolean' を型 'number' に割り当てることはできません。

//////////////////////////////////////////////////////////
// string型
//////////////////////////////////////////////////////////
let name: string = "Tom";
console.log(name); //→Tom

name = "Mike";
console.log(name); //→Tom

let message = `Hello My Name is ${name}`;
console.log(message); //→Hello My Name is Mike

// name = 10;
// 型 'number' を型 'string' に割り当てることはできません。

// name = false;
// 型 'boolean' を型 'string' に割り当てることはできません。
