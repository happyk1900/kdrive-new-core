<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>K-Drive: Trạm Kiểm Soát</title>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    <style>
        /* TOÀN BỘ CSS GIAO DIỆN CŨ ĐƯỢC GIỮ NGUYÊN 100% */
        * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; touch-action: none; }
        body { background-color: #000; height: 100vh; width: 100vw; display: flex; justify-content: center; align-items: center; overflow: hidden; font-family: 'Space Grotesk', sans-serif; }
        @keyframes screenStrikeShake { 0%, 100% { transform: scale(1) rotate(0deg); } 10%, 30%, 50%, 70%, 90% { transform: translate(-6px, 5px) scale(1.03) rotate(-1deg); } 20%, 40%, 60%, 80% { transform: translate(6px, -5px) scale(1.03) rotate(1deg); } }
        .shake-active { animation: screenStrikeShake 0.6s cubic-bezier(.36,.07,.19,.97) both; filter: contrast(1.5) brightness(1.2); }
        .kdrive-image-wrapper { position: relative; width: 100vw; height: 100vh; max-width: 430px; background-color: #000; overflow: hidden; }
        .kdrive-bg-target { width: 100%; height: 100%; object-fit: fill; position: absolute; z-index: 1; transition: opacity 0.3s; opacity: 1; }
        .global-radar { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 4; overflow: hidden; }
        .radar-line { width: 100%; height: 2px; background: rgba(0, 255, 136, 0.5); box-shadow: 0 0 20px rgba(0, 255, 136, 1); position: absolute; top: -10px; animation: globalScan 8s linear infinite; }
        @keyframes globalScan { 0% { top: -10px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        
        .gateway-popup { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, rgba(0, 15, 5, 0.95), rgba(0, 5, 2, 0.95)); backdrop-filter: blur(25px); border: 1px solid rgba(0, 255, 136, 0.7); border-radius: 16px; padding: 25px 15px; z-index: 99999; display: none; flex-direction: column; align-items: center; box-shadow: 0 0 50px rgba(0, 255, 136, 0.2), inset 0 0 20px rgba(0, 255, 136, 0.1); width: 90%; max-width: 350px; }
        .gateway-popup h2 { color: #ffd700; font-size: 20px; letter-spacing: 2px; margin-bottom: 15px; text-shadow: 0 0 15px rgba(255,215,0,0.6); text-transform: uppercase; }
        
        .input-wrapper { position: relative; width: 100%; margin-bottom: 12px; }
        .login-input { width: 100%; padding: 14px; background: rgba(0, 255, 136, 0.08); border: 1px solid rgba(0, 255, 136, 0.4); color: #00ff88; outline: none; text-align: center; font-weight: 600; font-family: 'Space Grotesk', sans-serif; border-radius: 10px; transition: all 0.3s ease; margin-bottom: 0; box-shadow: inset 0 0 10px rgba(0, 255, 136, 0.1); }
        .login-input:focus { border-color: #00ff88; box-shadow: 0 0 15px rgba(0, 255, 136, 0.4), inset 0 0 10px rgba(0, 255, 136, 0.2); }
        .login-input.error { border-color: #ff3333 !important; animation: screenStrikeShake 0.4s; }
        
        .login-btn-submit { padding: 12px 25px; background: linear-gradient(90deg, #00b35e, #00ff88); color: #000; font-weight: 800; font-size: 16px; border: none; border-radius: 10px; cursor: pointer; width: 100%; font-family: 'Space Grotesk', sans-serif; box-shadow: 0 0 15px rgba(0, 255, 136, 0.3); transition: all 0.3s; }
        .login-btn-submit:hover { box-shadow: 0 0 25px rgba(0, 255, 136, 0.8); transform: scale(1.02); }
        .login-btn-submit.btn-orange { background: linear-gradient(90deg, #cc7a00, #ff9900); box-shadow: 0 0 15px rgba(255, 153, 0, 0.3); }
        
        .close-btn { position: absolute; top: -15px; right: -15px; width: 36px; height: 36px; background: #000; border: 2px solid #ff3333; border-radius: 50%; color: #ff3333; font-weight: bold; cursor: pointer; display: flex; justify-content: center; align-items: center; z-index: 35001; box-shadow: 0 0 15px rgba(255, 51, 51, 0.5); transition: 0.3s; }
        .close-btn:hover { transform: scale(1.1); background: #ff3333; color: #000; }
        
        .eye-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); cursor: pointer; color: #00ff88; z-index: 5; display: flex; align-items: center; justify-content: center; opacity: 0.8; }
        .rule-tooltip { font-size: 11px; font-weight: bold; color: #ff9900; background: rgba(0,0,0,0.8); border: 1px dashed #ff9900; padding: 6px 10px; border-radius: 4px; display: none; margin-bottom: 12px; text-align: left; width: 100%; }
        
        .account-options-row { width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding: 0 5px; }
        .remember-container { display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 12px; color: #00ff88; font-weight: 600; }
        .remember-checkbox { appearance: none; width: 16px; height: 16px; border: 1px solid #00ff88; border-radius: 3px; background: rgba(0, 255, 136, 0.1); cursor: pointer; position: relative; }
        .remember-checkbox:checked::after { content: '✔'; position: absolute; top: -2px; left: 2px; color: #00ff88; font-size: 12px; }
        .change-pass-link { font-size: 12px; color: #ff9900; font-weight: 600; text-decoration: underline; cursor: pointer; }

        /* INFO TABS CSS */
        .info-tabs-container { display: flex; width: 100%; border-bottom: 1px solid rgba(0, 255, 136, 0.2); margin-bottom: 15px; z-index: 5; }
        .info-tab-btn { flex: 1; padding: 10px 5px; font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: 700; color: rgba(255, 255, 255, 0.4); background: transparent; border: none; cursor: pointer; text-transform: uppercase; transition: all 0.3s ease; text-align: center; border-bottom: 2px solid transparent; margin-bottom: -1px; }
        .info-tab-btn.tab-active { color: #00ff88; border-bottom: 2px solid #00ff88; background: linear-gradient(0deg, rgba(0,255,136,0.1) 0%, transparent 100%); text-shadow: 0 0 8px rgba(0,255,136,0.5); }
        .tab-content-panel { width: 100%; display: none; flex-direction: column; align-items: center; position: relative; }
        .tab-content-panel.content-active { display: flex; }
        .info-visual-box { width: 100%; margin: 0 auto; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden; }
        .radar-scan-line { position: absolute; width: 100%; height: 3px; background: linear-gradient(90deg, transparent, #00e5ff, transparent); box-shadow: 0 0 12px #00e5ff; top: 0; left: 0; opacity: 0; pointer-events: none; }
        .content-active .radar-scan-line { animation: radarSweep 2.5s infinite linear; opacity: 1; }
        @keyframes radarSweep { 0% { top: 0%; } 100% { top: 100%; } }
        @keyframes levitate { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .ninja-levitate { animation: levitate 3s ease-in-out infinite; filter: drop-shadow(0 0 15px rgba(0,255,136,0.6)); }
        .bio-scroll-area { max-height: 48vh; overflow-y: auto; width: 100%; padding-right: 5px; margin-top: 5px; text-align: left; }
        .info-block { border-left: 2px solid #00e5ff; padding-left: 12px; margin-bottom: 18px; }
    </style>
</head>
<body>

    <div class="kdrive-image-wrapper" id="mainWrapper">
        <div class="global-radar"><div class="radar-line"></div></div>
        <img src="https://i.postimg.cc/J4xHjMr7/1.webp" class="kdrive-bg-target" id="kdriveBg">

        <div class="gateway-popup" id="loginPanelContainer" style="display: flex;">
            
            <div id="panel-login" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <h2>TRẠM KIỂM SOÁT</h2>
                <div class="input-wrapper" style="margin-bottom: 12px;">
                    <input type="text" id="accInput" class="login-input" placeholder="[ TÀI KHOẢN ]">
                </div>
                <div class="input-wrapper">
                    <input type="password" id="passcodeInput" class="login-input" placeholder="[ MẬT MÃ ]">
                    <span class="eye-icon" onclick="togglePass('passcodeInput', this)">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </span>
                </div>
                <div class="account-options-row">
                    <label class="remember-container"><input type="checkbox" id="rememberMeCheck" class="remember-checkbox" checked> Ghi nhớ mã</label>
                    <div style="display: flex; gap: 10px;">
                        <span class="change-pass-link" onclick="openChangePassPanel()">[ Đổi ]</span>
                        <span class="change-pass-link" onclick="switchPanel('forgot')" style="color: #00e5ff;">[ Quên ]</span>
                    </div>
                </div>
                <button class="login-btn-submit" onclick="submitLogin()">XÁC NHẬN</button>
                <div id="loginStatus" style="margin-top: 15px; font-weight: bold; text-align: center; font-size: 13px;"></div>
                
                <div style="margin-top: 20px; text-align: center; width: 100%; border-top: 1px dashed rgba(0, 255, 136, 0.3); padding-top: 15px;">
                    <span style="color: #d2d2d2; font-size: 11px;">[ CHƯA CÓ DỮ LIỆU? ]</span><br>
                    <span onclick="switchPanel('register')" style="color: #00ff88; font-size: 13px; font-weight: 700; cursor: pointer; text-decoration: underline; text-shadow: 0 0 5px rgba(0,255,136,0.5); display: inline-block; margin-top: 5px;">➔ KÍCH HOẠT TÀI KHOẢN MỚI</span>
                </div>
            </div>

            <div id="panel-register" style="width: 100%; display: none; flex-direction: column; align-items: center;">
                <h2 style="color: #00e5ff; text-shadow: 0 0 15px rgba(0,229,255,0.6);">TẠO HỒ SƠ MỚI</h2>
                <div class="input-wrapper" style="margin-bottom: 4px;">
                    <input type="text" id="regId" class="login-input" placeholder="[ TÊN ĐỊNH DANH ] *" style="border-color: #00e5ff; color: #00e5ff;" oninput="validateLive('id')" onfocus="document.getElementById('rule-id').style.display='block'; validateLive('id');" onblur="document.getElementById('rule-id').style.display='none';">
                </div>
                <div id="rule-id" class="rule-tooltip" style="border-color: #00e5ff; color: #00e5ff;">Tên: 6-15 ký tự, CHỈ chữ cái và số, KHÔNG dấu cách.</div>
                <div class="input-wrapper" style="margin-bottom: 4px;">
                    <input type="password" id="regPass" class="login-input" placeholder="[ MẬT MÃ MẠNH ] *" style="border-color: #00e5ff; color: #00e5ff;" oninput="validateLive('pass')" onfocus="document.getElementById('rule-pass').style.display='block'; validateLive('pass');" onblur="document.getElementById('rule-pass').style.display='none';">
                    <span class="eye-icon" style="color: #00e5ff;" onclick="togglePass('regPass', this)">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </span>
                </div>
                <div id="rule-pass" class="rule-tooltip" style="border-color: #00e5ff; color: #00e5ff;">Pass: Tối thiểu 8 ký tự, CÓ chữ HOA, chữ thường, số & ký tự đặc biệt (@,#,!,...).</div>
                <div class="input-wrapper">
                    <input type="password" id="regPassConf" class="login-input" placeholder="[ XÁC NHẬN MẬT MÃ ] *" style="border-color: #00e5ff; color: #00e5ff;" oninput="validateLive('conf')">
                    <span class="eye-icon" style="color: #00e5ff;" onclick="togglePass('regPassConf', this)">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </span>
                </div>
                <div class="input-wrapper" style="margin-bottom: 4px;"><input type="email" id="regEmail" class="login-input" placeholder="[ EMAIL KHÔI PHỤC ] *" style="border-color: #00e5ff; color: #00e5ff;"></div>
                <div class="input-wrapper" style="margin-bottom: 4px;"><input type="tel" id="regPhone" class="login-input" placeholder="[ SỐ ĐIỆN THOẠI ] *" style="border-color: #00e5ff; color: #00e5ff;"></div>
                <div class="input-wrapper" style="margin-bottom: 4px;"><input type="text" id="regAlias" class="login-input" placeholder="[ BIỆT DANH CHIẾN ĐẤU ]" style="border-color: #00e5ff; color: #00e5ff;"></div>
                <div class="input-wrapper"><input type="text" id="regRef" class="login-input" placeholder="[ MẬT MÃ GIỚI THIỆU - Tùy chọn ]" style="border-color: #00e5ff; color: #00e5ff;"></div>
                
                <button class="login-btn-submit" style="background: linear-gradient(90deg, #00b3e6, #00e5ff); color: #000; margin-top: 5px; box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);" onclick="processRegistration()">TIẾP TỤC ĐỒNG BỘ</button>
                <div id="regStatus" style="margin-top: 10px; font-weight: bold; text-align: center; font-size: 11px;"></div>
                <span onclick="switchPanel('login')" style="color: #ff3333; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline; margin-top: 15px;">[ QUAY LẠI CỔNG ĐĂNG NHẬP ]</span>
            </div>

            <div id="panel-otp" style="width: 100%; display: none; flex-direction: column; align-items: center;">
                <h2 style="color: #ffd700; text-shadow: 0 0 15px rgba(255,215,0,0.6);">GIẢI MÃ BẢO MẬT</h2>
                <div style="text-align: center; font-size: 12px; color: #d2d2d2; margin-bottom: 15px; line-height: 1.5;">BOO đang chờ tín hiệu giải mã.<br>Mật thư sẽ tự hủy sau: <span id="otpTimer" style="color: #ff3333; font-weight: bold; font-size: 16px;">59s</span></div>
                <input type="number" id="otpInput" class="login-input" placeholder="[ _ _ _ _ _ _ ]" style="border-color: #ffd700; color: #ffd700; font-size: 24px; letter-spacing: 5px; text-align: center; padding: 15px; margin-bottom: 12px; box-shadow: inset 0 0 10px rgba(255, 215, 0, 0.1);">
                <div style="display: flex; gap: 10px; width: 100%; margin-bottom: 15px;">
                    <button class="login-btn-submit" style="background: rgba(0, 104, 255, 0.2); border: 1px solid #0068ff; color: #0068ff; font-size: 12px; padding: 10px; box-shadow: none;" onclick="requestOTP('zalo')">💬 QUA ZALO</button>
                    <button class="login-btn-submit" style="background: rgba(36, 161, 222, 0.2); border: 1px solid #24a1de; color: #24a1de; font-size: 12px; padding: 10px; box-shadow: none;" onclick="requestOTP('tele')">✈️ QUA TELE</button>
                </div>
                <div id="emergencyCallZone" style="width: 100%; text-align: center; display: none; flex-direction: column; gap: 8px;">
                    <div style="color: #ff3333; font-size: 11px; font-weight: bold; animation: blinkWarning 0.6s infinite;">[ ⚠️ KẾT NỐI MẠNG LƯỚI THẤT BẠI ]</div>
                    <button class="login-btn-submit" style="background: linear-gradient(90deg, #cc0000, #ff3333); color: #fff; font-size: 13px; box-shadow: 0 0 15px rgba(255, 51, 51, 0.4);" onclick="triggerVoiceOTP()">📞 KÍCH HOẠT LỆNH GỌI</button>
                </div>
                <button class="login-btn-submit" style="background: linear-gradient(90deg, #ccaa00, #ffd700); color: #000; margin-top: 15px; box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);" id="btnFinishReg" onclick="submitOTP()">HOÀN TẤT GHI DANH</button>
                <div id="otpStatus" style="margin-top: 10px; font-weight: bold; text-align: center; font-size: 12px;"></div>
            </div>

            <div id="panel-forgot" style="width: 100%; display: none; flex-direction: column; align-items: center;">
                <h2 style="color: #00e5ff; text-shadow: 0 0 15px rgba(0,229,255,0.6);">KHÔI PHỤC MÃ</h2>
                <div style="text-align: center; font-size: 12px; color: #d2d2d2; margin-bottom: 15px;">Nhập Email bạn đã dùng để đăng ký. BOO sẽ gửi Mật mã tạm thời đến hòm thư của bạn.</div>
                <input type="email" id="fgEmail" class="login-input" placeholder="[ NHẬP EMAIL CỦA BẠN ]" style="border-color: #00e5ff; color: #00e5ff; margin-bottom: 12px;">
                <button class="login-btn-submit" style="background: linear-gradient(90deg, #00b3e6, #00e5ff); color: #000; box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);" onclick="submitForgotPass()">GỬI LỆNH KHÔI PHỤC</button>
                <div id="fgStatus" style="margin-top: 15px; font-weight: bold; text-align: center; font-size: 12px;"></div>
                <span onclick="switchPanel('login')" style="color: #ff3333; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline; margin-top: 15px;">[ QUAY LẠI CỔNG ĐĂNG NHẬP ]</span>
            </div>
        </div>

        <div class="gateway-popup" id="changePassPanel" style="border-color: #ff9900; box-shadow: 0 0 50px rgba(255, 153, 0, 0.4), inset 0 0 20px rgba(255, 153, 0, 0.1);">
            <div class="close-btn" style="border-color: #ff9900; color: #ff9900; box-shadow: 0 0 15px rgba(255, 153, 0, 0.5);" onclick="closeChangePassPanel()">X</div>
            <h2 style="color: #ff9900; text-shadow: 0 0 15px rgba(255, 153, 0, 0.6);">THIẾT LẬP MẬT MÃ</h2>
            <div class="input-wrapper"><input type="text" id="cpAccInput" class="login-input" placeholder="[ TÀI KHOẢN ]" style="border-color: #ff9900; color: #ff9900;"></div>
            <div class="input-wrapper">
                <input type="password" id="cpOldPass" class="login-input" placeholder="[ MẬT MÃ CŨ ]" style="border-color: #ff9900; color: #ff9900;">
                <span class="eye-icon" style="color: #ff9900;" onclick="togglePass('cpOldPass', this)"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
            </div>
            <div class="input-wrapper">
                <input type="password" id="cpNewPass" class="login-input" placeholder="[ MẬT MÃ MỚI ]" style="border-color: #ff9900; color: #ff9900;">
                <span class="eye-icon" style="color: #ff9900;" onclick="togglePass('cpNewPass', this)"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
            </div>
            <div class="input-wrapper">
                <input type="password" id="cpNewPassConfirm" class="login-input" placeholder="[ XÁC NHẬN MỚI ]" style="border-color: #ff9900; color: #ff9900;">
                <span class="eye-icon" style="color: #ff9900;" onclick="togglePass('cpNewPassConfirm', this)"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
            </div>
            <button class="login-btn-submit btn-orange" onclick="submitChangePass()">CẬP NHẬT</button>
            <div id="changePassStatus" style="margin-top: 15px; font-weight: bold; text-align: center; font-size: 13px;"></div>
        </div>

        <div class="gateway-popup" id="ninjaPopup" style="width: 92%; max-width: 380px;">
            <div class="close-btn" onclick="closeNinjaInfo()">X</div>
            <h2 id="infoPopupTitle">HỒ SƠ HỆ THỐNG</h2>
            <div class="info-tabs-container">
                <button class="info-tab-btn tab-active" id="btnTab1" onclick="switchInfoTab(1)">[ HỒ SƠ CHÍNH ]</button>
                <button class="info-tab-btn" id="btnTab2" onclick="switchInfoTab(2)">[ SYNC SINH HỌC ]</button>
            </div>
            <div class="tab-content-panel content-active" id="paneTab1">
                <div class="info-visual-box" style="height: 190px;"><img src="https://raw.githubusercontent.com/happyk1900/Kai-Ripe/main/t%C3%A1ch%20r%E1%BB%93i.png" alt="Ninja" class="ninja-levitate" style="max-width: 250px;"></div>
                <div style="text-align: center; width: 100%; padding: 0 15px;">
                    <div style="color: #00e5ff; font-size: 14px; font-weight: bold; margin-bottom: 12px;">K-DRIVE: TRUNG TÂM CHỈ HUY</div>
                    <p style="font-size: 13px; color: #d2d2d2; line-height: 1.6;">Hệ thống kết nối dữ liệu chuyên sâu, giúp các chiến binh tối ưu hóa tư duy và làm chủ quyết định.</p>
                </div>
            </div>
            <div class="tab-content-panel" id="paneTab2">
                <div class="info-visual-box" style="height: 120px;">
                    <div class="radar-scan-line"></div><img src="https://img.icons8.com/nolan/256/fingerprint.png" alt="Fingerprint" style="width: 85px; filter: drop-shadow(0 0 15px #00e5ff);">
                </div>
                <div class="bio-scroll-area">
                    <div class="info-block" style="border-left-color: #ff33cc;"><div style="color: #ff33cc; font-weight: bold; margin-bottom: 6px;">[ NEURAL SYNC ]</div><div style="font-size: 12px; color: #d2d2d2;">K-DRIVE là cầu nối giữa chiến binh và BOO – AI phân tích Poker.</div></div>
                    <div class="info-block"><div style="color: #00e5ff; font-weight: bold; margin-bottom: 6px;">[ TACTICAL ARCHITECT ]</div><div style="font-size: 12px; color: #d2d2d2;">BOO định hình tư duy logic, loại bỏ cảm tính trên bàn đấu.</div></div>
                </div>
            </div>
        </div>

    </div>

    <script>
        // --- 1. CẤU HÌNH API LINK & DEVICE ID ---
        const API_URL = "https://script.google.com/macros/s/AKfycbwW0dxu_uuNCPHIBvX3Vbvfj5XfDMF8X_ZyCCPH4sOM2xH6vyGCkJ0bZtNdzs9pJzw/exec";
        
        if (!localStorage.getItem('kdrive_device_id')) {
            localStorage.setItem('kdrive_device_id', 'DEV_' + Math.random().toString(36).substr(2, 9).toUpperCase());
        }
        const DEVICE_ID = localStorage.getItem('kdrive_device_id');

        // --- 2. HIỆU ỨNG ÂM THANH ---
        const AudioContext = window.AudioContext || window.webkitAudioContext; let actx;
        function initAudio() { if(!actx) actx = new AudioContext(); if(actx.state==='suspended') actx.resume(); }
        document.body.addEventListener('touchstart', initAudio, {once:true});
        function playCyberSound() { try { initAudio(); const osc = actx.createOscillator(); const gain = actx.createGain(); osc.connect(gain); gain.connect(actx.destination); osc.type = 'triangle'; const now = actx.currentTime; osc.frequency.setValueAtTime(1500, now); osc.frequency.exponentialRampToValueAtTime(400, now + 0.12); gain.gain.setValueAtTime(0.5, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15); osc.start(now); osc.stop(now + 0.15); } catch(e){} }
        function playWhoosh() { if(!actx) return; let osc = actx.createOscillator(); let gain = actx.createGain(); osc.type = 'sine'; osc.frequency.setValueAtTime(300, actx.currentTime); osc.frequency.exponentialRampToValueAtTime(40, actx.currentTime + 1.2); osc.connect(gain); gain.connect(actx.destination); gain.gain.setValueAtTime(0.15, actx.currentTime); gain.gain.linearRampToValueAtTime(0, actx.currentTime + 1.2); osc.start(); osc.stop(actx.currentTime + 1.2); }

        // --- 3. LOGIC GIAO DIỆN (UI CONTROLS) ---
        const EYE_OPEN = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
        const EYE_CLOSED = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;
        function togglePass(inputId, iconEl) { let inp = document.getElementById(inputId); if(inp.type === 'password') { inp.type = 'text'; iconEl.innerHTML = EYE_CLOSED; } else { inp.type = 'password'; iconEl.innerHTML = EYE_OPEN; } }
        function switchPanel(panelName) { try { playCyberSound(); } catch(e){} document.getElementById('panel-login').style.display = 'none'; document.getElementById('panel-register').style.display = 'none'; document.getElementById('panel-otp').style.display = 'none'; document.getElementById('panel-forgot').style.display = 'none'; document.getElementById('panel-' + panelName).style.display = 'flex'; }
        function openChangePassPanel() { document.getElementById('changePassPanel').style.display = 'flex'; }
        function closeChangePassPanel() { document.getElementById('changePassPanel').style.display = 'none'; }
        function showNinjaInfo() { document.getElementById('ninjaPopup').style.display = 'flex'; }
        function closeNinjaInfo() { document.getElementById('ninjaPopup').style.display = 'none'; }
        function switchInfoTab(tabIndex) { document.getElementById('btnTab1').classList.remove('tab-active'); document.getElementById('btnTab2').classList.remove('tab-active'); document.getElementById('paneTab1').classList.remove('content-active'); document.getElementById('paneTab2').classList.remove('content-active'); document.getElementById('btnTab' + tabIndex).classList.add('tab-active'); document.getElementById('paneTab' + tabIndex).classList.add('content-active'); }

        // --- 4. VALIDATION BẢO MẬT ---
        function isValidUsername(str) { return /^[a-zA-Z0-9]{6,15}$/.test(str); }
        function isValidPassword(str) { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(str); }
        function validateLive(type) {
            if(type === 'id') {
                let el = document.getElementById('regId'); let rule = document.getElementById('rule-id');
                if(el.value === '') { el.style.borderColor = '#00e5ff'; rule.style.color = '#00e5ff'; rule.style.borderColor = '#00e5ff'; }
                else if(!isValidUsername(el.value)) { el.style.borderColor = '#ff3333'; rule.style.color = '#ff3333'; rule.style.borderColor = '#ff3333'; }
                else { el.style.borderColor = '#00ff88'; rule.style.color = '#00ff88'; rule.style.borderColor = '#00ff88'; }
            } else if(type === 'pass') {
                let el = document.getElementById('regPass'); let rule = document.getElementById('rule-pass');
                if(el.value === '') { el.style.borderColor = '#00e5ff'; rule.style.color = '#00e5ff'; rule.style.borderColor = '#00e5ff'; }
                else if(!isValidPassword(el.value)) { el.style.borderColor = '#ff3333'; rule.style.color = '#ff3333'; rule.style.borderColor = '#ff3333'; }
                else { el.style.borderColor = '#00ff88'; rule.style.color = '#00ff88'; rule.style.borderColor = '#00ff88'; }
                validateLive('conf');
            } else if(type === 'conf') {
                let p1 = document.getElementById('regPass').value; let p2 = document.getElementById('regPassConf').value; let el = document.getElementById('regPassConf');
                if(p2 === '') el.style.borderColor = '#00e5ff'; else if(p1 !== p2) el.style.borderColor = '#ff3333'; else el.style.borderColor = '#00ff88';
            }
        }

        // --- 5. LÕI KẾT NỐI API (JSONP) ---
        function callAPI(action, params, callbackName, onSuccess, onError) {
            let finalUrl = API_URL + "?action=" + action + "&deviceId=" + DEVICE_ID;
            for (let key in params) { finalUrl += "&" + key + "=" + encodeURIComponent(params[key]); }
            finalUrl += "&callback=" + callbackName;
            
            window[callbackName] = function(res) {
                delete window[callbackName];
                let scriptEl = document.getElementById(callbackName); if(scriptEl) document.body.removeChild(scriptEl);
                if (res && res.success) onSuccess(res); else onError(res ? res.msg : "LỖI MÁY CHỦ!");
            };
            let script = document.createElement('script'); script.id = callbackName; script.src = finalUrl;
            script.onerror = function() { onError("LỖI MẠNG!"); }; document.body.appendChild(script);
        }

        // --- 6. CÁC HÀM XỬ LÝ DỮ LIỆU ĐĂNG NHẬP ---
        function submitLogin() {
            try { playCyberSound(); } catch(e) {} 
            var acc = document.getElementById('accInput').value.trim(); 
            var code = document.getElementById('passcodeInput').value.trim(); 
            var statusEl = document.getElementById('loginStatus');
            
            if(acc === "" || code === "") { statusEl.innerHTML = "[LỖI]: ĐIỀN ĐỦ THÔNG TIN!"; statusEl.style.color = "#ff3333"; return; }
            statusEl.innerHTML = "🛰️ BOO ĐANG KIỂM TRA..."; statusEl.style.color = "#00e5ff";
            
            callAPI('checkLogin', {username: acc, password: code}, 'cb_login', 
                function(res) { 
                    sessionStorage.setItem('kdrive_session', 'active'); 
                    sessionStorage.setItem('kdrive_username', acc);
                    statusEl.innerHTML = "✅ CẤP QUYỀN THÀNH CÔNG"; statusEl.style.color = "#00ff88";
                    document.getElementById('mainWrapper').classList.add('shake-active');
                    setTimeout(() => { window.location.href = 'index.html'; }, 800);
                }, 
                function(msg) { statusEl.style.color = "#ff3333"; statusEl.innerHTML = "❌ " + msg; }
            );
        }

        let tempRegData = {}; let countdownInterval = null;
        function processRegistration() {
            try { playCyberSound(); } catch(e){} 
            let user = document.getElementById('regId').value.trim(); let pass = document.getElementById('regPass').value; let passConf = document.getElementById('regPassConf').value; 
            let email = document.getElementById('regEmail').value.trim(); let phone = document.getElementById('regPhone').value.trim(); 
            let alias = document.getElementById('regAlias').value.trim() || user; let refCode = document.getElementById('regRef').value.trim(); 
            let statusEl = document.getElementById('regStatus'); 
            
            if(!isValidUsername(user)) { document.getElementById('regId').classList.add('error'); setTimeout(()=>document.getElementById('regId').classList.remove('error'), 500); statusEl.innerHTML = "[LỖI]: TÊN ĐỊNH DANH SAI!"; return; } 
            if(!isValidPassword(pass)) { document.getElementById('regPass').classList.add('error'); setTimeout(()=>document.getElementById('regPass').classList.remove('error'), 500); statusEl.innerHTML = "[LỖI]: MẬT MÃ YẾU!"; return; } 
            if(pass !== passConf) { document.getElementById('regPassConf').classList.add('error'); setTimeout(()=>document.getElementById('regPassConf').classList.remove('error'), 500); statusEl.innerHTML = "[LỖI]: MẬT MÃ KHÔNG KHỚP!"; return; } 
            
            statusEl.innerHTML = "BOO ĐANG QUÉT..."; 
            // Đồng bộ tên biến chuẩn hóa để gửi API
            tempRegData = {Username: user, Password: pass, Email: email, Phone: phone, Nickname: alias, ReferralCode: refCode};
            setTimeout(() => { switchPanel('otp'); startOTPCountdown(); }, 800); 
        }

        function startOTPCountdown() { 
            let timeLeft = 59; document.getElementById('emergencyCallZone').style.display = 'none'; 
            const timerEl = document.getElementById('otpTimer'); timerEl.innerText = timeLeft + "s"; clearInterval(countdownInterval);
            countdownInterval = setInterval(() => { 
                timeLeft--; timerEl.innerText = timeLeft + "s"; 
                if(timeLeft <= 0) { clearInterval(countdownInterval); timerEl.innerText = "00s"; document.getElementById('emergencyCallZone').style.display = 'flex'; try { playCyberSound(); } catch(e){} document.getElementById('panel-otp').classList.add('shake-active'); setTimeout(() => document.getElementById('panel-otp').classList.remove('shake-active'), 600); } 
            }, 1000);
        }
        function requestOTP(platform) { try { playCyberSound(); } catch(e){} window.location.href = platform === 'zalo' ? "zalo://chat?phone=84xxxxxx" : "tg://resolve?domain=BooTelepathyBot"; }
        function triggerVoiceOTP() { try { playCyberSound(); } catch(e){} if(navigator.vibrate) navigator.vibrate([100, 50, 100]); document.getElementById('emergencyCallZone').innerHTML = "<span>[ 📡 ĐANG KẾT NỐI TỔNG ĐÀI... ]</span>"; }
        
        function submitOTP() { 
            const otp = document.getElementById('otpInput').value; 
            if(otp.length >= 4) { 
                playWhoosh(); clearInterval(countdownInterval); 
                let btn = document.getElementById('btnFinishReg'); btn.innerHTML = "ĐANG TẠO HỒ SƠ..."; document.getElementById('otpStatus').innerHTML = "ĐANG ĐẨY DỮ LIỆU...";
                callAPI('register', tempRegData, 'cb_register', 
                    function(res) { document.getElementById('otpStatus').innerHTML = "✅ GHI DANH THÀNH CÔNG!"; setTimeout(() => switchPanel('login'), 2000); }, 
                    function(msg) { document.getElementById('otpStatus').innerHTML = "❌ " + msg; } 
                );
            } else { document.getElementById('otpStatus').innerHTML = "MÃ SAI!"; } 
        }

        function submitForgotPass() { 
            try { playCyberSound(); } catch(e){} 
            let email = document.getElementById('fgEmail').value.trim(); let statusEl = document.getElementById('fgStatus'); 
            if(!email || !email.includes('@')) { statusEl.innerHTML = "[LỖI]: EMAIL SAI!"; return; } 
            statusEl.innerHTML = "[ 🛰️ BOO ĐANG QUÉT... ]"; 
            callAPI('forgotPassword', {Email: email}, 'cb_forgot', 
                function(res) { statusEl.innerHTML = "✅ " + res.msg; setTimeout(() => switchPanel('login'), 3500); }, 
                function(msg) { statusEl.innerHTML = "❌ " + msg; }
            );
        }

        function submitChangePass() { 
            try { playCyberSound(); } catch(e){} 
            var acc = document.getElementById('cpAccInput').value.trim(); var oldP = document.getElementById('cpOldPass').value.trim(); 
            var newP = document.getElementById('cpNewPass').value.trim(); var newPConf = document.getElementById('cpNewPassConfirm').value.trim();
            var statusEl = document.getElementById('changePassStatus'); 
            if(acc===""||oldP===""||newP===""||newPConf==="") { statusEl.innerHTML = "[LỖI]: ĐIỀN ĐỦ THÔNG TIN!"; return; } 
            if(newP !== newPConf) { statusEl.innerHTML = "[LỖI]: MẬT MÃ KHÔNG KHỚP!"; return; } 
            if(!isValidPassword(newP)) { statusEl.innerHTML = "[LỖI]: MẬT MÃ CHƯA ĐỦ MẠNH!"; return; } 
            statusEl.innerHTML = "[ 🛰️ BOO ĐANG GHI ĐÈ... ]";
            callAPI('changePassword', {Username: acc, oldPassword: oldP, newPassword: newP}, 'cb_changepass', 
                function(res) { statusEl.innerHTML = "✅ " + res.msg; setTimeout(() => { closeChangePassPanel(); switchPanel('login'); }, 2000); }, 
                function(msg) { statusEl.innerHTML = "❌ " + msg; } 
            );
        }
    </script>
</body>
</html>
