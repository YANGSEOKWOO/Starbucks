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