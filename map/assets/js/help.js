document.addEventListener('wheel', function (event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchend', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchcancel', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

/* ─── Scroll-down button ─── */
(function () {
    const btn = document.getElementById('scroll-down-btn');
    if (!btn) return;

    const THRESHOLD = 60;

    function getScrollTop() {
        return (document.scrollingElement || document.documentElement).scrollTop || window.pageYOffset || 0;
    }

    btn.addEventListener('click', function () {
        var el = document.scrollingElement || document.documentElement;
        el.scrollBy
            ? el.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' })
            : (el.scrollTop += window.innerHeight * 0.75);
    });

    function onScroll() {
        if (getScrollTop() > THRESHOLD) {
            btn.classList.add('hidden');
        } else {
            btn.classList.remove('hidden');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
})();
