// 1) 1~10까지 Array 객체에 담은 후 짝수만 출력
// const arr1 = new Array(10).fill(0)
// arr1.map((data, i) => i + 1).filter((data) => data % 2 == 0).forEach((data) => {console.log(data)});

// 2) 한글을 숫자로
// ex) "일이삼사" => "1234"
// const hangles = "공일이삼사오육칠팔구";
// const input = "일이사팔".split("");
// console.log(input.map(c => hangles.indexOf(c)).join(""))

// 3) 숫자를 한글로
// ex) "1234" => "일이삼사"
// const content = "1234".split("");
// console.log(content.map((data) => hangles[data]).join(""))
// console.log(content.map((data) => hangles.charAt(data)).join(""))

// 4) 1~100까지 합 출력
let result = 0;
new Array(100).fill(0).map((data, i) => i + 1).forEach(data => { result += data })
console.log(result)

// 5) 문자열 반대로 출력하기 .reverse() 사용
let result2 = "apple".split("").reverse().join("");
console.log(result2)

// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1234-5678
// result) 010-****-5678

// const phoneNumber = "010-1234-5678".split("-");
// phoneNumber[1] = "****";
// const parsePhoneNumber = phoneNumber.join("-")
// console.log(parsePhoneNumber)

// const phoneNumber2 = "010-1234-5678".split("-");
// const parsePhoneNumber2 = phoneNumber2.splice(1,1,"****")
// console.log(phoneNumber2.join("-"));





