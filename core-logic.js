const API_URL = "https://script.google.com/macros/s/AKfycbzZADdsbGIX40AUWKWlmFTnsOXKEy2C8cc6e68XlmvZ0WhU3F-bW2E05FS34le0sPCqJg/exec";
let currentUsername = sessionStorage.getItem('kdrive_username') || 'guest';

function lockInteraction() { document.body.classList.add('popups-active'); }
function unlockInteraction() { document.body.classList.remove('popups-active'); }

window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('kdrive_session') === 'active') {
        document.getElementById('loginPanelContainer').style.display = 'none';
        isLoggedIn = true; triggerHexagonShield();
        let hud = document.getElementById('protocolGuide'); if(hud) hud.remove();
        document.getElementById('logoutHud').classList.add('logout-active');
        document.getElementById('cyberAltarBtn').classList.add('logged-in');
        let hIcon = document.getElementById('heartIcon'); hIcon.className = 'heart-icon active'; hIcon.innerHTML = "❤️";
        setInterval(() => { document.getElementById('bpmText').innerText = (95 + Math.floor(Math.random() * 15)) + " BPM"; }, 2000);
        pulseTerminal("BOO: SESSION RESTORED.");
        initRelic();
        spawnNeonRain(); // KHỞI ĐỘNG TRƯỜNG LƯỢNG TỬ
    }
});

function isValidUsername(str) { return /^[a-zA-Z0-9]{6,15}$/.test(str); }
function isValidPassword(str) { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(str); }
function validateLive(type) { }

const EYE_OPEN = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
const EYE_CLOSED = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;
function togglePass(inputId, iconEl) { let inp = document.getElementById(inputId); if(inp.type === 'password') { inp.type = 'text'; iconEl.innerHTML = EYE_CLOSED; } else { inp.type = 'password'; iconEl.innerHTML = EYE_OPEN; } }

let overloadOsc = null; let overloadGain = null;
let initPinchDist = 0; let isPinching = false;
const base64Wallpapers = ["https://i.postimg.cc/J4xHjMr7/1.webp", "https://i.postimg.cc/fRbtKpyD/2.webp", "https://i.postimg.cc/13znH2XR/3.webp", "https://i.postimg.cc/8zCJH9cz/4.webp", "https://i.postimg.cc/K8YkNwjG/5.jpg", "https://i.postimg.cc/SxK2r3R8/6.webp", "https://i.postimg.cc/x1dJRh8R/7.webp"];
const musicTracks = ["https://github.com/happyk1900/new-abum-17-track/raw/refs/heads/main/Kai%20Ripe%20(1).mp3", "https://github.com/happyk1900/new-abum-17-track/raw/refs/heads/main/Kai%20Ripe%20(2).mp3"];
const neonColors = ['#00ff88', '#00e5ff', '#bf00ff', '#ffd700', '#ff3366'];

let currentWallpaperIndex = 0; let isLoggedIn = false;
let loginDrumAudio = new Audio("https://github.com/happyk1900/-m-thanh-app/raw/refs/heads/main/0604.mp4");
let cameraShutterAudio = new Audio("https://www.myinstants.com/media/sounds/camera-shutter-click-01.mp3");
let bgAudio = new Audio(); bgAudio.loop = false; let currentTrackState = 0; let isMusicPlaying = false; let isMuted = false;

bgAudio.onended = function() { if(!isMuted) { currentTrackState = (currentTrackState % musicTracks.length) + 1; bgAudio.src = musicTracks[currentTrackState - 1]; bgAudio.play().catch(e=>{}); updateAudioUI(currentTrackState); } };
function updateAudioUI(tNum) { let color = neonColors[(tNum-1)%neonColors.length]; document.getElementById('audioHud').className = 'audio-hud audio-active'; document.getElementById('audioHud').style.setProperty('--neon-color', color); document.getElementById('trackText').innerHTML = `[ ▶️ TRK: ${(tNum<10?'0':'')+tNum} ]`; document.getElementById('trackText').style.color = color; document.getElementById('coreSystem').style.setProperty('--core-color', color); }
function cycleMusicTracks() { playCyberSound(); currentTrackState = (currentTrackState % musicTracks.length) + 1; bgAudio.src = musicTracks[currentTrackState - 1]; isMusicPlaying = true; isMuted = false; bgAudio.play().catch(e=>{}); updateAudioUI(currentTrackState); }
function toggleMuteSystem() { playCyberSound(); if(!isMuted) { isMuted = true; bgAudio.pause(); document.getElementById('audioHud').className = 'audio-hud'; document.getElementById('trackText').innerHTML = "[ 🔇 SYS: OFF ]"; document.getElementById('trackText').style.color = "#ff3333"; } else { isMuted = false; bgAudio.play().catch(e=>{}); updateAudioUI(currentTrackState); } }

