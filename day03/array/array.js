// // 선언
// // const arr1 = [];
// // const arr2 = new Array();
// // const arr3 = new Array(10).fill(10);
// // const arr4 = Array.of("초기값1", "초기값2");

// // console.log(arr1)
// // console.log(arr2)
// // console.log(arr3)
// // console.log(arr4)


// // .split(), string 문자열에서만 쓸 수 있음
// const phoneNumber = "010-4068-5166";
// console.log(phoneNumber.split("-")); //"-" 요 친구들 잘라줌 결과값 [ '010', '4068', '5166' ]

// // .join(),array 배열안에 있는 모든 값들을 싹 다 합쳐줌
// console.log(phoneNumber.split("-").join(""));

// // .replace(), string 어떤 값을 대체해주는 거
// console.log(phoneNumber.replaceAll("6", "*")); // 6으로 된 거 싹 다 바꿔줘 replaceAll
// console.log(phoneNumber.replace("6", "*")); // 6으로 된 거 처음 부분반 바꿔줘 replace

// // .push, array
// // 기존의 배열에 값을 추가한다
// const arr = ["이소연", "쏘오연", "졸려"]
// arr.push("짱구", "흰둥이")
// console.log(arr);

// // .concat, array
// // 두 개의 배열ㅇ르 [새로운 배열]로 리턴한다.
// // 기존 배열의 값을 바꾸는게 아닌 새로운 배열을 만듬 
// const arr1 = ["나는", "원한다"];
// const arr2 = ["go", "home"];


// const arr3 = arr1.concat(arr2);
// // console.log(arr1.concat(arr2));


// // 마지막에 있는 친구를 제거
// // .pop, array
// // 마지막 요소를 제거하고 그 값을 반환한다~
// const arr4 = [10, 20, 30, 40];
// console.log(arr4.pop())
// console.log(arr4)


// // 맨 앞의 요소
// // .unshift()
// // 맨 앞에 요소를 추가하는 메서드
// const arr5 = [10, 20, 30, 40, 50]
// arr5.unshift(200)
// console.log(arr5)

// // shift()
// // 밴 앞에 요소를 제거하는 메서드
// console.log(arr5.shift())
// console.log(arr5)


// // .slice(start, end)
// // start인덱스 부터  end인덱스전까지 요소를 1뎁스 복사하여 새로운 배열을 반환한다.
// const arr6 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// console.log(arr6.slice(4,7));

// // 매개변수를 하나만 선언하면 끝까지 가져옴
// console.log(arr6.slice(-1)) //-1은 맨 끝 자리 수를 가져옴
// console.log(arr6.slice(4))
// console.log(arr6.slice(-4))


// // .splice(start, 어디까지 지울건지 방 번호)
// // 제거 및 수정
// const arr7 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(arr7.splice(2, 3)); //방번호 2번 부터 3번째 자리까지 제거
// console.log(arr7.splice(3, 1, 2000)); //방번호 3번에 있는 값을 2000으로 수정
// console.log(arr7.splice(3, 1, 2000, 2, 6, 5, 5)); //방번호 3번의 자리에 있는 값을 지우고 2000, 2, 6, 5, 5가 추가됨
// console.log(arr7)


// // 정렬
// // .sort()
// // .reverse()는 정렬한 걸 반대로 나타나게 해줌
// const arr8 = [100, 150, 15, 200, 600, 70, 80, 20, 40];
// console.log(arr8.sort((a, b) =>  a - b)) //오름차순
// console.log(arr8.sort((a, b) =>  a - b).reverse()) //내림차순

// // 포함
// // .includes(), string, array
// // ex) 100이라는 값이 포함되어 있는지 아닌지 확인 있으면 true, 없으면  false
// console.log(arr8.includes(100))


// // .some, array
// // 조건식을 1개라도 만족하면  true 아니면  false
// console.log(arr8.some((data) => data % 2 == 0));


// -----------------------------------------------------------------------------------------
// 배열의 고차함수(메서드)

// .forEach(callback(data, i, datas)) : 반복문
//  반복을 돌아서 각각 하나의 값에 접근하여 필요한 기능을 실행 시킬 수 있다
const arr9 = [100, 200, 300, 400, 500, 600, 700];
// data는 값을 순차적으로 돌고있음
// 100
// 200
// 300
// 400
// 500
// 600
// 700
// i 는 인덱스 값을 갖고옴 방 번호 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// datas는 배열 통째로 갖고옴
// [
//   100, 200, 300,
//   400, 500, 600,
//   700
// ]
// arr9.forEach((data, i, datas) => { 
//   console.log(datas)
// });

// 10분 실습
// arr9번을 forEach를 사용하여, 모든 배열의 값을 제곱값으로 변경하기
// arr9.forEach((data, i, datas) => { 
//   datas[i] *= datas[i];
// });
// console.log(arr9)


// .map(callback(data, i, datas))
// 값을 저장해서 [새로운 배열]로 리턴한다.
// map 함수는 반드시 리턴 값이이 존재해야 한다.

// const arr10 = arr9.map((data, i, datas) => {
//   return data + 10;
// })
// console.log(arr10);

const arr10 = arr9.map(data => data + 20);
// console.log(arr10);


// .filter((data) => 조건식)
// 조건식이 true인 값만 모아서 [새로운 배열]로 리턴한다.
// 반드시 리턴값이 필요하다.
//  3개(.some, .forEach(), .filter() ) 고차함수 중에서 .forEach()가 제일 마자막에 온다.

arr10.filter(data => data % 3 == 0).forEach(data => console.log(data));




