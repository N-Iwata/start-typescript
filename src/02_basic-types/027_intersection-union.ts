export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// intersection
//////////////////////////////////////////////////////////
type Profile1 = {
  name: string;
  age: number;
};
type Profile2 = {
  height: number;
  weight: number;
};

type Profile3 = Profile1 & Profile2;

const profile: Profile3 = {
  name: "Tom",
  age: 20,
  height: 1.7,
  weight: 60,
};
console.log(profile);

//////////////////////////////////////////////////////////
// union
//////////////////////////////////////////////////////////
let value1: number = 1; //→OK
// value1 = "Tom"; //→型 'string' を型 'number' に割り当てることはできません。

let value2: number | string = 1; //→OK
value2 = "Tom"; //→OK