const AudioContext = window.AudioContext || window.webkitAudioContext; let actx;
function initAudio() { if(!actx) actx = new AudioContext(); if(actx.state==='suspended') actx.resume(); } 
document.body.addEventListener('touchstart', initAudio, {once:true});

function playCyberSound() { try { initAudio(); const osc = actx.createOscillator(); const gain = actx.createGain(); osc.connect(gain); gain.connect(actx.destination); osc.type = 'triangle'; const now = actx.currentTime; osc.frequency.setValueAtTime(1500, now); osc.frequency.exponentialRampToValueAtTime(400, now + 0.12); gain.gain.setValueAtTime(0.5, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15); osc.start(now); osc.stop(now + 0.15); } catch(e){} }

// ÂM THANH NÚT BẤM CƠ KHÍ SẮC LẠNH
function playCyberClick() { 
    if(!actx) initAudio(); 
    try {
        const osc = actx.createOscillator(); 
        const gain = actx.createGain(); 
        osc.connect(gain); gain.connect(actx.destination); 
        osc.type = 'square'; 
        const now = actx.currentTime; 
        osc.frequency.setValueAtTime(800, now); 
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.05); 
        gain.gain.setValueAtTime(0.3, now); 
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05); 
        osc.start(now); osc.stop(now + 0.05); 
    } catch(e){} 
}

function playOverloadRoar() { if(!actx) initAudio(); if(overloadOsc) return; overloadOsc = actx.createOscillator(); overloadGain = actx.createGain(); overloadOsc.type = 'sawtooth'; overloadOsc.frequency.setValueAtTime(50, actx.currentTime); overloadOsc.frequency.linearRampToValueAtTime(130, actx.currentTime + 1.5); overloadGain.gain.setValueAtTime(0, actx.currentTime); overloadGain.gain.linearRampToValueAtTime(0.4, actx.currentTime + 0.3); overloadOsc.connect(overloadGain); overloadGain.connect(actx.destination); overloadOsc.start(); }
function stopOverloadRoar() { if(overloadGain) { overloadGain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.2); setTimeout(() => { if(overloadOsc) { overloadOsc.stop(); overloadOsc = null; } overloadGain = null; }, 250); } }
function startBuzz() { } function stopBuzz() { } function playZapPop() { }

