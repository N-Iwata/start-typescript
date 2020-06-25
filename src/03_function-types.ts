export {}; // モジュール化をすることで、変数のダブりを回避する

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 関数の型
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------
// function
//------------------------
function sum1(a: number, b: number): number {
  return a + b;
}
console.log(sum1(1, 2));

//------------------------
// 無名関数
//------------------------
const sum2 = function (a: number, b: number): number {
  return a + b;
};
// const sum2: (a: number, b: number) => number = function (
//   a: number,
//   b: number
// ): number {
//   return a + b;
// };
console.log(sum2(3, 4));

//------------------------
// アロー関数
//------------------------
const sum3 = (a: number, b: number): number => {
  return a + b;
};
console.log(sum3(5, 6));

//------------------------
// オプションパラメータ
//------------------------
const sum4 = (a: number, b: number, isLog?: boolean): number => {
  if (isLog) {
    console.log(a + b);
  }
  return a + b;
};
sum4(7, 8, true);
sum4(7, 8, false);
sum4(7, 8);

//------------------------
// デフォルトパラメータ
//------------------------
const sum5 = (a: number, b: number, rate: number = 1.1): number => {
  return (a + b) * rate;
};
console.log(sum5(500, 500, 1.05));
console.log(sum5(500, 500));

//------------------------
// Restパラメータ
//------------------------
const sum6 = (...values: number[]): number => {
  console.log(values);
  const ret: number = values.reduce((acc: number, cur: number): number => {
    return acc + cur;
  });
  return ret;
};

console.log(sum6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//------------------------
// オーバーロード
//------------------------
function sum7(a: number): number;
function sum7(a: string): string;
function sum7(a: any): any {
  if (typeof a === "number") {
    return a * 2;
  } else {
    return `${a} ${a}`;
  }
}

console.log(sum7(100));
console.log(sum7("Hey"));
// console.log(sum7(false));
