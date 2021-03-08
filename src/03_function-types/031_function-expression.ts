export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// 関数式
//////////////////////////////////////////////////////////
const sum = function (a: number, b: number): number {
  return a + b;
};
console.log(sum(3, 4));

const sum2: (a: number, b: number) => number = function (
  a: number,
  b: number
): number {
  return a + b;
};
console.log(sum2(3, 4));
