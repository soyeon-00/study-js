const obj = {
  name: "이소연",
  age: 25
}

// obj.key 접근법
// obj.name = "쏘오연";
// console.log(obj.name);

// obj[key] : 접근법
// 대괄호 키값을 사용하는 이유는 key 값에 규칙성을 주고 싶을 때 사용하는 방법
// console.log(obj["name"]);

const products = {
  product1 : "지우개",
  product2 : "키보드",
  product3 : "마우스",
  product4 : "승용님 노트북",
  product5 : "진아언니 노트북",
  product6 : "태혁님 10년 노트북",
}

for(let i = 1; i <= products.length; i++) {
 console.log(products[`product${i}`])
}

// 빠른 for ~ in 문을 제공
for(let key in products) {
  console.log(key);
}

for(let key in products) {
  console.log(products[key]);
}

// 빠른 for ~ of 문을 제공 
// 순서가 있는 객체에서 사용할 수 있는 for 문
// for(let key of products) {
//   console.log(key);
// }

const users = {
  user1 : {
    name : "홍길동",
    age : 40,
    point : 20000,
  },
  user2 : {
    name : "이순신",
    age : 20,
    point : 1500,
  },
  user3 : {
    name : "장보고",
    age : 60,
    point : 9500,
  },
  user4 : {
    name : "김철수",
    age : 25,
    point : 4000,
  },
}

// console.log(users.user1.point);

// for문을 이용하여 모든 유저의 point를 누적합한 후 콘솔에 출력하기



// for(let key in users) {
//   result = users.user1.point + users.user2.point + users.user3.point + users.user4.point
//   console.log(result);
//   // console.log(users[key].point);
// }

// ex1
let total = 0;
for(let key in users) {
  total += users[key].point;
}
console.log(total);

// ex2
const getUserPoint = (users, callback) => {
  let result = 0;
  for(let user in users){
    result += users[user].point;
  }
  callback(result)
}
const printPoint = (point) => {
  console.log(point)
}

getUserPoint(users, printPoint)


