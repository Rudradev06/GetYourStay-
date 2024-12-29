document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('header-expanded');
        } else {
            header.classList.remove('header-expanded');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });



    // Hero Image Rotation
    var images = [
        '/Utils/AdobeStock_568107719_Preview.jpeg',
        '/Utils/AdobeStock_754263337_Preview.jpeg',
        '/Utils/AdobeStock_517607989_Preview.jpeg',
        '/Utils/AdobeStock_725692398_Preview.jpeg'
    ];

    var currentIndex = 0;
    var imageElement = document.getElementById('hero-image');

    imageElement.onerror = function () {
        console.error('Failed to load image:', imageElement.src);
    };

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; 
        imageElement.style.opacity = 0; 
        setTimeout(function () {
            imageElement.src = images[currentIndex]; 
            imageElement.style.opacity = 1; 
        }, 750); 
    }

    setInterval(changeImage, 2000); 
});


document.getElementById('login-link').addEventListener('click', function (event) {
    event.preventDefault(); 
    document.body.classList.add('fade-out'); 

    setTimeout(function () {
        window.location.href = 'login.html'; 
    }, 500); 
});



