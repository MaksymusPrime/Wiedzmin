
new Swiper('.slider', {

    
    //direction: 'vertical',
    //freeMode: true,
    speed: 2400,
    mousewheel: {
        enabled: true,
        sensitivity:2.4
    },

    spaceBetween: 18,
    parallax: true,
  
});

myVid=document.getElementById("myPlayer");
myVid.volume=0.5;




let sc = document.getElementById('sc');

document.addEventListener('scroll', function() {
    // Get scroll position
    let scrollPosition = window.pageYOffset;

    // Calculate whether the scroll it 350px or not then set the opacity to face the header out
    if (scrollPosition <= 0) {
        sc.style.opacity = 1 - scrollPosition / 2;
    } else {
        sc.style.opacity = 0;
    }

});