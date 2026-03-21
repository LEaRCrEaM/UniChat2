!function(){"use strict";const n=(()=>{let n=null;function t(t,e,a="sine",s=.08,i=0){try{const o=(n||(n=new(window.AudioContext||window.webkitAudioContext)),"suspended"===n.state&&n.resume(),n),r=o.createOscillator(),l=o.createGain(),p=o.createBiquadFilter();r.type=a,r.frequency.setValueAtTime(t,o.currentTime),i&&r.detune.setValueAtTime(i,o.currentTime),p.type="lowpass",p.frequency.setValueAtTime(3e3,o.currentTime),p.Q.setValueAtTime(1,o.currentTime),l.gain.setValueAtTime(0,o.currentTime),l.gain.linearRampToValueAtTime(s,o.currentTime+.015),l.gain.exponentialRampToValueAtTime(1e-4,o.currentTime+e),r.connect(p),p.connect(l),l.connect(o.destination),r.start(o.currentTime),r.stop(o.currentTime+e)}catch(n){}}function e(n,e,a="sine",s=.05){n.forEach(((n,i)=>{setTimeout((()=>t(n,e,a,s)),15*i)}))}return{toggleOn(){t(660,.12,"sine",.07),setTimeout((()=>t(880,.15,"sine",.06)),50)},toggleOff(){t(540,.12,"sine",.06),setTimeout((()=>t(380,.15,"sine",.05)),50)},sliderTick(n){t(300+500*n,.04,"sine",.03)},sliderGrab(){t(500,.06,"sine",.04)},sliderRelease(){t(600,.1,"sine",.04),setTimeout((()=>t(750,.08,"sine",.03)),30)},dropdownOpen(){t(400,.08,"sine",.05),setTimeout((()=>t(520,.08,"sine",.04)),40),setTimeout((()=>t(640,.1,"sine",.03)),80)},dropdownClose(){t(520,.08,"sine",.04),setTimeout((()=>t(400,.1,"sine",.03)),40)},dropdownSelect(){t(700,.1,"sine",.06),setTimeout((()=>t(880,.12,"sine",.04)),35)},sectionExpand(){t(350,.08,"sine",.04),setTimeout((()=>t(470,.1,"sine",.04)),50)},sectionCollapse(){t(470,.08,"sine",.04),setTimeout((()=>t(350,.1,"sine",.03)),50)},tabSwitch(){t(550,.06,"triangle",.05),setTimeout((()=>t(730,.12,"sine",.05)),40)},colorChange(n){const e=300+((parseInt(n.slice(1,3),16)||128)+(parseInt(n.slice(3,5),16)||128)+(parseInt(n.slice(5,7),16)||128))/765*500;t(e,.15,"sine",.04),t(1.5*e,.12,"sine",.025,5)},paneOpen(){e([440,554,659],.25,"sine",.04)},paneClose(){e([659,554,440],.2,"sine",.03)},closeHover(){t(480,.06,"sine",.025)},navHover(){t(600,.04,"sine",.02)}}})(),t=document.createElement("style");function e(n,t,e){const a=document.createElement(n);return t&&(a.className=t),e&&e.appendChild(a),a}function a(n,t){if(void 0!==t&&t>=1)return Math.round(n).toString();if(void 0!==t){const e=(t.toString().split(".")[1]||"").length;return n.toFixed(e)}return Number.isInteger(n)?n.toString():parseFloat(n.toFixed(4)).toString()}function s(n,t,e){return Math.min(e,Math.max(t,n))}t.textContent="\n        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');\n\n        .plasma-pane *,\n        .plasma-pane *::before,\n        .plasma-pane *::after {\n            box-sizing: border-box;\n            margin: 0;\n            padding: 0;\n        }\n\n        .plasma-pane {\n            position: fixed;\n            top: 30px;\n            right: 30px;\n            width: 340px;\n            font-family: 'Outfit', sans-serif;\n            font-size: 13px;\n            color: #e0e6ff;\n            z-index: 999999;\n            user-select: none;\n            animation: plasma-spawn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n        }\n\n        .plasma-pane.plasma-hidden {\n            pointer-events: none;\n            animation: plasma-despawn 0.4s cubic-bezier(0.55, 0, 1, 0.45) forwards;\n        }\n\n        @keyframes plasma-spawn {\n            0% {\n                opacity: 0;\n                transform: scale(0.8) translateY(-30px) rotateX(15deg);\n                filter: blur(10px);\n            }\n            60% {\n                transform: scale(1.02) translateY(3px) rotateX(-2deg);\n            }\n            100% {\n                opacity: 1;\n                transform: scale(1) translateY(0) rotateX(0);\n                filter: blur(0);\n            }\n        }\n\n        @keyframes plasma-despawn {\n            0% {\n                opacity: 1;\n                transform: scale(1) translateY(0);\n                filter: blur(0);\n            }\n            100% {\n                opacity: 0;\n                transform: scale(0.9) translateY(-20px);\n                filter: blur(8px);\n            }\n        }\n\n        /* ═══ Main Shell ═══ */\n        .plasma-shell {\n            position: relative;\n            border-radius: 22px;\n            overflow: hidden;\n            background: linear-gradient(\n                165deg,\n                rgba(20, 10, 40, 0.88),\n                rgba(12, 8, 30, 0.92),\n                rgba(8, 15, 35, 0.90)\n            );\n            backdrop-filter: blur(40px) saturate(1.8);\n            -webkit-backdrop-filter: blur(40px) saturate(1.8);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            box-shadow:\n                0 0 0 1px rgba(120, 80, 255, 0.05),\n                0 8px 32px rgba(0, 0, 0, 0.4),\n                0 24px 80px rgba(100, 50, 200, 0.15),\n                inset 0 1px 0 rgba(255, 255, 255, 0.06),\n                inset 0 -1px 0 rgba(0, 0, 0, 0.2);\n        }\n\n        /* ═══ Plasma Background Animation ═══ */\n        .plasma-shell::before {\n            content: '';\n            position: absolute;\n            top: -50%;\n            left: -50%;\n            width: 200%;\n            height: 200%;\n            background: \n                radial-gradient(ellipse at 20% 20%, rgba(120, 50, 255, 0.12) 0%, transparent 50%),\n                radial-gradient(ellipse at 80% 80%, rgba(0, 200, 255, 0.08) 0%, transparent 50%),\n                radial-gradient(ellipse at 50% 50%, rgba(255, 50, 200, 0.06) 0%, transparent 50%);\n            animation: plasma-bg 12s ease-in-out infinite;\n            pointer-events: none;\n            z-index: 0;\n        }\n\n        @keyframes plasma-bg {\n            0%, 100% { transform: rotate(0deg) scale(1); }\n            33% { transform: rotate(120deg) scale(1.1); }\n            66% { transform: rotate(240deg) scale(0.95); }\n        }\n\n        .plasma-shell > * {\n            position: relative;\n            z-index: 1;\n        }\n\n        /* ═══ Title Bar ═══ */\n        .plasma-titlebar {\n            display: flex;\n            align-items: center;\n            padding: 16px 20px;\n            cursor: move;\n            gap: 12px;\n            border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n        }\n\n        .plasma-title-orb {\n            width: 32px;\n            height: 32px;\n            border-radius: 50%;\n            background: linear-gradient(135deg, #7c3aed, #06b6d4, #ec4899);\n            background-size: 200% 200%;\n            animation: plasma-orb 4s ease-in-out infinite;\n            flex-shrink: 0;\n            box-shadow:\n                0 0 20px rgba(124, 58, 237, 0.4),\n                0 0 40px rgba(6, 182, 212, 0.2);\n            position: relative;\n        }\n\n        .plasma-title-orb::after {\n            content: '';\n            position: absolute;\n            inset: 3px;\n            border-radius: 50%;\n            background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), transparent 60%);\n        }\n\n        @keyframes plasma-orb {\n            0%, 100% { background-position: 0% 50%; }\n            50% { background-position: 100% 50%; }\n        }\n\n        .plasma-title-text {\n            font-size: 16px;\n            font-weight: 700;\n            letter-spacing: -0.3px;\n            background: linear-gradient(135deg, #c4b5fd, #67e8f9, #f0abfc);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            background-clip: text;\n        }\n\n        .plasma-title-close {\n            margin-left: auto;\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            background: rgba(255, 255, 255, 0.05);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            font-size: 10px;\n            color: rgba(255,255,255,0.3);\n            transition: all 0.3s ease;\n        }\n\n        .plasma-title-close:hover {\n            background: rgba(255, 80, 80, 0.2);\n            border-color: rgba(255, 80, 80, 0.3);\n            color: #ff6b6b;\n            transform: rotate(90deg);\n        }\n\n        /* ═══ Navigation Bubbles ═══ */\n        .plasma-nav {\n            display: flex;\n            padding: 8px 12px;\n            gap: 6px;\n            border-bottom: 1px solid rgba(255, 255, 255, 0.03);\n            background: rgba(0, 0, 0, 0.15);\n        }\n\n        .plasma-nav-bubble {\n            flex: 1;\n            padding: 10px 8px;\n            text-align: center;\n            font-size: 11.5px;\n            font-weight: 600;\n            letter-spacing: 0.2px;\n            color: rgba(255, 255, 255, 0.35);\n            cursor: pointer;\n            border-radius: 14px;\n            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .plasma-nav-bubble::before {\n            content: '';\n            position: absolute;\n            inset: 0;\n            border-radius: 14px;\n            opacity: 0;\n            background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(6, 182, 212, 0.2));\n            transition: opacity 0.3s ease;\n        }\n\n        .plasma-nav-bubble:hover {\n            color: rgba(255, 255, 255, 0.7);\n            transform: translateY(-1px);\n        }\n\n        .plasma-nav-bubble:hover::before {\n            opacity: 0.5;\n        }\n\n        .plasma-nav-bubble.plasma-active {\n            color: #fff;\n            background: linear-gradient(135deg, rgba(124, 58, 237, 0.35), rgba(6, 182, 212, 0.25));\n            box-shadow:\n                0 2px 12px rgba(124, 58, 237, 0.25),\n                inset 0 1px 0 rgba(255, 255, 255, 0.1);\n            transform: translateY(-1px) scale(1.02);\n        }\n\n        .plasma-nav-bubble.plasma-active::before {\n            opacity: 0;\n        }\n\n        /* ═══ Content Area ═══ */\n        .plasma-content {\n            max-height: 55vh;\n            overflow-y: auto;\n            overflow-x: hidden;\n            padding: 8px;\n            scroll-behavior: smooth;\n        }\n\n        .plasma-content::-webkit-scrollbar {\n            width: 5px;\n        }\n\n        .plasma-content::-webkit-scrollbar-track {\n            background: transparent;\n            margin: 8px;\n        }\n\n        .plasma-content::-webkit-scrollbar-thumb {\n            background: linear-gradient(180deg, rgba(124, 58, 237, 0.4), rgba(6, 182, 212, 0.3));\n            border-radius: 10px;\n        }\n\n        .plasma-page {\n            display: none;\n            animation: plasma-page-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n        }\n\n        .plasma-page.plasma-active {\n            display: block;\n        }\n\n        @keyframes plasma-page-in {\n            0% {\n                opacity: 0;\n                transform: translateX(20px) scale(0.97);\n                filter: blur(4px);\n            }\n            100% {\n                opacity: 1;\n                transform: translateX(0) scale(1);\n                filter: blur(0);\n            }\n        }\n\n        /* ═══ Section (Folder) ═══ */\n        .plasma-section {\n            margin-bottom: 6px;\n            border-radius: 16px;\n            overflow: hidden;\n            background: linear-gradient(\n                165deg,\n                rgba(255, 255, 255, 0.04),\n                rgba(255, 255, 255, 0.015)\n            );\n            border: 1px solid rgba(255, 255, 255, 0.05);\n            transition: all 0.35s ease;\n            animation: plasma-section-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;\n        }\n\n        .plasma-section:hover {\n            border-color: rgba(124, 58, 237, 0.12);\n            box-shadow: 0 4px 20px rgba(124, 58, 237, 0.06);\n        }\n\n        @keyframes plasma-section-in {\n            0% {\n                opacity: 0;\n                transform: translateY(10px) scale(0.98);\n            }\n            100% {\n                opacity: 1;\n                transform: translateY(0) scale(1);\n            }\n        }\n\n        .plasma-section-header {\n            display: flex;\n            align-items: center;\n            padding: 12px 16px;\n            cursor: pointer;\n            gap: 10px;\n            transition: all 0.25s ease;\n        }\n\n        .plasma-section-header:hover {\n            background: rgba(255, 255, 255, 0.02);\n        }\n\n        .plasma-section-dot {\n            width: 8px;\n            height: 8px;\n            border-radius: 50%;\n            background: linear-gradient(135deg, #7c3aed, #06b6d4);\n            flex-shrink: 0;\n            transition: all 0.35s ease;\n            box-shadow: 0 0 8px rgba(124, 58, 237, 0.3);\n        }\n\n        .plasma-section.plasma-collapsed .plasma-section-dot {\n            opacity: 0.4;\n            box-shadow: none;\n        }\n\n        .plasma-section-title {\n            font-size: 12px;\n            font-weight: 600;\n            color: rgba(255, 255, 255, 0.8);\n            flex: 1;\n            letter-spacing: 0.2px;\n        }\n\n        .plasma-section-chevron {\n            font-size: 9px;\n            color: rgba(255, 255, 255, 0.2);\n            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n        }\n\n        .plasma-section.plasma-collapsed .plasma-section-chevron {\n            transform: rotate(-90deg);\n        }\n\n        .plasma-section-body {\n            overflow: hidden;\n            transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1),\n                        opacity 0.3s ease,\n                        padding 0.35s ease;\n            max-height: 2000px;\n            opacity: 1;\n            padding: 0 10px 8px;\n        }\n\n        .plasma-section.plasma-collapsed .plasma-section-body {\n            max-height: 0;\n            opacity: 0;\n            padding: 0 10px;\n        }\n\n        /* Nested sections */\n        .plasma-section .plasma-section {\n            background: rgba(0, 0, 0, 0.12);\n            border-color: rgba(255, 255, 255, 0.03);\n        }\n\n        .plasma-section .plasma-section .plasma-section-dot {\n            width: 6px;\n            height: 6px;\n        }\n\n        /* ═══ Control Row ═══ */\n        .plasma-row {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 8px 10px;\n            margin: 2px 0;\n            border-radius: 12px;\n            transition: all 0.25s ease;\n            gap: 12px;\n            min-height: 38px;\n        }\n\n        .plasma-row:hover {\n            background: rgba(255, 255, 255, 0.025);\n        }\n\n        .plasma-row-label {\n            font-size: 11.5px;\n            font-weight: 400;\n            color: rgba(255, 255, 255, 0.5);\n            flex-shrink: 0;\n            max-width: 40%;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .plasma-row-control {\n            flex: 1;\n            display: flex;\n            align-items: center;\n            justify-content: flex-end;\n            min-width: 0;\n        }\n\n        /* ═══ Toggle Bubble ═══ */\n        .plasma-toggle {\n            position: relative;\n            width: 44px;\n            height: 24px;\n            cursor: pointer;\n            flex-shrink: 0;\n        }\n\n        .plasma-toggle input { display: none; }\n\n        .plasma-toggle-track {\n            position: absolute;\n            inset: 0;\n            border-radius: 14px;\n            background: rgba(255, 255, 255, 0.06);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n            overflow: hidden;\n        }\n\n        .plasma-toggle-track::before {\n            content: '';\n            position: absolute;\n            inset: 0;\n            background: linear-gradient(135deg, #7c3aed, #06b6d4);\n            opacity: 0;\n            transition: opacity 0.3s ease;\n            border-radius: 14px;\n        }\n\n        .plasma-toggle-thumb {\n            position: absolute;\n            top: 3px;\n            left: 3px;\n            width: 18px;\n            height: 18px;\n            border-radius: 50%;\n            background: rgba(255, 255, 255, 0.5);\n            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n        }\n\n        .plasma-toggle-thumb::after {\n            content: '';\n            position: absolute;\n            inset: 2px;\n            border-radius: 50%;\n            background: radial-gradient(circle at 40% 35%, rgba(255,255,255,0.6), transparent 70%);\n        }\n\n        .plasma-toggle input:checked ~ .plasma-toggle-track {\n            border-color: rgba(124, 58, 237, 0.3);\n            box-shadow: 0 0 16px rgba(124, 58, 237, 0.2);\n        }\n\n        .plasma-toggle input:checked ~ .plasma-toggle-track::before {\n            opacity: 1;\n        }\n\n        .plasma-toggle input:checked ~ .plasma-toggle-thumb {\n            left: 23px;\n            background: #fff;\n            box-shadow:\n                0 2px 8px rgba(0, 0, 0, 0.2),\n                0 0 12px rgba(124, 58, 237, 0.3);\n        }\n\n        /* ═══ Slider ═══ */\n        .plasma-slider-wrap {\n            flex: 1;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            min-width: 0;\n        }\n\n        .plasma-slider-track-wrap {\n            flex: 1;\n            position: relative;\n            height: 28px;\n            display: flex;\n            align-items: center;\n            cursor: pointer;\n        }\n\n        .plasma-slider-track {\n            width: 100%;\n            height: 6px;\n            border-radius: 6px;\n            background: rgba(255, 255, 255, 0.06);\n            position: relative;\n            overflow: hidden;\n            border: 1px solid rgba(255, 255, 255, 0.04);\n        }\n\n        .plasma-slider-fill {\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 100%;\n            border-radius: 6px;\n            background: linear-gradient(90deg, #7c3aed, #06b6d4);\n            transition: width 0.15s ease;\n            box-shadow: 0 0 12px rgba(124, 58, 237, 0.3);\n        }\n\n        .plasma-slider-fill::after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            height: 50%;\n            background: linear-gradient(180deg, rgba(255,255,255,0.2), transparent);\n            border-radius: 6px 6px 0 0;\n        }\n\n        .plasma-slider-thumb {\n            position: absolute;\n            top: 50%;\n            width: 18px;\n            height: 18px;\n            border-radius: 50%;\n            background: linear-gradient(135deg, #a78bfa, #67e8f9);\n            transform: translate(-50%, -50%);\n            cursor: grab;\n            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),\n                        box-shadow 0.25s ease;\n            box-shadow:\n                0 2px 8px rgba(0, 0, 0, 0.3),\n                0 0 12px rgba(124, 58, 237, 0.25);\n            z-index: 2;\n        }\n\n        .plasma-slider-thumb::after {\n            content: '';\n            position: absolute;\n            inset: 3px;\n            border-radius: 50%;\n            background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.6), transparent 65%);\n        }\n\n        .plasma-slider-thumb:hover {\n            transform: translate(-50%, -50%) scale(1.2);\n            box-shadow:\n                0 2px 12px rgba(0, 0, 0, 0.3),\n                0 0 20px rgba(124, 58, 237, 0.35);\n        }\n\n        .plasma-slider-thumb:active {\n            cursor: grabbing;\n            transform: translate(-50%, -50%) scale(1.1);\n        }\n\n        .plasma-slider-value {\n            min-width: 42px;\n            height: 26px;\n            border-radius: 10px;\n            background: rgba(255, 255, 255, 0.04);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            color: rgba(200, 180, 255, 0.9);\n            font-size: 11px;\n            font-weight: 600;\n            font-family: 'Outfit', sans-serif;\n            text-align: center;\n            outline: none;\n            transition: all 0.3s ease;\n            padding: 0 6px;\n            flex-shrink: 0;\n        }\n\n        .plasma-slider-value:focus {\n            border-color: rgba(124, 58, 237, 0.4);\n            background: rgba(124, 58, 237, 0.08);\n            box-shadow: 0 0 12px rgba(124, 58, 237, 0.15);\n            color: #fff;\n        }\n\n        .plasma-slider-value:hover {\n            border-color: rgba(255, 255, 255, 0.15);\n        }\n\n        /* ═══ Dropdown ═══ */\n        .plasma-dropdown-wrap {\n            position: relative;\n            flex: 1;\n            min-width: 0;\n        }\n\n        .plasma-dropdown-btn {\n            width: 100%;\n            padding: 7px 32px 7px 12px;\n            border-radius: 12px;\n            background: rgba(255, 255, 255, 0.04);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            color: rgba(200, 180, 255, 0.9);\n            font-size: 11.5px;\n            font-weight: 500;\n            font-family: 'Outfit', sans-serif;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            text-align: left;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n\n        .plasma-dropdown-btn:hover {\n            border-color: rgba(124, 58, 237, 0.25);\n            background: rgba(124, 58, 237, 0.06);\n        }\n\n        .plasma-dropdown-arrow {\n            position: absolute;\n            right: 10px;\n            top: 50%;\n            transform: translateY(-50%);\n            font-size: 8px;\n            color: rgba(255, 255, 255, 0.25);\n            pointer-events: none;\n            transition: transform 0.3s ease;\n        }\n\n        .plasma-dropdown-wrap.plasma-open .plasma-dropdown-arrow {\n            transform: translateY(-50%) rotate(180deg);\n        }\n\n        .plasma-dropdown-menu {\n            position: absolute;\n            top: calc(100% + 4px);\n            left: 0;\n            right: 0;\n            border-radius: 12px;\n            background: rgba(20, 12, 45, 0.95);\n            backdrop-filter: blur(20px);\n            border: 1px solid rgba(255, 255, 255, 0.08);\n            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n            overflow: hidden;\n            z-index: 100;\n            opacity: 0;\n            transform: translateY(-5px) scale(0.97);\n            pointer-events: none;\n            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n        }\n\n        .plasma-dropdown-wrap.plasma-open .plasma-dropdown-menu {\n            opacity: 1;\n            transform: translateY(0) scale(1);\n            pointer-events: auto;\n        }\n\n        .plasma-dropdown-option {\n            padding: 9px 14px;\n            font-size: 11.5px;\n            font-weight: 500;\n            color: rgba(255, 255, 255, 0.5);\n            cursor: pointer;\n            transition: all 0.2s ease;\n        }\n\n        .plasma-dropdown-option:hover {\n            background: rgba(124, 58, 237, 0.12);\n            color: #fff;\n        }\n\n        .plasma-dropdown-option.plasma-selected {\n            color: #a78bfa;\n            background: rgba(124, 58, 237, 0.08);\n        }\n\n        /* ═══ Monitor Badge ═══ */\n        .plasma-monitor {\n            display: inline-flex;\n            align-items: center;\n            gap: 6px;\n            padding: 4px 12px;\n            border-radius: 10px;\n            font-size: 11px;\n            font-weight: 600;\n            letter-spacing: 0.3px;\n            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n        }\n\n        .plasma-monitor-dot {\n            width: 6px;\n            height: 6px;\n            border-radius: 50%;\n            transition: all 0.4s ease;\n        }\n\n        .plasma-monitor.plasma-on {\n            background: rgba(52, 211, 153, 0.1);\n            border: 1px solid rgba(52, 211, 153, 0.15);\n            color: #6ee7b7;\n        }\n\n        .plasma-monitor.plasma-on .plasma-monitor-dot {\n            background: #34d399;\n            box-shadow: 0 0 8px rgba(52, 211, 153, 0.5);\n        }\n\n        .plasma-monitor.plasma-off {\n            background: rgba(251, 113, 133, 0.08);\n            border: 1px solid rgba(251, 113, 133, 0.12);\n            color: #fca5a5;\n        }\n\n        .plasma-monitor.plasma-off .plasma-monitor-dot {\n            background: #fb7185;\n            box-shadow: 0 0 8px rgba(251, 113, 133, 0.4);\n        }\n\n        .plasma-monitor.plasma-val {\n            background: rgba(167, 139, 250, 0.08);\n            border: 1px solid rgba(167, 139, 250, 0.12);\n            color: #c4b5fd;\n        }\n\n        .plasma-monitor.plasma-val .plasma-monitor-dot {\n            background: #a78bfa;\n            box-shadow: 0 0 8px rgba(167, 139, 250, 0.4);\n        }\n\n        /* ═══ Color Picker ═══ */\n        .plasma-color-wrap {\n            display: flex;\n            align-items: center;\n            gap: 10px;\n        }\n\n        .plasma-color-bubble {\n            width: 28px;\n            height: 28px;\n            border-radius: 50%;\n            cursor: pointer;\n            position: relative;\n            border: 2px solid rgba(255, 255, 255, 0.1);\n            transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n        }\n\n        .plasma-color-bubble::after {\n            content: '';\n            position: absolute;\n            inset: 2px;\n            border-radius: 50%;\n            background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.35), transparent 60%);\n            pointer-events: none;\n        }\n\n        .plasma-color-bubble:hover {\n            transform: scale(1.15);\n            border-color: rgba(255, 255, 255, 0.25);\n            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n        }\n\n        .plasma-color-input {\n            position: absolute;\n            inset: -8px;\n            width: 44px;\n            height: 44px;\n            opacity: 0;\n            cursor: pointer;\n        }\n\n        .plasma-color-hex {\n            font-size: 10.5px;\n            font-weight: 600;\n            color: rgba(255, 255, 255, 0.35);\n            font-family: 'SF Mono', 'Fira Code', monospace;\n            letter-spacing: 0.5px;\n        }\n\n        /* ═══ Watermark ═══ */\n        .plasma-watermark {\n            text-align: center;\n            padding: 10px;\n            font-size: 9px;\n            font-weight: 500;\n            color: rgba(255, 255, 255, 0.08);\n            letter-spacing: 1.5px;\n            text-transform: uppercase;\n            border-top: 1px solid rgba(255, 255, 255, 0.02);\n        }\n\n        /* ═══ Separator ═══ */\n        .plasma-section-body > .plasma-row + .plasma-row {\n            border-top: 1px solid rgba(255, 255, 255, 0.02);\n        }\n\n        /* ═══ Tooltip Popup ═══ */\n        .plasma-slider-tooltip {\n            position: absolute;\n            top: -32px;\n            left: 50%;\n            transform: translateX(-50%) scale(0.8);\n            padding: 4px 10px;\n            border-radius: 8px;\n            background: rgba(124, 58, 237, 0.85);\n            color: #fff;\n            font-size: 10px;\n            font-weight: 600;\n            pointer-events: none;\n            opacity: 0;\n            transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n            white-space: nowrap;\n            backdrop-filter: blur(8px);\n            box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);\n        }\n\n        .plasma-slider-tooltip::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 50%;\n            transform: translateX(-50%) rotate(45deg);\n            width: 8px;\n            height: 8px;\n            background: rgba(124, 58, 237, 0.85);\n        }\n\n        .plasma-slider-thumb:hover .plasma-slider-tooltip,\n        .plasma-slider-thumb.plasma-dragging .plasma-slider-tooltip {\n            opacity: 1;\n            transform: translateX(-50%) scale(1);\n        }\n    ",document.head.appendChild(t);class i{constructor(){this._ev={}}on(n,t){return(this._ev[n]=this._ev[n]||[]).push(t),this}emit(n,t){(this._ev[n]||[]).forEach((n=>n(t)))}}class o extends i{constructor(t,a,s,i={}){super(),this.obj=a,this.key=s;const o=e("div","plasma-row",t);e("span","plasma-row-label",o).textContent=i.label||s;const r=e("div","plasma-row-control",o),l=e("label","plasma-toggle",r);this.inp=document.createElement("input"),this.inp.type="checkbox",this.inp.checked=!!a[s],l.appendChild(this.inp),e("div","plasma-toggle-track",l),e("div","plasma-toggle-thumb",l),this.inp.addEventListener("change",(()=>{a[s]=this.inp.checked,this.inp.checked?n.toggleOn():n.toggleOff(),this.emit("change",{value:a[s]})}))}}class r extends i{constructor(n,t,a,s={}){super(),this.obj=t,this.key=a,this.opts=s,this.min=s.min??0,this.max=s.max??100,this.step=s.step??0,this._lastTickPct=null;const i=e("div","plasma-row",n);i.style.flexWrap="wrap";e("span","plasma-row-label",i).textContent=s.label||a;const o=e("div","plasma-slider-wrap",i);o.style.width="100%",this.trackWrap=e("div","plasma-slider-track-wrap",o);const r=e("div","plasma-slider-track",this.trackWrap);this.fill=e("div","plasma-slider-fill",r),this.thumb=e("div","plasma-slider-thumb",this.trackWrap),this.tooltip=e("div","plasma-slider-tooltip",this.thumb),this.valInput=e("input","plasma-slider-value",o),this.valInput.type="text",this._setVal(t[a],!1),this._initDrag(),this._initInput(),this._initClick()}_pct(){return(this.obj[this.key]-this.min)/(this.max-this.min)*100}_setVal(t,e=!0){t=s(t,this.min,this.max),this.step&&(t=Math.round(t/this.step)*this.step),this.obj[this.key]=parseFloat(t.toFixed(10));const i=this._pct();if(this.fill.style.width=i+"%",this.thumb.style.left=i+"%",this.valInput.value=a(this.obj[this.key],this.step||void 0),this.tooltip.textContent=a(this.obj[this.key],this.step||void 0),e){const t=3*Math.round(i/3);this._lastTickPct!==t&&(this._lastTickPct=t,n.sliderTick(i/100))}e&&this.emit("change",{value:this.obj[this.key]})}_valFromX(n){const t=this.trackWrap.getBoundingClientRect(),e=s((n-t.left)/t.width,0,1);return this.min+e*(this.max-this.min)}_initDrag(){let t=!1;const e=n=>{if(!t)return;const e=n.touches?n.touches[0].clientX:n.clientX;this._setVal(this._valFromX(e))},a=()=>{t=!1,this.thumb.classList.remove("plasma-dragging"),n.sliderRelease(),document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",e),document.removeEventListener("touchend",a)},s=s=>{t=!0,this.thumb.classList.add("plasma-dragging"),n.sliderGrab(),s.preventDefault(),document.addEventListener("mousemove",e),document.addEventListener("mouseup",a),document.addEventListener("touchmove",e),document.addEventListener("touchend",a)};this.thumb.addEventListener("mousedown",s),this.thumb.addEventListener("touchstart",s)}_initClick(){this.trackWrap.addEventListener("mousedown",(n=>{n.target!==this.thumb&&this._setVal(this._valFromX(n.clientX))}))}_initInput(){this.valInput.addEventListener("focus",(()=>this.valInput.select())),this.valInput.addEventListener("keydown",(n=>{"Enter"===n.key?this.valInput.blur():"Escape"===n.key?(this.valInput.value=a(this.obj[this.key],this.step||void 0),this.valInput.blur()):"ArrowUp"===n.key?(n.preventDefault(),this._setVal(this.obj[this.key]+(this.step||(this.max-this.min)/100))):"ArrowDown"===n.key&&(n.preventDefault(),this._setVal(this.obj[this.key]-(this.step||(this.max-this.min)/100)))})),this.valInput.addEventListener("blur",(()=>{const n=parseFloat(this.valInput.value);isNaN(n)?this.valInput.value=a(this.obj[this.key],this.step||void 0):this._setVal(n)}))}}class l extends i{constructor(t,a,s,i={}){super(),this.obj=a,this.key=s;const o=e("div","plasma-row",t);e("span","plasma-row-label",o).textContent=i.label||s;const r=e("div","plasma-row-control",o);this.wrap=e("div","plasma-dropdown-wrap",r),this.btn=e("button","plasma-dropdown-btn",this.wrap);if(e("span","plasma-dropdown-arrow",this.wrap).textContent="▾",this.menu=e("div","plasma-dropdown-menu",this.wrap),this.entries=[],i.options)for(const[t,o]of Object.entries(i.options)){const i=e("div","plasma-dropdown-option",this.menu);i.textContent=t,i.dataset.value=o,a[s]===o&&(i.classList.add("plasma-selected"),this.btn.textContent=t),this.entries.push(i),i.addEventListener("click",(()=>{a[s]=o,this.btn.textContent=t,this.entries.forEach((n=>n.classList.remove("plasma-selected"))),i.classList.add("plasma-selected"),this.wrap.classList.remove("plasma-open"),n.dropdownSelect(),this.emit("change",{value:o})}))}this.btn.textContent||(this.btn.textContent=a[s]||"—"),this.btn.addEventListener("click",(t=>{t.stopPropagation(),document.querySelectorAll(".plasma-dropdown-wrap.plasma-open").forEach((n=>{n!==this.wrap&&n.classList.remove("plasma-open")}));const e=this.wrap.classList.contains("plasma-open");this.wrap.classList.toggle("plasma-open"),e?n.dropdownClose():n.dropdownOpen()})),document.addEventListener("click",(()=>{this.wrap.classList.contains("plasma-open")&&n.dropdownClose(),this.wrap.classList.remove("plasma-open")})),this.menu.addEventListener("click",(n=>n.stopPropagation()))}}class p{constructor(n,t,a,s={}){this.obj=t,this.key=a;const i=e("div","plasma-row",n);e("span","plasma-row-label",i).textContent=s.label||a;const o=e("div","plasma-row-control",i);this.badge=e("div","plasma-monitor",o),this.dot=e("div","plasma-monitor-dot",this.badge),this.txt=e("span","",this.badge),this._update(),this._iv=setInterval((()=>this._update()),200)}_update(){const n=this.obj[this.key];"boolean"==typeof n?(this.txt.textContent=n?"ACTIVE":"INACTIVE",this.badge.className="plasma-monitor "+(n?"plasma-on":"plasma-off")):(this.txt.textContent="number"==typeof n?a(n):String(n),this.badge.className="plasma-monitor plasma-val")}dispose(){clearInterval(this._iv)}}class d extends i{constructor(t,a,s,i={}){super(),this.obj=a,this.key=s;const o=e("div","plasma-row",t);e("span","plasma-row-label",o).textContent=i.label||s;const r=e("div","plasma-row-control",o),l=e("div","plasma-color-wrap",r);this.bubble=e("div","plasma-color-bubble",l),this.bubble.style.backgroundColor=a[s],this.colorInp=e("input","plasma-color-input",this.bubble),this.colorInp.type="color",this.colorInp.value=a[s],this.hex=e("span","plasma-color-hex",l),this.hex.textContent=a[s];let p=null;this.colorInp.addEventListener("input",(()=>{a[s]=this.colorInp.value,this.bubble.style.backgroundColor=this.colorInp.value,this.hex.textContent=this.colorInp.value,p||(p=setTimeout((()=>{p=null}),80),n.colorChange(this.colorInp.value)),this.emit("change",{value:a[s]})}))}}class c{constructor(t,a,s=!0,i=0){this.el=e("div","plasma-section"+(s?"":" plasma-collapsed"),t),this.el.style.animationDelay=i+"ms";const o=e("div","plasma-section-header",this.el);e("div","plasma-section-dot",o);e("span","plasma-section-title",o).textContent=a;e("span","plasma-section-chevron",o).textContent="▾",this.body=e("div","plasma-section-body",this.el),this._childCount=0,o.addEventListener("click",(()=>{const t=this.el.classList.contains("plasma-collapsed");this.el.classList.toggle("plasma-collapsed"),t?n.sectionExpand():n.sectionCollapse()}))}addFolder(n){return this._childCount++,new c(this.body,n.title,!1!==n.expanded,50*this._childCount)}addInput(n,t,e={}){const a=n[t];return e.options?new l(this.body,n,t,e):"color"===e.view||"string"==typeof a&&/^#[0-9a-f]{3,8}$/i.test(a)?new d(this.body,n,t,e):"boolean"==typeof a?new o(this.body,n,t,e):"number"==typeof a?new r(this.body,n,t,{...e,min:e.min??0,max:e.max??(3*a||100)}):new p(this.body,n,t,e)}addMonitor(n,t,e={}){return new p(this.body,n,t,e)}}class b{constructor(t,a){this.pages=[];const s=e("div","plasma-nav",t),i=e("div","plasma-content",t);a.forEach(((t,a)=>{const o=e("div","plasma-nav-bubble"+(0===a?" plasma-active":""),s);o.textContent=t.title;const r=e("div","plasma-page"+(0===a?" plasma-active":""),i),l={el:r,_childCount:0,addFolder:function(n){return this._childCount++,new c(r,n.title,!1!==n.expanded,60*this._childCount)},addInput:(n,t,e)=>new c(r,"",!0).addInput(n,t,e),addMonitor:(n,t,e)=>new c(r,"",!0).addMonitor(n,t,e)};this.pages.push(l),o.addEventListener("mouseenter",(()=>n.navHover())),o.addEventListener("click",(()=>{s.querySelectorAll(".plasma-nav-bubble").forEach((n=>n.classList.remove("plasma-active"))),i.querySelectorAll(".plasma-page").forEach((n=>n.classList.remove("plasma-active"))),o.classList.add("plasma-active"),r.classList.add("plasma-active"),n.tabSwitch()}))}))}}window.PlasmaUI={Pane:class{constructor(t={}){if(this._hidden=!1,this.el=e("div","plasma-pane"),this.shell=e("div","plasma-shell",this.el),t.title){const a=e("div","plasma-titlebar",this.shell);e("div","plasma-title-orb",a);e("span","plasma-title-text",a).textContent=t.title;const s=e("div","plasma-title-close",a);s.textContent="✕",s.addEventListener("mouseenter",(()=>n.closeHover())),s.addEventListener("click",(()=>{this.hidden=!0})),this._initDrag(a)}document.body.appendChild(this.el),n.paneOpen()}get hidden(){return this._hidden}set hidden(t){this._hidden=t,t?(this.el.classList.add("plasma-hidden"),n.paneClose()):(this.el.classList.remove("plasma-hidden"),n.paneOpen(),this.el.style.animation="none",this.el.offsetHeight,this.el.style.animation="")}addTab(n){return new b(this.shell,n.pages)}addFolder(n){return new c(this.shell,n.title,!1!==n.expanded)}_initDrag(n){let t,e,a,s,i=!1;n.addEventListener("mousedown",(n=>{if(n.target.classList.contains("plasma-title-close"))return;i=!0;const o=this.el.getBoundingClientRect();t=n.clientX,e=n.clientY,a=o.left,s=o.top,this.el.style.right="auto",this.el.style.left=a+"px",this.el.style.top=s+"px",this.el.style.transition="none",n.preventDefault()})),document.addEventListener("mousemove",(n=>{i&&(this.el.style.left=a+n.clientX-t+"px",this.el.style.top=s+n.clientY-e+"px")})),document.addEventListener("mouseup",(()=>{i&&(i=!1,this.el.style.transition="")}))}dispose(){this.el.remove()}}}}();
var isAllowed = 'true', submitToKingF = false, submitToKingA = true, Soduko, SodukoPos;
function initializeControl() {
  if (!localStorage.getItem('lastToggleTime')) {
    localStorage.setItem('lastToggleTime', Date.now());
    localStorage.setItem('booleanState', JSON.stringify(true));
  };
};
function getBooleanState() {
  const lastToggleTime = parseInt(localStorage.getItem('lastToggleTime'), 10);
  const now = Date.now();
  const elapsedTime = now - lastToggleTime;
  const cycleTime = 15 * 60 * 1000;
  const isOn = Math.floor(elapsedTime / cycleTime) % 2 === 0;
  if (JSON.parse(localStorage.getItem('booleanState')) !== isOn) {
    localStorage.setItem('booleanState', JSON.stringify(isOn));
    localStorage.setItem('lastToggleTime', now);
    isAllowed = isOn;
    alert('You\'re aimbot permission is now ' + isOn.toString());
  };
  return isOn;
};
initializeControl();
if(!localStorage['papa']){var t={"turret":{"striker":"XT"},"hull":{"hornet":"XT"}};localStorage['papa']=JSON.stringify(t);};
var Sounds = [];
class CustomAudioBuffer {
    constructor(audioBuffer) {
        !Sounds.includes(this) && Sounds.push(this);
        this.audioBuffer = audioBuffer;
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    play() {
        const source = this.audioContext.createBufferSource();
        source.buffer = this.audioBuffer;
        source.connect(this.audioContext.destination);
        source.start(0);
        source.onended = () => {
            console.log("Audio playback finished.");
        };
    }
};
var oF = CanvasRenderingContext2D.prototype.fillText;
var oS = CanvasRenderingContext2D.prototype.strokeText;
CanvasRenderingContext2D.prototype.fillText = function() {
    if (arguments[0] && typeof arguments[0] == 'string' && ['Leave', 'Scars'].some(t => arguments[0].includes(t))) {
        arguments[0] = arguments[0].replaceAll('Leave', '????').replaceAll('Scars', '????');
        return oF.apply(this, arguments);
    };
    if (arguments[0] && typeof arguments[0] == 'string' && ['Sick', 'Thrife'].some(t => arguments[0].includes(t))) {
        arguments[0] = arguments[0].replaceAll('Sick', 'Suck').replaceAll('Thrife', 'Bitch');
        return oF.apply(this, arguments);
    };
    return oF.apply(this, arguments);
};
CanvasRenderingContext2D.prototype.strokeText = function() {
    if (arguments[0] && typeof arguments[0] == 'string' && ['Leave', 'Scars'].some(t => arguments[0].includes(t))) {
        arguments[0] = arguments[0].replaceAll('Leave', '????').replaceAll('Scars', '????');
        return oS.apply(this, arguments);
    };
    if (arguments[0] && typeof arguments[0] == 'string' && ['Sick', 'Thrife'].some(t => arguments[0].includes(t))) {
        arguments[0] = arguments[0].replaceAll('Sick', 'Suck').replaceAll('Thrife', 'Bitch');
        return oS.apply(this, arguments);
    };
    return oS.apply(this, arguments);
};
async function fetchAndDecodeAudio(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
};
function sendToWS(message) {
    window.postMessage({
        action: "sendToWS",
        message: message
    }, "*");
};
console.log('main tanki');
window.DEBUG = 5;
var tempInt;
var Skins = {
    "firebird": {
        "or": "573/113511/153/137/31033604622310",
        "XT": "0/16722/167/100/31033604530020",
        "LC": "606/154706/226/46/31033604523453",
        "DC": "574/111547/344/362/31033604472221",
        "DC_old": "546/140033/371/67/31033604465511",
        "GT": "620/113215/220/43/31033604507506"
    },
    "freeze": {
        "or": "575/153310/123/250/31033604537313",
        "XT": "545/126533/221/204/31033604562720",
        "XT_new": "607/133452/43/130/31033604565055",
        "LC": "605/14613/143/127/31033604552551",
        "IC": "605/135171/211/104/31033604546324",
        "GT": "613/146472/243/156/31033604531607",
        "SE": "575/141301/263/323/31033604560325"
    },
    "isida": {
        "or": "605/12650/334/263/31033604666004",
        "XT": "547/121262/134/345/31033604677132",
        "LC": "606/155040/263/253/31033604672363",
        "GT": "605/12655/270/246/31033604660301"
    },
    "tesla": {
        "or": "567/20040/100/57/31033605122122",
        "XT_new": "567/20040/100/30/31033605140327",
        "LC": "604/60235/244/25/31033605125726",
        "RF": "616/167677/151/223/31033605130425"
    },
    "hammer": {
        "or": "611/147301/37/333/31033604645545",
        "XT": "550/160307/363/221/31033604643362",
        "LC": "601/166273/204/221/31033604634650",
        "DC": "604/4215/36/135/31033605266363"
    },
    "twins": {
        "or": "575/4122/336/247/31033605203717",
        "XT": "547/35525/56/66/31033605232035",
        "LC": "577/157371/340/255/31033605210405",
        "SP": "573/113554/112/100/31033605224225",
        "RF": "607/24114/77/214/31033605215045",
        "GT": "617/163502/325/41/31033605175257"
    },
    "ricochet": {
        "or": "603/121326/210/264/31033604765662",
        "XT": "546/5477/152/352/31033605004772",
        "LC": "556/131232/204/234/31033604772501",
        "RF": "577/176465/41/10/31033605000151"
    },
    "vulcan": {
        "or": "0/16722/20/40/31033604715057",
        "XT": "0/16722/260/334/31033604733427",
        "PR": "556/15741/256/125/31033605241104",
        "UT": "560/31363/210/347/31033604717360",
        "DC": null
    },
    "smoky": {
        "or": "566/114246/64/4/31033605044215",
        "XT": "0/114/153/53/31033605053755",
        "LC": "577/171773/42/54/31033605047550",
        "GT": "607/133661/133/27/31033605036471"
    },
    "striker": {
        "or": "0/16723/37/11/31033605013174",
        "XT": "551/70756/233/273/31033605117137",
        "UT": "570/164502/316/245/31033605234224"
    },
    "thunder": {
        "or": "601/105644/16/124/31033604626332",
        "XT": "0/16722/167/101/31033605170145",
        "PR": "557/14251/175/251/31033605155427",
        "UT": "551/122165/142/136/31033605157155",
        "LC": "545/14356/174/306/31033605151121",
        "GT": "603/104171/41/115/31033605030161",
        "XT_new": "617/134472/113/60/31033605164111"
    },
    "scorpion": {
        "or": "600/40107/4/364/31033605243165",
        "XT_new": "602/132677/206/41/31033605253521"
    },
    "magnum": {
        "or": "0/16723/57/323/31033604453663",
        "XT": "550/75104/53/350/31033604732253",
        "SP": "612/42416/374/133/31033604725533"
    },
    "railgun": {
        "or": "567/105205/202/122/31033604741475",
        "XT": "0/16722/6/301/31033604764033",
        "LC": "550/121443/145/146/31033604745456",
        "PR": "553/116715/27/132/31033604752652",
        "UT": "556/177362/212/346/31033604754562",
        "GT": "606/155010/245/142/31033604735353"
    },
    "gauss": {
        "or": "611/61722/256/76/31033604653206",
        "XT": "560/124462/246/14/31033604617041",
        "PR": "554/41313/45/141/31033604572567",
        "UT": "563/51105/72/133/31033605272237",
        "GT": "613/146442/233/316/31033604574743",
        "IC": "614/75662/326/41/31033604602505"
    },
    "shaft": {
        "or": "0/114/160/315/31033605025210",
        "XT": "546/73531/62/216/31033605014624",
        "LC": "600/170471/174/26/31033605260624"
    },
    "wasp": {
        "or": "574/111243/33/322/31033607311775",
        "XT": "0/16722/167/77/31033610130736",
        "DC": "574/113351/211/154/31033610052500",
        "LC": "577/171773/42/62/31033610115062",
        "GT": "620/112773/325/5/31033610100325"
    },
    "hopper": {
        "or": "564/5207/367/304/31033610326736",
        "XT_new": "564/41402/173/47/31033610315703",
        "RF": "616/167677/151/211/31033607331063"
    },
    "hornet": {
        "or": "566/70102/323/346/31033607367072",
        "XT": "0/16722/6/305/31033607424605",
        "LC": "551/32007/310/225/31033607400400",
        "PR": "553/1466/317/276/31033607413764",
        "UT": "562/165115/303/236/31033610210055",
        "GT": "605/27506/77/216/31033607347661"
    },
    "viking": {
        "or": "571/121215/5/23/31033607765702",
        "XT": "0/16722/167/76/31033610034165",
        "LC": "545/14403/373/22/31033607776373",
        "PR": "557/14273/215/344/31033610007323",
        "UT": "552/54655/57/366/31033610356100",
        "GT": "603/64520/263/244/31033607745375",
        "XT_new": "606/155145/337/205/31033610020277",
        "DC": "604/7224/253/317/31033610256112"
    },
    "crusader": {
        "or": "566/4547/232/306/31033607177563",
        "XT_new": "566/40410/335/237/31033610341433",
        "RF": "607/24114/77/31/31033607224317"
    },
    "hunter": {
        "or": "567/166366/55/140/31033610271513",
        "XT": "547/121236/44/244/31033607523721",
        "LC": "577/157453/256/241/31033607506717",
        "PR": "554/155720/136/73/31033607521775",
        "UT": "561/113562/137/140/31033610302174",
        "GT": "607/133630/253/171/31033607471473",
        "DC": null
    },
    "paladin": {
        "or": "573/47363/125/65/31033610154443",
        "XT_new": "573/47363/125/60/31033610367705",
        "RF": "577/176465/41/12/31033607640405"
    },
    "dictator": {
        "or": "602/61700/245/106/31033607256604",
        "XT": "546/125503/267/14/31033607303502",
        "LC": "600/170471/174/17/31033610146055",
        "GT": "606/154745/265/375/31033607235725",
        "SP": "621/133615/104/57/31066757323353"
    },
    "titan": {
        "or": "606/22645/10/357/31033607664142",
        "XT": "545/41207/304/132/31033607734572",
        "LC": "601/166273/204/222/31033607677022",
        "PR": "555/103037/265/247/31033607711541",
        "SP": "612/40333/350/361/31033607720032"
    },
    "ares": {
        "or": "560/117661/334/334/31033607160324",
        "XT_new": "562/161162/24/375/31033610137021"
    },
    "mammoth": {
        "or": "600/67314/131/54/31033607623773",
        "XT": "0/16722/260/335/31033607615546",
        "LC": "557/31354/323/254/31033607553520",
        "UT": "571/76747/372/131/31033610235472",
        "SP": "573/113554/112/106/31033607575155",
        "GT": "617/163502/325/33/31033607536216"
    },
    "hyperion": {
        "or": "556/107004/326/35/30545000710771",
        "XT": "603/140170/104/322/30545000710642"
    },
    "crisis": {
        "or": "562/45273/110/127/30545000710447",
        "XT": "602/142250/300/167/30545000710756"
    }
};
var SelectedTank = {
    turret: {},
    hull: {}
};
document.body.insertAdjacentHTML('beforeend', `
<div id='main'>
    <div class='tabs'>
        <div class='tab active' data-tab="Tank">Tank</div>
        <div class='tab' data-tab="Turret">Turret</div>
        <div class='tab' data-tab="Visual">Visual</div>
        <div class='tab' data-tab="Skins">Skins</div>
        <div class='tab' data-tab="Other">Other</div>
    </div>
    <div class='contents'>
        <div class="content on" data-content="Tank">
            <div class='hack-group'>
                <h>Airbreak</h><h class="status disabled">Disabled</h>
                <h class="extra">Type:</h>
                <select class="dropdown">
                    <option value="tilt">Tilt</option>
                    <option value="airWalk">AirWalk</option>
                </select>
                <h class="extra">Face-Target:</h>
                <select class="dropdown">
                    <option value="false">Disabled</option>
                    <option value="true">Enabled</option>
                </select>
                <h class="extra">Speed:</h>
                <label>
                  <input id="airbreak-speed" type="range" min="0" max="1000" class="slider-input" value="100">
                  <input for="airbreak-speed" value="100"></input>
                </label>
            </div>
            <div class='hack-group'>
                <h>Anti-Aim</h><h class="status disabled">Disabled</h>
            </div>
            <div class='hack-group'>
                <h>Follow-Tank</h><h class="status disabled">Disabled</h>
                <h class="extra">Target:</h>
                <h class="extra">Height:</h><h class="display"></h>
            </div>
            <div class='hack-group'>
              <h>Speed</h>
              <label class="switch">
                  <input id="speed-check" type="checkbox">
                  <span class="slider"></span>
              </label>
              <h class="extra">Speed:</h>
              <input id="speed-range" type="range" min="0" max="100" class="slider-input" value="1">
              <input for="" value="1"></input>
              <h class="extra">Turn Speed:</h>
              <input id="turn-speed-range" type="range" min="0" max="100" class="slider-input" value="1">
              <input for="" value="1"></input>
              <h class="extra">Acceleration:</h>
              <input id="acceleration-range" type="range" min="0" max="100" class="slider-input" value="1">
              <input for="" value="1"></input>
            </div>
            <div class='hack-group'>
            <h>Never-Flip</h>
              <label class="switch">
                  <input id="neverFlip" type="checkbox">
                  <span class="slider"></span>
              </label>
          </div>
        </div>
        <div class="content off" data-content="Turret">
            <div class='hack-group'>
                <h>Aimbot</h>
                <label class="switch">
                    <input id="aimbot3" type="checkbox">
                    <span class="slider"></span>
                </label>
                <h class="extra">Type:</h>
                <select class="dropdown">
                    <option value="turret">Turret</option>
                    <option value="camera">Camera</option>
                </select>
            </div>
            <div class='hack-group'>
                <h>Aim-Assist</h>
                <label class="switch">
                    <input id="aimbot" type="checkbox">
                    <span class="slider"></span>
                </label>
                <input id="aim-assist-range" type="range" min="0" max="720" class="slider-input" value="12">
                <input for="" value="12"></input>
            </div>
            <div class='hack-group'>
                <h>Vertical-Aim</h>
                <label class="switch">
                    <input id="aimbot2" type="checkbox">
                    <span class="slider"></span>
                </label>
          </div>
        </div>
        <div class="content off" data-content="Visual">
            <div class='hack-group'>
                <div class="esp-toggle">
                    <h>ESP</h>
                    <label class="switch">
                        <input id="esp-check" type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="color-section">
                    <div class="color-item">
                        <label for="enemies-color">Enemies:</label>
                        <input id="colorPicker" type="color" class="color-picker" value="#ff0000">
                    </div>
                    <div class="color-item">
                        <label for="allies-color">Allies:</label>
                        <input id="colorPicker2" type="color" class="color-picker" value="#ffffff">
                    </div>
                    <div class="color-item">
                        <label for="target-color">Target:</label>
                        <input id="colorPicker3" type="color" class="color-picker" value="#6600ff">
                    </div>
                    <div class="color-item">
                        <label for="self-color">Self:</label>
                        <input id="colorPicker4" type="color" class="color-picker" value="#ffffff">
                    </div>
                </div>
            </div>
            <div class='hack-group'>
                <div class="freeze-tanks-toggle">
                    <h>Freeze Tanks</h>
                    <label class="switch">
                        <input id="freeze-tanks-check" type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
        </div>
        <div class="content off" data-content="Skins">
            <div class='hack-group'>
                <h>Skins</h>
                <label class="switch">
                    <input id="skin-check" type="checkbox">
                </label>
                <h>Skin Selection</h>
                <h class="extra">Turret:</h>
                <select id="turret-dd" class="dropdown">
                    <option value="Skin1">Skin 1</option>
                    <option value="Skin2">Skin 2</option>
                </select>
                <h class="extra">Hull:</h>
                <select id="hull-dd" class="dropdown">
                    <option value="SkinA">Skin A</option>
                    <option value="SkinB">Skin B</option>
                </select>
            </div>
        </div>
        <div class="content off" data-content="Other">
            <div class='hack-group'>
                <h>Spectate</h><h class="status disabled">Disabled</h>
                <h class="extra">Target:</h>
                <!--<select class="dropdown">
                    <option value="Disabled">Free Fly</option>
                </select>-->
                <h class="extra">Face-Turret:</h>
                <select class="dropdown">
                    <option value="false">Disabled</option>
                </select>
          </div>
        </div>
    </div>
</div>

<style>
    /* Main Container */
    #main {
        position: absolute;
        border-radius: 15px;
        width: 500px;
        z-index: 99999;
        background: linear-gradient(145deg, #240053, #3b007b);
        left: 25px;
        top: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        border: 2px solid #4000a3;
        user-select: none;
        backdrop-filter: blur(10px);
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    /* Tabs Section */
    .tabs {
        display: flex;
        justify-content: space-evenly;
        background: rgba(0, 0, 0, 0.3);
        padding: 10px;
        border-bottom: 2px solid #4000a3;
    }

    .tab {
        color: #fff;
        padding: 10px 20px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        border-radius: 10px;
        transition: all 0.3s ease;
    }

    .tab:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .tab.active {
        background: linear-gradient(145deg, #5800b3, #8000ff);
        box-shadow: 0 5px 15px rgba(128, 0, 255, 0.5);
    }

    /* Content Section */
    .contents {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
    }

    .hack-group {
        margin-bottom: 15px;
        background: rgba(255, 255, 255, 0.1);
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .hack-group h {
        color: #fff;
        font-size: 16px;
        margin-bottom: 5px;
    }

    .extra {
        color: #bbb;
        font-size: 14px;
    }

    .status {
        color: #f00;
        margin-left: 10px;
    }

    .status.enabled {
        color: #0f0;
    }

    .slider-input {
        width: 100%;
        margin-top: 5px;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 34px;
        height: 20px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 20px;
    }

    .switch input:checked + .slider {
        background-color: #2196F3;
    }
    .on {
        display: block;
    }
    
    .off {
        display: none;
    }
    
    .tooltip {
  position: absolute;
  background: #333;
  color: white;
  border-radius: 12px;
  padding: 8px 12px;
  border: 2px solid #555;
  font-family: Arial, sans-serif;
  font-size: 14px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.2s ease;
  z-index: 99999999999999999;
}

.tooltip:hover {
  transform: translateY(-5px);
  opacity: 0.9;
}
</style>
`);
function createTooltip(text, e) {
    var tooltip = document.createElement('div');
    document.body.appendChild(tooltip);
    tooltip.textContent = text;
    tooltip.classList.add('tooltip');
    tooltip.style.left = e.clientX + 20 + 'px';
    tooltip.style.top = e.clientY - tooltip.getBoundingClientRect().height - 20 + 'px';
};
(() => {
  document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('on');
                content.classList.add('off');
            });
            document.querySelector(`.content[data-content="${tab.getAttribute('data-tab')}"]`).classList.add('on');
            document.querySelector(`.content[data-content="${tab.getAttribute('data-tab')}"]`).classList.remove('off');
        });
    });
    document.querySelectorAll('.hack-group').forEach(e => {
        e.addEventListener('mouseover', (t) => {
            var topic = e.querySelector('h').textContent;
            switch (topic) {
                case 'Airbreak':
                    createTooltip('Press end+1', t);
                    break;
                case 'Anti-Aim':
                    createTooltip('Press end+2', t);
                    break;
                case 'Follow-Tank':
                    createTooltip('Press end+3', t);
                    break;
                case 'Aimbot':
                    createTooltip('Ignore this feature', t);
                    break;
                case 'Freeze Tanks':
                    createTooltip('Hold " t " to freeze enemy tanks', t);
                    break;
                case 'Skins':
                    createTooltip('Disabled for now', t);
                    break;
                case 'Spectate':
                    createTooltip('Press end+4', t);
                    break;
            };
        });
        e.addEventListener('mouseout', (t) => {
            document.querySelectorAll('.tooltip').forEach(p => {
                p.remove();
            });
        });
    });
})();
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function() {
    const hexColor = colorPicker.value;
    const decimalColor = hexToDecimal(hexColor);
    window.espColor = decimalColor;
});
const colorPicker2 = document.getElementById("colorPicker2");
colorPicker2.addEventListener("input", function() {
    const hexColor = colorPicker2.value;
    const decimalColor = hexToDecimal(hexColor);
    window.espColor2 = decimalColor;
});
const colorPicker3 = document.getElementById("colorPicker3");
colorPicker3.addEventListener("input", function() {
    const hexColor = colorPicker3.value;
    const decimalColor = hexToDecimal(hexColor);
    window.espColor3 = decimalColor;
});
const colorPicker4 = document.getElementById("colorPicker4");
colorPicker4.addEventListener("input", function() {
    const hexColor = colorPicker4.value;
    const decimalColor = hexToDecimal(hexColor);
    window.espColor4 = decimalColor;
});
function hexToDecimal(hex) {
    return parseInt(hex.slice(1), 16);
};
document.querySelectorAll('#main').forEach(e => e.style.display = 'none');
function updateAimAmount() {
    try {
        AIM;
    } catch (error) {
        return;
    };
    //for (const key in AIM) {
        //for (const key2 in AIM[key]) {
            //if ((AIM[key][key2].toString() == window.prevAimAmount.toString()) || (AIM[key][key2] == 0)) {
                if (AIM && isAllowed) {
                  //AIM[key][key2] = window.aimAmount;
                  Object.values(searchInObject(AIM, '==3'))[0][Object.keys(Object.values(searchInObject(AIM, '==3'))[0])[0]] = window.aimAmount;
                  Object.values(searchInObject(AIM, '==3'))[0][Object.keys(Object.values(searchInObject(AIM, '==3'))[0])[1]] = Object.values(searchInObject(AIM, '==3'))[0][Object.keys(Object.values(searchInObject(AIM, '==3'))[0])[1]] == 0 ? 0.0034906584520148633 : Object.values(searchInObject(AIM, '==3'))[0][Object.keys(Object.values(searchInObject(AIM, '==3'))[0])[1]];
                  prevAimAmount = aimAmount;
                }/* else {
                  aimAmount = 0;
                  AIM[key][key2] = window.aimAmount;
                  prevAimAmount = aimAmount;
                };*/
            //};
        //};
    //};
};
localStorage['apap'] = localStorage['apap'] || false;
localStorage['papa'] = localStorage['papa'] || JSON.stringify(SelectedTank);
SelectedTank = JSON.parse(localStorage['papa']);
try {
    for (const k in t = Object.entries(Skins?.[Object.entries(SelectedTank.hull)?.[0]?.[0]])) {
        if (t[k][0] !== 'or') {
            var el = document.createElement('option');
            el.textContent = t[k][0];
            el.value = t[k][0];
            Hull.appendChild(el);
        };
    };
    for (const k in t = Object.entries(Skins?.[Object.entries(SelectedTank.turret)?.[0]?.[0]])) {
        if (t[k][0] !== 'or') {
            var el = document.createElement('option');
            el.textContent = t[k][0];
            el.value = t[k][0];
            Turret.appendChild(el);
        };
    };
} catch (error) {};
try {
document.querySelector('#hull-dd').value = SelectedTank.hull[Object.entries(SelectedTank.hull)[0][0]];
document.querySelector('#turret-dd').value = SelectedTank.turret[Object.entries(SelectedTank.turret)[0][0]];
} catch (e) {};
window.Hack = document.getElementById('speed-check').checked;
window.Aimbot = document.getElementById('aimbot').checked;
window.Aimbot2 = false;
window.Speed = 1;
window.Acceleration = 1;
window.aimAmount = 0;
window.espEnabled = false;
var freezeTanksFrame;
function freezeTanksFunc() {
    freezeTanksFrame = requestAnimationFrame(freezeTanksFunc);
    if (!config) return;
    if (config.hacks.freezeTanks.enabled) {
        if (config.keysPressed.includes('t')) {
            enemies.forEach(e => {
                if (e[tankMovable]) {
                    e[tankMovable] = false;
                };
                var pos = getPositionOfTank(e);
                if (!e._pos) {	
                    e._pos = {x:pos.jm1_1,y:pos.jm1_1,z:pos.km1_1};
                };
                pos.jm1_1 = e._pos.x;
                pos.jm1_1 = e._pos.y;
                pos.km1_1 = e._pos.z;
            });
        } else {
            if (enemies[0]?._pos) {
                enemies.forEach(e => {
                    if (!e[tankMovable]) {
                        e[tankMovable] = true;
                    };
                    e._pos = null;
                });
            };
        };
    };
};
freezeTanksFunc();
function InputHandle(p, s) {
      if (p.id == 'airbreak-speed') {
          config.hacks.airBreak.speed = parseFloat(Exputs[s].value);
          return;
      };
      if (p.id == 'speed-range') {
          window.Speed = parseFloat(Exputs[s].value);
          return;
      };
      if (p.id == 'turn-speed-range') {
          window.turnSpeed = parseFloat(Exputs[s].value);
          return;
      };
      if (p.id == 'acceleration-range') {
          window.Acceleration = parseFloat(Exputs[s].value);
          return;
      };
      if (p.id == 'aim-assist-range') {
          window.aimAmount = parseFloat(Exputs[s].value);
          updateAimAmount();
          return;
      };
      if (p.srcElement.id == 'speed-check') {
          window.Hack = p.srcElement.checked;
          return;
      };
      if (p.srcElement.id == 'aimbot3') {
          config.hacks.turretAim.enabled = p.srcElement.checked;
          return;
      };
      if (p.srcElement.id == 'aimbot') {
          window.Aimbot = p.srcElement.checked;
          return;
      };
      if (p.srcElement.id == 'aimbot2') {
          p.srcElement.checked = true;
          Aimbot2 = true;
          AIM = null;
          clearInterval(tempInt);
          if (Aimbot2) {
              var tempInt = setInterval(() => {
                  if (AIM) {
                      var first = searchInObject(AIM, '==1')[0];
                      var second = searchInObject(first, '==1')[0];
                      var third = searchInObject(second, '==1')[0];
                      for (const k in third) {
                          if (third[k] < 0) {
                              
                              third[k] = -2;
                          };
                          if ((third[k] > 0) && third[k] < 2) {
                              
                              third[k] = 2;
                          };
                      };
                      clearInterval(tempInt);
                  };
              }, 1000);
          }
          return;
      };
      if (p.srcElement.id == 'neverFlip') {
          config.hacks.neverFlip.enabled = p.srcElement.checked;
          if (config.hacks.neverFlip.enabled && myTankInfo[1]) {
              const max = config.hacks.neverFlip.amount;
              lockTankValue(myTankInfo[1], "o1p_1", max);
              lockTankValue(myTankInfo[1], "p1p_1", max);
          };
          if (!config.hacks.neverFlip.enabled && myTankInfo[1]) {
              unlockTankValue(myTankInfo[1], "o1p_1");
              unlockTankValue(myTankInfo[1], "p1p_1");
          };
          return;
      };
      if (p.srcElement.id == 'esp-check') {
          window.espEnabled = p.srcElement.checked;
          return;
      };
      if (p.srcElement.id == 'freeze-tanks-check') {
          config.hacks.freezeTanks.enabled = p.srcElement.checked;
          return;
      };
      if (p.srcElement.id == 'skin-check') {
          localStorage['apap'] = p.srcElement.checked;
          return;
      };
      if (p.srcElement.id == 'turret-dd') {
          SelectedTank.turret[User.turret.name.toLowerCase()] = Turret.value;
    localStorage['papa'] = JSON.stringify(SelectedTank);
    for (const k in SelectedTank.turret) {
        if (k !== User.turret.name.toLowerCase()) {
            delete SelectedTank.turret[k];
        };
    };
    for (const k in SelectedTank.hull) {
        if (k !== User.hull.name.toLowerCase()) {
            delete SelectedTank.hull[k];
        };
    };
          return;
      };
      if (p.srcElement.id == 'hull-dd') {
          SelectedTank.hull[User.hull.name.toLowerCase()] = Hull.value;
    localStorage['papa'] = JSON.stringify(SelectedTank);
    for (const k in SelectedTank.turret) {
        if (k !== User.turret.name.toLowerCase()) {
            delete SelectedTank.turret[k];
        };
    };
    for (const k in SelectedTank.hull) {
        if (k !== User.hull.name.toLowerCase()) {
            delete SelectedTank.hull[k];
        };
    };
          return;
      };
  };
  function InputHandle2(p, s) {
      
  };
  var Config;
  function saveConfig() {
    Config = [];
    document.querySelectorAll('#main input, #main select').forEach(e => {
        if (e.type === 'checkbox') {
            Config.push(e.checked);
        } else {
            Config.push(e.value);
        }
    });
    localStorage['Config'] = JSON.stringify(Config);
  };
  function loadConfig() {
      Config = JSON.parse(localStorage['Config']);
      let i = 0;
      document.querySelectorAll('#main input, #main select').forEach(e => {
          if (e.type === 'checkbox') {
              e.checked = Config[i];
          } else {
              e.value = Config[i];
          };
          i++;
      });
      try {
          RangeInputs.forEach(e => {
              e.dispatchEvent(new Event('input', {
                  bubbles: true
              }))
          });
      } catch (e) {};
      try {
          Inputs.forEach(e => {
              e.dispatchEvent(new Event('input', {
                  bubbles: true
              }))
          });
      } catch (e) {};
      try {
          Dropdowns.forEach(e => {
              e.dispatchEvent(new Event('input', {
                  bubbles: true
              }))
          });
      } catch (e) {};
      document.getElementById('aimbot2').checked = false;
      Aimbot2 = false;
  };
  var Bools = document.querySelectorAll('.status');
  var Dropdowns = document.querySelectorAll('.dropdown');
  var Extras = document.querySelectorAll('.extra');
  var RangeInputs = document.querySelectorAll('input[type="range"]');
  var Inputs = document.querySelectorAll('input:not([type="range"]):not([for])');
  var Exputs = document.querySelectorAll('input[for]');
  for (let i=0;i<RangeInputs.length;i++) {
      RangeInputs[i].addEventListener("input", (e) => {
          Exputs[i].value = RangeInputs[i].value;
          InputHandle(RangeInputs[i], i);
          saveConfig();
      });
      Exputs[i].addEventListener('input', (e) => {
          RangeInputs[i].value = Exputs[i].value;
          InputHandle(RangeInputs[i], i);
          saveConfig();
      });
  };
  Inputs.forEach(e => {
      e.addEventListener('input', (e) => {
          InputHandle(e);
          saveConfig();
      });
  });
  Dropdowns.forEach(e => {
      e.addEventListener('input', (ev) => {
          saveConfig();
      });
  });
  Dropdowns[0].addEventListener('input', (e) => {
      config.hacks.airBreak.type = Dropdowns[0].value;
  });
  Dropdowns[1].addEventListener('input', (e) => {
      config.hacks.airBreak.faceTarget = eval(Dropdowns[1].value);
  });
  Dropdowns[2].addEventListener('input', (e) => {
      config.hacks.turretAim.type = Dropdowns[2].value;
  });
