// const menu = document.querySelector(".main-menu");
// const submenu = document.querySelector(".sub");

// menu.addEventListener("click", () => {
//   if(display === "none"){

//   }else{

//   }
//   submenu.slideToggle(1000)
// })

$(document).ready(function() {
  $(".menu").mouseover(function() {
    $(".sub").stop().slideDown(1000); // 서브 메뉴를 1000ms 동안 서서히 나타나게 합니다
  });

  $(".menu").mouseout(function() {
    $(".sub").stop().slideUp(1000); // 서브 메뉴를 1000ms 동안 서서히 사라지게 합니다
  });
});