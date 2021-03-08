export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// enum
//////////////////////////////////////////////////////////
enum Day1 {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Day1.Sun);

enum Day2 {
  Sun = 1,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Day2.Sun);

enum Day3 {
  Sun = "日曜日",
  Mon = "月曜日",
  Tue = "火曜日",
  Wed = "水曜日",
  Thu = "木曜日",
  Fri = "金曜日",
  Sat = "土曜日",
}
console.log(Day3.Sun);
