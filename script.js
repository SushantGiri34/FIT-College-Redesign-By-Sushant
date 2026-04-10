 // Custom Cursor
        const dot  = document.getElementById('cursorDot');
        const ring = document.getElementById('cursorRing');
        let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top  = mouseY + 'px';
        });

        (function animateRing() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = ringX + 'px';
            ring.style.top  = ringY + 'px';
            requestAnimationFrame(animateRing);
        })();

        document.querySelectorAll('a, button, .card, .hamburger').forEach(el => {
            el.addEventListener('mouseenter', () => { dot.classList.add('hovered'); ring.classList.add('hovered'); });
            el.addEventListener('mouseleave', () => { dot.classList.remove('hovered'); ring.classList.remove('hovered'); });
        });


window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.welcome').style.display = 'none';
    }, 3000); // 2s wait + 1s animation
});

function toggleMenu(hamburger) {
    const menu = document.querySelector('.nav .info');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// For mobile dropdown toggle
document.querySelectorAll('.nav .info ul li a').forEach(item => {
    item.addEventListener('click', function (e) {
        if (window.innerWidth <= 900) {
            const parent = this.parentElement;
            if (parent.querySelector('ul')) {
                e.preventDefault();
                parent.classList.toggle('active');
            }
        }
    });
});