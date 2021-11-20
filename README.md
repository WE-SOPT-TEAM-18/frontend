# Netflix
29기 WE SOPT 합동 세미나 18조

## 📌 Convention
- Prettier + ESLint로 Code Convention 설정
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
```
"axios": "^0.24.0",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.0.2",
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
 ┃ ┃ ┣ 📜HeartData.js
 ┃ ┃ ┣ 📜MovieData.js
 ┃ ┃ ┣ 📜Top10Data.js
 ┃ ┃ ┣ 📜Top10List.jsx
 ┃ ┃ ┣ 📜UserPick.jsx
 ┃ ┃ ┣ 📜UserRecommend.jsx
 ┃ ┃ ┣ 📜WatchingContent.jsx
 ┃ ┃ ┗ 📜WatchingData.js
 ┃ ┣ 📂Sub
 ┃ ┃ ┣ 📜LikeData.js
 ┃ ┃ ┗ 📜LikeFiles.jsx
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

## 🙋🏻‍♀️ 개발자 소개
|김효인|백지연|안채량|
|-|-|-|
|[@Hyoin-Kim](https://github.com/Hyoin-Kim)|[@100Gyeon](https://github.com/100Gyeon)|[@Ryammie](https://github.com/Ryammie)|
