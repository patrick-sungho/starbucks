const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});

// 해당 영역이 선택이 된다면
searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 해당 영역의 포커스가 해제된다면
searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
})


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // badge hide
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
    // btn show
    gsap.to(toTopEl, .2,{
      x: -130,
    })
  } else {
    // badge show
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
    // btn hide
    gsap.to(toTopEl, .2,{
      x: 0, 
    })
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7,{
    scrollTo: 0,
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7,
    opacity: 1,
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // hide
    promotionEl.classList.add('hide');
  }else{
    // show
    promotionEl.classList.remove('hide');
  }
});

//랜덤 함수 (소수점 2자리까지)
function random(min, max){
  // .toFixed() 를 통해 반환된 문자 데이터를,
  // 'parseFloat()'을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // -1 무한반복(여기에서만 무한)
    yoyo: true, // 한번 재생된 애니메이션을 다시 거꾸로 재생시킴
    ease: Power1.easeInOut, // 애니메이션 진행 과정 (ex. 빨라졌다 느려졌다)
    delay: random(0, delay), // 지연시간
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// 저작권 확인해보니 gsap을 이용하여 사용하지 않으면 무료인가봄!
// gsap안에서도 무료 유료가 나뉘어져 있어서 이건 찾아봐야함
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트를 0~1로 처리하고 해당지점이 되면 트리거가 실행이 되게 함
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021