if (false && localStorage['apap'] == 'true') {
    document.getElementById('skin-check').setAttribute('checked', '');
    var ta = 0;
    var o = fetch;
    var replacements = {};
    try {
        var turretName = Object.entries(SelectedTank.turret)[0][0];
        var turret = Object.entries(SelectedTank.turret)[0][1];
        var hullName = Object.entries(SelectedTank.hull)[0][0];
        var hull = Object.entries(SelectedTank.hull)[0][1];
        replacements[Skins[turretName]['or']] = Skins[turretName][turret];
        replacements[Skins[hullName]['or']] = Skins[hullName][hull];
    } catch (error) {};
    fetch = function() {
        for (let key in replacements) {
            if (arguments[0].includes(key)) {
                ta++;
                arguments[0] = arguments[0].replace(key, replacements[key]);
                if (ta > window.DEBUG) {
                    console.log('Restoring original fetch function:', o);
                    setTimeout(() => {
                        fetch = o;
                    }, 5000);
                };
            };
        };
        return o.apply(this, arguments);
    };
};
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'm') {
        e.preventDefault();
        //alert('changed keybind to the "Insert" or "0" key');
        if (1 > 0 || isAllowed) {
          document.querySelector('#main').style.display = document.querySelector('#main').style.display == 'block' ? 'none' : 'block';
        } else {
          document.querySelector('#main').style.display = 'none';
          alert('You\'re 15 minutes is up!');
        };
    };
});
setInterval(() => {
    updateAimAmount();
    //getBooleanState();
    try {
        if (getTanks('playerSoduko')[0]) {
            //var ttt = getTanks('playerSoduko')[0];
            Soduko = getTanks('playerSoduko')[0];
            SodukoPos = getPositionOfTank(Soduko);
            /*var tPos = getPositionOfTank(ttt);
            config.hacks.followTank.enabled = true;
            config.hacks.followTank.index = getTanks('others').indexOf(ttt);
            config.hacks.followTank.height = 0;
            otherTankPos = tPos;*/
        };
        if (getTanks('playerRhapsody')[0]) {
            window.isInMatch = true;
        } else {
            window.isInMatch = false;
        };
        /*if (getTanks('playerSkiIl3d')[0]) {
            window.isInMatch = true;
        } else {
            window.isInMatch = false;
        };*/
    } catch (error) {};
}, 2000);
var f, r = true;
function a() {
    if (r) {
        f = requestAnimationFrame(a);
        if (User?.turret?.name) {
            try {
                Array.from(document.querySelectorAll('.extra')).filter(t=>t.textContent=='Turret:')[0].textContent = User.turret.name;
                Array.from(document.querySelectorAll('.extra')).filter(t=>t.textContent=='Hull:')[0].textContent = User.hull.name;
            } catch (e) {};
            for (const k in SelectedTank.turret) {
                if (k !== User?.turret?.name?.toLowerCase()) {
                    delete SelectedTank.turret[k];
                };
            };
            for (const k in SelectedTank.hull) {
                if (k !== User?.hull?.name?.toLowerCase()) {
                    delete SelectedTank.hull[k];
                };
            };
            SelectedTank.hull[User?.hull?.name?.toLowerCase()] = document.querySelector("#hull-dd").value;
            SelectedTank.turret[User?.turret?.name?.toLowerCase()] = document.querySelector("#turret-dd").value;
            localStorage['papa'] = JSON.stringify(SelectedTank);
            document.querySelector("#hull-dd").innerHTML = '';
            document.querySelector("#turret-dd").innerHTML = '';
            try {
                for (const k in t = Object.entries(Skins?.[User?.hull?.name?.toLowerCase()])) {
                    if (t[k][0] !== 'or') {
                        var el = document.createElement('option');
                        el.textContent = t[k][0];
                        el.value = t[k][0];
                        document.querySelector("#hull-dd").appendChild(el);
                    };
                };
                for (const k in t = Object.entries(Skins?.[User?.turret?.name?.toLowerCase()])) {
                    if (t[k][0] !== 'or') {
                        var el = document.createElement('option');
                        el.textContent = t[k][0];
                        el.value = t[k][0];
                        document.querySelector("#turret-dd").appendChild(el);
                    };
                };
            } catch (error) {};
            localStorage['papa'] = JSON.stringify(SelectedTank);
            cancelAnimationFrame(f);
            r = false;
        };
    };
};
try {
    a();
} catch (error) {
    console.log(error);
    r = false;
    cancelAnimationFrame(f);
};
var interval;
function getRandomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
};
function press(t, n) {
    autoPress(pressAuto, 0, new KeyboardEvent('keydown', {code: t}), n);
    autoPress(pressAuto, 0, new KeyboardEvent('keydown', {code: t}), n);
};
function getPositionOfTank(t) {
    return Object.values(Object.values(searchInObject(t, '=== 2'))[0])[3]
};
function getIntPosOfTank(t) {
    return Object.values(searchInObject(Object.values(searchInObject(myTank, '==2'))[1], '>41'))[2];
};
function getInfoOfTank(t) {
    return Object.values(Object.values(searchInObject(t, '=== 2'))[0])
};
function getRaycastMovementOfShell(t) {
    return Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(t, '==17'))[0], '==0'))[0], '==3'))[1], '==8'))[0], '==6'))[1];
};
function isChatOpen() {
    return document.querySelectorAll('input[type="text"]').length > 0;
};
function searchInObject(objectToSearch, comparisonString) {
    try {
        objectToSearch = Object.values(objectToSearch).filter(t => t?.__proto__);
        if (typeof objectToSearch !== 'object' || objectToSearch === null) {
            throw new TypeError('First argument must be a non-null object');
        };
        let comparisonFunction;
        try {
            comparisonFunction = new Function('value', `return Object.values(value?.__proto__)?.length ${comparisonString};`);
        } catch (e) {
            throw new Error('Invalid comparison string');
        };
        return Object.fromEntries(
            Object.entries(objectToSearch).filter(([key, value]) => 
                                                  comparisonFunction(value)
                                                 )
        );
    } catch (e){}
};
var first, second, third, fourth, firsta, key;
function onJoinGame() {
    /*first = searchInObject(Object.values(TEST[TEST.length - 1]).filter(t => t?.__proto__), '=== 15');
    second = searchInObject(Object.values(Object.values(first)[0]).filter(t => t?.__proto__), '> 18');
    third = searchInObject(Object.values(Object.values(second)[0]).filter(t => t?.__proto__), '=== 21');
    fourth = Object.values(searchInObject(Object.values(third[3]).filter(t => t?.__proto__), '=== 18'))[0];*/
    fourth = Tanki.allTanks;
    myTankPos = getPositionOfTank(getTanks('self')[0]);
    firsta = Utils.followCamera;
    key = Object.entries(Utils.followCamera).filter(t => typeof t[1] === 'number')[0][0];
    /*(() => {
        var first = searchInObject(TEST[TEST.length-1], '==15');;
        var second = searchInObject(Object.values(first)[0], '==65');
        var third = searchInObject(Object.values(second)[0], '==18');
        var fourth = Object.values(third)[0];
        var fifth = Object.values(fourth)[0][3];
        var sixth = searchInObject(Object.values(fifth), '==41');
        myTankIntPos = Object.values(sixth)[1];
    })();*/
    myTankInfo = getInfoOfTank(getTanks('self')[0]);
    otherTanks = getTanks('others');
    AIM = null;
    clearInterval(tempInt);
    if (Aimbot2) {
        tempInt = setInterval(() => {
            if (AIM) {
                var first = searchInObject(AIM, '==1')[0];
                var second = searchInObject(first, '==1')[0];
                var third = searchInObject(second, '==1')[0];
                for (const k in third) {
                    if (third[k] < 0) {
                        
                        third[k] = -2;
                    };
                    if ((third[k] > 0) && third[k] < 2) {
                        
                        third[k] = 2;
                    };
                };
                clearInterval(tempInt);
            };
        }, 1000);
    };
    try {
        myTank = getTanks('self')[0];
        if (!tankMovable) {
            tankMovable = Object.entries(myTank).filter(t => typeof t[1] == 'boolean' && t[1])[0][0];
        };
        updateSpec();
    } catch (e){};
};
var Utils, myTank, tankMovable, myTankPos, myTankIntPos, myTankInfo, otherTanks, otherTankPos, isGameActive = false;
/*function getTanks(t) {
    if (t == 'others') {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            return Object.values(Object.values(second1)[0])[0].some(p => p.m11v_1)
        });
    } else if (t == 'self') {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            return !Object.values(Object.values(second1)[0])[0].some(p => p.m11v_1)
        });
    } else if (t.includes('player')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            return Object.values(Object.values(second1)[0])[0].some(p => p?.m11v_1?.includes(t.replace('player', '')))
        });
    } else if (t.includes('enemies')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            return Object.values(Object.values(second1)[0])[0].some(p => p?.q11v_1?.b3_1 == 'ENEMY')
        });
    } else if (t.includes('allies')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            return Object.values(Object.values(second1)[0])[0].some(p => p?.q11v_1?.b3_1 == 'ALLY')
        });
    } else {
        return;
    };
};*/
function getTanks(t) {
    if (t == 'others') {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 14'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 17');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            return typeof Object.values(searchInObject(Object.values(third1)[1], '==0'))[2] == 'number';
        });
    } else if (t == 'self') {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 14'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 17');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            return typeof Object.values(searchInObject(Object.values(third1)[1], '==0'))[1] == 'boolean';
        });
    } else if (t.includes('player')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 14'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 17');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            return Object.values(searchInObject(Object.values(third1)[1], '==0'))[1]?.toString()?.includes(t.replace('player', ''));
        });
    } else if (t.includes('enemies')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 14'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 17');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            var fourth1;
            try {
                fourth1 = Object.values(Object.values(searchInObject(Object.values(third1)?.[1], '==1'))?.[2])?.[0] == 'ENEMY';
            } catch (e){};
            if (fourth1) return fourth1;
        });
    } else if (t.includes('allies')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 14'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 17');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            var fourth1;
            try {
                fourth1 = Object.values(Object.values(searchInObject(Object.values(third1)?.[1], '==1'))?.[2])?.[0] == 'ALLY';
            } catch (e){};
            if (fourth1) return fourth1;
        });
    } else {
        return;
    };
};
var eventListeners = [
    {
        elm: document,
        type: 'keydown',
        func: (e) => {
            if (!config.keysPressed.includes(e.key)) {
                config.keysPressed.push(e.key);
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('1')) {
                e.preventDefault();
                config.hacks.airBreak.enabled = !config.hacks.airBreak.enabled;
                config.tank.position.x = myTankPos.jm1_1;
                config.tank.position.y = myTankPos.km1_1;
                config.tank.position.z = myTankPos.lm1_1;
                myTank = getTanks('self')[0];
                if (!tankMovable) {
                    tankMovable = Object.entries(myTank).filter(t => typeof t[1] == 'boolean' && t[1])[0][0];
                };
                if (config.hacks.airBreak.type == 'tilt' && config.hacks.airBreak.enabled) {
                    myTank[tankMovable] = false;
                } else {
                    myTank[tankMovable] = true;
                };
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('2')) {
                e.preventDefault();
                /*if (!myTankIntPos) {
                    window.tankPhysicsComponent = searchInLargeObject(root, 'p152_1');
                    myTankIntPos = Object.values(searchInObject(tankPhysicsComponent.value, '==41'))[1];
                };*/
                if (config.hacks.antiAim.enabled && !config.hacks.antiAim.top) {
                    config.hacks.antiAim.top = true;
                    return;
                };
                config.hacks.antiAim.enabled = !config.hacks.antiAim.enabled;
                config.hacks.antiAim.top = false;
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('+')) {
                e.preventDefault();
                config.hacks.airBreak.speed += 5;
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('-')) {
                e.preventDefault();
                config.hacks.airBreak.speed -= 5;
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('3')) {
                e.preventDefault();
                config.hacks.followTank.enabled = !config.hacks.followTank.enabled;
                otherTankPos = getPositionOfTank(getTanks('others')[config.hacks.followTank.index]);
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('y')) {
                e.preventDefault();
                otherTanks = getTanks('others');
                config.hacks.followTank.index = (config.hacks.followTank.index + 1) % otherTanks.length;
                otherTankPos = getPositionOfTank(otherTanks[config.hacks.followTank.index]);
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('t')) {
                e.preventDefault();
                otherTanks = getTanks('others');
                config.hacks.followTank.index = (config.hacks.followTank.index - 1 + otherTanks.length) % otherTanks.length;
                otherTankPos = getPositionOfTank(otherTanks[config.hacks.followTank.index]);
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('b')) {
                e.preventDefault();
                try {
                    sendShells(Object.values(Object.values(searchInObject(getTanks('player' + nick)[0], '=== 2'))[0])[3]);
                    //sendShells(getClosestPlayer(myTankPos, otherTanks));
                } catch (er) {};
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('v')) {
                e.preventDefault();
                var myTankPosType;
                /*if (!myTankIntPos) {
                    window.tankPhysicsComponent = searchInLargeObject(root, 'p152_1');
                    myTankIntPos = Object.values(searchInObject(tankPhysicsComponent.value, '==41'))[1];
                };*/
                if (config.hacks.airBreak.enabled) {
                    myTankPosType = Tanki.interpolatedTankPosition;/*config.tank.position*/;
                } else {
                    myTankPosType = Tanki.interpolatedTankPosition;
                };
                if (config.hacks.flagTp.index) {
                    config.hacks.flagTp.index = !config.hacks.flagTp.index;
                    myTankPosType[Object.keys(myTankPosType)[0]] = Tanki.teamFlagPosition.jm1_1;
                    myTankPosType[Object.keys(myTankPosType)[1]] = Tanki.teamFlagPosition.km1_1;
                    myTankPosType[Object.keys(myTankPosType)[2]] = Tanki.teamFlagPosition.lm1_1;
                } else {
                    config.hacks.flagTp.index = !config.hacks.flagTp.index;
                    myTankPosType[Object.keys(myTankPosType)[0]] = Tanki.enemyFlagPosition.jm1_1;
                    myTankPosType[Object.keys(myTankPosType)[1]] = Tanki.enemyFlagPosition.km1_1;
                    myTankPosType[Object.keys(myTankPosType)[2]] = Tanki.enemyFlagPosition.lm1_1;
                };
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('4')) {
                config.hacks.spectate.enabled = !config.hacks.spectate.enabled;
                if (config.hacks.spectate.enabled) {
                    setSpec();
                } else {
                    resetSpec();
                };
            };
            if ((config.keysPressed.includes('End') || config.keysPressed.includes(']')) && config.keysPressed.includes('5')) {
                config.hacks.turretAim.enabled = !config.hacks.turretAim.enabled;
            };
            config.hacks.airBreak.enabled ? (Bools[0].textContent = 'Enabled', Bools[0].style.color = 'green') : (Bools[0].textContent = 'Disabled', Bools[0].style.color = 'red');
            config.hacks.antiAim.enabled ? (Bools[1].textContent = 'Enabled', Bools[1].style.color = 'green') : (Bools[1].textContent = 'Disabled', Bools[1].style.color = 'red');
            config.hacks.followTank.enabled ? (Bools[2].textContent = 'Enabled', Bools[2].style.color = 'green') : (Bools[2].textContent = 'Disabled', Bools[2].style.color = 'red');
            config.hacks.spectate.enabled ? (Bools[3].textContent = 'Enabled', Bools[3].style.color = 'green') : (Bools[3].textContent = 'Disabled', Bools[3].style.color = 'red');
        }
    },
    {
        elm: document,
        type: 'keyup',
        func: (e) => {
            if (config.keysPressed.includes(e.key)) {
                config.keysPressed = config.keysPressed.filter(t => t !== e.key);
            };
        }
    },
    {
        elm: document,
        type: 'click',
        func: (e) => {
            if (e.target.classList[1]?.includes('Common-whiteSpaceNoWrap')) {
                if (!e.target.textContent.includes(' ')) {
                    nick = e.target.textContent;
                } else {
                    nick = e.target.textContent.split(' ')[1];
                };
                if (config.hacks.spectate.enabled) {
                    specPlayer(nick);
                };
                otherTankPos = getPositionOfTank(getTanks('player' + nick)[0]);
                Extras[3].textContent = 'Target: ' + nick;
            };
        }
    }
];
function addEventListeners() {
    eventListeners.forEach(e => {
        e.elm.addEventListener(e.type, e.func);
        console.log(`added ${e.type} to ${e.elm}`);
    });
    interval = setInterval(() => {
        mines.forEach(mine => {
            mineRemFunc(mine);
        });
    });
    try {
        aa();
    } catch (error) {
        console.log(error);
        rr = false;
        cancelAnimationFrame(f);
    };
};
function removeEventListeners() {
    eventListeners.forEach(e => {
        e.elm.removeEventListener(e.type, e.func);
        console.log(`removed ${e.type} to ${e.elm}`);
        rr = false;
        cancelAnimationFrame(f);
    });
    clearInterval(interval);
};
var config = {
    tank: {
        position: {
            x: null,
            y: null,
            z: null
        }
    },
    hacks: {
        antiAim: {
            enabled: false,
            top: false
        },
        airBreak: {
            enabled: false,
            speed: 100,
            type: 'tilt',
            faceTarget: false
        },
        followTank: {
            enabled: false,
            player: null,
            index: 0,
            height: 50
        },
        flagTp: {
            index: true
        },
        spectate: {
            enabled: false,
            faceTurret: false
        },
        neverFlip: {
            enabled: false,
            amount: .4,
            done: false
        },
        turretAim: {
            enabled: false,
            type: 'turret'
        },
        freezeTanks: {
            enabled: false
        },
        hitbox: {
            enabled: false,
            amount: 2
        },
        noClip: {
            enabled: false,
            oSize: {}
        },
        autoPress: []
    },
    keysPressed: []
};
var originalAppendChild = Element.prototype.appendChild;
Element.prototype.appendChild = function() {
    if (arguments[0]?.tagName?.toLowerCase() === 'canvas') {
        if (this?.id == 'root') {
            if (isGameActive) {
                isGameActive = false;
                console.log('left game');
                //utils = null;
                resetSpec();
                window.TEST = [];
                window.shells = [];
                flagPos1 = null;
                flagPos2 = null;
                myTankIntPos = null;
            };
        }/* else if (Array.from(this.classList).length == 1) {
            if (!isGameActive) {
                isGameActive = true;
                console.log('joined game');
                updateSpec();
                function onJoinGame2() {
                    try {
                        onJoinGame();
                    } catch (error) {
                        console.log(error);
                        setTimeout(() => {
                            onJoinGame2();
                        }, 1000);
                    };
                };
                onJoinGame2();
            };
        }*/;
    };
    if (arguments[0]?.tagName?.toLowerCase() == 'div') {
        if (Array.from(arguments[0]?.classList).some(t => t.includes('GarageCommonStyle-animatedBlurredLeftBlock'))) {
            if (isGameActive) {
                isGameActive = false;
                console.log('opened garage');
                //utils = null;
                resetSpec();
                window.TEST = [];
                window.shells = [];
                flagPos1 = null;
                flagPos2 = null;
                myTankIntPos = null;
            };
        };
        if (Array.from(arguments[0]?.classList).some(t => t.includes('BattleMessagesComponentStyle-messageRow'))) {
            if (!isGameActive) {
                isGameActive = true;
                console.log('closed garage');
                updateSpec();
                function onJoinGame2() {
                    try {
                        onJoinGame();
                    } catch (error) {
                        console.log(error);
                        setTimeout(() => {
                            onJoinGame2();
                        }, 1000);
                    };
                };
                onJoinGame2();
            };
        };
    };
    return originalAppendChild.apply(this, arguments);
};
var ff, rr = true;
function aa() {
    if (rr) {
        ff = requestAnimationFrame(aa);
        if (window.isTarget && window.isInMatch) {
            myTankPos = Tanki.interpolatedTankPosition;
            config.hacks.antiAim.enabled = true;
            config.hacks.antiAim.top = true;
        };
        /*if (document.querySelectorAll('canvas').length > 1) {
            var t = document.querySelectorAll('canvas')[1];
            if (isGameActive && (t.classList.length > 1)) {
                isGameActive = false;
                console.log('left game');
                resetSpec();
                window.TEST = [];
                window.shells = [];
                flagPos1 = null;
                flagPos2 = null;
            };
            if (!isGameActive && !(t.classList.length > 1)) {
                isGameActive = true;
                console.log('joined game');
                updateSpec();
                function onJoinGame2() {
                    try {
                        onJoinGame();
                    } catch (error) {
                        console.log(error);
                        setTimeout(() => {
                            onJoinGame2();
                        }, 1000);
                    };
                };
                onJoinGame2();
            };
        };*/
        if (config.hacks.airBreak.enabled) {
            /*if (!config.tank.position.x) {
                config.tank.position.x = myTankPos.jm1_1;
                config.tank.position.y = myTankPos.km1_1;
                config.tank.position.z = myTankPos.lm1_1;
            };*/
            myTankInfo[0].jm1_1 = 0;
            myTankInfo[0].km1_1 = 0;
            myTankInfo[0].lm1_1 = 0;
            if (config.hacks.airBreak.type == 'tilt') {
                myTankPos.jm1_1 = Math.max(Object.values(mapBounds)[0], Math.min(Object.values(mapBounds)[3], config.tank.position.x));
                myTankPos.km1_1 = Math.max(Object.values(mapBounds)[1], Math.min(Object.values(mapBounds)[4], config.tank.position.y));
            };
            myTankPos.lm1_1 = Math.max(Object.values(mapBounds)[2], Math.min(Object.values(mapBounds)[5]+100, config.tank.position.z));
            if (config.hacks.airBreak.faceTarget) {
                faceTargetQuaternion(myTankPos, otherTankPos, myTankInfo);
            } else {
                updateTankOrientationToCamera();
            };
            // Get the camera's yaw (direction the camera is facing)
            const cameraYaw = -getCamYaw(); // Yaw for left-right

            // Calculate forward movement vector based on camera yaw
            const forwardX = Math.sin(cameraYaw); // Movement in the X direction
            const forwardZ = Math.cos(cameraYaw); // Movement in the Z direction

            // Move the tank based on key presses
            if (!isChatOpen() && !config.hacks.spectate.enabled) {
                if (config.keysPressed.includes('w')) {
                    // Move forward
                    if (config.hacks.airBreak.type == 'tilt') {
                        config.tank.position.x += forwardX * config.hacks.airBreak.speed;
                        config.tank.position.y += forwardZ * config.hacks.airBreak.speed;
                    } else if (config.hacks.airBreak.type == 'airWalk') {
                        myTankInfo[0].jm1_1 += forwardX * 1000;
                        myTankInfo[0].km1_1 += forwardZ * 1000;
                    };
                }
                if (config.keysPressed.includes('s')) {
                    // Move backward
                    if (config.hacks.airBreak.type == 'tilt') {
                        config.tank.position.x -= forwardX * config.hacks.airBreak.speed;
                        config.tank.position.y -= forwardZ * config.hacks.airBreak.speed;
                    } else if (config.hacks.airBreak.type == 'airWalk') {
                        myTankInfo[0].jm1_1 -= forwardX * 1000;
                        myTankInfo[0].km1_1 -= forwardZ * 1000;
                    };
                }

                // Calculate right movement vector, which is perpendicular to forward direction
                const rightX = Math.cos(cameraYaw); // Movement in the X direction (perpendicular to forward)
                const rightZ = -Math.sin(cameraYaw); // Movement in the Z direction (perpendicular to forward)

                if (config.keysPressed.includes('d')) {
                    // Move right
                    if (config.hacks.airBreak.type == 'tilt') {
                        config.tank.position.x += rightX * config.hacks.airBreak.speed;
                        config.tank.position.y += rightZ * config.hacks.airBreak.speed;
                    } else if (config.hacks.airBreak.type == 'airWalk') {
                        myTankInfo[0].jm1_1 += rightX * 1000;
                        myTankInfo[0].km1_1 += rightZ * 1000;
                    };
                }
                if (config.keysPressed.includes('a')) {
                    // Move left
                    if (config.hacks.airBreak.type == 'tilt') {
                        config.tank.position.x -= rightX * config.hacks.airBreak.speed;
                        config.tank.position.y -= rightZ * config.hacks.airBreak.speed;
                    } else if (config.hacks.airBreak.type == 'airWalk') {
                        myTankInfo[0].jm1_1 -= rightX * 1000;
                        myTankInfo[0].km1_1 -= rightZ * 1000;
                    };
                }

                // Height adjustment based only on 'f' and 'v'
                if (config.keysPressed.includes('f')) {
                    config.tank.position.z += config.hacks.airBreak.speed; // Move up
                }
                if (config.keysPressed.includes('v')) {
                    config.tank.position.z -= config.hacks.airBreak.speed; // Move down
                };
            };
        };
        if (config.hacks.antiAim.enabled) {
            myTankPos.jm1_1 = getRandomNumberBetween(Object.values(mapBounds)[0], Object.values(mapBounds)[3]);
            myTankPos.km1_1 = getRandomNumberBetween(Object.values(mapBounds)[1], Object.values(mapBounds)[4]);
            myTankPos.lm1_1 = config.hacks.antiAim.top ? Object.values(mapBounds)[5] : Object.values(mapBounds)[2];
        };
        if (config.hacks.followTank.enabled && otherTankPos?.jm1_1) {
            if (!submitToKingF) {
                for (let i=0;i<2;i++) {
                    var i2 = 0;
                    for (const k in t = myTankInfo[i]) {
                        if ((i2 < 4) && typeof t[k] == 'number') {
                            t[k] = 1;
                            i2++
                        };
                    };
                };
                if (config.keysPressed.includes('f')) {
                    config.hacks.followTank.height += config.hacks.airBreak.speed;
                    Extras[4].textContent = 'Height: ' + config.hacks.followTank.height;
                };
                if (config.keysPressed.includes('v')) {
                    config.hacks.followTank.height -= config.hacks.airBreak.speed;
                    Extras[4].textContent = 'Height: ' + config.hacks.followTank.height;
                };
                myTankPos.jm1_1 = Math.max(Object.values(mapBounds)[0], Math.min(Object.values(mapBounds)[3], otherTankPos.jm1_1));
                myTankPos.km1_1 = Math.max(Object.values(mapBounds)[1], Math.min(Object.values(mapBounds)[4], otherTankPos.km1_1));
                myTankPos.lm1_1 = Math.max(Object.values(mapBounds)[2], Math.min(Object.values(mapBounds)[5]+100, otherTankPos.lm1_1 + config.hacks.followTank.height));
            } else {
                var tPos = Tanki.interpolatedTankPosition;
                tPos.jm1_1 = Math.max(Object.values(mapBounds)[0], Math.min(Object.values(mapBounds)[3], otherTankPos.jm1_1));
                tPos.km1_1 = Math.max(Object.values(mapBounds)[1], Math.min(Object.values(mapBounds)[4], otherTankPos.km1_1));
                tPos.lm1_1 = Math.max(Object.values(mapBounds)[2], Math.min(Object.values(mapBounds)[5]+100, otherTankPos.lm1_1));
            };
        };
        /*if (config.hacks.neverFlip.enabled) {
            if (!myTankInfo[1]) return;
            if (!config.hacks.neverFlip.done) {
                const max = config.hacks.neverFlip.amount;
                lockTankValue(myTankInfo[1], "o1p_1", max);
                lockTankValue(myTankInfo[1], "p1p_1", max);
                config.hacks.neverFlip.done = true;
            };
            /*const maxAmount = config.hacks.neverFlip.amount;
            const dampingFactor = 0.8;
            if (Math.abs(myTankInfo[1].o1p_1) > maxAmount) {
                myTankInfo[1].o1p_1 *= dampingFactor;
                if (Math.abs(myTankInfo[1].o1p_1) < maxAmount) {
                    myTankInfo[1].o1p_1 = Math.sign(myTankInfo[1].o1p_1) * maxAmount;
                };
            };
            if (Math.abs(myTankInfo[1].p1p_1) > maxAmount) {
                myTankInfo[1].p1p_1 *= dampingFactor;
                if (Math.abs(myTankInfo[1].p1p_1) < maxAmount) {
                    myTankInfo[1].p1p_1 = Math.sign(myTankInfo[1].p1p_1) * maxAmount;
                };
            };*\/
        } else {
            if (!myTankInfo[1]) return;
            if (config.hacks.neverFlip.done) {
                unlockTankValue(myTankInfo[1], "o1p_1");
                unlockTankValue(myTankInfo[1], "p1p_1");
                config.hacks.neverFlip.done = false;
            };
        };*/
        /*if (config.hacks.neverFlip.enabled) {
            if (!myTankInfo[1]) return;
            const maxAmount = config.hacks.neverFlip.amount; // Max tilt before applying correction
            const springFactor = 0.1; // Strength of the corrective spring
            const dampingFactor = 0.7; // Damping to reduce oscillations
            const maxSpringForce = 2; // Cap for the spring force
            const balanceTarget = 0; // Target upright orientation
            const adjustmentSpeed = 0.02; // Speed at which the script applies corrections
            if (!myTankInfo[1].velocity) {
                myTankInfo[1].velocity = { h: 0, i: 0 };
            };
            const handleAxis = (axis, velocityAxis) => {
                const currentValue = myTankInfo[1][axis];
                const overshoot = currentValue - Math.sign(currentValue) * maxAmount;
                const deviation = currentValue - balanceTarget;
                let springForce = -deviation * springFactor;
                if (Math.abs(currentValue) > maxAmount) {
                    springForce += -overshoot * springFactor;
                };
                springForce = Math.sign(springForce) * Math.min(Math.abs(springForce), maxSpringForce);
                const blendedForce = 
                    (springForce - myTankInfo[1].velocity[velocityAxis]) * adjustmentSpeed;
                myTankInfo[1].velocity[velocityAxis] = 
                    myTankInfo[1].velocity[velocityAxis] * dampingFactor + blendedForce;
                myTankInfo[1][axis] += myTankInfo[1].velocity[velocityAxis];
            };
            handleAxis('p1p_1', 'h');
            handleAxis('q1p_1', 'i');
        };*/
        if (config.hacks.turretAim.enabled && otherTankPos?.jm1_1) {
            switch (config.hacks.turretAim.type) {
                case 'camera':
                    var dirX = otherTankPos.jm1_1 - myTankPos.jm1_1;
                    var dirZ = otherTankPos.km1_1 - myTankPos.km1_1;
                    Tanki.cameraDirection = Math.atan2(dirZ, dirX) - Math.PI/2;
                    break;
                case 'turret':
                    var deltaX = otherTankPos.jm1_1 - myTankPos.jm1_1;
                    var deltaY = otherTankPos.km1_1 - myTankPos.km1_1;
                    var dirYaw = Math.atan2(deltaY, deltaX);
                    Tanki.turretDirection = (dirYaw - getTankYaw()) - Math.PI/2;
                    break;
            };
        };
        if (config.hacks.hitbox.enabled) {
            enemies.forEach(e => {
                var body;
                try {
                    body = Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(e, '==16'))[0], '==3'))[0], '>43'))[0];
                } catch (er) {
                    return;
                };
                if (body?.scaled) return;
                for (const k in body) {
                    if (typeof body[k] == 'number') {
                        body[k] *= config.hacks.hitbox.amount;
                    };
                };
                body.scaled = true;
            });
        };
        if (config.hacks.noClip.enabled && isGameActive) {
            var body;
            try {
                body = Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(myTank, '==16'))[0], '==3'))[0], '>43'))[0];
            } catch (er) {
                return;
            };
            if (!body) return;
            if (body.scaled) return;
            for (const k in body) {
                if (typeof body[k] == 'number') {
                    if (!config.hacks.noClip.oSize?.[k]) config.hacks.noClip.oSize[k] = body[k];
                    body[k] = 0;
                };
            };
            body.scaled = true;
        };
        if (!config.hacks.noClip.enabled && isGameActive) {
            var body;
            try {
                body = Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(myTank, '==16'))[0], '==3'))[0], '>43'))[0];
            } catch (er) {
                return;
            };
            if (!body) return;
            if (!body.scaled) {
                return;
            } else {
                for (const k in body) {
                    if (typeof body[k] == 'number') {
                        body[k] = config.hacks.noClip.oSize[k];
                    };
                };
                body.scaled = false;
            };
        };
        if (submitToKingA && SodukoPos) {
            var deltaX = SodukoPos.jm1_1 - myTankPos.jm1_1;
            var deltaY = SodukoPos.km1_1 - myTankPos.km1_1;
            var dirYaw = Math.atan2(deltaY, deltaX);
            var offset = 0.2;
            var leftOffset = normalizeAngle((dirYaw - getTankYaw()) - Math.PI / 2 + offset);
            var rightOffset = normalizeAngle((dirYaw - getTankYaw()) - Math.PI / 2 - offset);
            var currentTurretDirection = normalizeAngle(Tanki.turretDirection);
            if (currentTurretDirection > rightOffset && currentTurretDirection < leftOffset) {
                Tanki.turretDirection = (currentTurretDirection < dirYaw) ? leftOffset : rightOffset;
            };
        };
        if (config.hacks.autoPress.length > 0) {
            config.hacks.autoPress.forEach(e => {
                press(e, true);
                press(e, false);
            });
        };
    };
};
addEventListeners();
var nick = '';
function sendShells(player) {
    if (!Utils[`${Utils.weaponName.toLowerCase()}CC`].fed_1 == 0) {
        Utils[`${Utils.weaponName.toLowerCase()}CC`].fed_1 = 0;
    };
    otherTanks = getTanks('enemies');
    var i = 0;
    Tanki.shells.forEach(shell => {
        //setTimeout(() => {
        try {
            var shellRaycastMovement = getRaycastMovementOfShell(shell);
            var shellPos = Object.values(searchInObject(shellRaycastMovement, '=== 41'))[0];
            shellPos.jm1_1 = player.jm1_1;
            shellPos.km1_1 = player.km1_1;
            shellPos.lm1_1 = player.lm1_1;
            shellRaycastMovement.s18j_1 = 9999;
            shellRaycastMovement.number = i;
            //shells = shells.filter(shell2 => shell2 !== shell);
        } catch (er) {};
        //}, i * 300);
        i++;
    });
};
var camera, cameraPos = {x:0, y:0, z:0}, cameraVel = {x:0, y:0, z:0}, cameraFuncs = {}, r2 = true, f2, f3, r3 = true;
const maxSpeed = 100;
const acceleration = 5;
const deceleration = 3;
const followSmoothingFactor = 0.1;
function b() {}
function getSpec() {
    var first2 = searchInObject(Utils.followCamera, '==1');
    var second2 = searchInObject(Object.values(first2)[4], '>43');
    return Object.values(second2)[0];
};
function getCamYaw() {
    return Tanki.cameraDirection;
};
function saveCameraFuncs() {
    for (const k in t = camera) {
        cameraFuncs[k] = t[k];
    };
};
var camSpeed = 25;
function setSpec() {
    config.hacks.spectate.enabled = true;
    //myTank[tankMovable] = false;
    for (const k in t = camera) {
        if (typeof t[k] == 'function') {
            t[k] = function() {};
        };
    };
    r2 = true;
    function b() {
        if (r2) {
            f2 = requestAnimationFrame(b);
            const cameraYaw = getCamYaw();
            const forwardX = Math.cos(cameraYaw + Math.PI/2);
            const forwardZ = Math.sin(cameraYaw + Math.PI/2);
            const rightX = Math.cos(cameraYaw);
            const rightZ = Math.sin(cameraYaw);
            if (keysPressed.includes('w')) {
                cameraPos.x += forwardX * camSpeed;
                cameraPos.y += forwardZ * camSpeed;
            };
            if (keysPressed.includes('s')) {
                cameraPos.x -= forwardX * camSpeed;
                cameraPos.y -= forwardZ * camSpeed;
            };
            if (keysPressed.includes('a')) {
                cameraPos.x -= rightX * camSpeed;
                cameraPos.y -= rightZ * camSpeed;
            };
            if (keysPressed.includes('d')) {
                cameraPos.x += rightX * camSpeed;
                cameraPos.y += rightZ * camSpeed;
            };
            if (keysPressed.includes('f')) {
                cameraPos.z += camSpeed;
            };
            if (keysPressed.includes('v')) {
                cameraPos.z -= camSpeed;
            };
            cameraPos.x += cameraVel.x;
            cameraPos.y += cameraVel.y;
            cameraPos.z += cameraVel.z;
            camera.jm1_1 = cameraPos.x;
            camera.km1_1 = cameraPos.y;
            camera.lm1_1 = cameraPos.z;
        };
    };
    try {
        b();
    } catch (er) {
        console.log(er);
        r2 = false;
        cancelAnimationFrame(f2);
    };
    setPointerMovement();
};
function updateSpec() {
    camera = getSpec();
    saveCameraFuncs();
};
var keysPressed = [];
document.addEventListener('keydown', (e) => {
    if (!keysPressed.includes(e.key)) {
        keysPressed.push(e.key);
    };
});
document.addEventListener('keyup', (e) => {
    keysPressed = keysPressed.filter(t => t !== e.key);
});
function resetSpec() {
    config.hacks.spectate.enabled = false;
    myTank[tankMovable] = true;
    for (const k in cameraFuncs) {
        camera[k] = cameraFuncs[k];
    };
    r2 = false;
    r3 = false;
    cancelAnimationFrame(f2);
    cancelAnimationFrame(f3);
    try {
        resetPointerMovement();
    } catch (er){};
    config.hacks.airBreak.enabled = false;
};
function specPlayer(player) {
    if (f3) {
        cancelAnimationFrame(f3);
    };
    var Player = getTanks('player' + player)[0];
    var player = getPositionOfTank(Player);
    var playerInfo = getInfoOfTank(Player);
    r3 = true;
    function a3() {
        if (r3) {
            f3 = requestAnimationFrame(a3);
            cameraPos.x += (player.jm1_1 - cameraPos.x) * followSmoothingFactor;
            cameraPos.y += (player.km1_1 - cameraPos.y) * followSmoothingFactor;
            cameraPos.z += (player.lm1_1 - cameraPos.z) * followSmoothingFactor;
            camera.jm1_1 = cameraPos.x;
            camera.km1_1 = cameraPos.y;
            camera.lm1_1 = cameraPos.z;
            if (config.hacks.spectate.faceTurret) {
                Tanki.cameraDirection = getTankYaw2(playerInfo) + Tanki.getTurretDirectionOfTank(Player);
            };
        };
    };
    try {
        a3();
    } catch (er) {
        console.log(er);
        r3 = false;
        cancelAnimationFrame(f3);
    };
};
function stopSpec() {
    r3 = false;
    cancelAnimationFrame(f3);
};
function pointerMovement(e) {
    const canvas = document.querySelectorAll('canvas')[1];
    const movementY = e.movementY;
    if (document.pointerLockElement === canvas) {
        if (movementY > 0) {
            Tanki.cameraElavation += .001 * movementY;
        } else if (movementY < 0) {
            Tanki.cameraElavation -= .001 * Math.abs(movementY);
        };
    };
};
function resetPointerMovement() {
    document.querySelectorAll('canvas')[1].removeEventListener('mousemove', pointerMovement);
};
function setPointerMovement() {
    document.querySelectorAll('canvas')[1].addEventListener('mousemove', pointerMovement);
};
function updateTankOrientationToCamera() {
    // Step 1: Get the camera's yaw (direction the camera is facing)
    const cameraYaw = getCamYaw(); // The camera yaw value

    // Step 2: Add 180 degrees (Math.PI radians) to the yaw to face the tank forward
    const adjustedYaw = cameraYaw;

    // Step 3: Convert the adjusted yaw to a quaternion
    const halfYaw = adjustedYaw * 0.5;
    const sinYaw = Math.sin(halfYaw);
    const cosYaw = Math.cos(halfYaw);

    const yawQuat = {
        o1p_1: cosYaw,  // Rotation in X-axis (yaw)
        p1p_1: 0,       // No rotation in Y-axis (pitch)
        q1p_1: 0,       // No rotation in Z-axis (roll)
        r1p_1: sinYaw   // Scalar part of the quaternion
    };

    // Step 4: Apply the yaw quaternion to the tank's orientation
    myTankInfo[1].o1p_1 = yawQuat.o1p_1;
    myTankInfo[1].p1p_1 = yawQuat.p1p_1;
    myTankInfo[1].q1p_1 = yawQuat.q1p_1;
    myTankInfo[1].r1p_1 = yawQuat.r1p_1;
};
function searchInLargeObject(obj, target, byValue = false, trackPath = false, targetArrayLength = null) {
    const stack = [{ current: obj, path: [] }];
    const visited = new Set();
    while (stack.length > 0) {
        const { current, path } = stack.pop();
        if (visited.has(current)) continue;
        visited.add(current);
        for (const key in current) {
            if (Object.prototype.hasOwnProperty.call(current, key)) {
                const value = current[key];
                const newPath = trackPath ? path.concat(key) : [];
                if (targetArrayLength !== null && Array.isArray(value) && value.length === targetArrayLength) {
                    return { key, value, object: current, path: trackPath ? newPath : undefined };
                };
                if (targetArrayLength === null) {
                    if (byValue) {
                        if (value === target) return { key, value, object: current, path: trackPath ? newPath : undefined };
                    } else {
                        if (key === target) return { key, value, object: current, path: trackPath ? newPath : undefined };
                    };
                };
                if (typeof value === 'object' && value !== null) {
                    stack.push({ current: value, path: newPath });
                };
            };
        };
    };
    return null;
};
function getVars() {
    var allTanks = Object.values(searchInLargeObject(root, 'xjy_1').value)[0];
    var tankPhysicsComponent = searchInLargeObject(root, 'p152_1');
    var tankPosition = Object.values(Object.values(searchInObject(Object.values(searchInObject(tankPhysicsComponent.value, '==21'))[0], '==2'))[0])[3];
    var tankInterpolatedPosition = Object.values(searchInObject(tankPhysicsComponent.value, '==41'))[1];
    var tankPositionVelocity = Object.values(Object.values(searchInObject(Object.values(searchInObject(tankPhysicsComponent.value, '==21'))[0], '==2'))[0])[0];
    var tankQuaternions = Object.values(Object.values(searchInObject(Object.values(searchInObject(tankPhysicsComponent.value, '==21'))[0], '==2'))[0])[1];
    var tankOrientationVelocity = Object.values(Object.values(searchInObject(Object.values(searchInObject(tankPhysicsComponent.value, '==21'))[0], '==2'))[0])[2];
    var camera = searchInLargeObject(root, 'a15l_1');
    var cameraDirectionName = Object.entries(camera.value).filter(t => typeof t[1] == 'number')[0][0];
    var cameraDirection = camera.value[cameraDirectionName];
    var cameraPosition = Object.values(searchInObject(Object.values(searchInObject(camera.value, '==1'))[3], '==41'))[0];
    var flags, teamFlagPosition, enemyFlagPosition;
    try {
        flags = searchInLargeObject(root, 'l13w_1');
        teamFlagPosition = Object.values(searchInObject(Object.values(searchInObject(flags.value[0], '==3'))[0], '==41'))[0];
        enemyFlagPosition = Object.values(searchInObject(Object.values(searchInObject(flags.value[1], '==3'))[1], '==41'))[0];
    } catch (er){};
    return {allTanks, tankPhysicsComponent, tankPosition, tankInterpolatedPosition, tankPositionVelocity, tankQuaternions, tankOrientationVelocity, camera, cameraDirection, cameraPosition, teamFlagPosition, enemyFlagPosition, cameraDirectionName};
};
function setVars() {
    Utils = getVars();
    Object.defineProperty(Utils, 'cameraDirection', {
        set(t) {
            Utils.camera.value[Utils.cameraDirectionName] = t;
        },
        get() {
            return Utils.camera.value[Utils.cameraDirectionName];
        }
    });
};
var Tanki = {
    get allTanks() {
        if (!Utils.cameraComponent) return;
        var t = Object.values(Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(Utils.cameraComponent, '==14'))[1], '>50'))[0], '==20'))[0], '==17'))[0])[0];
        for (let i=0;i<t.length;i++) {
            t[i].espInfo = Object.values(searchInObject(Object.values(Object.values(searchInObject(Object.values(searchInObject(t[i], '==14'))[0], '==17'))[0])[0], '==2'))[0]
        };
        return t;
    },
    get tankPhysicsComponent() {
        return Utils.tankPhysicsComponent;
    },
    get tankPosition() {
        return getPositionOfTank(getTanks('self')[0]);
    },
    get interpolatedTankPosition() {
        return getIntPosOfTank(myTank);
    },
    get tankPositionVelocity() {
        return getInfoOfTank(getTanks('self')[0])[0];
    },
    get tankQuaternions() {
        return getInfoOfTank(getTanks('self')[0])[1];
    },
    get shells() {
        return Object.entries(Object.values(searchInObject(Utils.gunParamsCalculator, '==19'))[0]).filter(t => typeof t[1] == 'object')[0][1];
    },
    get tankOrientationVelocity() {
        return getInfoOfTank(getTanks('self')[0])[2];
    },
    get camera() {
        return Utils.followCamera;
    },
    get cameraDirectionName() {
        return Object.entries(Utils.followCamera).filter(t => typeof t[1] == 'number')[0][0];
    },
    get cameraElavationName() {
        return Object.entries(Utils.followCamera).filter(t => typeof t[1] == 'number')[2][0];
    },
    get cameraDirection() {
        return Utils.followCamera[Tanki.cameraDirectionName];
    },
    get cameraElavation() {
        return Utils.followCamera[Tanki.cameraElavationName];
    },
    get cameraPosition() {
        return Object.values(searchInObject(Object.values(searchInObject(Utils.followCamera, '==1'))[3], '==41'))[0];
    },
    get flags() {
        return Utils.flags;
    },
    get teamFlagPosition() {
        return Object.values(searchInObject(Object.values(searchInObject(Utils.flags[0], '==3'))[0], '==41'))[0];
    },
    get enemyFlagPosition() {
        return Object.values(searchInObject(Object.values(searchInObject(Utils.flags[1], '==3'))[0], '==41'))[0];
    },
    set cameraDirection(t) {
        return Utils.followCamera[Tanki.cameraDirectionName] = t;
    },
    set cameraElavation(t) {
        return Utils.followCamera[Tanki.cameraElavationName] = t;
    },
    get turretDirectionName() {
        return Object.entries(Utils.turret, '==0').filter(t => typeof t[1] == 'number')[0][0];
    },
    get turretDirection() {
        return Utils.turret[Tanki.turretDirectionName];
    },
    set turretDirection(t) {
        return Utils.turret[Tanki.turretDirectionName] = t;
    },
    getTurretDirectionOfTank: function (t) {
        return Object.values(Object.values(searchInObject(Object.values(searchInObject(Object.entries(Object.values(Object.values(searchInObject(Object.values(searchInObject(t.espInfo, '==14'))[0], '==17'))[0])[0]).filter(t => t[1]?.m12z_1)[0][1], '==14'))[0], '==19'))[1])[1][0][Tanki.turretDirectionName];
    },
    setTurretDirectionOfTank: function (t, p) {
        return Object.values(Object.values(searchInObject(Object.values(searchInObject(Object.entries(Object.values(Object.values(searchInObject(Object.values(searchInObject(t.espInfo, '==14'))[0], '==17'))[0])[0]).filter(t => t[1]?.m12z_1)[0][1], '==14'))[0], '==19'))[1])[1][0][Tanki.turretDirectionName] = p;
    }
};
function getClosestPlayer(myTankPos, otherTanks) {
    let closestTank = null;
    let closestDistance = Infinity;
    otherTanks.forEach(tank => {
        tank = getPositionOfTank(tank);
        const distance = Math.sqrt(
            Math.pow(tank.jm1_1 - myTankPos.jm1_1, 2) +
            Math.pow(tank.km1_1 - myTankPos.km1_1, 2) +
            Math.pow(tank.lm1_1 - myTankPos.lm1_1, 2)
        );
        if (distance < closestDistance) {
            closestDistance = distance;
            closestTank = tank;
        };
    });
    return closestTank;
};
function faceTargetQuaternion(myTankPos, otherTankPos, myTankInfo) {
    let direction = {
        x: otherTankPos.jm1_1 - myTankPos.jm1_1,
        y: otherTankPos.km1_1 - myTankPos.km1_1,
        z: otherTankPos.lm1_1 - myTankPos.lm1_1
    };
    let magnitude = Math.sqrt(direction.x ** 2 + direction.y ** 2 + direction.z ** 2);
    if (magnitude < 1e-6) {
        console.warn("Positions are too close or identical. No rotation needed.");
        return;
    };
    direction.x /= magnitude;
    direction.y /= magnitude;
    direction.z /= magnitude;
    let yaw = Math.atan2(-direction.x, direction.y) + Math.PI;
    let pitch = Math.asin(-direction.z);
    let cy = Math.cos(yaw * 0.5);
    let sy = Math.sin(yaw * 0.5);
    let cp = Math.cos(pitch * 0.5);
    let sp = Math.sin(pitch * 0.5);
    let quaternion = {
        w: cy * cp,
        x: sp * cy,
        y: sy * cp,
        z: -sy * sp
    };
    myTankInfo[1].q1p_1 = -quaternion.x;
    myTankInfo[1].p1p_1 = -quaternion.z;
    myTankInfo[1].o1p_1 = -quaternion.y;
    myTankInfo[1].r1p_1 = quaternion.w;
    return quaternion;
};
function getTankYaw() {
    const { o1p_1: w, p1p_1: x, q1p_1: y, o1p_1: z } = myTankInfo[1];
    const sinY = 2 * (w * y + x * z);
    const cosY = 1 - 2 * (y * y + z * z);
    return Math.atan2(sinY, cosY);
};
function getTankYaw2(t) {
    const { q1p_1, p1p_1, o1p_1, r1p_1 } = t[1];
    const sinY = 2 * (r1p_1 * q1p_1 + o1p_1 * q1p_1);
    const cosY = 1 - 2 * (q1p_1 * q1p_1 + o1p_1 * o1p_1);
    return Math.atan2(sinY, cosY);
};
function normalizeAngle(angle) {
    while (angle > Math.PI) angle -= 2 * Math.PI;
    while (angle < -Math.PI) angle += 2 * Math.PI;
    return angle;
};
if (localStorage['Config']) {
    loadConfig();
};
function getYawFromDirection(x, y, z) {
    let direction = { x: x, y: y, z: z };
    let magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y + direction.z * direction.z);
    let unitDirection = {
        x: direction.x / magnitude,
        y: direction.y / magnitude,
        z: direction.z / magnitude
    };
    let yaw = Math.atan2(unitDirection.x, unitDirection.y);
    return yaw;
};
function findClosestEnemy(tankPosition, cameraDirection, enemies) {
    tankPosition = myTankPos;
    cameraDirection = Tanki.cameraDirection + Math.PI/2;
    if (!tankPosition || !cameraDirection || !enemies.length > 0) return;
    const normalize = vector => {
        const length = Math.sqrt(vector.x ** 2 + vector.z ** 2);
        return { x: vector.x / length, z: vector.z / length };
    };
    const dotProduct = (vec1, vec2) => vec1.x * vec2.x + vec1.z * vec2.z;
    const cameraVector = {
        x: Math.cos(cameraDirection),
        z: Math.sin(cameraDirection)
    };
    const closestEnemy = enemies
        .map(enemy => {
            enemy = getPositionOfTank(enemy);
            const vectorToEnemy = {
                x: enemy.jm1_1 - tankPosition.jm1_1,
                z: enemy.km1_1 - tankPosition.km1_1
            };
            const normalizedVector = normalize(vectorToEnemy);
            const cosineTheta = dotProduct(cameraVector, normalizedVector);
            const angle = Math.acos(cosineTheta);
            return { enemy, angle };
        })
        .reduce((closest, current) =>
            current.angle < closest.angle ? current : closest
        ).enemy;
    return closestEnemy;
};
function lockTankValue(obj, key, maxAmount) {
    let internalValue = obj[key] || 0;
    Object.defineProperty(obj, key, {
        get() {
            return internalValue;
        },
        set(val) {
            const absVal = Math.abs(val);
            internalValue = absVal > maxAmount ? Math.sign(val) * maxAmount : val;
        },
        configurable: true,
        enumerable: true
    });
};
function unlockTankValue(obj, key) {
    const currentValue = obj[key];
    delete obj[key];
    obj[key] = currentValue;
};
function getRelativePosition(myTankPos, otherTankPos, cameraDirection) {
    var deltaX = otherTankPos.jm1_1 - myTankPos.jm1_1;
    var deltaY = otherTankPos.jm1_1 - myTankPos.jm1_1;
    var dirYaw = Math.atan2(deltaY, deltaX);
    var relativeAngle = Math.atan2(Math.sin(dirYaw - cameraDirection), Math.cos(dirYaw - cameraDirection));
    if (relativeAngle > 0) return "right";
    if (relativeAngle < 0) return "left";
    return "front";
};
function getRelativePositionPoints(myTankPos, points, cameraDirection) {
    var deltaX = points[0] - myTankPos.jm1_1;
    var deltaY = points[1] - myTankPos.jm1_1;
    var dirYaw = Math.atan2(deltaY, deltaX);
    var relativeAngle = Math.atan2(Math.sin(dirYaw - cameraDirection), Math.cos(dirYaw - cameraDirection));
    if (relativeAngle > 0) return "right";
    if (relativeAngle < 0) return "left";
    return "front";
};
function findClosestPoint(tankPosition, cameraDirection, enemies) {
    tankPosition = myTankPos;
    cameraDirection = Tanki.cameraDirection + Math.PI/2;
    if (!tankPosition || !cameraDirection || !enemies.length > 0) return;
    const normalize = vector => {
        const length = Math.sqrt(vector.x ** 2 + vector.z ** 2);
        return { x: vector.x / length, z: vector.z / length };
    };
    const dotProduct = (vec1, vec2) => vec1.x * vec2.x + vec1.z * vec2.z;
    const cameraVector = {
        x: Math.cos(cameraDirection),
        z: Math.sin(cameraDirection)
    };
    const closestEnemy = enemies
        .map(enemy => {
            const vectorToEnemy = {
                x: enemy[0] - tankPosition.jm1_1,
                z: enemy[1] - tankPosition.jm1_1
            };
            const normalizedVector = normalize(vectorToEnemy);
            const cosineTheta = dotProduct(cameraVector, normalizedVector);
            const angle = Math.acos(cosineTheta);
            return { enemy, angle };
        })
        .reduce((closest, current) =>
            current.angle < closest.angle ? current : closest
        ).enemy;
    return closestEnemy;
};


