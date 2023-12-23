let source = new EventSource("/events");
let isDisinfectionOn = false;
let isLightingOn = false;
let names = [
  "lj",
  "lz",
  "zxq",
  "lyq",
  "dou",
  "julie",
  "tina",
  "meilin",
  "wuwei",
  "moon",
  "pan",
  "marcela",
  "pp",
  "ziyi",
  "sunny",
  "nadine",
  "lora",
  "helen",
  "jt",
  "shuang"
];

source.onmessage = (event) => {
  //   console.log(event.data);
};

// source.addEventListener("test", (event) => {
//   alert(`test message: ${event.data}`);
// });
source.addEventListener("time", (event) => {
  document.getElementById("time-display").textContent = `${event.data}`;
});
source.addEventListener("pause", (event) => {
  document.getElementById("time-display").textContent = `${event.data}`;
});

source.addEventListener("rfidMatch", (event) => {
  fetch("/color" + event.data);
});

function toggleRecord() {
  let btn = document.getElementById("recordBtn");
  if (isDisinfectionOn) {
    btn.textContent = "Start Recording";
    fetch("/recordingStop");
  } else {
    btn.textContent = "Stop Recording";
    fetch("/recordingStart");
  }
  isDisinfectionOn = !isDisinfectionOn;
}

function startBlink() {
  for (let i = 0; i < names.length; i++) {
    if (document.title == names[i]) {
      // console.log("/light" + names[i]);
      fetch("/light" + names[i]);
    }
  }
}

function startColor() {
  for (let i = 0; i < names.length; i++) {
    if (document.title == names[i]) {
      // console.log("/light" + names[i]);
      fetch("/color" + names[i]);
    }
  }
}
