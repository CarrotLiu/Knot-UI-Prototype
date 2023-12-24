let mic , vol, h;
let logoEN, logoCN;
let knot, noKnot, halfKnot;
let ifLgnPage = false, 
    ifAcvPage = false,
    ifRcdPage = false;
    ifVocPage = false;
let acvPageId;
let strStarth = 250;
let strIntv;

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
  logoEN = loadImage("./assets/nbgLogoEN.svg");
  logoCN = loadImage("./assets/logoCN.svg");
  knot = loadImage("./assets/knoted_2.svg");
  noKnot = loadImage("./assets/noKnot_2.svg");
  halfKnot = loadImage("./assets/halfknot_2.svg");

}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("cnv-container");
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  strIntv = windowWidth * 0.1;
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
  if(ifRcdPage || ifVocPage){
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
    scale(0.15);
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
  } else if (ifRcdPage || ifVocPage){
    background("#FAF8ED");
    vol = mic.getLevel();
    h = map(vol, 0, 1, 0, 600);
    // console.log(h);
    push();
    noFill();
    stroke("#748E63");
    strokeWeight(10);
    beginShape();
    vertex(0, strStarth);
    bezierVertex(strIntv, strStarth, strIntv * 1.1, strStarth - h, strIntv * 1.5, strStarth - h);
    bezierVertex(strIntv * 1.8, strStarth - h, strIntv * 2.1, strStarth + h * 0.8, strIntv * 2.3, strStarth + h * 0.8);
    bezierVertex(strIntv * 2.5, strStarth + h * 0.8, strIntv * 2.8, strStarth - h * 0.3, strIntv * 3, strStarth - h * 0.3);
    bezierVertex(strIntv * 3.2, strStarth - h * 0.3, strIntv * 3.6, strStarth + h * 0.9, strIntv * 4, strStarth + h * 0.9);
    bezierVertex(strIntv * 4.3, strStarth + h * 0.9, strIntv * 4.6, strStarth - h * 1.2, strIntv * 5, strStarth - h * 1.2);
    bezierVertex(strIntv * 5.2, strStarth - h * 1.2, strIntv * 5.6, strStarth + h * 0.1, strIntv * 6, strStarth + h * 0.1);
    bezierVertex(strIntv * 6.3, strStarth + h * 0.1, strIntv * 6.6, strStarth - h * 0.3, strIntv * 6.9, strStarth - h * 0.3);
    bezierVertex(strIntv * 7.2, strStarth - h * 0.3, strIntv * 7.6, strStarth + h * 0.9, strIntv * 7.9, strStarth + h * 0.9);
    bezierVertex(strIntv * 8.2, strStarth + h * 0.9, strIntv * 8.6, strStarth - h * 0.1, strIntv * 9, strStarth - h * 0.1);
    bezierVertex(strIntv * 9.3, strStarth - h * 0.1, strIntv * 9.8, strStarth + h, strIntv * 10, strStarth);
    endShape();
    pop();
  }
  
}

