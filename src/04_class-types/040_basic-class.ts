export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// 関数宣言文
//////////////////////////////////////////////////////////
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}

const sato = new Person("佐藤太郎", 30);
console.log(sato.name);
console.log(sato.age);
console.log(sato.introduce());

class Person2 {
  constructor(public name: string, public age: number) {}

  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}
const tanaka = new Person2("田中次郎", 25);
console.log(tanaka.name);
console.log(tanaka.age);
console.log(tanaka.introduce());
