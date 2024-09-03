// if(){
//   true 일 때 실행할 문장;
// }
  
// if(){
//   true일 때 실행할 문장;
// }else{
//   아닐 때 실행할 문장
// }

// if(){

// }else if(){

// }else{

// }

// 이름 : 김세환
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 학점 구하기
// if문으로 평균이 60점 이상인 학생은 합격, 60점 이하인 학생은 불합격 출력하기
// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.
let name = "이소연";
let kor = 80;
let mat = 70;
let eng = 90;
let sci = 20;
let add = kor + mat + eng + sci;
let result = (kor + mat + eng + sci)/4;
// console.log(result);
if(result >= 60){
  console.log(`${name}님의 이번 총점은 ${add}, 평균은 ${result}점 이므로 합격입니다`);
}else {
  console.log(`${name}님의 이번 총점은 ${add}, 평균은 ${result}점 이므로 불합격입니다`);
}

