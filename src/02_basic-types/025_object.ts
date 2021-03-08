export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// object型
//////////////////////////////////////////////////////////
let profile1: object = { name: "Tom" };
profile1 = { age: 20 };

let profile2: {} = { name: "Tom" };
profile2 = { age: 20 };

let profile3: { name: string } = { name: "Tom" };
profile3 = { name: "Mike" }; //→OK
// profile3 = { age: 20 }; //→NG
// オブジェクト リテラルは既知のプロパティのみ指定できます。'age' は型 '{ name: string; }' に存在しません。
