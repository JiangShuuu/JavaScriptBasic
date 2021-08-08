let n ="john";

console.log(n);

let ag = 27;

console.log(ag.toString() + 10);

let pi = 3.1415926535;

console.log(pi.toFixed(2))

//length
let name = "johnodaD";
console.log(name.length);
console.log(name[0]);

// Slice()
console.log(name.slice(2, 7));

//indexOf() 回傳最先找到的值的位置
console.log(name.indexOf("d"));

//toLowerCase() 、toUpperCase()
console.log(name.toLowerCase());
console.log(name.toUpperCase());

// split() 分成每個array.
console.log(name.split(""))

//Boolean
let isPremium = "flase";
console.log(isPremium);

//typeOfOperator 查看類別
let x = "true" //string
let y = true // boolean
console.log(typeof x);
console.log(typeof y);

// Undefined 常發生在值未被定義如：
/*
let x 
console.log(x)
*/

// Null 定義為空
/*
let y = null;
console.log(y);
*/


// Logical Operator
// ===

console.log(3 === 3);
console.log(3 === "3");

// !=
console.log(4 != 3);

// >
console.log(4 < 3);

// $$ and  兩個都要為true才是true
let a = 3 > 2;
let b = 5 > 6;

console.log(a && b); //false
// || or  一個為true即為true
console.log(a || b); //true

//if statement and condition
// let age = prompt("請輸入你的年齡:")

// if (age <= 12) {
//     alert("兒童票100元");
// } else if ((age > 12) && (age <= 65)) {
//     alert("成人票250元");
// } else {
//     alert("敬老票150元")
// }

// Array

let friends = ["John",'Sandy','Alex','Jim']

console.log(friends[2])

//push 加入array最後一個
friends.push("Harry");
console.log(friends)

//unshift 加入array 第一個
friends.unshift("Hank");
console.log(friends)

//pop 刪掉array最後一個
friends.pop() 
console.log(friends)

//shift 刪掉array 第一個
friends.shift() 
console.log(friends)

// function 
function sayHi() {
    console.log("Hi");
    console.log("My name is John Lu")
}

sayHi()

// function parameter
function nun(name, age) {
    console.log("Hi");
    console.log("My name is" + name + " .");
    console.log("I am " + age + "years old now.");
}

nun("Willson", 87)

// function thiskeyword

let John = {
    age: 30,
    is_married: false,
    spouse: null,


    sayAge() {
        console.log("I am " + this.age + "years old.");
    }
}
John.sayAge();

// for loop
// break 中斷迴圈, continue 跳過這個數
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}