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
            };
            if (config.keysPressed.includes('v')) {
                config.hacks.followTank.height -= config.hacks.airBreak.speed;
            };
            myTankPos.v17_1 = Math.max(Object.values(mapBounds)[0], Math.min(Object.values(mapBounds)[3], otherTankPos.v17_1));
            myTankPos.w17_1 = Math.max(Object.values(mapBounds)[1], Math.min(Object.values(mapBounds)[4], otherTankPos.w17_1));
            myTankPos.x17_1 = Math.max(Object.values(mapBounds)[2], Math.min(Object.values(mapBounds)[5]+100, otherTankPos.x17_1 + config.hacks.followTank.height));
        };
        if (config.hacks.neverFlip.enabled) {
            if ((Math.abs(myTankInfo[1].b1b_1) > config.hacks.neverFlip.amount && (myTankInfo[1].b1b_1 = Math.sign(myTankInfo[1].b1b_1) * config.hacks.neverFlip.amount), Math.abs(myTankInfo[1].a1b_1) > config.hacks.neverFlip.amount)) {
                myTankInfo[1].a1b_1 = Math.sign(myTankInfo[1].a1b_1) * config.hacks.neverFlip.amount;
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
        if (config.hacks.autoPress.length > 0) {
            config.hacks.autoPress.forEach(e => {
                press(e, true);
                press(e, false);
            });
        };
    };
}
