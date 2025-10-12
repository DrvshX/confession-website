// Simple Audio System - Same Folder
let music = document.getElementById('backgroundMusic');
let isPlaying = false;
let currentSongIndex = 0;
const songs = [
    'ArzKiyaHai.mp3',
    'Sahiba.mp3'
];

// Content for each section
const contentData = {
    aboutMe: {
        title: "Something About Me 😃",
        content: `
            <div class="content-section">
                <div class="content-item">
                    <div class="item-icon">🎓</div>
                    <h3>I'm a Student</h3>
                    <p>Currently studying at Xavier's Institute of Engineering, working on amazing projects!</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">💻</div>
                    <h3>Tech Enthusiast</h3>
                    <p>I love coding, building websites, and creating cool FPGA projects. Technology is my passion!</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">🎵</div>
                    <h3>Music Lover</h3>
                    <p>I enjoy romantic Hindi songs (like the ones playing right now) and creating beautiful experiences!</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">💕</div>
                    <h3>Hopeless Romantic</h3>
                    <p>I believe in making magical moments and creating memories that last forever!</p>
                </div>
            </div>
        `
    },
    aboutYou: {
        title: "🌸 Something About You 🌸",
        content: `
            <div class="content-section">
                <div class="content-item">
                    <div class="item-icon">✨</div>
                    <h3>Your Beautiful Smile</h3>
                    <p>Every time I see your smile, it lights up my entire world and makes everything better!</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">💫</div>
                    <h3>Your Amazing Personality</h3>
                    <p>You're the most incredible person I know - kind, genuine, and absolutely wonderful!</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">🌟</div>
                    <h3>Your Positive Energy</h3>
                    <p>You have this amazing ability to make everyone around you happy and feel special!</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">💖</div>
                    <h3>How You Make Me Feel</h3>
                    <p>You make ordinary moments feel magical, and I can't help but smile whenever I think of you!</p>
                </div>
            </div>
        `
    },
    horrendous: {
        title: "Something 'Horrendous' 😁",
        content: `
            <div class="content-section">
                <div class="content-item">
                    <div class="item-icon">😅</div>
                    <h3>My Confession</h3>
                    <p>I've been wanting to tell you this for so long, but I was too nervous to say it in person...</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">💭</div>
                    <h3>The Truth Is...</h3>
                    <p>I think about you more than I probably should, and you've completely stolen my heart!</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">🙈</div>
                    <h3>I Built This Website</h3>
                    <p>I spent countless hours creating this magical experience just to ask you one important question...</p>
                </div>
                <div class="content-item">
                    <div class="item-icon">💕</div>
                    <h3>The 'Horrendous' Part</h3>
                    <p>I'm absolutely, completely, and hopelessly falling for you, Shreeya! 💖</p>
                </div>
            </div>
        `
    }
};

// Particle System (same as before)
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Typewriter Effect (same as before)
class TypewriterEffect {
    constructor() {
        this.text = "Something magical is about to happen...";
        this.index = 0;
        this.element = document.getElementById('typewriterText');
        this.start();
    }
    
    start() {
        const timer = setInterval(() => {
            this.element.textContent = this.text.slice(0, this.index);
            this.index++;
            
            if (this.index > this.text.length) {
                clearInterval(timer);
                setTimeout(() => {
                    document.getElementById('introAnimation').style.opacity = '0';
                    setTimeout(() => {
                        document.getElementById('introAnimation').style.display = 'none';
                        this.animateMessageCards();
                    }, 500);
                }, 1000);
            }
        }, 80);
    }
    
    animateMessageCards() {
        const cards = document.querySelectorAll('.message-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('slide-in');
            }, index * 600);
        });
    }
}

// Fireworks System (same as before)
class FireworksSystem {
    constructor() {
        this.container = document.getElementById('fireworksContainer');
    }
    
    launch() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createFirework();
            }, i * 300);
        }
    }
    
    createFirework() {
        const firework = document.createElement('div');
        firework.style.position = 'fixed';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.top = Math.random() * window.innerHeight + 'px';
        firework.style.width = '4px';
        firework.style.height = '4px';
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        firework.style.borderRadius = '50%';
        firework.style.pointerEvents = 'none';
        firework.style.zIndex = '1500';
        
        this.container.appendChild(firework);
        
        setTimeout(() => {
            firework.style.transform = 'scale(20)';
            firework.style.opacity = '0';
            firework.style.transition = 'all 1s ease-out';
            
            setTimeout(() => {
                firework.remove();
            }, 1000);
        }, 100);
    }
}

