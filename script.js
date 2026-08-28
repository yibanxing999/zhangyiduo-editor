// Portfolio Website JavaScript

// Project Data
const projects = [
    {
        id: 1,
        name: "城市脉动 - 品牌宣传片",
        type: "品牌宣传片",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        cover: "https://picsum.photos/seed/project1/800/450.jpg",
        description: "为城市品牌打造的高端宣传片，展现现代都市的活力与魅力。",
        source: "原始素材：城市风光、人物访谈",
        comparison: "原始素材为散乱的航拍镜头和采访片段，通过精细的剪辑和节奏把控，将零散的画面整合成流畅的品牌故事，配乐采用渐进式音乐设计，增强情感共鸣。"
    },
    {
        id: 2,
        name: "自然之韵 - 纪录片",
        type: "纪录片",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        cover: "https://picsum.photos/seed/project2/800/450.jpg",
        description: "记录自然生态的纪录片，展现野生动物的生存状态。",
        source: "原始素材：野外拍摄4K素材",
        comparison: "原始素材长达8小时，通过多线叙事结构，将自然观察、科学解释和人文关怀三个维度有机结合，运用延时摄影和慢动作技术增强视觉冲击力。"
    },
    {
        id: 3,
        name: "都市夜话 - 短视频系列",
        type: "短视频",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        cover: "https://picsum.photos/seed/project3/800/450.jpg",
        description: "深夜都市故事系列，展现现代都市人的情感世界。",
        source: "原始素材：街头采访、城市夜景",
        comparison: "将街头随机采访的碎片化素材，通过主题分类和情感共鸣点筛选，重新构建成有深度的系列故事，每个片段控制在3分钟内，适合社交媒体传播。"
    },
    {
        id: 4,
        name: "产品之光 - 商业广告",
        type: "商业广告",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        cover: "https://picsum.photos/seed/project4/800/450.jpg",
        description: "高端产品广告，突出产品细节和使用场景。",
        source: "原始素材：产品特写、模特演示",
        comparison: "原始素材包括产品多角度拍摄和模特展示，通过动态转场和微距特写突出产品质感，添加光效增强产品的高级感，节奏紧凑，信息传递清晰。"
    },
    {
        id: 5,
        name: "音乐MV - 独立音乐",
        type: "音乐MV",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        cover: "https://picsum.photos/seed/project5/800/450.jpg",
        description: "独立音乐人的首支单曲MV，融合多种视觉元素。",
        source: "原始素材：乐队演出、创意场景",
        comparison: "将乐队现场演出与创意拍摄素材相结合，运用快速剪辑和慢镜头对比，增强视觉节奏感，色彩校正营造独特的艺术氛围。"
    },
    {
        id: 6,
        name: "建筑之美 - 建筑宣传片",
        type: "建筑宣传片",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        cover: "https://picsum.photos/seed/project6/800/450.jpg",
        description: "现代建筑的空间美学展示，强调设计理念和建筑细节。",
        source: "原始素材：建筑多角度拍摄、航拍",
        comparison: "通过推拉摇移等多种运镜手法，展现建筑的线条美和空间感，结合延时摄影表现光影变化，配乐选择现代风格增强科技感。"
    }
];

// Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero Video Controls
const heroVideo = document.getElementById('heroVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const soundBtn = document.getElementById('soundBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

playPauseBtn.addEventListener('click', () => {
    if (heroVideo.paused) {
        heroVideo.play();
        playPauseBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
        `;
    } else {
        heroVideo.pause();
        playPauseBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
            </svg>
        `;
    }
});

soundBtn.addEventListener('click', () => {
    heroVideo.muted = !heroVideo.muted;
    soundBtn.classList.toggle('active', heroVideo.muted);
    soundBtn.innerHTML = heroVideo.muted ?
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>` :
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>`;
});

fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        heroVideo.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <video class="project-video" data-src="${project.video}" preload="none">
                <source src="${project.video}" type="video/mp4">
            </video>
            <img src="${project.cover}" alt="${project.name}" class="project-cover">
            <div class="video-overlay" data-id="${project.id}">
                <div class="play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-type">${project.type}</p>
                <p class="project-description">${project.description}</p>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Lazy Loading for Project Videos
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();

    // Intersection Observer for lazy loading
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const src = video.getAttribute('data-src');
                if (src) {
                    video.src = src;
                    video.removeAttribute('data-src');
                    videoObserver.unobserve(video);
                }
            }
        });
    }, {
        rootMargin: '100px'
    });

    document.querySelectorAll('.project-video').forEach(video => {
        videoObserver.observe(video);
    });

    // Add click event listeners to video overlays
    document.querySelectorAll('.video-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            const projectId = parseInt(e.currentTarget.dataset.id);
            openProjectDetail(projectId);
        });
    });
});


// Video Playback Control
let currentPlayingVideo = null;

document.addEventListener('click', (e) => {
    // Handle video overlay clicks
    if (e.target.closest('.video-overlay')) {
        const overlay = e.target.closest('.video-overlay');
        const video = overlay.previousElementSibling;
        const projectId = parseInt(overlay.dataset.id);
        const project = projects.find(p => p.id === projectId);

        if (project && video) {
            // Pause all other videos
            document.querySelectorAll('.project-video').forEach(v => {
                if (v !== video && !v.paused) {
                    v.pause();
                }
            });

            // Play this video
            video.play();

            // Hide overlay when video starts playing
            video.addEventListener('play', function onPlay() {
                overlay.style.opacity = '0';
                video.removeEventListener('play', onPlay);
            }, { once: true });

            // Show overlay when video ends
            video.addEventListener('ended', function onEnd() {
                overlay.style.opacity = '1';
                video.removeEventListener('ended', onEnd);
            }, { once: true });
        }
    }
});


// Add smooth reveal animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(section);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && editModal.style.display === 'block') {
        editModal.style.display = 'none';
    }
});

// Mobile touch optimization
if ('ontouchstart' in window) {
    document.querySelectorAll('.control-btn, .nav-link, button').forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.95)';
        });
        element.addEventListener('touchend', () => {
            element.style.transform = 'scale(1)';
        });
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// CSS for toast notification
const style = document.createElement('style');
style.textContent = `
    .toast {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(102, 126, 234, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 3000;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(10px);
    }
`;
document.head.appendChild(style);