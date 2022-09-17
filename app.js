

var nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 10){
        nav.classList.add('nav');
    }
    else {
        nav.classList.remove('nav');
    }
})