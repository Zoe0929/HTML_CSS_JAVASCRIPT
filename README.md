# ☕️스타벅스 클론 코딩

웹프론트앤드 기초 쌓기 - 스타벅스 페이지 클론 코딩

___
01. 시작하기
    * favicon.ico : 해당 탭의 아이콘으로 자동 지정 
    * <link>태그로 제공: rel속성 icon 지정 후 href로 파일 연결

 
  

02. 오픈 그래프(The Open Graph protocol): 웹 페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보 지정
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


  


03. HTML 클래스 속성의 작명법_BEM(Block Element Modifier)
    - ```요소__일부분```: 언더바 기호로 요소의 일부분을 표시
    - ```요소--상태```: 하이픈 기호로 요소의 상태 표시

04. lodash 라이브러리 -_.throttle()함수
   - 수십개의 함수가 동시에 실행되게 되면 프로그램이 무거워질 수 있음  
   --> ```._throttle(함수, 시간)```를 이용해서 일정 시간 동안 한번만 실행되도록 부하를 줘서(제한을 둬서) 함수가 여러번 실행되는 것을 방지  
     
05. gsap 라이브러리: JS 애니메이션 처리 라이브러리
   -  ```gsap.to(요소, 지속시간, 옵션)  ``` : 옵션에는 css요소들 사용 가능 

