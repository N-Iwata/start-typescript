export {}; // モジュール化をすることで、変数のダブりを回避する

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 型安全
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//------------------------
// オプション引数
//------------------------
function introduce(age: number, name: string) {
  return `私は${name}です。${age}歳です。`;
}
console.log(introduce(20, "Taro")); //私はTaroです。20歳です。
// console.log(introduce(20)); //NG

// function introduce(age: number, name?: string) {
//   return `私は${name}です。${age}歳です。`;
// }
// console.log(introduce(20, "Taro")); //私はTaroです。20歳です。
// console.log(introduce(20)); //私はundefinedです。20歳です。

// function introduce(age: number, name?: string) {
//   return `私は${name.toUpperCase()}です。${age}歳です。`;
// }
// console.log(introduce(20, "Taro")); //私はTaroです。20歳です。
// console.log(introduce(20)); //私はundefinedです。20歳です。

// function introduce(age: number, name?: string) {
//   if (name) {
//     return `私は${name.toUpperCase()}です。${age}歳です。`;
//   } else {
//     return `私は${age}歳です。`;
//   }
// }
// console.log(introduce(20, "Taro")); //私はTAROです。20歳です。
// console.log(introduce(20)); //私は20歳です。

//------------------------
// デフォルト引数
//------------------------
// function introduce(name: string, age: number) {
//   return `私は${name}です。${age}歳です。`;
// }
// console.log(introduce("Taro", 20)); //私はTaroです。20歳です。
// console.log(introduce("Taro")); //NG

// function introduce(name: string, age = 10) {
//   return `私は${name}です。${age}歳です。`;
// }
// console.log(introduce("Taro", 20)); //私はTaroです。20歳です。
// console.log(introduce("Taro")); //私はTaroです。10歳です。
// // console.log(introduce("Taro", "20")); //NG

//------------------------
// Nullable型
//------------------------
// function getAge(age: number) {
//   return `${age}歳です`;
// }
// console.log(getAge(20)); //20歳です
// // console.log(getAge(null));  //NG

// function getAge(age: number | null) {
//   if (age) {
//     return `${age}歳です`;
//   } else {
//     return `年齢がわかりません`;
//   }
// }
// console.log(getAge(20)); //20歳です
// console.log(getAge(null)); //年齢がわかりません

//------------------------
// readonly
//------------------------
// type Profile = {
//   readonly name: string;
//   age: number;
// };

// const taro: Profile = {
//   name: "Taro",
//   age: 20,
// };

// taro.name = "Jiro"; //NG
// taro.age = 30; //OK

// type Profile = {
//   name: string;
//   age: number;
// };
// const taro: Readonly<Profile> = {
//   name: "Taro",
//   age: 20,
// };
// taro.name = "Jiro"; //NG
// taro.age = 30; //NG

// type Profile = {
//   name: string;
//   age: number;
// };
// const taro: Profile = {
//   name: "Taro",
//   age: 20,
// };
// const taro2 = Object.freeze(taro);
// // taro2.name = "Jiro"; //NG
// // taro2.age = 30; //NG

//------------------------
// オブジェクトにリテラル型をつける
//------------------------
// const taro = {
//   name: "Taro",
//   age: 20,
// };
// const taro: {
//   name: string;
//   age: number;
// }

// const taro = {
//   name: "Taro" as "Taro",
//   age: 20 as 20,
// }
// const taro: {
//   name: "Taro";
//   age: 20;
// }

// const taro = {
//   name: "Taro" as const,
//   age: 20 as const,
// };
// const taro: {
//   name: "Taro";
//   age: 20;
// }

// const taro = {
//   name: "Taro",
//   age: 20,
// } as const;
// const taro: {
//   readonly name: "Taro";
//   readonly age: 20;
// };
//------------------------
// オブジェクトに動的に値を追加
//------------------------
// type Profile = {
//   name: string;
// };
// const taro: Profile = {
//   name: "Taro", //OK
//   // age: 20,  //NG
// };

// type Profile = {
//   name: string; //NG
//   [index: string]: string;
// };
// const taro: Profile = {
//   name: "Taro", //OK
//   work: "engineer", //OK
//   // age: 20, //NG
// };

