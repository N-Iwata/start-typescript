export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// アロー関数
//////////////////////////////////////////////////////////
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(5, 6));

const sum2: (a: number, b: number) => number = (
  a: number,
  b: number
): number => {
  return a + b;
};
console.log(sum2(5, 6));