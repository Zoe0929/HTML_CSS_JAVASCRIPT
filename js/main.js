const searchEL=document.querySelector('.search');
const searchInputEl=searchEL.querySelector('input');

searchEL.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEL.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
})

searchInputEl.addEventListener('blur',function(){
    searchEL.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
})

const badgeEl =document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY>500){
        //배지 숨기기 
        //gsap.to(요소,시간,옵션)
        gsap.to(badgeEl,.6,{
            opacity:0,
            display: 'none' //실제 요소가 사라져야 그 아래에 있는 기능을 정상적으로 사용가능
        })
    }
    else{
        //배지 보이기
        gsap.to(badgeEl,.6,{
            opacity:1,
            display: 'block'
        })
    }
},300)); 

const fadeEl=document.querySelectorAll('.visual .fade-in');
fadeEl.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay: (index+1) *.7,
        opacity: 1
    })

})


new Swiper('.notice-line .swiper-container',{
    direction: 'vertical',
    autoplay:true,
    loop:true
});