// ===================================================
// TRƯỜNG NĂNG LƯỢNG: HIỆN HÌNH TỪ HƯ VÔ, PHÂN LOẠI MÀU
// ===================================================
function spawnNeonRain() {
    if (!isLoggedIn) return;
    const container = document.getElementById('effectsContainer');
    if (!container) return;
    
    const suits = ['♠', '♥', '♣', '♦'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const redValues = ['A', 'K', 'Q', 'J']; // Thẻ Quyền lực màu Đỏ
    const chipColors = ['#ffd700', '#ff66b2', '#b026ff']; // Vàng, Hồng, Tím
    
    // Tần suất 2.5s (2500ms) tạo 1 vật thể - tinh giản, tĩnh lặng
    setInterval(() => {
        let el = document.createElement('div');
        let randObj = Math.random(); 

        if (randObj > 0.5) { 
            // 50% LÀ LÁ BÀI
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
            // 25% LÀ TIỀN GIẤY (Chữ nhật, Xanh lục)
            el.className = 'neon-dollar-real';
            el.innerHTML = '<span>100</span>';
            el.style.color = '#00ff00';
            el.style.borderColor = 'rgba(0, 255, 0, 0.5)';
            
        } else { 
            // 25% LÀ ĐỒNG CHIP (Đổi thành chữ C)
            el.className = 'neon-coin-real';
            el.innerHTML = '<span>C</span>';
            el.style.color = chipColors[Math.floor(Math.random() * chipColors.length)];
        }

        // TỌA ĐỘ HƯ VÔ: Xuất hiện rải rác giữa màn hình
        el.style.left = Math.random() * 90 + 5 + 'vw';
        el.style.top = Math.random() * 60 + 5 + 'vh'; 
        
        let scale = Math.random() * 0.7 + 0.6; 
        el.style.setProperty('--drop-scale', scale);
        
        // Hoạt ảnh rơi và tan biến trong 4 - 7s
        let duration = Math.random() * 3 + 4; 
        el.style.setProperty('--max-opacity', (Math.random() * 0.4 + 0.5).toString());
        el.style.animation = `quantumMaterialize ${duration}s ease-in-out forwards`;
        
        container.appendChild(el);
        setTimeout(() => { if(el.parentNode) el.remove(); }, duration * 1000);
    }, 2500); 
}

const hexCanvas = document.getElementById('hexCanvas'); const hexCtx = hexCanvas.getContext('2d'); let hexGrid = []; let canvasW = 0, canvasH = 0;
function initHexGrid() { hexCanvas.width = window.innerWidth; hexCanvas.height = window.innerHeight; canvasW = hexCanvas.width; canvasH = hexCanvas.height; hexGrid = []; let r = 24; let h3 = Math.sqrt(3) * r; let cols = Math.ceil(canvasW / h3) + 1; let rows = Math.ceil(canvasH / (r*1.5)) + 1; for(let row=0; row<rows; row++) { for(let col=0; col<cols; col++) { hexGrid.push({x: col * h3 + (row%2===1 ? h3/2 : 0), y: row * r*1.5, energy: 0}); } } }
window.addEventListener('resize', initHexGrid); initHexGrid();

function renderCanvas() { 
    hexCtx.clearRect(0, 0, canvasW, canvasH); hexCtx.lineWidth = 1.2; 
    let isStruggling = document.getElementById('cubeWrapper').classList.contains('overload-active'); 

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

function triggerHexagonShield() { if(!isLoggedIn) return; for(let hex of hexGrid) { if(Math.hypot(hex.x - window.innerWidth/2, hex.y - window.innerHeight*0.516) < 70) hex.energy = 0.6; } }

let relicEl = document.getElementById('lightningRelic'); let rx = window.innerWidth / 2, ry = window.innerHeight / 2; let targetRx = rx, targetRy = ry; let relicActive = false; let trailTimer = 0; let isRelicCharged = false; 
function checkDailyEnergy() { return false; }
function initRelic() { relicActive = true; relicEl.style.display = 'block'; isRelicCharged = checkDailyEnergy(); if (!isRelicCharged) { relicEl.classList.add('relic-active'); relicEl.classList.remove('relic-passive'); startBuzz(); } else { relicEl.classList.add('relic-passive'); relicEl.classList.remove('relic-active'); } moveRelic(); }
function moveRelic() { 
    if(!relicActive || !isLoggedIn) return; 
    let dx = targetRx - rx; let dy = targetRy - ry; let dist = Math.hypot(dx, dy); 
    if(dist < 50) { 
        targetRx = 40 + Math.random() * (window.innerWidth - 80); 
        targetRy = 40 + Math.random() * (window.innerHeight - 80); 
    } 
    let speed = 0.003; 
    rx += dx * speed; ry += dy * speed; 
    relicEl.style.left = rx + 'px'; relicEl.style.top = ry + 'px'; 
    trailTimer++; let trailFreq = isRelicCharged ? 8 : 4; 
    if(trailTimer % trailFreq === 0) { 
        let trail = document.createElement('div'); trail.className = 'relic-trail'; 
        trail.style.left = rx + 'px'; trail.style.top = ry + 'px'; 
        if (isRelicCharged) { trail.style.boxShadow = '0 0 10px #00ff88, 0 0 20px #00a356'; trail.style.background = '#00ff88'; } 
        else { trail.style.boxShadow = '0 0 10px #00e5ff, 0 0 25px #00e5ff'; trail.style.background = '#ffffff'; } 
        document.body.appendChild(trail); 
        setTimeout(() => { if(trail.parentNode) trail.remove(); }, 800); 
    } 
    requestAnimationFrame(moveRelic); 
}
function captureRelic() { if(!relicActive) return; if(isMusicPlaying && !isMuted) bgAudio.pause(); if (!isRelicCharged) { let today = new Date().toLocaleDateString(); localStorage.setItem('lastCapturedDate_' + currentUsername, today); isRelicCharged = true; stopBuzz(); playZapPop(); if(navigator.vibrate) navigator.vibrate([100, 50, 200, 50, 100]); let flash = document.getElementById('whiteFlash'); flash.style.display = 'block'; flash.style.opacity = '1'; relicEl.style.transform = `translate(-50%, -50%) scale(5)`; relicEl.style.opacity = '0'; setTimeout(() => { window.location.href = "nhap_the.html"; }, 350); } else { if(navigator.vibrate) navigator.vibrate(50); relicEl.style.transform = `translate(-50%, -50%) scale(1.5)`; relicEl.style.opacity = '0'; setTimeout(() => { window.location.href = "trai_huan_luyen.html"; }, 200); } }

function callAPI(action, params, callbackName, onSuccess, onError) { let finalUrl = API_URL + "?action=" + action; for (let key in params) { finalUrl += "&" + key + "=" + encodeURIComponent(params[key]); } finalUrl += "&callback=" + callbackName; window[callbackName] = function(res) { delete window[callbackName]; let scriptEl = document.getElementById(callbackName); if(scriptEl) document.body.removeChild(scriptEl); if (res && res.success) onSuccess(res); else onError(res ? res.msg : "LỖI MÁY CHỦ!"); }; let script = document.createElement('script'); script.id = callbackName; script.src = finalUrl; script.onerror = function() { onError("LỖI MẠNG!"); }; document.body.appendChild(script); }

function submitLogin() { try { playCyberSound(); } catch(e) {} var acc = document.getElementById('accInput').value.trim(); var code = document.getElementById('passcodeInput').value.trim(); var statusEl = document.getElementById('loginStatus'); if(acc === "" || code === "") { statusEl.innerHTML = "[LỖI]: ĐIỀN ĐỦ THÔNG TIN!"; statusEl.style.color = "#ff3333"; return; } statusEl.innerHTML = "🛰️ BOO ĐANG KIỂM TRA..."; statusEl.style.color = "#00e5ff"; callAPI('checkLogin', {username: acc, password: code}, 'cb_login', function(res) { sessionStorage.setItem('kdrive_session', 'active'); sessionStorage.setItem('kdrive_username', acc); currentUsername = acc; document.getElementById('loginPanelContainer').style.display = 'none'; unlockInteraction(); loginDrumAudio.currentTime = 0; loginDrumAudio.play().catch(e=>{}); if(navigator.vibrate) navigator.vibrate([200, 100, 200]); isLoggedIn = true; triggerHexagonShield(); let hud = document.getElementById('protocolGuide'); if(hud) hud.remove(); document.getElementById('logoutHud').classList.add('logout-active'); document.getElementById('cyberAltarBtn').classList.add('logged-in'); let hIcon = document.getElementById('heartIcon'); hIcon.className = 'heart-icon active'; hIcon.innerHTML = "❤️"; setInterval(() => { document.getElementById('bpmText').innerText = (95 + Math.floor(Math.random() * 15)) + " BPM"; }, 2000); document.getElementById('mainWrapper').classList.add('shake-active'); setTimeout(() => document.getElementById('mainWrapper').classList.remove('shake-active'), 600); pulseTerminal("BOO: AUTHORIZED."); const banner = document.getElementById('welcomeHologram'); const tag = document.getElementById('welcomeTag'); banner.style.border = `2px solid #00ff88`; banner.style.boxShadow = `0 0 25px #00ff88, inset 0 0 15px rgba(0,0,0,0.5)`; tag.style.color = "#00ff88"; tag.innerHTML = `[ 🥷 ${res.nickname || acc} ]`; document.getElementById('welcomeBody').innerHTML = "Hệ thống BOO đã sẵn sàng nhận lệnh!"; banner.classList.add('banner-strike'); setTimeout(() => { banner.classList.remove('banner-strike'); initRelic(); spawnNeonRain(); }, 3500); }, function(msg) { statusEl.style.color = "#ff3333"; statusEl.innerHTML = msg; }); }
function showLogoutConfirm() { try { playCyberSound(); } catch(e){} document.getElementById('logoutConfirmPanel').style.display = 'flex'; lockInteraction(); }
function confirmLogout(isYes) { try { playCyberSound(); } catch(e){} if(isYes) { document.getElementById('logoutConfirmPanel').style.display = 'none'; pulseTerminal("BOO: LOGGING OUT..."); sessionStorage.removeItem('kdrive_session'); sessionStorage.removeItem('kdrive_username'); setTimeout(() => { window.location.reload(); }, 500); } else { document.getElementById('logoutConfirmPanel').style.display = 'none'; unlockInteraction(); } }
function submitChangePass() { }
function switchPanel(panelName) { try { playCyberSound(); } catch(e){} document.getElementById('panel-login').style.display = 'none'; document.getElementById('panel-register').style.display = 'none'; document.getElementById('panel-otp').style.display = 'none'; document.getElementById('panel-forgot').style.display = 'none'; document.getElementById('panel-' + panelName).style.display = 'flex'; }

function pulseTerminal(text) { const terminal = document.getElementById('terminalStream'); const newLine = document.createElement('div'); newLine.className = 'terminal-line'; newLine.innerText = `> ${text}`; terminal.appendChild(newLine); if(terminal.children.length > 3) terminal.removeChild(terminal.firstChild); }
setInterval(() => { pulseTerminal(isLoggedIn ? "BOO: SHIELD ACTIVE" : "AWAITING KAI RIPE..."); }, 4000);
function checkLoginGuard() { if (!isLoggedIn) { try { playCyberSound(); } catch(e){} const warningEl = document.getElementById('hudGuardWarning'); if(warningEl) { warningEl.className = "hud-warning-text hud-warning-active"; warningEl.innerHTML = "[ ⚠️ BOO TỪ CHỐI LỆNH! ]"; setTimeout(() => { warningEl.className = "hud-warning-text"; warningEl.innerHTML = ""; }, 2500); } return false; } return true; }

let capturedVideoUrl = null; let hasUnreadVideo = false;

// ===================================================
// NÚT CAMERA: Thu nạp (Xoay nhanh, Đỏ máu, Pulse)
// ===================================================
function openSecretCameraGuard(element) { 
    if (!checkLoginGuard()) return; 
    if(navigator.vibrate) navigator.vibrate(50);
    playCyberClick();
    try { cameraShutterAudio.play().catch(e=>{}); } catch(e){}
    
    let cube = document.getElementById('cubeWrapper');
    cube.classList.remove('video-play-mode');
    document.querySelector('.projector-beam').classList.remove('beam-on');
    
    cube.classList.add('camera-rec-mode');
    
    setTimeout(() => { document.getElementById('hiddenCamera').click(); }, 600);
}

window.addEventListener('focus', () => { document.getElementById('cubeWrapper').classList.remove('camera-rec-mode'); });

function handleVideoUpload(event) { const file = event.target.files[0]; if (file) { capturedVideoUrl = URL.createObjectURL(file); document.getElementById('capturedVideoPlayer').src = capturedVideoUrl; hasUnreadVideo = true; triggerBubble(); } document.getElementById('cubeWrapper').classList.remove('camera-rec-mode'); }
function triggerBubble() { if (!hasUnreadVideo) return; const bubble = document.getElementById('samuraiBubble'); bubble.classList.add('bubble-show'); document.getElementById('bubbleText').innerHTML = "⚠️ MẬT THƯ ĐẾN"; }

// ===================================================
// NÚT VIDEO: Trích xuất (Phóng to, Xanh Cyan chiếu rọi)
// ===================================================
function processSamuraiAction(element) { 
    if (!hasUnreadVideo || !capturedVideoUrl) { 
        triggerHexagonShield(); 
        if(navigator.vibrate) navigator.vibrate(50);
        return; 
    } 
    if(navigator.vibrate) navigator.vibrate([30, 50, 30]);
    try { playCyberSound(); } catch(e){}
    
    let cube = document.getElementById('cubeWrapper');
    cube.classList.remove('camera-rec-mode');
    cube.classList.add('video-play-mode');
    document.querySelector('.projector-beam').classList.add('beam-on');

    setTimeout(() => {
        document.getElementById('videoPopup').classList.add('popup-open'); 
        document.getElementById('capturedVideoPlayer').play(); 
    }, 600);
}

function closeVideoModule() { 
    document.getElementById('videoPopup').classList.remove('popup-open'); 
    document.getElementById('capturedVideoPlayer').pause(); 
    document.getElementById('cubeWrapper').classList.remove('video-play-mode'); 
    document.querySelector('.projector-beam').classList.remove('beam-on');
}

// ===================================================
// NÚT TĨNH: Hồn lìa khỏi xác (Venom Soul Phantom)
// ===================================================
function triggerStaticNode(element) { 
    if (!checkLoginGuard()) return; 
    
    if(navigator.vibrate) navigator.vibrate([30]); 
    playCyberClick();
    
    let cube = document.getElementById('cubeWrapper');
    cube.classList.add('phantom-split'); 
    
    // Gỡ class sau 600ms (khớp đúng thời lượng CSS Animation)
    setTimeout(() => {
        cube.classList.remove('phantom-split');
    }, 600); 
}

function rotateWallpapersGuard(element) { currentWallpaperIndex = (currentWallpaperIndex + 1) % base64Wallpapers.length; document.getElementById('kdriveBg').src = base64Wallpapers[currentWallpaperIndex]; }
function showLoginPanel() { document.getElementById('loginPanelContainer').style.display = 'flex'; lockInteraction(); }
function closeLoginPanel() { document.getElementById('loginPanelContainer').style.display = 'none'; unlockInteraction(); }
function showNinjaInfo() { document.getElementById('ninjaPopup').style.display = 'flex'; lockInteraction(); }
function closeNinjaInfo() { document.getElementById('ninjaPopup').style.display = 'none'; unlockInteraction(); }
function openChangePassPanel() { document.getElementById('changePassPanel').style.display = 'flex'; }
function closeChangePassPanel() { document.getElementById('changePassPanel').style.display = 'none'; }
