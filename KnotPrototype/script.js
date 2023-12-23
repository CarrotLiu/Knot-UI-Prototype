let source = new EventSource("/events");
let isRecordingOn = false;
let isLightingOn = false;
let links = [];
let passwords = [
  "20011107", // lj
  "20011104", // lz
  "20010817", // zxq
  "20010823", // lyq
  "20070801", // dou
  "20190927", // julie
  "20190226", // tina
  "20201121", // meilin
  "20200821", // wuwei
  "20201129", // moon
  "20210622", // pan
  "20231219", // marcela
  "20230303", //pp
  "20231218", //ziyi
  "20231231", //sunny
  "20231030", //nadine
  "20230501", //lora
  "20230624", // helen
  "20230617", //jt
  "20230929" //shuan
];
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

function friendLogin() {
  let inputName = document.getElementById('fname').value;
  let inputPassword = document.getElementById('psw').value;
  let isUserFound = false;
  for (let i = 0; i < names.length; i++) {
    if (inputName == names[i]) {
      isUserFound = true;
      if (inputPassword == passwords[i]) {
        window.location.href = "/" + names[i] + ".html";
      } else {
        alert("Wrong Password!");
      }
    }
  }
  if (!isUserFound) {
    alert("Wrong User Name!");
  }
}
