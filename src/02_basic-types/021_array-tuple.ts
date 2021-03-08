export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// array型
//////////////////////////////////////////////////////////
let counters: number[] = [0, 1, 2, 3, 4];
console.log(counters); //→[0, 1, 2, 3, 4]
console.log(counters[0]); //→0

let counters2: Array<number> = [0, 1, 2, 3, 4]; // 非推奨
console.log(counters2); //→[0, 1, 2, 3, 4]

let counters3: number[][] = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
];
console.log(counters3); //→[ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ] ]

let array: (number | boolean | string)[] = [0, false, "Tom"];
console.log(array); //→[ 0, false, 'Tom' ]

array = [false, 0, "Tom"];
console.log(array); //→[ 0, false, 'Tom' ]

//////////////////////////////////////////////////////////
// tuple型
//////////////////////////////////////////////////////////
let profile: [string, number] = ["Tom", 20];
console.log(profile); //→[ 'Tom', 20 ]

// profile = [2, "Tom"];
// 型 'number' を型 'string' に割り当てることはできません。
// 型 'string' を型 'number' に割り当てることはできません。
