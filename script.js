function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function searchNews() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const newsBlocks = document.querySelectorAll('.zinios-lietus, .zinios-policija, .zinios-koncertas, .zinios-medicina');
    
    newsBlocks.forEach(block => {
        const newsText = block.querySelector('.ziniu-tekstas').textContent.toLowerCase();
        if (newsText.includes(searchText)) {
            block.style.opacity = '1';
            block.style.pointerEvents = 'auto';
        } else {
            block.style.opacity = '0';
            block.style.pointerEvents = 'none';
        }
    });

    
    if (searchText === '') {
        newsBlocks.forEach(block => {
            block.style.opacity = '1';
            block.style.pointerEvents = 'auto';
        });
    }
}

function addFadeInEffect() {
    const newsItems = document.querySelectorAll('.zinios-lietus, .zinios-policija, .zinios-koncertas, .zinios-medicina');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    newsItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-in-out';
        observer.observe(item);
    });
}

function handleScrollButton() {
    const topBtn = document.getElementById('topBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.style.opacity = '1';
            topBtn.style.pointerEvents = 'all';
        } else {
            topBtn.style.opacity = '0';
            topBtn.style.pointerEvents = 'none';
        }
    });
}

function addImageHoverEffect() {
    const images = document.querySelectorAll('.zinios-lietus1, .zinios-policija1, .zinios-koncertas1, .zinios-medicina1');
    
    images.forEach(img => {
        
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });

        
        img.addEventListener('touchstart', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('touchend', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addFadeInEffect();
    addImageHoverEffect();
    handleScrollButton();
}); 