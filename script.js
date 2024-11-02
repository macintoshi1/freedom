// ハンバーガーメニューの制御
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
});

// スムーススクロール
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

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".nav-menu");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backgroundImage = new Image();
    const heroSection = document.querySelector('.hero');
    const logoImage = document.querySelector('.hero .logo img');

    // 背景画像のパス
    backgroundImage.src = "./images/IMG_9316_03.jpeg";
    
    // 背景画像が読み込まれたらロゴのアニメーションクラスを追加
    backgroundImage.onload = () => {
        logoImage.classList.add('animate-logo');
    };
});

