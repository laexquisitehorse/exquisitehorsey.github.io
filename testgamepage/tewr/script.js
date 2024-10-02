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
    if ('tradeItemVar1' === 1) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 2) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 3) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 4) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 5) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 6) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 7) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 8) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 9) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 10) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 11) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 12) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 13) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 14) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    } else if ('tradeItemVar1' === 15) {
        var tradeItemName1 = '';
        return arguments[tradeItemName1];
    }
}


