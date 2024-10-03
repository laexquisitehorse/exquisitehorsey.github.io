/* Let variables + other variables */
var hidePopUp1 = false;
let playerHealth = 60;


function gameOverload() {
    console.log('server: GAME IS CRITICAL');
    window.stop();
    console.log('server: Restart the project to run again');
}

function fadeAffect() {
    const element = document.getElementById('fadeElement');

    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
        element.style.opacity = 0;

        let last = +new Date();
        const fadeIn = () => {
            const now = +new Date();
            const elapsed = now - last;

            element.style.opacity = Math.min(1, parseFloat(element.style.opacity) + (elapsed / 1000));

            last = now;

            if (element.style.opacity < 1) {
                requestAnimationFrame(fadeIn);
            }
        };

        requestAnimationFrame(fadeIn);
    } else {
        let last = +new Date();
        const fadeOut = () => {
            const now = +new Date();
            const elapsed = now - last;

            element.style.opacity = Math.max(0, parseFloat(element.style.opacity) - (elapsed / 1000));

            last = now;

            if (element.style.opacity > 0) {
                requestAnimationFrame(fadeOut);
            } else {
                element.style.display = 'none';
            }
        };

        requestAnimationFrame(fadeOut);
    }
}

function weather() {
    /* Run this every 1o minutes: */
    var weatherID = math.floor(math.random() * argument.length);
    return arguments[weatherID];

    if ('weatherID' === 1 || 'weatherID' === 2 || 'weatherID' === 3 || 'weatherID' === 4) {
        var weatherName = 'sunny';
        console.log('server: weather=sunny');
    } else if ('weatherID' === 5 || 'wetaherID' === 6) {
        var weatherName = 'cloudy';
        console.log('server: weather=cloudy');
    } else if ('weatherID' === 7 || 'weatherID' === '8' || 'weatherID' === '9') {
        var weatherName = 'rainy';
        console.log('server: weather=rainy');
    } else if ('wetherID' === '10') {
        var weatherName = 'stormy';
        console.log('server: weather=stormy');
    }
    /* Put the actual weather that is visible here */
}

function tradeChances() {
    var tradeItemVar1 = Math.floor(Math.random() * 34) + 1;
    return arguments[tradeItemVar1];
    var tradeItemVar2 = Math.floor(Math.random() * 34) + 1;
    return arguments[tradeItemVar2];
    var tradeItemVar3 = Math.floor(Math.random() * 34) + 1;
    return arguments[tradeItemVar3];
    var tradeItemVar4 = Math.floor(Math.random() * 34) + 1;
    return arguments[tradeItemVar4];
    var tradeItemVar5 = Math.floor(Math.random() * 35);
    return arguments[tradeItemVar5];
    var tradeItemVar6 = Math.floor(Math.random() * 35);
    return arguments[tradeItemVar6];
}

function loadTrade() {
    tradeChances()

    if ('tradeItemVar5' === 0) {
        var tradeItemVar6 = 0;
        return arguments[tradeItemVar6];
        displayTradeItems()
    } else {
        displayTradeItems()
    }
}

function displayTradeItems() {
    /* Turn 'tradeItemVar's to 'tradeItemName' */
}

function usernameCheck() {
    if ('username' === 'god' || 'username' === 'God' || 'username' === 'GOD' || 'username' === 'admin' || 'username' === 'Admin' || 'username' === 'ADMIN') {
        /* Tell the user: "That would be too easy..." */
        console.log('server: attempted admin login failed')
    } else if ('username' === 'Admin1' || 'username' === 'ShragSir') {
        /* Tell me (hopefully me): "Welcome back, Kaden. Remember not to spend too much time on making the game!" */
        console.log('server: attempted admin login successful')
    } else {
        continueToGame()
    }
}

function healthMngr() {
    if ('playerHealth' > 50 & 'playerHealth' < 60) {
        /* HP bar set to 100% */
    } else if ('playerHealth' > 40 & 'playerHealth' < 50) {
        /* HP bar set to 80% */
    } else if ('playerHealth' > 30 & 'playerHealth' < 40) {
        /* HP bar set to 65% */
    } else if ('playerHealth' > 20 & 'playerHealth' < 30) {
        /* HP bar set to 45% */
    } else if ('playerHealth' > 10 & 'playerHealth' < 20) {
        /* HP bar set to 20% */
    } else if ('playerHealth' > 1 & 'playerHealth' < 10) {
        /* HP bar set to 5% */
    }
}

function sHurt() {
    playerHealth -= 5;
}

function mHurt() {
    playerHealth -= 10;
}

function lHurt() {
    playerHealth -= 15;
}

function xlHurt() {
    playerHealth -= 25;
}

function xxlHurt() {
    playerHealth -= 40;
}

function KO() {
    playerHealth -= 55;
}

function TKO() {
    playerHealth -= 60;
}

function signInPopUp() {
    var popUp1 = document.getElementById("signInPopUp");
    if (hidePopUp1) {
        popUp1.style.display = "none";
    } else {
        popUp1.style.display = popUp1.style.display === "none" ? "block" : "none";
    }
}

function dontShowPopUp1() {
    hidePopUp1 = true;
    signInPopUp();
}

signInPopUp();



