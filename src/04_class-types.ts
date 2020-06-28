export {}; // モジュール化をすることで、変数のダブりを回避する

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// クラス
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------
// 基本的なクラスの書き方
//------------------------
class Person {
  // メンバー変数の宣言
  name: string;
  age: number;

  // コンストラクタ
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // メソッド
  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}

const sato = new Person("佐藤太郎", 30);
console.log(sato.name);
console.log(sato.age);
console.log(sato.introduce());

// class Person {
//   // コンストラクタ
//   constructor(public name: string, public age: number) {}

//   // メソッド
//   introduce(): string {
//     return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
//   }
// }

//------------------------
// クラスメンバー修飾子（アクセシビリティ）
//------------------------
class Person1 {
  // メンバー変数の宣言
  public name: string;
  private age: number;
  protected gender: string;

  // コンストラクタ
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // メソッド
  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}
class Person2 extends Person1 {
  // コンストラクタ
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }
  // メソッド
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

//------------------------
// getterとsetter
//------------------------
class Person3 {
  // メンバー変数の宣言
  private _name: string;
  private _age: number;

  // コンストラクタ
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  set age(num: number) {
    this._age = num;
  }
}
const yamada = new Person3("山田三郎", 20);

// console.log(yamada._name);
console.log(yamada.name);

// yamada._age = 30;
yamada.age = 30;

//------------------------
// static(静的メンバ)
//------------------------
class Person4 {
  // メンバ変数
  static firstName: string = "太郎";
  static lastName: string = "山田";
  static age: number = 18;

  // メソッド
  static introduce(): string {
    return `私の名前は${this.lastName}${this.firstName}です。${this.age}歳です。`;
  }
}
console.log(Person4.firstName);
console.log(Person4.lastName);
console.log(Person4.age);
console.log(Person4.introduce());

//------------------------
// 継承
//------------------------
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

//------------------------
// 抽象クラス
//------------------------
abstract class Animal2 {
  abstract name: string;
  abstract cry(): string;
}

class Dog2 extends Animal2 {
  name = "ポチ";
  cry() {
    return "わんわん";
  }
}

const dog2 = new Dog2();
console.log(dog2.name);
console.log(dog2.cry());

//------------------------
// インターフェース
//------------------------
interface Pitcher {
  pitching(): void;
}
interface Batter {
  batting(): void;
}

class TwoWay implements Pitcher, Batter {
  pitching(): void {
    console.log("ピッチング！");
  }
  batting(): void {
    console.log("バッティング！");
  }
}
const otani = new TwoWay();
otani.pitching();
