// // 1) 1~100까지 짝수만 더한 후 결과 값에 3을 곱한 후 출력
// const even = (callback) => {
//   let result = 0
//   for(let i = 0; i <= 100; i++) {
//     if(i % 2 == 0) {
//       result += i // 짝수일 때만 더하기
//     }
//   }
//   callback(result);// 계산이 완료된 후 결과를 콜백 함수로 전달
// }

// // 결과를 처리하고 출력하는 함수
// const print = (sum_multiply) => {
//   const multiply = sum_multiply * 3 // 짝수의 합에 3을 곱하기
//   console.log(multiply); // 결과를 출력
// };

// // even 함수 호출, print 콜백으로 전달
// even(print);



// //재은언니
// const addEven2 = (callback) => {
//   let result = 0;
//   for(let i = 0; i <= 100; i++){
//     i % 2 == 0 ? result += i : "";
//   }
//   callback(result);
// }

// const multiplyThree2 = (value, callback) => {
//   callback(value * 3);
// }

// const print01 = (value) => {
//   console.log(value);
// }

// addEven2((value) => {multiplyThree2(value, print01)});



// //진아언니
// const even1 = (callback) => {
//   let sum = 0;
//   for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   callback(sum);
// };

// const even2 = (number, callback) => {
//   callback(number * 3);
// };

// const print2 = (result) => {
//   console.log(result);
// };

// even1((sum) => {
//   even2(sum, print2);
// });



//강사님
// 1) 1~100까지 짝수만 더한 후 결과 값에 3을 곱한 후 출력
function printMessage(value){
  console.log(value)
}

// const sumEven = (callback) => {
//   let result = 0;
//   for(let i = 0; i <= 100; i++){
//     i % 2 == 0 && (result += i);
//   }
//   callback(result)
// }

// const multiplyThreeTimes = (number, callback) => {
//   callback(number * 3)
// }

// sumEven((result) => {
//   multiplyThreeTimes(result, printMessage)
// })

// 2) 2개의 정수 중 최소 값과 최대 값을 비교한 후 큰 값에 10을 곱해서 출력
const getMax = (num1, num2, callback) => {
  if(typeof(num1) != "number" || typeof(num2) != "number") return "정수를 입력하세요";
  if(num1 == num2) return "두 수는 같습니다.";
  let max = num1 > num2 ? num1 : num2;
  callback(max);
}

const multiplyBy10 = (number, callback) => {
  callback(number * 10)
}

getMax(50, 55, (result) => {
  multiplyBy10(result, printMessage)
})


// 3) 결제 상품의 이름과 결제 상태를 전달 받아서 
// 결제 상태가 true일 경우 결제 완료, false 인경 우 결제 취소를 출력
const payment = (productName, status, callback) => {
  let confirm = status ? "결제 완료" : "결제 취소";
  callback(`${productName}은(는) ${confirm}`);
}

payment("선풍기", true, printMessage)

// 4) 상품 가격과 총 구매한 가격의 합을 입력 받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니라면 false 출력
// ex) 가격 1000원, 총 구매가격 5000원 == 구매 개수 5개
const getCount = (price, total, callback) => {
  let count = total / price;
  callback(count)
}

const checkCount = (count, callback) => {
  let result = count <= 5;
  callback(result);
}

getCount(1000, 6000, (count) => {
  checkCount(count, printMessage)
})