(() => {
  var indicator = document.createElement('div');
indicator.style.cssText = `
position: absolute;
z-index: 9999999999999999;
top: 70%;
left: 50%;
width: 500px;
height: 300px;
transform: translate(-50%, -50%);
pointer-events: none;
transition: all 0.5s ease-in-out;
filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
opacity: 0;
`;
document.body.appendChild(indicator);

var indicatorPart1 = document.createElement('div');
indicatorPart1.style.cssText = `
position: absolute;
z-index: 99999999;
background: conic-gradient(
    #00ffcc 0 ${(aimAmount / 4) - 2}deg, 
    rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg, 
    transparent ${(aimAmount / 4)}deg 360deg
);
width: 500px;
height: 300px;
border-radius: 50%;
transition: background 0.3s ease-in-out;
box-shadow: 0 0 20px #00ffcc;
`;
indicator.appendChild(indicatorPart1);

var indicatorPart2 = document.createElement('div');
indicatorPart2.style.cssText = `
position: absolute;
z-index: 99999999;
background: conic-gradient(
    #00ffcc 0 ${(aimAmount / 4) - 2}deg, 
    rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg, 
    transparent ${(aimAmount / 4)}deg 360deg
);
transform: rotateY(180deg);
width: 500px;
height: 300px;
border-radius: 50%;
transition: background 0.3s ease-in-out;
box-shadow: 0 0 20px #00ffcc;
`;
indicator.appendChild(indicatorPart2);

window['aim-assist-range'].addEventListener('input', () => {
    indicator.style.opacity = '1';
    setTimeout(() => {
        indicator.style.opacity = '0';
    }, 500);
    indicatorPart1.style.background = `conic-gradient(
        #00ffcc 0 ${(aimAmount / 4) - 2}deg, 
        rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg, 
        transparent ${(aimAmount / 4)}deg 360deg
    )`;
    indicatorPart2.style.background = `conic-gradient(
        #00ffcc 0 ${(aimAmount / 4) - 2}deg, 
        rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg, 
        transparent ${(aimAmount / 4)}deg 360deg
    )`;
});

window['aim-assist-range'].parentElement.children[3].addEventListener('input', () => {
    indicator.style.opacity = '1';
    setTimeout(() => {
        indicator.style.opacity = '0';
    }, 500);
    indicatorPart1.style.background = `conic-gradient(
        #00ffcc 0 ${(aimAmount / 4) - 2}deg, 
        rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg, 
        transparent ${(aimAmount / 4)}deg 360deg
    )`;
    indicatorPart2.style.background = `conic-gradient(
        #00ffcc 0 ${(aimAmount / 4) - 2}deg, 
        rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg, 
        transparent ${(aimAmount / 4)}deg 360deg
    )`;
});
})();
function sendMessage(e){window?.messageElm||(window.messageElm=document.createElement("div"),messageElm.style.cssText="position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);color: red;font-size: 30px;z-index: 999999;",document.body.appendChild(messageElm)),messageElm.textContent=e,setTimeout((()=>{messageElm.textContent=""}),2e3)}

