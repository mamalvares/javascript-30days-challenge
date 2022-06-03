window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    if(!audio) return; //stop function running all
    audio.play();
});