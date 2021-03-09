export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// interfaceによる継承（実装）
//////////////////////////////////////////////////////////
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
