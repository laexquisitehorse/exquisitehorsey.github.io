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