// New Interactive Functions
function showAboutMe() {
    showContentModal('aboutMe');
}

function showAboutYou() {
    showContentModal('aboutYou');
}

function showHorrendous() {
    showContentModal('horrendous');
}

function showContentModal(type) {
    const modal = document.getElementById('contentModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.innerHTML = contentData[type].title;
    content.innerHTML = contentData[type].content;
    
    modal.style.display = 'flex';
}

function closeContentModal() {
    document.getElementById('contentModal').style.display = 'none';
}

function showFinalQuestion() {
    closeContentModal();
    
    // Hide menu cards
    const messageCards = document.querySelector('.message-cards');
    messageCards.style.display = 'none';
    
    // Show final question
    const finalQuestion = document.getElementById('finalQuestion');
    finalQuestion.style.display = 'block';
    finalQuestion.style.animation = 'slideInUp 0.8s ease-out forwards';
}

function goBack() {
    // Show menu cards
    const messageCards = document.querySelector('.message-cards');
    messageCards.style.display = 'block';
    
    // Hide final question
    const finalQuestion = document.getElementById('finalQuestion');
    finalQuestion.style.display = 'none';
    
    // Hide back button
    document.getElementById('backButtonContainer').style.display = 'none';
}

// Audio Functions (same as before)
function initializeAudio() {
    music.volume = 0.2; // 20% volume
    music.src = songs[currentSongIndex];
    
    music.addEventListener('ended', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        music.src = songs[currentSongIndex];
        if (isPlaying) {
            setTimeout(() => {
                music.play().catch(e => console.log('Next song failed'));
            }, 500);
        }
    });
}

function updateMusicButton() {
    const equalizer = document.querySelector('.equalizer');
    const playIcon = document.querySelector('.play-icon');
    
    if (isPlaying && !music.paused) {
        equalizer.style.display = 'flex';
        playIcon.style.display = 'none';
    } else {
        equalizer.style.display = 'none';
        playIcon.style.display = 'block';
    }
}

function toggleMusic() {
    if (isPlaying && !music.paused) {
        music.pause();
        isPlaying = false;
    } else {
        music.play().then(() => {
            isPlaying = true;
        }).catch(e => {
            music.load();
            setTimeout(() => {
                music.play().then(() => {
                    isPlaying = true;
                }).catch(err => {});
            }, 1000);
        });
    }
    updateMusicButton();
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    new ParticleSystem();
    new TypewriterEffect();
    initializeAudio();
    
    const enableAudio = function() {
        music.play().then(() => {
            isPlaying = true;
            updateMusicButton();
        }).catch(e => {});
        
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('touchstart', enableAudio);
    };
    
    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
});

// Final Answer Functions (same as before)
function handleYes() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'flex';
    
    if (!isPlaying || music.paused) {
        music.play().then(() => {
            isPlaying = true;
            updateMusicButton();
        }).catch(e => {});
    }
    
    const fireworks = new FireworksSystem();
    fireworks.launch();
    createHeartExplosion();
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 8000);
}

function createHeartExplosion() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1600';
        heart.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(heart);
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = 200 + Math.random() * 100;
        const duration = 2000 + Math.random() * 1000;
        
        setTimeout(() => {
            heart.style.transform = `translate(-50%, -50%) 
                translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) 
                scale(0) rotate(720deg)`;
            heart.style.opacity = '0';
            heart.style.transition = `all ${duration}ms ease-out`;
            
            setTimeout(() => heart.remove(), duration);
        }, 100);
    }
}

function handleNo() {
    const noBtn = document.querySelector('.no-btn');
    const responses = [
        "Are you sure? 🥺",
        "Think about it... 💭",  
        "Just one coffee? ☕",
        "I promise it'll be amazing! ✨",
        "Pretty please? 🙏"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    noBtn.querySelector('.btn-text').textContent = randomResponse;
    
    noBtn.style.animation = 'shake 0.5s ease-in-out';
    
    setTimeout(() => {
        noBtn.style.animation = '';
        noBtn.querySelector('.btn-text').textContent = "Maybe Later";
    }, 2000);
}

// Add shake animation
const shakeKeyframes = `
@keyframes shake {
    0%, 100% { transform: translateX(0) translateY(-3px); }
    25% { transform: translateX(-5px) translateY(-3px); }
    75% { transform: translateX(5px) translateY(-3px); }
}`;

const styleSheet = document.createElement('style');
styleSheet.textContent = shakeKeyframes;
document.head.appendChild(styleSheet);
