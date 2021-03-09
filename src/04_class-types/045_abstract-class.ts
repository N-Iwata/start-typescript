export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// 抽象クラス
//////////////////////////////////////////////////////////
abstract class Animal {
  abstract name: string;
  abstract cry(): string;
}

class Dog extends Animal {
  name = "ポチ";
  cry() {
    return "わんわん";
  }
}

const dog = new Dog();
console.log(dog.name);
console.log(dog.cry());
