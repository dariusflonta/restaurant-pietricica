window.addEventListener('scroll', revealOne);

    function revealOne() {
        var reveals = document.querySelectorAll('.revealElement');
        for(var i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 40;

            if(revealtop < windowHeight - revealpoint) {
                reveals[i].classList.add('activeReveal');
                }
            }
        };
