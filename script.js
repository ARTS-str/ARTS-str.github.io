import gsap from '/src/all.js'
import { ScrollTrigger } from '/src/ScrollTrigger.js'

window.onload = function(){
    titleAnimation();
};

function titleAnimation(){
    var title = document.getElementById('head-title');
    setInterval(() => {
        title.innerHTML = 'ARTS.STR/';
        setTimeout(() => {
        title.innerHTML = 'ARTS.STR';
        }, 500);
    }, 1000);
}

/* The encoding is super important here to enable frame-by-frame scrubbing. */

// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

const gem = document.getElementById('gem');
const bg = document.getElementById('background');
let src = gem.currentSrc || gem.src;
let bgsrc = bg.currentSrc || bg.src;

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
  bg.play();
  bg.pause();
  gem.play();
  gem.pause();
});

/* ---------------------------------- */
/* Scroll Control! */

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

let bgtl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#bgcontainer",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

once(gem, "loadedmetadata", () => {
  tl.fromTo(
    gem,
    {
      currentTime: 0
    },
    {
      currentTime: gem.duration || 1
    }
  );
  bgtl.fromTo(
    bg,
    {
      currentTime: 0
    },
    {
      currentTime: bg.duration || 1
    }
  );
});


/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
  if (window["fetch"]) {
    fetch(bgsrc)
    fetch(src)
      .then((response) => response.blob())
      .then((response) => {
        var blobURL = URL.createObjectURL(response);

        var t = gem.currentTime;
        var v = bg.currentTime;
        once(document.documentElement, "touchstart", function (e) {
          gem.play();
          gem.pause();
          bg.play();
          bg.pause();
        });

        gem.setAttribute("src", blobURL);
        gem.currentTime = t + 0.01;
        bg.setAttribute("bgsrc", blobURL);
        bg.currentTime = v + 0.01;
      });
  }
}, 1000);

/* ---------------------------------- */