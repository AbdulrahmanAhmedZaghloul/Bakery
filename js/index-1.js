let aboutOffsetTop = $("#down").offset().top;	// topبطول ب ال aboutده بيجيب المسافه م بين اول الموقع و ال offset

$(window).scroll(function () {	// scroll يعمل userانا كده بقول لم ال 
  let wScroll = $(window).scrollTop();

  if (wScroll > aboutOffsetTop - 50) {
    $("#main-nav").css("backgroundColor", "rgb(255,255,255)");
    $("#main-nav").css("border-bottom", "#d4d4d4 solid 1px");
    $(".navlist a").css("color", "rgb(53, 53, 53)");
  }
  else {
    $("#main-nav").css("backgroundColor", "rgba(0, 0, 0,0.2)");
    $("#main-nav").css("border-bottom", "none");
    $(".navlist a").css("color", "rgba(255,255,255,0.8)");
  }
})

let arrowOffsetTop = $("#down").offset().top;

$(window).scroll(function () {	// scroll يعمل userانا كده بقول لم ال 
  let wScroll = $(window).scrollTop();

  if (wScroll > arrowOffsetTop - 50) {	// اظهر السهم about لم انزل ع 
    $("#btnUp").fadeIn(500);
  }
  else {	// لم اطلع اخفي السهم 
    $("#btnUp").fadeOut(500);
  }
})
$("#btnUp").click(function () {	// لم اضغط ع السهم اطلع ع اول الموقع في 3 ثواني 
  $("html,body").animate({ scrollTop: 0 }, 100);
})

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navlist.classList.toggle("open");
};

// $(document).ready(function () {
//   $("#loed").fadeOut(2000, function () {
//     $("body").css("overflow", "auto");
//   });
// });
// /////////////////// toggle icon navbar transparent  ////////////////////////

// let x = setTimeout(function () {console.log('hllol')},3000);
// $(window).scroll(function () {
//   let doscroll = $(window).scrollTop();
//   if (doscroll > teoset - 50) {
//     $("header").css("backgroundColor", "rgba(0, 0, 0)");
//     $("#butup").fadeIn(500);
//   } else {
//     $("header").css("backgroundColor", "rgba(0, 0, 0, 0.4)");
//     $("#butup").fadeOut(500);
//   }
// });
// /////////////////// ready load fadeout  ////////////////////////
// ////..../////////////////////////////

////////////////////colorbox///////////////////////////////
// let boxwidth = $("#colorboxw").outerWidth();
// $("#side").animate({ left: `-${boxwidth}` }, 0); // يبقي جوه اول م افتح الموقع Boxده علشان ال
// $("#toggln").click(function () {
//   if ($("#side").css("left") == "0px") {
//     $("#side").animate({ left: `-${boxwidth}` }, 1000);
//   } else {
//     $("#side").animate({ left: `0px` }, 1000);
//   }
// });

// for (let i = 0; i < $(".item").length; i++) {
//   let red = Math.round(Math.random() * 215);
//   let red1 = Math.round(Math.random() * 25);
//   let red2 = Math.round(Math.random() * 25);
//   $(".item").eq(i).css("backgroundColor", `rgb(${red},${red1},${red2})`);
// }
// $(".item").click(function () {
//   let xcolor = $(this).css("backgroundColor");
//   $("p ,h1 ,h2,h3,h4,h5,h6,a,span").css("color", xcolor);
// });
// ////////////////////colorbox///////////////////////////////

// ////////////////////........///////////////////////////////

// let colorBoxWidth = $("#colorBox").outerWidth(); //colorBoxWidth واحطها في colorBoxانا كده بجيب عرض ال innerWidth
// $("#sideBar").animate({ right: `-${colorBoxWidth}` }, 0); // يبقي جوه اول م اف  الموقع Boxده علشان ال
// $("#sideBarToggle").click(function () {
//     if ($('#sideBar').css("right") == "0px")//البوكس كده بره
//     {
//         $("#sideBar").animate({ right: `-${colorBoxWidth}` }, 2000);//right ب السالب ل colorBoxWidthكده لم اضغط علي الاعدادت داخل ال
//     }
//     else {
//         $('#sideBar').animate({ right: `0px` }, 2000);//ده كده يبقي بره	0 = right ب sideBar انا كده بقول لو البوكس
//     }

// })
// // Background-img

// $(".box-image img").click(function () {
//     let imgSrc = $(this).attr("src");
//     $(".home").css("backgroundImage", `url(${imgSrc})`);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//   var leadElement = document.querySelector('.lead1');
//   var count = 0;

//   function updateCounter() {
//     count++;
//     leadElement.textContent = count;

//     if (count < 1430) {
//       setTimeout(updateCounter, 150); // تعديل الفاصل الزمني حسب الحاجة
//     }
//   }

//   updateCounter();
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var leadElement = document.querySelector('.lead2');
//   var count = 0;

//   function updateCounter() {
//     count++;
//     leadElement.textContent = count;

//     if (count < 64) {
//       setTimeout(updateCounter, 100); // تعديل الفاصل الزمني حسب الحاجة
//     }
//   }

//   updateCounter();
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var leadElement = document.querySelector('.lead3');
//   var count = 0;

//   function updateCounter() {
//     count++;
//     leadElement.textContent = count;

//     if (count < 960) {
//       setTimeout(updateCounter, 200); // تعديل الفاصل الزمني حسب الحاجة
//     }
//   }

//   updateCounter();
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var leadElement = document.querySelector('.lead4');
//   var count = 0;

//   function updateCounter() {
//     count++;
//     leadElement.textContent = count;

//     if (count < 420) {
//       setTimeout(updateCounter, 250); // تعديل الفاصل الزمني حسب الحاجة
//     }
//   }

//   updateCounter();
// });



function toggleClass() {
  var container = document.querySelector('.aswe');
  var dasw = document.querySelector('.dasw');

  // container.classList.toggle('minus');
  // container.classList.toggle('plus');

  if (container.classList.contains('')) {
    dasw.style.display = 'block';
    toggleIcon.textContent = '^'; // تغيير علامة الإضافة إلى الطرح

  } else {
    dasw.style.display = 'none';
    toggleIcon.textContent = '^'; // تغيير علامة الطرح إلى الإضافة

  }
}
function toggleVisibility() {
  var dasw = document.querySelector('.dasw');
  var toggleIcon = document.getElementById('toggleIcon');

  if (dasw.style.display === 'none') {
    dasw.style.display = 'block';
    toggleIcon.textContent = '^'; // تغيير علامة الإضافة إلى الطرح
  } else {
    dasw.style.display = 'none';
    toggleIcon.textContent = '^'; // تغيير علامة الطرح إلى الإضافة
  }
}


