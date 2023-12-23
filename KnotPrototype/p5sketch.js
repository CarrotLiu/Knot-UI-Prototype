let mic , vol, h;
let logoEN, logoCN;
let knot, noKnot, halfKnot;
let ifLgnPage = false, 
    ifAcvPage = false,
    ifRcdPage = false;
    ifVocPage = false;
let acvPageId;
let pgNames = [
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
function preload(){
  logoEN = loadImage("https://github.com/CarrotLiu/Knot-UI-Prototype/blob/main/KnotPrototype/assets/nbgLogoEN.svg");
  logoCN = loadImage("./Knot-UI-Prototype/KnotPrototype/assets/logoCN.svg");
  knot = loadImage("./Knot-UI-Prototype/KnotPrototype/assets/knoted_2.svg");
  noKnot = loadImage("./Knot-UI-Prototype/KnotPrototype/assets/noKnot_2.svg");
  halfKnot = loadImage("./Knot-UI-Prototype/KnotPrototype/assets/halfknot_2.svg");

}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("cnv-container");
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  for(let i = 0; i < pgNames.length; i ++){
    if(document.title == "Knot Voice"){
      ifLgnPage = true;
      ifAcvPage = false;
      ifRcdPage = false;
      ifVocPage = false;
    } else if(document.title == pgNames[i]){
      ifLgnPage = false;
      ifAcvPage = true;
      ifRcdPage = false;
      ifVocPage = false;
    } else if(document.title == "record"){
      ifLgnPage = false;
      ifAcvPage = false;
      ifRcdPage = true;
      ifVocPage = false;
    } else if (document.title == "voice"){
      ifLgnPage = false;
      ifAcvPage = false;
      ifRcdPage = false;
      ifVocPage = true;
    }
  }
  if(ifRcdPage){
    mic = new p5.AudioIn();
    mic.start();
  }
  
  
}

function draw() {
  imageMode(CENTER);
  if(ifLgnPage){
    background("#FAF8ED");
    push();
    translate(windowWidth / 2 + 10, 135);
    scale(0.2);
    image(logoEN,0, 0);
    pop();

  } else if (ifAcvPage){
    background("#FAF8ED");
    // push();
    // translate(150, 150);
    // scale(0.3);
    // image(logoCN, 0, 0);
    // pop();
    push();
    noStroke();
    fill("#F9B572");
    circle(-280, height / 2, 900);
    pop();
  } else if (ifRcdPage){
    vol = mic.getLevel();
    h = map(vol, 0, 1, height, 0);
    push();
    
    pop();
  } else if (ifVocPage){

  }
  
}

