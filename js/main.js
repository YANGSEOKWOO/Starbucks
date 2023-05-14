const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
    // searchInputEl라는 부분에다가 어떤 HTMl의 속성을 지정할 때 쓰는 method
    // 여기의 경우 placehoder를 넣는다.
});

searchInputEl.addEventListener('blur', function(){ // blur : focus가 해제됐을 때
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY>500){
        // 배지 요소를 숨겨야 한다.
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display:'none'
        });
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display:'block'
        });
        //배지 요소를 보여야 한다.
    }
}, 300))
// 300-> 0.3초를 의미 0.3초 단위로 부하를 줘서 함수가 계속 연달아 실행되는걸 방지


const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*.7,
        opacity:1
    });
});

// js 생성자 (클래스) -> 객체들을 다룰 수 있다.
// new Swiper(css선택자(인수), 옵션(객체데이터));
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    // 자동재생 여부
     autoplay:true,
    // // 반복재생 여부
     loop:true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides: true, // 1번슬라이드가 가운데 보이기
    loop:true,
    autoplay: {
        delay:5000
    },
    // swiper-pagination이라는 요소를 실제 페이지 번호로 사용하겠다.
    pagination:{
        // 페이지 번호 요소 선택자
        el:'.promotion .swiper-pagination',
        clickable:true //사용자가 페이지 번호를 제어할 수 있는지
    },
    navigation:{
        // 이전슬라이드 보는 버튼
        prevEl : '.promotion .swiper-prev',
        // 다음슬라이드
        nextEl : '.promotion .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
    // ! 뒤쪽의 값이 반대가 되게 만들어주세요
    // 특정 변수의 값을 지속적으로 반대값으로 만들어 줄 수 있다.
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        // 숨김처리
        // promotion이라는 요소에 hide라는 class 추가
        promotionEl.classList.add('hide');
    }else{
        // 보임처리
        promotionEl.classList.remove('hide');
    }
})
