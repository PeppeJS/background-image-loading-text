let loading_text = document.querySelector('.loading-text');
let imgBg = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loading_text.innerText = `${load}%`;
  loading_text.style.opacity = scale(load, 0, 100, 1, 0);
  imgBg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
