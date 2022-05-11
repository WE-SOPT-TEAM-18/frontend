# Netflix
29기 WE SOPT 합동 세미나 18조

## 📌 Convention
- Code Convention
  - ESLint, prettier 사용
  - 변수, 함수 : Camel case 사용
  - 컴포넌트를 정의한 파일 : Pascal case 사용
  - styled-components : 코드 하단에 작성하기, px 대신 rem 사용하기
  
- Commit Message Convention

  ```
  #   init     : 초기화
  #   feat     : 기능 추가
  #   update   : 기능 보완 (업그레이드)
  #   fix      : 버그 수정
  #   refactor : 리팩토링
  #   style    : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음, 스타일)
  #   docs     : 문서 (Readme 추가, 수정, 삭제)
  #   test     : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
  #   chore    : 기타 변경사항 (빌드 스크립트 수정, 에셋 추가 등)
  ```

## 🌳 브랜치 전략
- **master - develop - feature**
- master : 배포
- develop : 개발된 기능(feature)을 통합하는 브랜치
- feat/[name] (`feat/hyoin`, `feat/jiyeon`, `feat/chaeryang`) : 멤버별 기능 개발을 진행하는 브랜치

## 🛠 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=Yarn&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/> <img src="https://img.shields.io/badge/Eslint-4B3263?style=flat-square&logo=Eslint&logoColor=white"/>

```
"axios": "^0.24.0",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.0.2",
"react-slick": "^0.28.1",
"slick-carousel": "^1.8.1",
"react-scripts": "^4.0.3",
"styled-reset": "^4.3.4",
"styled-components": "^5.3.3",
"web-vitals": "^1.0.1"
```

## 📂 폴더 구조
```
📦.git
 ┗ ...
📦.vscode
 ┗ 📜settings.json
📦public
 ┗ 📜index.html
📦src
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┃ ┗ 📜~.svg
 ┃ ┗ 📂images
 ┃ ┃ ┗ 📜~.png
 ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜GlobalStyle.js
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Router.jsx
 ┃ ┃ ┗ 📜theme.js
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜Billboard.jsx
 ┃ ┃ ┣ 📜HeartContent.jsx
 ┃ ┃ ┣ 📜MovieData.js
 ┃ ┃ ┣ 📜Top8List.jsx
 ┃ ┃ ┣ 📜UserPick.jsx
 ┃ ┃ ┣ 📜UserRecommend.jsx
 ┃ ┃ ┗ 📜WatchingContent.jsx
 ┃ ┣ 📂Sub
 ┃ ┃ ┣ 📜LikeCards.jsx
 ┃ ┃ ┣ 📜LikeData.js
 ┃ ┃ ┣ 📜LikeFiles.jsx
 ┃ ┃ ┗ 📜LikeThumbnail.jsx
 ┣ 📂pages
 ┃ ┣ 📜Main.jsx
 ┃ ┗ 📜Sub.jsx
 ┣ 📜App.jsx
 ┗ 📜index.js
📜.eslintrc.js
📜.gitignore
📜.prettierrc
📜jsconfig.json
📜package.json
📜README.md
📜yarn.lock
```

## ✨ 구현 화면
|Desktop|Tablet|Mobile|
|-|-|-|
|![image](https://user-images.githubusercontent.com/58380158/167907371-7bd0fd4e-79cf-4513-a6b2-723474d0f3ab.png)![image](https://user-images.githubusercontent.com/58380158/167907720-9087b71a-f33b-46f7-a360-81377e6857d4.png)|![image](https://user-images.githubusercontent.com/58380158/167908241-c8120bee-79d9-4251-aa0d-70a3f39ac4cf.png)![image](https://user-images.githubusercontent.com/58380158/167908277-c80c7756-efb1-4e77-8db9-06584b962942.png)|![image](https://user-images.githubusercontent.com/58380158/167908462-115613aa-b7ed-4c0d-885f-e8e4936bc01f.png)![image](https://user-images.githubusercontent.com/58380158/167908480-bc1a8af0-dd72-411f-9e3f-97ab1b4e3306.png)|

## ❤ 개발자 소개
|김효인|백지연|안채량|
|---|---|---|
|[@Hyoin-Kim](https://github.com/Hyoin-Kim)|[@100Gyeon](https://github.com/100Gyeon)|[@Ryammie](https://github.com/Ryammie)|
