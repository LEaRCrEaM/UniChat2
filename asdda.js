var isAllowed = localStorage.getItem('booleanState'), submitToKingF = false, submitToKingA = true, Soduko, SodukoPos;
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
    if (arguments[0] && typeof arguments[0] == 'string' && ['Soduko', 'Scars'].some(t => arguments[0].includes(t))) {
        arguments[0] = arguments[0].replaceAll('Soduko', 'King').replaceAll('Scars', 'King');
        return oF.apply(this, arguments);
    };
    if (arguments[0] && typeof arguments[0] == 'string' && ['Sick', 'Thrife'].some(t => arguments[0].includes(t))) {
        arguments[0] = arguments[0].replaceAll('Sick', 'Suck').replaceAll('Thrife', 'Bitch');
        return oF.apply(this, arguments);
    };
    return oF.apply(this, arguments);
};
CanvasRenderingContext2D.prototype.strokeText = function() {
    if (arguments[0] && typeof arguments[0] == 'string' && ['Soduko', 'Scars'].some(t => arguments[0].includes(t))) {
        arguments[0] = arguments[0].replaceAll('Soduko', 'King').replaceAll('Scars', 'King');
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
                    <label class="switch">
                        <input id="esp-check" type="checkbox">
                        <span class="slider">ESP</span>
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
</style>
`);
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
    for (const key in AIM) {
        for (const key2 in AIM[key]) {
            if ((AIM[key][key2].toString() == window.prevAimAmount.toString()) || (AIM[key][key2] == 12)) {
                if (isAllowed) {
                  AIM[key][key2] = window.aimAmount;
                  prevAimAmount = aimAmount;
                } else {
                  aimAmount = 0;
                  AIM[key][key2] = window.aimAmount;
                  prevAimAmount = aimAmount;
                };
            };
        };
    };
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
document.querySelector('#hull-dd').value = SelectedTank.hull[Object.entries(SelectedTank.hull)[0][0]];
document.querySelector('#turret-dd').value = SelectedTank.turret[Object.entries(SelectedTank.turret)[0][0]];
window.Hack = document.getElementById('speed-check').checked;
window.Aimbot = document.getElementById('aimbot').checked;
window.Aimbot2 = false;
window.Speed = 1;
window.Acceleration = 1;
window.aimAmount = 12;
window.espEnabled = false;
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
          return;
      };
      if (p.srcElement.id == 'esp-check') {
          window.espEnabled = p.srcElement.checked;
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
if (localStorage['apap'] == 'true') {
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
        if (isAllowed) {
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
    return Object.values(searchInObject(Object.values(searchInObject(t, '==14'))[0], '==41'))[1];
};
function getInfoOfTank(t) {
    return Object.values(Object.values(searchInObject(t, '=== 2'))[0])
};
function getRaycastMovementOfShell(t) {
    return Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(t, '==18'))[0], '==0'))[0], '==3'))[1], '==8'))[0], '==6'))[1];
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
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            return typeof Object.values(searchInObject(Object.values(third1)[2], '==0'))[2] == 'number';
        });
    } else if (t == 'self') {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            return typeof Object.values(searchInObject(Object.values(third1)[2], '==0'))[2] == 'boolean';
        });
    } else if (t.includes('player')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            return Object.values(searchInObject(Object.values(third1)[2], '==0'))[1]?.toString()?.includes(t.replace('player', ''));
        });
    } else if (t.includes('enemies')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            var fourth1;
            try {
                fourth1 = Object.values(Object.values(searchInObject(Object.values(third1)?.[2], '==1'))?.[2])?.[0] == 'ENEMY';
            } catch (e){};
            if (fourth1) return fourth1;
        });
    } else if (t.includes('allies')) {
        return Object.values(Tanki.allTanks).filter(p => {
            var first1 = Object.values(searchInObject(Object.values(p).filter(t => t?.__proto__), '=== 15'))[0];
            var second1 = searchInObject(Object.values(first1).filter(t => t?.__proto__), '=== 18');
            var third1 = searchInObject(Object.values(Object.values(second1)[0])[0], '==8');
            var fourth1;
            try {
                fourth1 = Object.values(Object.values(searchInObject(Object.values(third1)?.[2], '==1'))?.[2])?.[0] == 'ALLY';
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
                config.tank.position.x = myTankPos.v17_1;
                config.tank.position.y = myTankPos.w17_1;
                config.tank.position.z = myTankPos.x17_1;
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
                    myTankPosType[Object.keys(myTankPosType)[0]] = Tanki.teamFlagPosition.v17_1;
                    myTankPosType[Object.keys(myTankPosType)[1]] = Tanki.teamFlagPosition.w17_1;
                    myTankPosType[Object.keys(myTankPosType)[2]] = Tanki.teamFlagPosition.x17_1;
                } else {
                    config.hacks.flagTp.index = !config.hacks.flagTp.index;
                    myTankPosType[Object.keys(myTankPosType)[0]] = Tanki.enemyFlagPosition.v17_1;
                    myTankPosType[Object.keys(myTankPosType)[1]] = Tanki.enemyFlagPosition.w17_1;
                    myTankPosType[Object.keys(myTankPosType)[2]] = Tanki.enemyFlagPosition.x17_1;
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
            amount: .4
        },
        turretAim: {
            enabled: false,
            type: 'turret'
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
        } else if (Array.from(this.classList).length == 0) {
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
        };
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
                config.tank.position.x = myTankPos.v17_1;
                config.tank.position.y = myTankPos.w17_1;
                config.tank.position.z = myTankPos.x17_1;
            };*/
            myTankInfo[0].v17_1 = 0;
            myTankInfo[0].w17_1 = 0;
            myTankInfo[0].x17_1 = 0;
            if (config.hacks.airBreak.type == 'tilt') {
                myTankPos.v17_1 = Math.max(Object.values(mapBounds)[0], Math.min(Object.values(mapBounds)[3], config.tank.position.x));
                myTankPos.w17_1 = Math.max(Object.values(mapBounds)[1], Math.min(Object.values(mapBounds)[4], config.tank.position.y));
            };
            myTankPos.x17_1 = Math.max(Object.values(mapBounds)[2], Math.min(Object.values(mapBounds)[5]+100, config.tank.position.z));
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
                        myTankInfo[0].v17_1 += forwardX * 1000;
                        myTankInfo[0].w17_1 += forwardZ * 1000;
                    };
                }
                if (config.keysPressed.includes('s')) {
                    // Move backward
                    if (config.hacks.airBreak.type == 'tilt') {
                        config.tank.position.x -= forwardX * config.hacks.airBreak.speed;
                        config.tank.position.y -= forwardZ * config.hacks.airBreak.speed;
                    } else if (config.hacks.airBreak.type == 'airWalk') {
                        myTankInfo[0].v17_1 -= forwardX * 1000;
                        myTankInfo[0].w17_1 -= forwardZ * 1000;
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
                        myTankInfo[0].v17_1 += rightX * 1000;
                        myTankInfo[0].w17_1 += rightZ * 1000;
                    };
                }
                if (config.keysPressed.includes('a')) {
                    // Move left
                    if (config.hacks.airBreak.type == 'tilt') {
                        config.tank.position.x -= rightX * config.hacks.airBreak.speed;
                        config.tank.position.y -= rightZ * config.hacks.airBreak.speed;
                    } else if (config.hacks.airBreak.type == 'airWalk') {
                        myTankInfo[0].v17_1 -= rightX * 1000;
                        myTankInfo[0].w17_1 -= rightZ * 1000;
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
            myTankPos.v17_1 = getRandomNumberBetween(Object.values(mapBounds)[0], Object.values(mapBounds)[3]);
            myTankPos.w17_1 = getRandomNumberBetween(Object.values(mapBounds)[1], Object.values(mapBounds)[4]);
            myTankPos.x17_1 = config.hacks.antiAim.top ? Object.values(mapBounds)[5] : Object.values(mapBounds)[2];
        };
        if (config.hacks.followTank.enabled && otherTankPos?.v17_1) {
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
                myTankPos.v17_1 = Math.max(Object.values(mapBounds)[0], Math.min(Object.values(mapBounds)[3], otherTankPos.v17_1));
                myTankPos.w17_1 = Math.max(Object.values(mapBounds)[1], Math.min(Object.values(mapBounds)[4], otherTankPos.w17_1));
                myTankPos.x17_1 = Math.max(Object.values(mapBounds)[2], Math.min(Object.values(mapBounds)[5]+100, otherTankPos.x17_1 + config.hacks.followTank.height));
            } else {
                var tPos = Tanki.interpolatedTankPosition;
                tPos.v17_1 = Math.max(Object.values(mapBounds)[0], Math.min(Object.values(mapBounds)[3], otherTankPos.v17_1));
                tPos.w17_1 = Math.max(Object.values(mapBounds)[1], Math.min(Object.values(mapBounds)[4], otherTankPos.w17_1));
                tPos.x17_1 = Math.max(Object.values(mapBounds)[2], Math.min(Object.values(mapBounds)[5]+100, otherTankPos.x17_1));
            };
        };
        if (config.hacks.neverFlip.enabled) {
            if (!myTankInfo[1]) return;
            const maxAmount = config.hacks.neverFlip.amount;
            const dampingFactor = 0.8;
            if (Math.abs(myTankInfo[1].b1b_1) > maxAmount) {
                myTankInfo[1].b1b_1 *= dampingFactor;
                if (Math.abs(myTankInfo[1].b1b_1) < maxAmount) {
                    myTankInfo[1].b1b_1 = Math.sign(myTankInfo[1].b1b_1) * maxAmount;
                };
            };
            if (Math.abs(myTankInfo[1].a1b_1) > maxAmount) {
                myTankInfo[1].a1b_1 *= dampingFactor; // Apply damping
                if (Math.abs(myTankInfo[1].a1b_1) < maxAmount) {
                    myTankInfo[1].a1b_1 = Math.sign(myTankInfo[1].a1b_1) * maxAmount;
                };
            };
        };
        if (config.hacks.turretAim.enabled && otherTankPos?.v17_1) {
            switch (config.hacks.turretAim.type) {
                case 'camera':
                    var dirX = otherTankPos.v17_1 - myTankPos.v17_1;
                    var dirZ = otherTankPos.w17_1 - myTankPos.w17_1;
                    Tanki.cameraDirection = Math.atan2(dirZ, dirX) - Math.PI/2;
                    break;
                case 'turret':
                    var deltaX = otherTankPos.v17_1 - myTankPos.v17_1;
                    var deltaY = otherTankPos.w17_1 - myTankPos.w17_1;
                    var dirYaw = Math.atan2(deltaY, deltaX);
                    Tanki.turretDirection = (dirYaw - getTankYaw()) - Math.PI/2;
                    break;
            };
        };
        if (submitToKingA && SodukoPos) {
            var deltaX = SodukoPos.v17_1 - myTankPos.v17_1;
            var deltaY = SodukoPos.w17_1 - myTankPos.w17_1;
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
            shellPos.v17_1 = player.v17_1;
            shellPos.w17_1 = player.w17_1;
            shellPos.x17_1 = player.x17_1;
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
    var second2 = searchInObject(Object.values(first2)[3], '==41');
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
var camSpeed = 100;
function setSpec() {
    config.hacks.spectate.enabled = true;
    myTank[tankMovable] = false;
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
            camera.v17_1 = cameraPos.x;
            camera.w17_1 = cameraPos.y;
            camera.x17_1 = cameraPos.z;
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
            cameraPos.x += (player.v17_1 - cameraPos.x) * followSmoothingFactor;
            cameraPos.y += (player.w17_1 - cameraPos.y) * followSmoothingFactor;
            cameraPos.z += (player.x17_1 - cameraPos.z) * followSmoothingFactor;
            camera.v17_1 = cameraPos.x;
            camera.w17_1 = cameraPos.y;
            camera.x17_1 = cameraPos.z;
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
        a1b_1: 0,  // Rotation in X-axis (yaw)
        b1b_1: 0,       // No rotation in Y-axis (pitch)
        c1b_1: sinYaw,       // No rotation in Z-axis (roll)
        z1a_1: cosYaw   // Scalar part of the quaternion
    };

    // Step 4: Apply the yaw quaternion to the tank's orientation
    myTankInfo[1].a1b_1 = yawQuat.a1b_1;
    myTankInfo[1].b1b_1 = yawQuat.b1b_1;
    myTankInfo[1].c1b_1 = yawQuat.c1b_1;
    myTankInfo[1].z1a_1 = yawQuat.z1a_1;
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
        var t = Object.values(Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(Object.values(searchInObject(Utils.cameraComponent, '==15'))[0], '==65'))[0], '==21'))[0], '==18'))[0])[0];
        for (let i=0;i<t.length;i++) {
            t[i].espInfo = Object.values(searchInObject(Object.values(Object.values(searchInObject(Object.values(searchInObject(t[i], '==15'))[0], '==18'))[0])[0], '==2'))[0]
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
        return Object.values(Object.values(searchInObject(Object.values(searchInObject(Object.entries(Object.values(Object.values(searchInObject(Object.values(searchInObject(t.espInfo, '==15'))[0], '==18'))[0])[0]).filter(t => t[1]?.m12z_1)[0][1], '==14'))[0], '==19'))[1])[1][0][Tanki.turretDirectionName];
    },
    setTurretDirectionOfTank: function (t, p) {
        return Object.values(Object.values(searchInObject(Object.values(searchInObject(Object.entries(Object.values(Object.values(searchInObject(Object.values(searchInObject(t.espInfo, '==15'))[0], '==18'))[0])[0]).filter(t => t[1]?.m12z_1)[0][1], '==14'))[0], '==19'))[1])[1][0][Tanki.turretDirectionName] = p;
    }
};
function getClosestPlayer(myTankPos, otherTanks) {
    let closestTank = null;
    let closestDistance = Infinity;
    otherTanks.forEach(tank => {
        tank = getPositionOfTank(tank);
        const distance = Math.sqrt(
            Math.pow(tank.v17_1 - myTankPos.v17_1, 2) +
            Math.pow(tank.w17_1 - myTankPos.w17_1, 2) +
            Math.pow(tank.x17_1 - myTankPos.x17_1, 2)
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
        x: otherTankPos.v17_1 - myTankPos.v17_1,
        y: otherTankPos.w17_1 - myTankPos.w17_1,
        z: otherTankPos.x17_1 - myTankPos.x17_1
    };
    let magnitude = Math.sqrt(direction.x ** 2 + direction.y ** 2 + direction.z ** 2);
    if (magnitude < 1e-6) {
        console.warn("Positions are too close or identical. No rotation needed.");
        return;
    };
    direction.x /= magnitude;
    direction.y /= magnitude;
    direction.z /= magnitude;
    let yaw = Math.atan2(-direction.x, direction.y);
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
    myTankInfo[1].c1b_1 = quaternion.y;
    myTankInfo[1].b1b_1 = quaternion.z;
    myTankInfo[1].a1b_1 = -quaternion.x;
    myTankInfo[1].z1a_1 = quaternion.w;
    return quaternion;
};
function getTankYaw() {
    const { c1b_1, b1b_1, a1b_1, z1a_1 } = myTankInfo[1];
    const sinY = 2 * (z1a_1 * c1b_1 + a1b_1 * c1b_1);
    const cosY = 1 - 2 * (c1b_1 * c1b_1 + a1b_1 * a1b_1);
    return Math.atan2(sinY, cosY);
};
function getTankYaw2(t) {
    const { c1b_1, b1b_1, a1b_1, z1a_1 } = t[1];
    const sinY = 2 * (z1a_1 * c1b_1 + a1b_1 * c1b_1);
    const cosY = 1 - 2 * (c1b_1 * c1b_1 + a1b_1 * a1b_1);
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
                x: enemy.v17_1 - tankPosition.v17_1,
                z: enemy.w17_1 - tankPosition.w17_1
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
function getRelativePosition(myTankPos, otherTankPos, cameraDirection) {
    var deltaX = otherTankPos.v17_1 - myTankPos.v17_1;
    var deltaY = otherTankPos.w17_1 - myTankPos.w17_1;
    var dirYaw = Math.atan2(deltaY, deltaX);
    var relativeAngle = Math.atan2(Math.sin(dirYaw - cameraDirection), Math.cos(dirYaw - cameraDirection));
    if (relativeAngle > 0) return "right";
    if (relativeAngle < 0) return "left";
    return "front";
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
