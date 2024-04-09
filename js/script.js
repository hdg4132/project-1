const headerEl = document.querySelector("header");
const megaEl = document.getElementById("magaheader");
const imgEl = document.querySelector("#kiwoom");
const imgEl2 = document.querySelector("#kiwoom2");
const slideEl = document.querySelector(".scroll-top");

// 화면에서 스크롤이 발생되면 아래의 함수를 실행합니다
window.addEventListener("scroll", function () {
  this.requestAnimationFrame(scrollCheck);
  this.requestAnimationFrame(scrollCheck2);
});

function scrollCheck() {
  // 스크롤을 움직였다면 움직인 값 기록하고 아니면 offset상태 두자
  let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  // 세로로 스크롤이 1픽셀이라도 움직여지면 class="active" 추가해서 css 적용되도록
  if (browserScrollY > 0) {
    headerEl.classList.add("active");
    imgEl.classList.add("active");
    imgEl2.classList.add("active");
  }
  // 스크롤 상태를 계속 확인해서 스크롤이 움직인 상태가 아니면(맨 위로 돌아오면)
  // class="active"를 원복해서 css가 적용안되도록
  else {
    headerEl.classList.remove("active");
    imgEl.classList.remove("active");
    imgEl2.classList.remove("active");
  }
}

function scrollCheck2() {
    let scrollY = window.scrollY1 ? window.scrollY1 : window.pageYOffset;
  // 스크롤 상태확인 후 일정 픽셀만큼 내리면 출현
  if (scrollY > 600) {
    slideEl.classList.add("active");
  }
  // 스크롤 상태를 계속 확인해서 스크롤이 움직인 상태가 아니면(맨 위로 돌아오면)
  // class="active"를 원복해서 css가 적용안되도록
  else {
    slideEl.classList.remove("active");
  }
}

// 위로 스크롤용 이벤트리스너
window.addEventListener('scroll', function() {
  // console.log(scrollY);
});
document.querySelector('.scroll-top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
});

// 하부 헤더에 마우스 올리면 대형헤더에 active추가
function mouseCheck() {
  megaEl.addEventListener('mouseover', (Event) =>{
    megaEl.classList.add("active");
  });
  megaEl.addEventListener('mouseout', (Event) =>{
    megaEl.classList.remove("active");
  })
}

mouseCheck();

// 상부 슬릭 슬라이드 
$(function(){
  $('#slider-div').slick({
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite : true, 	//무한 반복 옵션	 
    slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
    dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,			// 자동 스크롤 사용 여부
    autoplaySpeed : 2000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,		// 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
    nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable : true, 	//드래그 가능 여부 
    
  });
  })

  // 푸터용 슬릭 슬라이드
  $(function(){
    $('#sponser-div').slick({
      slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
      infinite : true, 	//무한 반복 옵션	 
      slidesToShow : 8,		// 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
      speed : 2000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
      dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
      autoplay : true,			// 자동 스크롤 사용 여부
      autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical : false,		// 세로 방향 슬라이드 옵션
      prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
      nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
      dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
      draggable : false, 	//드래그 가능 여부 
      
    });
    })

    
