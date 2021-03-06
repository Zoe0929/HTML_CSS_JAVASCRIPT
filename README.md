# ☕️스타벅스 클론 코딩
웹프론트앤드 기초 쌓기 - 스타벅스 페이지 클론 코딩


### 시작하기
___
1. favicon.ico : 해당 탭의 아이콘으로 자동 지정 
2. <link>태그로 제공: rel속성 icon 지정 후 href로 파일 연결
3. 문자 인코딩(Character Encoding) 설정
      - 문자가 인코딩되는 방식을 설정합니다.
```
<meta charset="UTF-8"/>
```
- ```UTF-8```:초성, 중성, 종성으로 구분하여 문자를 작성(권장)
- ```EUC-KR``` : 하나의 완성된 글자를 인식
    *뷰포트(Viewport) 렌더링 방식 설정
      - 웹페이지가 화면(Viewport)에 표현되는 방식을 설정합니다. 모바일 환경에서 적용됩니다.
      
```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- ```width=device-width```: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- ```initial-scale=1.0```: 화면의 초기 화면 배율(확대 정도)을 설정
- ```user-scalable=no```: 사용자가 디바이스 화면을 확대(yes)/축소(no)할 수 있는지 설정
- ```maximum-scale=1```: 사용자가 화면을 확대할 수 있는 최댓값
- ```minimum-scale=1```: 사용자가 화면을 축소할 수 있는 최솟값

 
  

### 오픈 그래프(The Open Graph protocol)
___
- 웹 페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보 지정
- 기본적인 로고, 설명 등의 간단한 정보 취급
```
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Starbucks" />
    <meta property="og:title" content="Starbucks Coffee Korea" />
    <meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
    <meta property="og:image" content="./images/starbucks_seo.jpg"/>
    <meta property="og:url" content="https://starbucks.co.kr"/>
```
- ```og:type```: 페이지의 유형(E.g, website, video.movie)
- ```og:site_name```: 속한 사이트의 이름
- ```og:title```: 페이지의 이름(제목)
- ```og:description```: 페이지의 간단한 설명
- ```og:image```: 페이지의 대표 이미지 주소(URL)
- ```og:url```: 페이지 주소(URL)


  


### HTML 클래스 속성의 작명법_BEM(Block Element Modifier)
___
    - ```요소__일부분```: 언더바 기호로 요소의 일부분을 표시
    - ```요소--상태```: 하이픈 기호로 요소의 상태 표시

### lodash 라이브러리 -_.throttle()함수
___
   - 수십개의 함수가 동시에 실행되게 되면 프로그램이 무거워질 수 있음  
   --> ```._throttle(함수, 시간)```를 이용해서 일정 시간 동안 한번만 실행되도록 부하를 줘서(제한을 둬서) 함수가 여러번 실행되는 것을 방지  
     
### gsap 라이브러리: JS 애니메이션 처리 라이브러리
___
   -  ```gsap.to(요소, 지속시간, 옵션)  ``` : 옵션에는 css요소들 사용 가능 


### Swiper
___
- [Swiper](https://swiperjs.com/) 
```
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```
- [Swiper API](https://swiperjs.com/swiper-api) 옵션 확인 
```
//new Swiper(요소, 옵션);
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
```
- ```direction```: 슬라이드 방향 설정
- ```autoplay```: 자동 재생 여부
- ```loop```: 반복 재생 여부 (true - 반복 재생, false - 반복 재생 하지 않음)


### 요소 중앙 정렬: calc() 함수
___
1. calc(): 괄호 안의 식을 계산한 결과를 속성값으로 사용하게 해주는 함수
2. 중앙 정렬
- left: 50%로 설정 해준 뒤, margin-left에 calc로 절반 값을 계산해서 당겨줌 

### 특정 비율로 유지하기 : padding-top 이용
___
```
//html
<div class="container">
  <div class="item"></div>
</div>

//css
.container{
     width:200px;
     background-color:royalblue;
 }
 .container .item{
      width:100%;
      height: 0;
      padding-top: 56.25%;
  }
  ```
  - 16:9 비율 유지
