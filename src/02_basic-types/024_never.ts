export {}; // モジュール化をすることで、変数のダブりを回避する

//////////////////////////////////////////////////////////
// never型
//////////////////////////////////////////////////////////
// function error(message: string): never {
//   throw new Error(message);
// }
// error("Error!");

const engineer = (enginner: "Frontend" | "Backend" | "Fullstack") => {
  switch (enginner) {
    case "Frontend":
      return `${enginner}エンジニアなのでReactが好きです!`;
    case "Backend":
      return `${enginner}エンジニアなのでGolangが好きです!`;
    case "Fullstack":
      return `${enginner}エンジニアなのでいろいろ好きです!`;
    default: {
      const check: never = enginner;
    }
  }
};
console.log(engineer("Frontend")); // FrontendエンジニアなのでReactが好きです!
