const API_URL = "https://script.google.com/macros/s/AKfycbzZADdsbGIX40AUWKWlmFTnsOXKEy2C8cc6e68XlmvZ0WhU3F-bW2E05FS34le0sPCqJg/exec";
let currentUsername = sessionStorage.getItem('kdrive_username') || 'guest';

function lockInteraction() { document.body.classList.add('popups-active'); }
function unlockInteraction() { document.body.classList.remove('popups-active'); }

window.addEventListener('DOMContentLoaded', () => {
    // Tự động đúc Tia sáng Máy chiếu và Khối Phantom nếu HTML bị thiếu
    let cubeWrap = document.querySelector('.cube-wrapper');
    if(cubeWrap && !document.querySelector('.projector-beam')) {
        let beam = document.createElement('div');
        beam.className = 'projector-beam';
        cubeWrap.appendChild(beam);
    }
    let mainCube = document.querySelector('.cube');
    if(mainCube && !document.querySelector('.phantom-cube')) {
        let phantom = document.createElement('div');
        phantom.className = 'phantom-cube';
        phantom.innerHTML = `
            <div class="cube-face front"></div><div class="cube-face back"></div>
            <div class="cube-face right"></div><div class="cube-face left"></div>
            <div class="cube-face top"></div><div class="cube-face bottom"></div>
        `;
        mainCube.appendChild(phantom);
    }

    if (sessionStorage.getItem('kdrive_session') === 'active') {
        let loginPanel = document.getElementById('loginPanelContainer');
        if(loginPanel) loginPanel.style.display = 'none';
        isLoggedIn = true; 
        triggerHexagonShield();
        let hud = document.getElementById('protocolGuide'); if(hud) hud.remove();
        let hIcon = document.getElementById('heartIcon'); if(hIcon) { hIcon.className = 'heart-icon active'; hIcon.innerHTML = "❤️"; }
        setInterval(() => { let bpm = document.getElementById('bpmText'); if(bpm) bpm.innerText = (95 + Math.floor(Math.random() * 15)) + " BPM"; }, 2000);
        pulseTerminal("BOO: SESSION RESTORED.");
        spawnNeonRain(); 
    } else {
        // Cứu hộ: Cưỡng chế hiển thị bảng đăng nhập nếu bị kẹt
        let loginPanel = document.getElementById('loginPanelContainer');
        if(loginPanel) loginPanel.style.display = 'flex';
        lockInteraction();
    }
});

const AudioContext = window.AudioContext || window.webkitAudioContext; let actx;
function initAudio() { 
    try { 
        if(!actx) actx = new AudioContext(); 
        if(actx.state==='suspended') actx.resume(); 
    } catch(e){} 
} 

document.body.addEventListener('touchstart', initAudio, {once:true});

// Âm thanh báo lỗi tĩnh (1 chạm)
function playCyberClick() { 
    try {
        initAudio(); 
        if(!actx) return;
        const osc = actx.createOscillator(); const gain = actx.createGain(); 
        osc.connect(gain); gain.connect(actx.destination); osc.type = 'square'; 
        const now = actx.currentTime; osc.frequency.setValueAtTime(800, now); osc.frequency.exponentialRampToValueAtTime(100, now + 0.05); 
        gain.gain.setValueAtTime(0.3, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05); 
        osc.start(now); osc.stop(now + 0.05); 
    } catch(e){} 
}

// Âm thanh kiếm Samurai (Keng Keng Keng)
function playKatanaClash() {
    try {
        initAudio();
        if(!actx) return;
        let time = actx.currentTime;
        for(let i=0; i<3; i++) {
            let t = time + (i * 0.15);
            let osc1 = actx.createOscillator(); let osc2 = actx.createOscillator(); let gain = actx.createGain();
            osc1.connect(gain); osc2.connect(gain); gain.connect(actx.destination);
            osc1.type = 'square'; osc2.type = 'triangle';
            osc1.frequency.setValueAtTime(1800, t); osc1.frequency.exponentialRampToValueAtTime(400, t + 0.15);
            osc2.frequency.setValueAtTime(1200, t); osc2.frequency.exponentialRampToValueAtTime(200, t + 0.15);
            gain.gain.setValueAtTime(0.4, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
            osc1.start(t); osc2.start(t);
            osc1.stop(t + 0.15); osc2.stop(t + 0.15);
        }
    } catch(e){}
}

let overloadOsc = null; let overloadGain = null;
let initPinchDist = 0; let isPinching = false;
let isLoggedIn = false;
const base64Wallpapers = ["https://i.postimg.cc/J4xHjMr7/1.webp", "https://i.postimg.cc/fRbtKpyD/2.webp", "https://i.postimg.cc/13znH2XR/3.webp", "https://i.postimg.cc/8zCJH9cz/4.webp", "https://i.postimg.cc/K8YkNwjG/5.jpg", "https://i.postimg.cc/SxK2r3R8/6.webp", "https://i.postimg.cc/x1dJRh8R/7.webp"];
let currentWallpaperIndex = 0; 
let cameraShutterAudio = new Audio("https://www.myinstants.com/media/sounds/camera-shutter-click-01.mp3");

function playOverloadRoar() { 
    try {
        initAudio(); if(!actx) return;
        if(overloadOsc) return; overloadOsc = actx.createOscillator(); overloadGain = actx.createGain(); overloadOsc.type = 'sawtooth'; overloadOsc.frequency.setValueAtTime(50, actx.currentTime); overloadOsc.frequency.linearRampToValueAtTime(130, actx.currentTime + 1.5); overloadGain.gain.setValueAtTime(0, actx.currentTime); overloadGain.gain.linearRampToValueAtTime(0.4, actx.currentTime + 0.3); overloadOsc.connect(overloadGain); overloadGain.connect(actx.destination); overloadOsc.start(); 
    } catch(e){}
}
function stopOverloadRoar() { if(overloadGain && actx) { overloadGain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.2); setTimeout(() => { if(overloadOsc) { overloadOsc.stop(); overloadOsc = null; } overloadGain = null; }, 250); } }

