# 스타벅스 클론 코딩
웹프론트앤드 기초 쌓기 - 스타벅스 페이지 클론 코딩


01. 시작하기
- favicon.ico : 해당 탭의 아이콘으로 자동 지정
- <link>태그로 제공: rel속성 icon 지정 후 href로 파일 연결


02. 오픈 그래프(The Open Graph protocol): 웹 페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보 지정
- 기본적인 로고, 설명 등의 간단한 정보 취급
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
og:type: 페이지의 유형(E.g, website, video.movie)
og:site_name: 속한 사이트의 이름
og:title: 페이지의 이름(제목)
og:description: 페이지의 간단한 설명
og:image: 페이지의 대표 이미지 주소(URL)
og:url: 페이지 주소(URL)
