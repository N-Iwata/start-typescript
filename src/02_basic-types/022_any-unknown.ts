export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// any型
//////////////////////////////////////////////////////////
let anyVariable: any = 0;
console.log(anyVariable); //→0

anyVariable = "Tom";
console.log(anyVariable); //→Tom

anyVariable = false;
console.log(anyVariable); //→false

//////////////////////////////////////////////////////////
// unknown型
//////////////////////////////////////////////////////////
const getAge = (): number => 25;
let ageAny: any = getAge();
let ageUnknown: unknown = getAge();
console.log(ageAny + 10); //→OK
// console.log(ageUnknown + 10); //→NG
// オブジェクト型は 'unknown' です。

if (typeof ageUnknown === "number") {
  console.log(ageUnknown + 10); //→OK
}
