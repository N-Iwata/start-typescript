export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// Restパラメータ
//////////////////////////////////////////////////////////
const sum = (...values: number[]): number => {
  console.log(values);
  const ret: number = values.reduce((acc: number, cur: number): number => {
    return acc + cur;
  });
  return ret;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
