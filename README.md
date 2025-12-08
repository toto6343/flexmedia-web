# 🌊 Surfing Gallery - Premium Edition

하와이 노스쇼어의 웅장한 파도와 서핑 문화를 담은 프리미엄 비주얼 갤러리 웹사이트입니다.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 목차

- [주요 기능](https://claude.ai/chat/a8bf976c-6002-4785-9b89-f6a42137e1e8#-%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5)
- [기술 스택](https://claude.ai/chat/a8bf976c-6002-4785-9b89-f6a42137e1e8#-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
- [설치 방법](https://claude.ai/chat/a8bf976c-6002-4785-9b89-f6a42137e1e8#-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95)
- [파일 구조](https://claude.ai/chat/a8bf976c-6002-4785-9b89-f6a42137e1e8#-%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0)
- [사용 방법](https://claude.ai/chat/a8bf976c-6002-4785-9b89-f6a42137e1e8#-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95)
- [커스터마이징](https://claude.ai/chat/a8bf976c-6002-4785-9b89-f6a42137e1e8#-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95)
- [브라우저 호환성](https://claude.ai/chat/a8bf976c-6002-4785-9b89-f6a42137e1e8#-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%ED%98%B8%ED%99%98%EC%84%B1)
- [라이선스](https://claude.ai/chat/a8bf976c-6002-4785-9b89-f6a42137e1e8#-%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4)

## ✨ 주요 기능

### 🎨 시각적 효과

- **그라데이션 배경** : 청록색 계열의 부드러운 그라데이션 배경
- **글래스모피즘** : 반투명 블러 효과로 현대적인 UI 구현
- **애니메이션** : 페이지 로드 시 순차적으로 나타나는 요소들
- **호버 효과** : 마우스 오버 시 카드가 확대되며 위로 떠오르는 효과

### ⚡ 인터랙션

- **비디오 자동 재생** : 마우스 호버 시 비디오 자동 재생/정지
- **상세 팝업** : 카드 클릭 시 전체 화면 팝업으로 상세 내용 표시
- **키보드 지원** : ESC 키로 팝업 닫기
- **배경 클릭** : 팝업 외부 클릭으로 닫기 가능
- **로딩 화면** : 우아한 스피너 애니메이션

### 📱 반응형 디자인

- 1200px 이하에서 모바일 레이아웃 자동 전환
- 모든 디바이스에서 최적화된 사용자 경험

## 🛠 기술 스택

- **HTML5** : 시맨틱 마크업
- **CSS3** :
- Flexbox 레이아웃
- CSS Grid
- CSS 애니메이션 & 트랜지션
- Backdrop-filter (글래스모피즘)
- 미디어 쿼리 (반응형)
- **JavaScript (ES6+)** :
- DOM 조작
- 이벤트 리스너
- 비디오 API
- **Font Awesome** : 아이콘
- **Google Fonts** :
- Alegreya Sans SC
- Poppins

## 📦 설치 방법

### 1. 저장소 클론

```bash
git clone https://github.com/yourusername/surfing-gallery.git
cd surfing-gallery
```

### 2. 파일 구조 확인

프로젝트의 파일 구조가 다음과 같은지 확인하세요:

```
surfing-gallery/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── vids/
│   ├── vid1.mp4
│   ├── vid2.mp4
│   ├── vid3.mp4
│   └── vid4.mp4
├── favicon.ico (선택사항)
└── README.md
```

### 3. 비디오 파일 준비

`vids` 폴더에 다음 비디오 파일들을 준비하세요:

- `vid1.mp4` - 완벽한 파도
- `vid2.mp4` - 서핑 라이프
- `vid3.mp4` - 태평양의 장엄함
- `vid4.mp4` - 빅웨이브 챌린지

> 💡 **팁** : 무료 비디오는 [Pixabay](https://pixabay.com/videos/) 또는 [Pexels](https://www.pexels.com/videos/)에서 다운로드할 수 있습니다.

### 4. 실행

웹 브라우저로 `index.html` 파일을 열거나, 로컬 서버를 실행하세요:

```bash
# Python 3 사용 시
python -m http.server 8000

# Node.js live-server 사용 시
npx live-server
```

브라우저에서 `http://localhost:8000` 접속

## 📂 파일 구조

### index.html

메인 HTML 구조 파일로, 다음 섹션들을 포함합니다:

- 로딩 화면
- 헤더 (로고 및 브랜드명)
- 내비게이션 (문의 및 검색 아이콘)
- 갤러리 섹션 (4개의 article 카드)
- 상세 팝업 (aside)

### css/style.css

모든 스타일링을 담당:

- 리셋 스타일
- 레이아웃 (Flexbox)
- 애니메이션 정의
- 호버 효과
- 반응형 미디어 쿼리
- 글래스모피즘 효과

### js/main.js

모든 인터랙션 로직:

- 로딩 화면 제어
- 비디오 재생/정지
- 팝업 열기/닫기
- 키보드 이벤트 (ESC)
- 부드러운 스크롤

## 🎮 사용 방법

### 기본 탐색

1. **마우스 호버** : 각 갤러리 카드에 마우스를 올리면 비디오가 재생되고 카드가 확대됩니다
2. **카드 클릭** : 카드를 클릭하면 전체 화면 팝업이 열립니다
3. **팝업 닫기** :

- "닫기" 버튼 클릭
- ESC 키 누르기
- 팝업 배경 클릭

### 키보드 단축키

- `ESC`: 팝업 닫기

## 🎨 커스터마이징

### 색상 변경

`css/style.css` 파일에서 다음 변수들을 수정하세요:

```css
/* 메인 색상 */
#00796b  /* 다크 청록색 */
#ffab40  /* 오렌지 액센트 */
#4db6ac  /* 밝은 청록색 */

/* 배경 그라데이션 */
background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 50%, #80deea 100%);
```

### 콘텐츠 수정

`index.html`에서 각 article의 내용을 변경:

```html
<article>
  <div class="inner">
    <div class="txt">
      <h2>제목을 여기에</h2>
      <p>설명을 여기에 작성하세요.</p>
    </div>
    <figure>
      <video src="vids/your-video.mp4" muted loop></video>
    </figure>
  </div>
</article>
```

### 갤러리 카드 추가

section 태그 내에 새로운 article을 추가하고, CSS에서 애니메이션 딜레이를 조정:

```css
main section article:nth-child(5) {
  animation-delay: 0.5s;
}
```

### 폰트 변경

Google Fonts에서 원하는 폰트를 선택하고 `style.css` 상단의 import를 수정:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600&display=swap");
```

## 🌐 브라우저 호환성

| 브라우저 | 최소 버전 |
| -------- | --------- |
| Chrome   | 90+ ✅    |
| Firefox  | 88+ ✅    |
| Safari   | 14+ ✅    |
| Edge     | 90+ ✅    |
| Opera    | 76+ ✅    |

### 주요 기능 요구사항

- CSS Grid & Flexbox
- CSS Backdrop-filter
- ES6+ JavaScript
- HTML5 Video API

## 🔧 문제 해결

### 비디오가 재생되지 않는 경우

- 비디오 파일 경로 확인
- 비디오 코덱 확인 (H.264 권장)
- 브라우저 콘솔에서 에러 확인

### 애니메이션이 작동하지 않는 경우

- 하드웨어 가속 확인
- CSS 파일 로드 확인
- 브라우저 캐시 삭제

### 반응형이 작동하지 않는 경우

- 뷰포트 메타 태그 확인
- 브라우저 개발자 도구에서 반응형 모드 테스트

## 📝 업데이트 내역

### v2.0.0 (2025-12-08)

- 🎨 글래스모피즘 UI 적용
- ⚡ 성능 최적화
- 📱 완전한 반응형 지원
- 🎬 부드러운 애니메이션 추가
- ⌨️ 키보드 단축키 지원

### v1.0.0 (2025-01-01)

- 🎉 초기 릴리스
- 기본 갤러리 기능

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🙏 감사의 말

- [Font Awesome](https://fontawesome.com/) - 아이콘 제공
- [Google Fonts](https://fonts.google.com/) - 웹 폰트 제공
- [Pixabay](https://pixabay.com/) - 무료 비디오 소스

---

⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!

🌊 **Happy Surfing!** 🏄‍♂️
