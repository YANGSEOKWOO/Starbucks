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

