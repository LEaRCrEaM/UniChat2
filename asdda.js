document.body.insertAdjacentHTML('beforeend', `<div class='gui2'>
    <div class="speed-checkbox">
        <div class='info'>(XP XT's) Saves choice on refresh and must be on before joining/refreshing (CLIENT-SIDED ONLY YOU CAN SEE XT)</div>
        <input id='skin-check' class='hotkey' type='checkbox'>
        <label for='skin-check' class="slider"></label>
        <label for='skin-check'>XP XT's</label>
    </div>
    <br>
    <div class="speed-checkbox">
        <input id='speed-check' class='hotkey' type='checkbox'>
        <label for='speed-check' class="slider"></label>
        <label for='speed-check'>Speed</label>
    </div>
    <br>
    <div class="speed-checkbox">
        <input id='aimbot' class='hotkey' type='checkbox' checked>
        <label for='aimbot' class="slider"></label>
        <label for='aimbot'>Aimbot</label>
    </div>
    <br>
    <div class="slider-controls">
        <label for="aim">Aim:</label>
        <input type='range' id="aim" min="0" max="360" value='4'>
        <output id="aim-output" contenteditable="true">4</output>
        <label for="speed">Speed:</label>
        <input type='range' id="speed" min="0" max="100" value='1.13'>
        <output id="speed-output" contenteditable="true">1.13</output>
        <label for="acceleration">Acceleration:</label>
        <input type='range' id="acceleration" min="0" max="100" value='1.15'>
        <output id="acceleration-output" contenteditable="true">1.15</output>
    </div>
</div>

<style>
    .info {
        position: absolute;
        z-index: 1;
        top: -30%;
        background: rgba(255, 2, 2, .2);
        border-radius: 20px;
        width: 200px;
        display: none;
    }

    .speed-checkbox:hover .info {
        display: block;
    }

    .gui2 {
        width: 250px;
        border-radius: 20px;
        border: 2px solid #fff;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        animation: fadeIn 0.5s ease-out;
        z-index: 9999999999;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .speed-checkbox {
        display: flex;
        align-items: center;
    }

    .speed-checkbox input[type='checkbox'] {
        display: none;
    }

    .speed-checkbox .slider {
        position: relative;
        width: 40px;
        height: 20px;
        background-color: #ccc;
        border-radius: 20px;
        cursor: pointer;
    }

    .speed-checkbox .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.4s;
    }

    input[type='checkbox']:checked + .slider:before {
        transform: translateX(20px);
    }

    .speed-checkbox label {
        margin-left: 10px;
        color: #fff;
        font-family: Arial, sans-serif;
    }

    .slider-controls {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .slider-controls label {
        color: #fff;
        font-family: Arial, sans-serif;
    }

    .slider-controls input[type='range'] {
        width: 100%;
        -webkit-appearance: none;
        height: 5px;
        border-radius: 10px;
        background: #bbb;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider-controls input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
    }

    .slider-controls input[type='range']::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
    }

    .slider-controls output {
        color: #fff;
        font-family: Arial, sans-serif;
    }
</style>
`);
function updateAimAmount() {
    try {
        AIM;
    } catch (error) {
        return;
    };
    for (const key in AIM) {
        for (const key2 in AIM[key]) {
            if ((AIM[key][key2].toString() == window.prevAimAmount.toString()) || (AIM[key][key2] == 4)) {
                AIM[key][key2] = window.aimAmount;
                prevAimAmount = aimAmount;
            };
        };
    };
};
localStorage['apap'] = localStorage['apap'] || false;
window.Hack = document.getElementById('speed-check').checked;
window.Aimbot = document.getElementById('aimbot').checked;
window.Speed = 1.13;
window.Acceleration = 1.15;
window.aimAmount = 4;
if (localStorage['apap'] == 'true') {
    document.getElementById('skin-check').setAttribute('checked', '');
    var ta = 0;
    var o = fetch;
    fetch = function() {
        if (arguments[0].includes('https://s.eu.tankionline.com/566/70102/323/346/31033607367072/lightmap.webp')) {
            arguments[0] = 'https://s.eu.tankionline.com/0/16722/6/305/31033607424605/lightmap.webp';
            ta++;
            if (ta > 5) {
                fetch = o;
            };
        };
        if (arguments[0].includes('https://s.eu.tankionline.com/566/70102/323/346/31033607367072/meta.info')) {
            arguments[0] = 'https://s.eu.tankionline.com/0/16722/6/305/31033607424605/meta.info';
            ta++;
            if (ta > 5) {
                fetch = o;
            };
        };
        if (arguments[0].includes('https://s.eu.tankionline.com/566/70102/323/346/31033607367072/object.a3d')) {
            arguments[0] = 'https://s.eu.tankionline.com/0/16722/6/305/31033607424605/object.a3d';
            ta++;
            if (ta > 5) {
                fetch = o;
            };
        };
        if (arguments[0].includes('https://s.eu.tankionline.com/567/105205/202/122/31033604741475/lightmap.webp')) {
            arguments[0] = 'https://s.eu.tankionline.com/0/16722/6/301/31033604764033/lightmap.webp';
            ta++;
            if (ta > 5) {
                fetch = o;
            };
        };
        if (arguments[0].includes('https://s.eu.tankionline.com/567/105205/202/122/31033604741475/meta.info')) {
            arguments[0] = 'https://s.eu.tankionline.com/0/16722/6/301/31033604764033/meta.info';
            ta++;
            if (ta > 5) {
                fetch = o;
            };
        };
        if (arguments[0].includes('https://s.eu.tankionline.com/567/105205/202/122/31033604741475/object.a3d')) {
            arguments[0] = 'https://s.eu.tankionline.com/0/16722/6/301/31033604764033/object.a3d';
            ta++;
            if (ta > 5) {
                fetch = o;
            };
        };
        return o.apply(this, arguments);
    };
};

