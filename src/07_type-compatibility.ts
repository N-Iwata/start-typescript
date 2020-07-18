export {}; // モジュール化をすることで、変数のダブりを回避する

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 型の互換性
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//------------------------
// any型←プリミティブ型
//------------------------
let targetAny: any;
let sourceString: string = "Taro";
let sourceNumber: number = 0;
let sourceBoolean: boolean = false;

targetAny = sourceString; //OK
console.log(typeof targetAny); //string
targetAny = sourceNumber; //OK
console.log(typeof targetAny); //number
targetAny = sourceBoolean; //OK
console.log(typeof targetAny); //boolean

//------------------------
// プリミティブ型←any型
//------------------------
// let targetString: string;
// let targetNumber: number;
// let targetBoolean: boolean;
// let sourceAny: any = "Taro";

// targetString = sourceAny; //OK
// console.log(typeof targetString); //string
// targetNumber = sourceAny; //OK
// console.log(typeof targetNumber); //string
// targetBoolean = sourceAny; //OK
// console.log(typeof targetBoolean); //string

//------------------------
// プリミティブ型←プリミティブ型
//------------------------
// let targetString: string;
// let targetNumber: number;
// let targetBoolean: boolean;
// let sourceString: string = "Taro";
// let sourceNumber: number = 0;
// let sourceBoolean: boolean = false;

// targetString = sourceString; //OK
// targetNumber = sourceNumber; //OK
// targetBoolean = sourceBoolean; //OK

// // targetString = sourceNumber; //NG

//------------------------
// プリミティブ型←プリミティブリテラル型
//------------------------
// let targetString: string;
// let targetNumber: number;
// let targetBoolean: boolean;
// let sourceStringLiteral: "Taro" = "Taro";
// let sourceNumberLiteral: 0 = 0;
// let sourceBooleanLiteral: false = false;

// targetString = sourceStringLiteral; //OK
// targetNumber = sourceNumberLiteral; //OK
// targetBoolean = sourceBooleanLiteral; //OK

//------------------------
// プリミティブリテラル型←プリミティブ型
//------------------------
// let targetStringLiteral: "Jiro" = "Jiro";
// let targetNumberLiteral: 1 = 1;
// let targetBooleanLiteral: true = true;
// let sourceString: string = "Taro";
// let sourceNumber: number = 0;
// let sourceBoolean: boolean = false;

// targetStringLiteral = sourceString; //NG
// targetNumberLiteral = sourceNumber; //NG
// targetBooleanLiteral = sourceBoolean; //NG

//------------------------
// enum型←number型
//------------------------
// enum Color {
//   RED,
//   BLUE,
//   GREEN,
// }

// let tagetEnum = Color.RED;
// let sourceNumber: number = 0;
// tagetEnum = sourceNumber; //OK
// sourceNumber = 100;
// tagetEnum = sourceNumber; //OK

//------------------------
// number型←enum型
//------------------------
// enum Color {
//   RED,
//   BLUE,
//   GREEN,
// }
// let tagetNumber: number = 100;
// let sourceEnum = Color.RED;
// tagetNumber = sourceEnum; //OK

// tagetNumber = 0;
// tagetNumber = sourceEnum; //OK

//------------------------
// enum型←enum型
//------------------------
// enum Color {
//   RED,
//   BLUE,
//   GREEN,
// }
// enum Size {
//   SMALL,
//   MEDIUM,
//   LARGE,
// }
// let targetEnum = Color.RED;
// let sourceEnum = Size.MEDIUM;

// // targetEnum = sourceEnum;  //NG

//------------------------
// 関数←関数
//------------------------
// let targetFunction0 = function (a: string) {};
// let sourceFunction0 = function (a: number) {};

// // targetFunction0 = sourceFunction0; //NG

// let targetFunction1 = function (a: string) {};
// let sourceFunction1 = function (a: string) {};

// targetFunction1 = sourceFunction1; //OK

// let targetFunction2 = function (a: string, b: string) {};
// let sourceFunction2 = function (a: string) {};

// targetFunction2 = sourceFunction2; //OK

// let targetFunction3 = function (a: string) {};
// let sourceFunction3 = function (a: string, b: string) {};

// // targetFunction3 = sourceFunction3;  //NG

//------------------------
// クラス←クラス
//------------------------
// class Person1 {
//   name: string = "Taro";
// }
// class Animal1 {
//   name: string = "Poti";
// }
// let targetClass1 = new Person1();
// let sourceClass1 = new Animal1();
// targetClass1 = sourceClass1; //OK

// class Person2 {
//   name: string = "Taro";
//   age: number = 20;
// }
// class Animal2 {
//   name: string = "Poti";
// }
// let targetClass2 = new Person2();
// let sourceClass2 = new Animal2();
// // targetClass2 = sourceClass2; //NG

// class Person3 {
//   name: string = "Taro";
// }
// class Animal3 {
//   name: string = "Poti";
//   age: number = 20;
// }
// let targetClass3 = new Person3();
// let sourceClass3 = new Animal3();
// targetClass3 = sourceClass3; //OK

// class Person4 {
//   name: string = "Taro";
//   private age: number = 20;
// }
// class Animal4 {
//   name: string = "Poti";
//   private age: number = 3;
// }
// let targetClass4 = new Person4();
// let sourceClass4 = new Animal4();
// // targetClass4 = sourceClass4; //NG