var points = [
  [-2016.1727610115986, -2035.84744746784]
];
(function() {
    var f;
    function a() {
        f = requestAnimationFrame(a);
        if ((typeof config == 'undefined') && (typeof aimAmount == 'undefined')) return;
        var indicator = document.createElement('div');
    indicator.style.cssText = `
position: absolute;
z-index: 9999999999999999;
top: 70%;
left: 50%;
width: 500px;
height: 300px;
transform: translate(-50%, -50%);
pointer-events: none;
transition: all 0.5s ease-in-out;
filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
opacity: 0;
`;
    document.body.appendChild(indicator);

    var indicatorPart1 = document.createElement('div');
    indicatorPart1.style.cssText = `
position: absolute;
z-index: 99999999;
background: conic-gradient(
    #00ffcc 0 ${(aimAmount / 4) - 2}deg,
    rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg,
    transparent ${(aimAmount / 4)}deg 360deg
);
width: 500px;
height: 300px;
border-radius: 50%;
transition: background 0.3s ease-in-out;
box-shadow: 0 0 20px #00ffcc;
`;
    indicator.appendChild(indicatorPart1);

    var indicatorPart2 = document.createElement('div');
    indicatorPart2.style.cssText = `
position: absolute;
z-index: 99999999;
background: conic-gradient(
    #00ffcc 0 ${(aimAmount / 4) - 2}deg,
    rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg,
    transparent ${(aimAmount / 4)}deg 360deg
);
transform: rotateY(180deg);
width: 500px;
height: 300px;
border-radius: 50%;
transition: background 0.3s ease-in-out;
box-shadow: 0 0 20px #00ffcc;
`;
    indicator.appendChild(indicatorPart2);
        document.body.insertAdjacentHTML('beforeend', `
            <style>
                .tp-dfwv {
                    width: 300px !important;
                    z-index: 999999999 !important;
                }
            </style>
        `);
        /*var pane = new Tweakpane.Pane({
            title: 'Splxff\'s Menu'
        });
        var tab = pane.addTab({
            pages: [
                { title: 'General' },
                { title: 'Turret' },
                { title: 'Visual' },
                { title: 'Other' }
            ]
        });
        var fly = tab.pages[0].addFolder({
            title: 'Fly',
            expanded: false
        });
        fly.airBreak = fly.addFolder({
            title: 'airBreak',
            expanded: true
        });
        fly.airBreak.addMonitor(config.hacks.airBreak, 'enabled');
        fly.airBreak.addInput(config.hacks.airBreak, 'speed', {min: 0, max: 500});
        fly.airBreak.addInput(config.hacks.airBreak, 'type', {
            label: 'type',
            options: {
                tilt: 'tilt',
                airWalk: 'airWalk',
            }
        });
        fly.airBreak.addInput(config.hacks.airBreak, 'faceTarget');
        fly.antiAim = fly.addFolder({
            title: 'antiAim',
            expanded: true
        });
        fly.antiAim.addMonitor(config.hacks.antiAim, 'enabled');
        fly.antiAim.addMonitor(config.hacks.antiAim, 'top');
        fly.antiAim = fly.addFolder({
            title: 'followTank',
            expanded: true
        });
        fly.antiAim.addMonitor(config.hacks.followTank, 'enabled');
        var turret = tab.pages[0].addFolder({
            title: 'Turret',
            expanded: true
        });
        turret.hitbox = turret.addFolder({
            title: 'Hitbox',
            expanded: true
        });
        turret.hitbox.addInput(config.hacks.hitbox, 'enabled');
        turret.hitbox.addInput(config.hacks.hitbox, 'amount', {
            min: 1,
            max: 3.25,
            step: .1
        });
        var tank = tab.pages[0].addFolder({
            title: 'Tank',
            expanded: true
        });
        tank.speed = tank.addFolder({
            title: 'Speed',
            expanded: false
        });
        tank.speed.addInput(window, 'Hack', { label: 'Enabled' });
        tank.speed.addInput(window, 'Speed', {min: 0, max: 50});
        tank.speed.addInput(window, 'turnSpeed', {min: 0, max: 50});
        tank.speed.addInput(window, 'Acceleration', {min: 0, max: 50});
        tank.noClip = tank.addFolder({
            title: 'noClip',
            expanded: true
        });
        tank.noClip.addInput(config.hacks.noClip, 'enabled');
        tank.noFlip = tank.addFolder({
            title: 'noFlip',
            expanded: false
        });
        tank.noFlip.addInput(config.hacks.neverFlip, 'enabled');
        var turret = tab.pages[1].addFolder({
            title: 'Turret',
            expanded: true
        });
        turret.aimAssist = turret.addFolder({
            title: 'aimAssist',
            expanded: true
        });
        turret.aimAssist.addInput(window, 'Aimbot', {label: 'enabled'});
        turret.aimAssist.addInput(window, 'aimAmount', {
            min: 0,
            max: 720,
            label: 'amount'
        })
            .on('change', (e) => {
            indicator.style.opacity = '1';
            setTimeout(() => {
                indicator.style.opacity = '0';
            }, 500);
            indicatorPart1.style.background = `conic-gradient(
                #00ffcc 0 ${(aimAmount / 4) - 2}deg,
                rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg,
                transparent ${(aimAmount / 4)}deg 360deg
            )`;
            indicatorPart2.style.background = `conic-gradient(
                #00ffcc 0 ${(aimAmount / 4) - 2}deg,
                rgba(0, 0, 0, 0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg,
                transparent ${(aimAmount / 4)}deg 360deg
            )`;
        });
        turret.verticalAim = turret.addFolder({
            title: 'verticalAim',
            expanded: true
        });
        turret.verticalAim.addInput(window, 'Aimbot2', {label: 'enabled'});
        var esp = tab.pages[2].addFolder({
            title: 'ESP',
            expanded: true
        });
        esp.addInput(window, 'espEnabled', {label: 'enabled'});
        esp.addInput(window, 'espColor', {
            label: 'Enemy', view: 'color'
        });
        esp.addInput(window, 'espColor2', {
            label: 'Allies', view: 'color'
        });
        esp.addInput(window, 'espColor3', {
            label: 'Target', view: 'color'
        });
        esp.addInput(window, 'espColor4', {
            label: 'Self', view: 'color'
        });
        var freezeTanks = tab.pages[2].addFolder({
            title: 'Freeze Tanks',
            expanded: true
        });
        freezeTanks.addInput(config.hacks.freezeTanks, 'enabled');
        var spectate = tab.pages[3].addFolder({
            title: 'Spectate',
            expanded: true
        });
        spectate.addMonitor(config.hacks.spectate, 'enabled');
        document.addEventListener('keydown', (e) => {
            if ((e.key == 'Insert') || (e.key == '0')) {
                pane.hidden = pane.hidden ? false : true;
            };
        });*/
      // ═══════════════════════════════════════════════════════════
// Menu using PlasmaUI
// ═══════════════════════════════════════════════════════════

var pane = new PlasmaUI.Pane({
    title: 'Splxff\'s Menu'
});

var tab = pane.addTab({
    pages: [
        { title: 'General' },
        { title: 'Turret' },
        { title: 'Visual' },
        { title: 'Other' }
    ]
});

// ── General Tab ──
var fly = tab.pages[0].addFolder({ title: 'Fly', expanded: false });

fly.airBreak = fly.addFolder({ title: 'airBreak', expanded: true });
fly.airBreak.addMonitor(config.hacks.airBreak, 'enabled');
fly.airBreak.addInput(config.hacks.airBreak, 'speed', { min: 0, max: 500 });
fly.airBreak.addInput(config.hacks.airBreak, 'type', {
    label: 'type',
    options: { tilt: 'tilt', airWalk: 'airWalk' }
});
fly.airBreak.addInput(config.hacks.airBreak, 'faceTarget');

fly.antiAim = fly.addFolder({ title: 'antiAim', expanded: true });
fly.antiAim.addMonitor(config.hacks.antiAim, 'enabled');
fly.antiAim.addMonitor(config.hacks.antiAim, 'top');

fly.followTank = fly.addFolder({ title: 'followTank', expanded: true });
fly.followTank.addMonitor(config.hacks.followTank, 'enabled');

var turret = tab.pages[0].addFolder({ title: 'Turret', expanded: true });
turret.hitbox = turret.addFolder({ title: 'Hitbox', expanded: true });
turret.hitbox.addInput(config.hacks.hitbox, 'enabled');
turret.hitbox.addInput(config.hacks.hitbox, 'amount', { min: 1, max: 3.25, step: 0.1 });

var tank = tab.pages[0].addFolder({ title: 'Tank', expanded: true });
tank.speed = tank.addFolder({ title: 'Speed', expanded: false });
tank.speed.addInput(window, 'Hack', { label: 'Enabled' });
tank.speed.addInput(window, 'Speed', { min: 0, max: 50 });
tank.speed.addInput(window, 'turnSpeed', { min: 0, max: 50 });
tank.speed.addInput(window, 'Acceleration', { min: 0, max: 50 });

tank.noClip = tank.addFolder({ title: 'noClip', expanded: true });
tank.noClip.addInput(config.hacks.noClip, 'enabled');

tank.noFlip = tank.addFolder({ title: 'noFlip', expanded: false });
tank.noFlip.addInput(config.hacks.neverFlip, 'enabled');

// ── Turret Tab ──
var turret2 = tab.pages[1].addFolder({ title: 'Turret', expanded: true });
turret2.aimAssist = turret2.addFolder({ title: 'aimAssist', expanded: true });
turret2.aimAssist.addInput(window, 'Aimbot', { label: 'enabled' });
turret2.aimAssist.addInput(window, 'aimAmount', { min: 0, max: 720, label: 'amount' })
    .on('change', (e) => {
        indicator.style.opacity = '1';
        setTimeout(() => { indicator.style.opacity = '0'; }, 500);
        indicatorPart1.style.background = `conic-gradient(
            #00ffcc 0 ${(aimAmount / 4) - 2}deg,
            rgba(0,0,0,0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg,
            transparent ${(aimAmount / 4)}deg 360deg
        )`;
        indicatorPart2.style.background = `conic-gradient(
            #00ffcc 0 ${(aimAmount / 4) - 2}deg,
            rgba(0,0,0,0.7) ${(aimAmount / 4) - 2}deg ${(aimAmount / 4)}deg,
            transparent ${(aimAmount / 4)}deg 360deg
        )`;
    });

turret2.verticalAim = turret2.addFolder({ title: 'verticalAim', expanded: true });
turret2.verticalAim.addInput(window, 'Aimbot2', { label: 'enabled' });

// ── Visual Tab ──
var esp = tab.pages[2].addFolder({ title: 'ESP', expanded: true });
esp.addInput(window, 'espEnabled', { label: 'enabled' });
esp.addInput(window, 'espColor', { label: 'Enemy', view: 'color' });
esp.addInput(window, 'espColor2', { label: 'Allies', view: 'color' });
esp.addInput(window, 'espColor3', { label: 'Target', view: 'color' });
esp.addInput(window, 'espColor4', { label: 'Self', view: 'color' });

var freezeTanks = tab.pages[2].addFolder({ title: 'Freeze Tanks', expanded: true });
freezeTanks.addInput(config.hacks.freezeTanks, 'enabled');

// ── Other Tab ──
var spectate = tab.pages[3].addFolder({ title: 'Spectate', expanded: true });
spectate.addMonitor(config.hacks.spectate, 'enabled');

// ── Toggle ──
document.addEventListener('keydown', (e) => {
    if (e.key === 'Insert' || e.key === '0') {
        pane.hidden = !pane.hidden;
    }
});
        cancelAnimationFrame(f);
    };
    a();
})();
