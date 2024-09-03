// // for(초기식; 조건식; 증감식){}
// for(let i = 0; i < 10; i++){
//   console.log(`${i+1}번 째 이소연`);
// }

// 1~10까지 더하서 출력하기
// let sum = 0;
// for(let i = 0; i <= 10; i++){
//   sum += i;
// }
// console.log(sum);


// 1~100까지 짝수만 출력하기

// for(let i = 0; i <= 100; i++){
//    let even = i%2 == 0;
//    if(!even){continue;};
//    console.log(i);
// }


// for(let i = 0; i <= 50; i++){
//   console.log(i*2);
// }




// 100~1까지 출력하기
// for(let i = 0; i <= 100; i++){
//   console.log(100-i);
// }

// 0~10 중 5만 빼고 출력하기
// for(let i = 0; i <= 10; i++){
//   let result = i >= 5 ? i + 1 : i;
//   console.log(result);
// }


// 012340123401234 출력하기
let result = "";
for(let i = 0; i < 15; i++){
  result += i % 5;
}
console.log(result)