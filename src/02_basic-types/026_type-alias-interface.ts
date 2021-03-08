export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// type alias
//////////////////////////////////////////////////////////
type Age = number;
let age: Age = 20;
console.log(age);

type Profile = {
  name: string;
  age: number;
};
let profile: Profile = {
  name: "Tom",
  age: 20,
};
console.log(profile);

//////////////////////////////////////////////////////////
// interface
//////////////////////////////////////////////////////////
interface Profile2 {
  name: string;
  age: number;
}

let profile2: Profile2 = {
  name: "Mike",
  age: 20,
};
console.log(profile2);