// Get references to the output elements
const speedOutput = document.getElementById('speed-output');
const accelerationOutput = document.getElementById('acceleration-output');
const aimOutput = document.getElementById('aim-output');

// Add event listeners to handle user input
speedOutput.addEventListener('input', function () {
    let value = parseFloat(this.textContent);
    value = Math.max(0, Math.min(100, value));
    document.getElementById('speed').value = value;
    window.Speed = value;
});

accelerationOutput.addEventListener('input', function () {
    let value = parseFloat(this.textContent);
    value = Math.max(0, Math.min(100, value));
    document.getElementById('acceleration').value = value;
    window.Acceleration = value;
});

aimOutput.addEventListener('input', function () {
    let value = parseFloat(this.textContent);
    value = Math.max(0, Math.min(360, value));
    document.getElementById('aim').value = value;
    window.aimAmount = value;
    updateAimAmount();
});

document.getElementById('speed').addEventListener('input', function () {
    speedOutput.textContent = this.value;
    window.Speed = parseFloat(this.value);
});

document.getElementById('acceleration').addEventListener('input', function () {
    accelerationOutput.textContent = this.value;
    window.Acceleration = parseFloat(this.value);
});

document.getElementById('aim').addEventListener('input', function () {
    aimOutput.textContent = this.value;
    window.aimAmount = parseFloat(this.value);
    updateAimAmount();
});

document.getElementById('speed-check').addEventListener('change', function () {
    window.Hack = this.checked;
});

document.getElementById('aimbot').addEventListener('change', function () {
    window.Aimbot = this.checked;
});

document.getElementById('skin-check').addEventListener('change', function () {
    localStorage['apap'] = this.checked;
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'm') {
        document.querySelector('.gui2').style.display = document.querySelector('.gui2').style.display == 'block' ? 'none' : 'block';
    };
});
setInterval(() => {
    updateAimAmount();
}, 2000);
