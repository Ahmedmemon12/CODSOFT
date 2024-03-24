window.addEventListener('DOMContentLoaded', () => {
    $('.TeamSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000
    });

})

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.php-email-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Form submit hone se rokna
        var inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.value = ''; // Input ki value ko null kar dena
        });
        // Agar aap chahte hain ki "Your message has been sent" ka message dikhe:
        // var sentMessage = form.querySelector('.sent-message');
        // sentMessage.style.display = 'block';
    });
});