// type Profile = {
//   name: string; //NG
//   [index: string]: number;
// };

// type Profile = {
//   name: string; //OK
//   [index: string]: number | string;
// };

// const taro: Profile = {
//   name: "Taro", //OK
//   age: 20, //OK
// };

// const a = taro.age;
// console.log(a);

// type Work = "engineer" | "desighner" | "director" | undefined;

// type Profile = {
//   name: string;
//   work: { [index: string]: Work };
// };
// const taro: Profile = {
//   name: "Taro",
//   work: {
//     kind: "engineer",
//   },
// };
// const x = taro.work.kind;
// const y = taro.work.aaa;
// console.log(x);
// console.log(y);

// type Work = "engineer" | "desighner" | "director";
// type Kind = "kind" | "role";

// type Profile = {
//   name: string;
//   work: { [index in Kind]?: Work };
// };
// const taro: Profile = {
//   name: "Taro",
//   work: {
//     kind: "engineer",
//     role: "engineer",
//     // test: "engineer",  //NG
//   },
// };
// const x = taro.work.kind;
// const y = taro.work.role;
// // const z = taro.work.test;
// console.log(x);
// console.log(y);

//------------------------
// typeof タイプガード
//------------------------
// function sum(a: number | string) {
//   if (typeof a === "number") {
//     const value = a; //const value: number
//     return value * 2;
//   } else {
//     const value = a; //const value: string
//     return `${value} ${value}`;
//   }
// }

// console.log(sum(100)); //200
// console.log(sum("Hey")); //Hey Hey
// // console.log(sum(false)); //NG
//------------------------
// in タイプガード
//------------------------
// interface Batter {
//   name: string;
//   ave: number;
// }
// interface Pitcher {
//   name: string;
//   era: number;
// }
// type TwoWay = Batter | Pitcher;

// function taroProfile(twoWay: TwoWay) {
//   console.log(twoWay.name);
//   // console.log(twoWay.ave);  //プロパティ 'ave' は型 'TwoWay' に存在しません。プロパティ 'ave' は型 'Pitcher' に存在しません。

//   if ("ave" in twoWay) {
//     console.log(twoWay.ave);
//     // console.log(twoWay.era);  //プロパティ 'era' は型 'Batter' に存在しません
//   }
//   if ("era" in twoWay) {
//     // console.log(twoWay.ave);  //プロパティ 'ave' は型 'Pitcher' に存在しません。
//     console.log(twoWay.era);
//   }
// }
// taroProfile({ name: "taro", ave: 0.33, era: 2.15 });
//------------------------
// instanceof タイプガード
//------------------------
// class Batter {
//   batting() {
//     console.log("batting!");
//   }
// }
// class Pitcher {
//   pitching() {
//     console.log("pitching!");
//   }
// }
// type TwoWay = Batter | Pitcher;

// function twoWay(value: TwoWay) {
//   // value.batting(); //プロパティ 'batting' は型 'TwoWay' に存在しません。プロパティ 'batting' は型 'Pitcher' に存在しません。
//   if (value instanceof Batter) {
//     value.batting();
//     // value.pitching(); //プロパティ 'pitching' は型 'Batter' に存在しません。
//   }
//   if (value instanceof Pitcher) {
//     // value.batting();  //プロパティ 'batting' は型 'Pitcher' に存在しません。
//     value.pitching();
//   }
// }
// twoWay(new Batter());
// twoWay(new Pitcher());
//------------------------
// タグ付きUnion型
//------------------------
// class Batter {
//   name: "batter" = "batter";
//   batting() {
//     console.log("batting!");
//   }
// }
// class Pitcher {
//   name: "pitcher" = "pitcher";
//   pitching() {
//     console.log("pitching!");
//   }
// }
// type TwoWay = Batter | Pitcher;

// function twoWay(value: TwoWay) {
//   switch (value.name) {
//     case "batter":
//       value.batting();
//       // value.pitching(); //プロパティ 'pitching' は型 'Batter' に存在しません。
//       break;
//     case "pitcher":
//       // value.batting();  //プロパティ 'batting' は型 'Pitcher' に存在しません。
//       value.pitching();
//       break;
//   }
// }
// twoWay(new Batter());
// twoWay(new Pitcher());
