AOS.init({
  easing: 'ease-out-back',
  // duration: 1000
});

if (document.readyState == 'complete') {
  AOS.refresh();
}

var audio = new Audio(); // use the constructor in JavaScript, just easier that way
audio.addEventListener("load", function () {
  audio.play();
}, true);
audio.src = 'assets/audio.mp3';
audio.autoplay = true; // add this