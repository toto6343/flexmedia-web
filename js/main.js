// 로딩 화면 처리
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 800);
});

// 모든 article 요소들을 변수에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

// 각 article에 이벤트 리스너 추가
items.forEach((el, index) => {
    // 마우스 진입 시 비디오 재생
    el.addEventListener("mouseenter", e => {
        const video = e.currentTarget.querySelector("video");
        if (video) {
            video.play().catch(err => console.log('Video play failed:', err));
        }
    });

    // 마우스 떠날 때 비디오 일시정지
    el.addEventListener("mouseleave", e => {
        const video = e.currentTarget.querySelector("video");
        if (video) {
            video.pause();
        }
    });

    // 클릭 시 팝업 열기
    el.addEventListener("click", e => {
        // 제목, 본문, 비디오 소스 가져오기
        const tit = e.currentTarget.querySelector("h2").innerText;
        const txt = e.currentTarget.querySelector("p").innerText;
        const vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        // aside 요소에 내용 적용
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        // 비디오 재생 및 팝업 활성화
        const asideVideo = aside.querySelector("video");
        asideVideo.play().catch(err => console.log('Aside video play failed:', err));
        
        // 약간의 딜레이 후 팝업 활성화 (부드러운 전환)
        setTimeout(() => {
            aside.classList.add("on");
        }, 50);

        // 메인 섹션의 비디오들 일시정지
        items.forEach(item => {
            item.querySelector("video").pause();
        });
    });
});

// 닫기 버튼 클릭 이벤트
close.addEventListener("click", () => {
    aside.classList.remove("on");
    const asideVideo = aside.querySelector("video");
    asideVideo.pause();
    asideVideo.currentTime = 0;
});

// ESC 키로 팝업 닫기
document.addEventListener("keydown", e => {
    if (e.key === "Escape" && aside.classList.contains("on")) {
        close.click();
    }
});

// aside 배경 클릭 시 닫기
aside.addEventListener("click", e => {
    if (e.target === aside) {
        close.click();
    }
});

// 부드러운 스크롤 효과
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});