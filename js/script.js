const infoImage = document.getElementById('info-image');
const infoTitle = document.getElementById('info-title');
const infoText = document.getElementById('info-text');

const infoItems = document.querySelectorAll('.info-item');

infoItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.getAttribute('data-img');
        const title = item.getAttribute('data-title');
        const text = item.getAttribute('data-text');

        infoImage.src = img;
        infoTitle.textContent = title;
        infoText.textContent = text;

        infoItems.forEach(i => i.classList.remove('active-info'));
        item.classList.add('active-info');
    });
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // navbar 高度
                    behavior: 'smooth'
                });
            }
        }
    });
});

