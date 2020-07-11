export {}; // モジュール化をすることで、変数のダブりを回避する

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ジェネリクス
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------
// 関数のジェネリクス
//------------------------

// 基本的な書き方
const echoString = (prm: string): string => {
  return prm;
};
const echoNumber = (prm: number): number => {
  return prm;
};
const echoBoolean = (prm: boolean): boolean => {
  return prm;
};
console.log(echoString("Hello"));
console.log(echoNumber(32));
console.log(echoBoolean(false));

const echo = <T>(prm: T): T => {
  return prm;
};
console.log(echo<string>("Hello"));
console.log(echo<number>(32));
console.log(echo<boolean>(false));

// 初期ジェネリクス
const echo2 = <T = string>(prm: T): T => {
  return prm;
};

console.log(echo2("Hello"));
console.log(echo2<string>("Hello"));
console.log(echo2<number>(32));
console.log(echo2<boolean>(false));

// extendsによる制約
const echo3 = <T extends string>(prm: T): T => {
  return prm;
};

console.log(echo3<string>("Hello"));
// console.log(echo3<number>(32));
// console.log(echo3<boolean>(false));

const echo4 = <T extends string | number>(prm: T): T => {
  return prm;
};

console.log(echo4<string>("Hello"));
console.log(echo4<number>(32));
// console.log(echo4<boolean>(false));

// keyofを使ってオブジェクトのキーの共用型を作る
const echo5 = <T, U extends keyof T>(prm: T, key: U): T => {
  console.log(prm[key]);
  return prm;
};
console.log(echo5({ message: "Hello", id: 32 }, "message"));

// 暗黙的に指定されるジェネリクス
console.log(echo("Hello"));
console.log(echo(32));
console.log(echo(false));

console.log(echo({ value: "Hello" }));
console.log(echo({ value: 32 }));
console.log(echo({ value: false }));

//------------------------
// クラスのジェネリクス
//------------------------
class Echo<T extends string | number> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Echo<string>("Hello").echo());
console.log(new Echo<number>(128).echo());
// console.log(new Echo<boolean>(false).echo());

//------------------------
// インターフェースのジェネリクス
//------------------------
interface Echo2<T> {
  message: T;
}
const echo7: Echo2<string> = {
  message: "Hello",
};
console.log(echo7);

const echo8: Echo2<number> = {
  message: 32,
};
console.log({ message: 32 });
