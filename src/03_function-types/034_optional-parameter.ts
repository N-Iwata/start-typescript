export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// オプショナルパラメータ
//////////////////////////////////////////////////////////
const sum = (a: number, b: number, isLog?: boolean): number => {
  if (isLog) {
    console.log(a + b);
  }
  return a + b;
};
sum(7, 8, true);
sum(7, 8, false);
sum(7, 8);
