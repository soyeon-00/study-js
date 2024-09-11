// 자바스크립트의 try-catch문은 동기적으로 작동한다.
// try{
//   setTimeout(() => {
//     aㅇㄻ;
//   },2000)
// }catch(e){
//   console.log(e.name)
//   console.log(e.message)
//   console.log(e.stack)
//   console.log("잘못된값을입력해써 😮")
// }finally{

// }

setTimeout(() => {
  try{
    aㅇㄻ;
  }catch(error){
    console.log("잘못된값을입력해써 😮")
  }
},2000)