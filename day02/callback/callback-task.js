// // 1. 두 수를 더해서 출력하기
// const add = (num1, num2, callback) => {
//   callback(num1 + num2)
// }

// const print = (value) => {
//   console.log(value);
// }

// add(25,28, print)


// // 2. 성과 이름을 받아서 연결하고 출력하기
// const fullname = (str1, str2, callback) => {
//   callback(str1 + str2)
// }

// const print1 = (value) => {
//   console.log(value);
// }

// fullname("이", "소연", print1)


// // 3. 두 정수의 곱셈 결과를 출력하기
// const num =(number1, number2, callback) => {
//   callback(number1 * number2)
// }

// const print2 = (value) => {
//   console.log(value);
// }

// num(10,10,print2)


// // 4. 성과 이름을 받아서 000닙 환영합니다. 출력하기
// const name = (str1, str2, callback) => {
//   callback(str1 + str2)
// }

// const print3 = (value) => {
//   console.log(`${value}님 환영합니다.`);
// }

// name("이", "소연", print3)


// // 실습
// function print(value){
//   console.log(value);
// }

// // 1) 두 수를 더해서 출력하기
// const sum = (num1, num2, callback) => {
//   callback(num1 + num2);
// }

// sum(10, 20, print)

// // 2) 성과 이름을 받아서 연결하고 출력하기
// const getFullName = (lastName, firstName, callback) => {
//   callback(lastName + firstName)
// }
// getFullName("김", "세환", print)


// // 3) 두 정수의 곱셈 결과를 출력하기
// const mul = (num1, num2, callback) => {
//   callback(num1 * num2)
// }

// mul(10, 20, print)

// 4) 성과 이름을 받아서 OOO님 환영합니다. 출력하기
// const hello = (fullname, callback) => {
//   callback(`${fullname}님 환영합니다.`)
// }

// getFullName("김", "세환", (fullName) => {
//   hello(fullName, print)
// })











// 실습
// function print(value){
//   console.log(value);
// }

// -----------------------------------------------------------------------------
// 1) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
// const add = (num1, num2, callback) => {
//   callback(num1 + num2);
// }

// const isOddAndEven = (value, callback) => {
  // if(value % 2 == 0) {
  //   callback("짝수")
  // }else{
  //   callback("홀수")
  // }
//   callback(value % 2 == 0 ? "짝수" : "홀수")
// }

// add(10, 20, (result) => {
//   isOddAndEven(result, print)
// })

// 2) 두 정수의 곱셉을 구한 뒤 결과에 2를 곱해서 출력
const multiply = (num1, num2, callback) => {
 callback(num1 * num2)
}

const multiplyBy2 = (number, callback) => {
  callback(number * 2)
}

multiply(5, 7, (result) => {
  multiplyBy2(result, print)
})

// 3) 두 정수의 값 중 작은 값을 반환하여 출력
const compare = (num1, num2, callback) => {
  let min = 0;
  if(typeof(num1) != "number" || typeof(num2) != "number") return "정수를 입력하세요.";
  if(num1 == num2) return "두 수가 같습니다.";
  num1 > num2 ? min = num2 : min = num1;
  callback(min)
}

compare(30, 100, print)

// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
const reverse = (content, callback) => {
  let result = "";
  for(let i = 0; i < content.length; i++){
    result += content.charAt(content.length - i - 1);
  }
  callback(result);
}

reverse("abcdefg", print)

// 5) 사용자가 입력한 값까지 누적합을 한 후 5의 배수인지 확인 후 출력
const sum = (limit, callback) => {
  let result = 0;
  for(let i = 0; i <= limit; i++){
    result += i;
  }
  callback(result);
}

const checkFiveTimes = (number, callback) => {
  let result = number % 5 == 0 ? "5의 배수입니다." : "5의 배수가 아닙니다."
  callback(result);
}

sum(107, (result) => {
  checkFiveTimes(result, print)
})


// ----------------------------------------------------------------------------------------------위에랑 같은거

// 1) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
const add = (num1, num2, callback) => {
  callback(num1 + num2);
}

const isOddAndEven = (value, callback) => {
  // if (value % 2 == 0) {
  //   callback("짝수");
  // } else {
  //   callback("홀수");
  // }
  callback(value % 2 == 0 ? "짝수" : "홀수");
}

const print = (value)=> {
  console.log(value)
}

add(10, 20, (result) => {
  isOddAndEven(result, print)
})




// 2) 두 정수의 곱셉을 구한 뒤 결과에 2를 곱해서 출력
const multiply2 = (num1, num2, callback) => {
  callback (num1 * num2);
}

const multiplyTwo = (value, callback) => {
  callback (value * 2);
}

const print02 = (value) => {
  console.log(value);
}

multiply2(2, 2, (result) => {
  multiplyTwo(result, print02)
}); 

// 3) 두 정수의 값 중 작은 값을 반환하여 출력
const smaller = (num1, num2, callback) => {
  if(typeof(num1) != "number" || typeof(num2) != "number") return "정수를 입력하세요."; 
  if(num1 == num2) return "두 수가 같습니다.";
  callback (num1 < num2 ? min = num1 : min= num2);
}

const printSmallerNum = (value) => {
  console.log(value);
}

smaller(10, 20, printSmallerNum);



// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력

// 5) 사용자가 입력한 값까지 누헙한 한 후 5의 배수인지 확인 후 출력