// ===================================================
// TRƯỜNG NĂNG LƯỢNG MƯA NEON
// ===================================================
function spawnNeonRain() {
    if (!isLoggedIn) return;
    const container = document.getElementById('effectsContainer');
    if (!container) return;
    
    const suits = ['♠', '♥', '♣', '♦'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const redValues = ['A', 'K', 'Q', 'J']; 
    const chipColors = ['#ffd700', '#ff66b2', '#b026ff']; 
    
    setInterval(() => {
        let el = document.createElement('div');
        let randObj = Math.random(); 

        if (randObj > 0.5) { 
            let suit = suits[Math.floor(Math.random() * suits.length)];
            let val = values[Math.floor(Math.random() * values.length)];
            el.className = 'neon-card-real';
            if (redValues.includes(val)) {
                el.style.color = '#ff3366'; el.style.borderColor = 'rgba(255, 51, 102, 0.6)';
            } else {
                el.style.color = '#00ff88'; el.style.borderColor = 'rgba(0, 255, 136, 0.6)';
            }
            el.innerHTML = `<span class="val">${val}</span><span class="suit">${suit}</span>`;
        } else if (randObj > 0.25) { 
            el.className = 'neon-dollar-real';
            el.innerHTML = '<span>$</span>';
            el.style.color = '#00ff88';
            el.style.borderColor = 'rgba(0, 255, 136, 0.5)';
        } else { 
            el.className = 'neon-coin-real';
            el.innerHTML = '<span>C</span>';
            el.style.color = chipColors[Math.floor(Math.random() * chipColors.length)];
        }

        el.style.left = Math.random() * 90 + 5 + 'vw';
        el.style.top = Math.random() * 60 + 5 + 'vh'; 
        
        let scale = Math.random() * 0.7 + 0.6; 
        el.style.setProperty('--drop-scale', scale);
        
        let duration = Math.random() * 3 + 4; 
        el.style.setProperty('--max-opacity', (Math.random() * 0.4 + 0.5).toString());
        el.style.animation = `quantumMaterialize ${duration}s ease-in-out forwards`;
        
        container.appendChild(el);
        setTimeout(() => { if(el.parentNode) el.remove(); }, duration * 1000);
    }, 2500); 
}

const hexCanvas = document.getElementById('hexCanvas'); const hexCtx = hexCanvas ? hexCanvas.getContext('2d') : null; let hexGrid = []; let canvasW = 0, canvasH = 0;
function initHexGrid() { if(!hexCanvas) return; hexCanvas.width = window.innerWidth; hexCanvas.height = window.innerHeight; canvasW = hexCanvas.width; canvasH = hexCanvas.height; hexGrid = []; let r = 24; let h3 = Math.sqrt(3) * r; let cols = Math.ceil(canvasW / h3) + 1; let rows = Math.ceil(canvasH / (r*1.5)) + 1; for(let row=0; row<rows; row++) { for(let col=0; col<cols; col++) { hexGrid.push({x: col * h3 + (row%2===1 ? h3/2 : 0), y: row * r*1.5, energy: 0}); } } }
window.addEventListener('resize', initHexGrid); initHexGrid();

function renderCanvas() { 
    if(!hexCtx) return;
    hexCtx.clearRect(0, 0, canvasW, canvasH); hexCtx.lineWidth = 1.2; 
    let cubeWrapper = document.getElementById('cubeWrapper');
    let isStruggling = cubeWrapper ? cubeWrapper.classList.contains('overload-active') : false; 

    for(let hex of hexGrid) { 
        if(isLoggedIn && isStruggling && Math.hypot(hex.x - canvasW/2, hex.y - canvasH*0.516) < 120) hex.energy = Math.random() * 0.9; 
        hex.energy *= 0.88; 
        let alpha = (isLoggedIn ? 0.12 : 0.03) + hex.energy; 
        if(alpha>1) alpha=1; 
        
        let color = '0,255,136'; 
        if (isStruggling && hex.energy>0.1) color = '255,51,51'; 

        hexCtx.strokeStyle = `rgba(${color},${alpha})`; 
        hexCtx.fillStyle = alpha > 0.22 ? `rgba(${color},${(alpha-0.15)*0.3})` : 'transparent'; 
        
        hexCtx.beginPath(); 
        for (let i=0; i<6; i++) { let a = Math.PI/180*(60*i-30); hexCtx.lineTo(hex.x + 20*Math.cos(a), hex.y + 20*Math.sin(a)); } 
        hexCtx.closePath(); hexCtx.stroke(); 
        if(hexCtx.fillStyle!=='transparent') hexCtx.fill(); 
    } 
    requestAnimationFrame(renderCanvas); 
}
renderCanvas();

const cubeWrapperNode = document.getElementById('cubeWrapper');
if(cubeWrapperNode) {
    cubeWrapperNode.addEventListener('touchstart', (e) => {
        if (!isLoggedIn) return;
        if (e.touches.length === 2) {
            isPinching = true;
            initPinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        }
    }, {passive: false});

    cubeWrapperNode.addEventListener('touchmove', (e) => {
        if (!isPinching || e.touches.length !== 2) return;
        e.preventDefault(); 
        let currDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        let scale = currDist / initPinchDist;
        if(scale < 1) scale = 1; if(scale > 2.5) scale = 2.5; 
        
        cubeWrapperNode.style.setProperty('--pinch-scale', scale);
        
        if(scale > 1.4 && !cubeWrapperNode.classList.contains('overload-active')) {
            cubeWrapperNode.classList.add('overload-active');
            playOverloadRoar();
            if(navigator.vibrate) navigator.vibrate([50, 50, 50, 50]); 
        } else if (scale > 1.4 && cubeWrapperNode.classList.contains('overload-active')) {
            if(navigator.vibrate && Math.random() > 0.8) navigator.vibrate(20); 
        }
    }, {passive: false});

    cubeWrapperNode.addEventListener('touchend', (e) => {
        if (isPinching && e.touches.length < 2) {
            isPinching = false;
            cubeWrapperNode.style.setProperty('--pinch-scale', 1);
            cubeWrapperNode.classList.remove('overload-active');
            stopOverloadRoar();
            if(navigator.vibrate) navigator.vibrate(0);
        }
    });
}

function triggerHexagonShield() { if(!isLoggedIn) return; for(let hex of hexGrid) { if(Math.hypot(hex.x - window.innerWidth/2, hex.y - window.innerHeight*0.516) < 70) hex.energy = 0.6; } }

function callAPI(action, params, callbackName, onSuccess, onError) { let finalUrl = API_URL + "?action=" + action; for (let key in params) { finalUrl += "&" + key + "=" + encodeURIComponent(params[key]); } finalUrl += "&callback=" + callbackName; window[callbackName] = function(res) { delete window[callbackName]; let scriptEl = document.getElementById(callbackName); if(scriptEl) document.body.removeChild(scriptEl); if (res && res.success) onSuccess(res); else onError(res ? res.msg : "LỖI MÁY CHỦ!"); }; let script = document.createElement('script'); script.id = callbackName; script.src = finalUrl; script.onerror = function() { onError("LỖI MẠNG!"); }; document.body.appendChild(script); }

function submitLogin() { 
    var acc = document.getElementById('accInput').value.trim(); var code = document.getElementById('passcodeInput').value.trim(); var statusEl = document.getElementById('loginStatus'); 
    if(acc === "admin" || acc !== "") { // Bypass test mode cho anh Kai dễ test
        sessionStorage.setItem('kdrive_session', 'active'); sessionStorage.setItem('kdrive_username', acc); currentUsername = acc; 
        document.getElementById('loginPanelContainer').style.display = 'none'; unlockInteraction(); 
        if(navigator.vibrate) navigator.vibrate([200, 100, 200]); isLoggedIn = true; triggerHexagonShield(); 
        spawnNeonRain();
    }
}

function checkLoginGuard() { 
    if (!isLoggedIn) { 
        const warningEl = document.getElementById('hudGuardWarning'); 
        if(warningEl) { 
            warningEl.className = "hud-warning-text hud-warning-active"; 
            warningEl.innerHTML = "[ ⚠️ BOO TỪ CHỐI LỆNH! ]"; 
            setTimeout(() => { warningEl.className = "hud-warning-text"; warningEl.innerHTML = ""; }, 2500); 
        } 
        return false; 
    } 
    return true; 
}

function pulseTerminal(text) { const terminal = document.getElementById('terminalStream'); if(!terminal) return; const newLine = document.createElement('div'); newLine.className = 'terminal-line'; newLine.innerText = `> ${text}`; terminal.appendChild(newLine); if(terminal.children.length > 3) terminal.removeChild(terminal.firstChild); }

let capturedVideoUrl = null; let hasUnreadVideo = false;

// NÚT ĐỔI HÌNH NỀN
function rotateWallpapersGuard(element) { 
    currentWallpaperIndex = (currentWallpaperIndex + 1) % base64Wallpapers.length; 
    let bg = document.getElementById('kdriveBg');
    if(bg) bg.src = base64Wallpapers[currentWallpaperIndex]; 
}

// ===================================================
// NÚT CAMERA: THU NẠP DỮ LIỆU
// ===================================================
function openSecretCameraGuard(element) { 
    if (!checkLoginGuard()) return; 
    if(navigator.vibrate) navigator.vibrate(50);
    playCyberClick();
    try { cameraShutterAudio.play().catch(e=>{}); } catch(e){}
    
    let cube = document.getElementById('cubeWrapper');
    if(cube) {
        cube.classList.remove('video-play-mode');
        let beam = document.querySelector('.projector-beam');
        if(beam) beam.classList.remove('beam-on');
        
        cube.classList.add('camera-rec-mode');
    }
    
    setTimeout(() => { 
        let camInput = document.getElementById('hiddenCamera');
        if(camInput) camInput.click(); 
    }, 600);
}

window.addEventListener('focus', () => { 
    let cube = document.getElementById('cubeWrapper');
    if(cube) cube.classList.remove('camera-rec-mode'); 
});

function handleVideoUpload(event) { const file = event.target.files[0]; if (file) { capturedVideoUrl = URL.createObjectURL(file); let vPlayer = document.getElementById('capturedVideoPlayer'); if(vPlayer) vPlayer.src = capturedVideoUrl; hasUnreadVideo = true; triggerBubble(); } let cube = document.getElementById('cubeWrapper'); if(cube) cube.classList.remove('camera-rec-mode'); }

function triggerBubble() { 
    if (!hasUnreadVideo) return; 
    const bubble = document.getElementById('samuraiBubble'); 
    if(bubble) { bubble.classList.add('bubble-show'); document.getElementById('bubbleText').innerHTML = "⚠️ MẬT THƯ ĐẾN"; }
}

// ===================================================
// NÚT XEM VIDEO (SAMURAI)
// ===================================================
function processSamuraiAction(element) { 
    if (!checkLoginGuard()) return;

    if (!hasUnreadVideo || !capturedVideoUrl) { 
        triggerHexagonShield(); 
        if(navigator.vibrate) navigator.vibrate(50);
        return; 
    } 
    
    const bubble = document.getElementById('samuraiBubble');
    if (bubble) bubble.classList.remove('bubble-show');
    hasUnreadVideo = false; 
    
    if(navigator.vibrate) navigator.vibrate([30, 50, 30]);
    playKatanaClash(); 
    
    let cube = document.getElementById('cubeWrapper');
    if(cube) {
        cube.classList.remove('camera-rec-mode');
        cube.classList.add('video-play-mode');
        let beam = document.querySelector('.projector-beam');
        if(beam) beam.classList.add('beam-on');
    }

    setTimeout(() => {
        let vPopup = document.getElementById('videoPopup');
        let vPlayer = document.getElementById('capturedVideoPlayer');
        if(vPopup) vPopup.classList.add('popup-open'); 
        if(vPlayer) vPlayer.play(); 
    }, 600);
}

function closeVideoModule() { 
    let vPopup = document.getElementById('videoPopup');
    let vPlayer = document.getElementById('capturedVideoPlayer');
    if(vPopup) vPopup.classList.remove('popup-open'); 
    if(vPlayer) vPlayer.pause(); 
    let cube = document.getElementById('cubeWrapper');
    if(cube) cube.classList.remove('video-play-mode'); 
    let beam = document.querySelector('.projector-beam');
    if(beam) beam.classList.remove('beam-on');
}

// ===================================================
// CÁC NÚT TĨNH CÒN LẠI (HỒN LÌA KHỎI XÁC)
// ===================================================
function triggerStaticNode(element) { 
    if (!checkLoginGuard()) return; 
    
    if(navigator.vibrate) navigator.vibrate([30]); 
    playCyberClick();
    
    let cube = document.getElementById('cubeWrapper');
    if(cube) {
        cube.classList.add('phantom-split-active'); 
        setTimeout(() => { cube.classList.remove('phantom-split-active'); }, 600); 
    }
}
