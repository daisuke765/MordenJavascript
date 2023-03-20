// var val1 = "text";
// console.log(val1);

// let var2 = "letlet";
// console.log(var2);
// // let var2 = "letlet";

// const name = {
//     first : "daisuke",
//     last : "yamada"
// };
// console.log(name["first"]);
// console.log(name["last"]);

// テンプレート文字列
// const name = "daisuke"
// const age = 44
// console.log(`${name}は${age}歳です`);

//アロー関数
// const func = (str) => {return `${str} ${str} ${str}`};
const func = (str) => `${str} ${str} ${str} ${str}`;
console.log(func("loop"));

const add = (x, y) => x + y;
console.log(add(1, 2));

// 分割代入
const myProfile = {
  name: "daisuke",
  age: 100,
};

const profileText = `name is ${myProfile.name}, age is ${myProfile.age} `;
console.log(profileText);

const { name, age } = myProfile;
const profileText2 = `name is ${name}, age is ${age} `;
console.log(profileText2);

// 分割代入 - リスト
const myProfileList = ["test", "data"];
const [item1, item2] = myProfileList;
console.log(`${item1}, ${item2}`);

// 関数デフォルト値
const sayHello = (name = "名無し") => console.log(`こんにちは、${name}さん`);
sayHello("Yamada");
sayHello();

/**
 * スプレット構文　...　→ ドットを３つ。
 */
// 1. 配列の展開
const array1 = [1, 2];
console.log(array1); // リスト
console.log(...array1); // 配列を展開し、要素毎に処理してくれる。

console.log(add(...array1)); // 引数に展開

// 2. まとめる
const array2 = [1, 2, 3, 4, 5];
const [num1, num2, ...num3] = array2;
console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // [3, 4, 5]

// 3. 配列のコピー、結合
const array4 = [10, 20];
const array5 = [30, 40];

const array6 = [...array4]; // 配列コピー
const array7 = [...array4, ...array5]; // 配列結合
console.log(array6);
console.log(array7);

/**
 * map, filterを使った配列の処理
 */
const nameArray = ["yamada", "tanaka", "nakamura"];
// Map case1. 元のデータを基に再生成する。
const nameArray2 = nameArray.map((name) => name + "_change");
console.log(`nameArray2:${nameArray2}`);

const newNameArray = nameArray.map((name) => {
  if (name === "tanaka") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(`newArray:${newNameArray}`);

// Map case2. 各要素に対して処理を実行する。
nameArray.map((name) => console.log(`Mapから呼び出し:${name}`));
// Map case3. 要素のINDEXを使用する → 第２要素がINDEX(固定)
nameArray.map((name, index) =>
  console.log(`Mapから呼び出し:[${index}]${name}`)
);

// filter
const numArray = [...array2];
const evenArray = numArray.filter((num) => num % 2 === 0);
console.log(`evenArray:${evenArray}`);

/**
 * 三項演算子
 */
// const num = 1300;
const num = "1300";
console.log(num.toLocaleString()); // ３桁区切りの文字列に変換

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "Please input number!!!";
console.log(formattedNum);

/**
 * 論理演算子の挙動
 */
// || は左側がtrueなら左側を返す。左側がfalseなら右側を返す。
const numeric1 = null;
const numeric2 = 100;
console.log(numeric1 || "金額が未設定です"); // output : "金額が未設定です。"
console.log(numeric1 || numeric2 || "金額が未設定です"); // output : 100

// && は左側がtrueなら右側を返す。左側がfalseなら左側を返す。
console.log(numeric2 && "金額が未設定です"); // output : "金額が未設定です。"
console.log(numeric1 && "金額が未設定です"); // output : null
console.log(numeric2 && "金額が未設定です" && numeric1); // output : null
