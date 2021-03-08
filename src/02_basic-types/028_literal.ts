export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// literal
//////////////////////////////////////////////////////////
let myName: "Tom";
myName = "Tom"; //→OK
// myName = "Mike"; // 型 '"Mike"' を型 '"Tom"' に割り当てることはできません。

let zero: 0;
zero = 0;
// zero = 1; //→NG
// 型 '1' を型 '0' に割り当てることはできません。

let isTruth: true;
isTruth = true;
// isTruth = false;  //→NG
// 型 'false' を型 'true' に割り当てることはできません。
