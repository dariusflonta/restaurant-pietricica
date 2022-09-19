window.addEventListener('scroll', revealOne);

    function revealOne() {
        var reveals = document.querySelectorAll('.revealElement');
        for(var i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 20;

            if(revealtop < windowHeight - revealpoint) {
                reveals[i].classList.add('activeReveal');
                }
            }
        };

/*document.querySelectorAll('.open-img').forEach(image =>{
    image.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('pop-up img').src = image.getAttribute('src');
    }
});

document.querySelector('.close-img').onclick=() => {document.querySelector('.pop-up').style.display = 'none';
}*/
