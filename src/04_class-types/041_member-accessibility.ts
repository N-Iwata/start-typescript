export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// メンバー修飾子
//////////////////////////////////////////////////////////
class Person1 {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}
class Person2 extends Person1 {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }
  introduce(): string {
    // return `私の名前は${this.name}です。${this.age}歳の${this.gender}です。`;
    return `私の名前は${this.name}です。${this.gender}です。`;
  }
}
const tanaka = new Person1("田中次郎", 25, "男性");
console.log(tanaka.name);
// console.log(tanaka.age);
// console.log(tanaka.gender);
console.log(tanaka.introduce());

const suzuki = new Person2("鈴木花子", 20, "女性");
console.log(suzuki.name);
// console.log(suzuki.age);
// console.log(suzuki.gender);
// console.log(suzuki.introduce());
