export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// getterとsetter
//////////////////////////////////////////////////////////
class Person {
  private _name: string;
  private _age: number;

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
const yamada = new Person("山田三郎", 20);

// console.log(yamada._name);
console.log(yamada.name);

// yamada._age = 30;
yamada.age = 30;
