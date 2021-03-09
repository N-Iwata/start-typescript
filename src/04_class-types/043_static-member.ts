export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// staticメンバー
//////////////////////////////////////////////////////////
class Person {
  static firstName: string = "太郎";
  static lastName: string = "山田";
  static age: number = 18;

  static introduce(): string {
    return `私の名前は${this.lastName}${this.firstName}です。${this.age}歳です。`;
  }
}
console.log(Person.firstName);
console.log(Person.lastName);
console.log(Person.age);
console.log(Person.introduce());
