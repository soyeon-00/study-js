// function add(num1, num2) {
//  return num1 + num2;
// }

// let result = add(10, 20);
// console.log(result);


// 디폴트 파라미터
function sum(num1, num2, num3=0) {
  return num1+num2+num3;
}

console.log(sum(10,20))

//숫자 5개를 받아서 5개를 모두 출력하는 함수
function number(num1, num2, num3, num4, num5) {
  console.log(num1, num2, num3, num4, num5);
}
number(1, 2, 3, 4, 5)

// 2개 문자열을 연결시켜주는 함수

function string(str1, str2 = "") {
  return str1 + str2;
}

let result = string("안","녕");
console.log(result);

// 사용자가 파라미터로 입력한 값을 모두 더하기
// rest parameter(가변 인자)

function addAll(...numbers){
  console.log(numbers[4])
}
addAll(10, 20, 30, 40, 50)

// 가변 인자로 이름, 나이, 이메일을 입력받아서 출력하는 함수

function addAll(...person){
  console.log(person);
}
addAll("이소연", 25, "qwe3401@naver.com")


