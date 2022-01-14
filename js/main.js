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
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView : 3, //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 간격
    centeredSlides:true, //1번 슬라이드 가운데
    loop:true,
     autoplay:{
         delay: 5000
     },
    pagination:{
        el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable:true //클릭 가능여부
    },
    navigation:{
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})

const promotionEl =document.querySelector('.promotion');
const promotionToggleBtn=document.querySelector('.toggle-promotion');
let isHidePromotion=false;
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion=!isHidePromotion;
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    }
    else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
})
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size){
    //gsap.to(요소, 시간, 옵션);
    gsap.to(selector,random(1.5,2.5), {
        y:20,
        repeat:-1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0,delay)
    });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);