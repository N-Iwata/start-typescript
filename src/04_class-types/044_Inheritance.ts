export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// 継承
//////////////////////////////////////////////////////////
class Animal {
  constructor(public name: string) {}
  cry(): string {
    return "鳴く";
  }
}

class Dog extends Animal {
  public say: string;
  constructor(name: string, say: string) {
    super(name);
    this.say = say;
  }
  cry(): string {
    return `${this.name}は${this.say}と${super.cry()}`;
  }
}

const dog = new Dog("シロ", "わんわん");
console.log(dog.cry());
