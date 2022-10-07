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

document.querySelectorAll('.cazare-img').forEach(image =>{
    image.onclick = () => {
        var lgImage = document.querySelector('.large-image img');
        var smImage = document.querySelectorAll('.cazare-img');
        smImage.src = image.getAttribute('src');
        document.querySelector('.cazare-popup').style.display = 'block';
        lgImage.src = smImage.src;
    }
});

document.getElementById('closeBtn').onclick=() => {document.querySelector('.cazare-popup').style.display = 'none';
}

/*var nav = document.querySelector('nav');
var navmenu = document.querySelector('.navbar-nav');
window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 100){
        nav.classList.add('nav');
    }
    else {
        nav.classList.remove('nav');
        navmenu.classList.add('nav');
    }
});*/



