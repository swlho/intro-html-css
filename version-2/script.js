window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;

    console.log(newWidth)
    if (newWidth <= 800){
        const audio = document.querySelector("audio");
        audio.volume = 1.0;
        audio.play();
    }
});