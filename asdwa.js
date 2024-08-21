(() => {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent = JSON.stringify(window.User);
    div.classList.add('test');
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
                if ((User.name.length > 2) && (!['Meteron', 'Soduko', 'test_nigga1'].includes(User.name))) {
                    alert(`${User.name} does not have permission to use this hack!`);
                    for (const k in window) {
                        window[k] = 't';
                    };
                };
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
        if (document.querySelector('.BreadcrumbsComponentStyle-exitGameButton') && (!window.getTank || TEST.length > 0)) {
            window.getTank = true;
            window.flagPos1 = null;
            window.TEST = [];
        };
        if (t = document.querySelector('.UserInfoContainerStyle-progressValue')) {
            if (t.textContent !== User.exp) {
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
                    getTank() {
                        return `${this.turret.name} ${this.turret.upgrades} | ${this.hull.name} ${this.hull.upgrades}`;
                    },
                    getName() {
                        return `${this.clan} ${this.name}`;
                    }
                };
                User.friends = User1.friends;
            };
        };
        if (div.textContent !== JSON.stringify(window.User)) {
            div.textContent = ',,,' + JSON.stringify(window.User);
        };
    };
    var r = true, f;
    function a() {
        if (r) {
            f = requestAnimationFrame(a);
            findDetails();
        };
    };
    try {
        a();
    } catch (error) {
        r = false;
        cancelAnimationFrame(f);
        console.log(error);
    };
})();
