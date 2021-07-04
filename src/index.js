import './index.scss';
import SenseiWalk from  './assets/Male-3-Walk.png';

function draw() {
  const canvas = document.getElementById('area');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "coral"
  ctx.fillRect(10, 10, 650 ,650);
  ctx.strokeStyle = "cyan";
  ctx.fillRect(10, 10, 100 ,150);
  for (var i = 1; i <= 100; i++) {
    ctx.moveTo(0, 15*i);
    ctx.lineTo(610, 15*i);
  }
  ctx.stroke();

}

function draw1() {
  const canvas = document.getElementById('element');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle= 'yellow'
  ctx.globalAlpha=0.6
  ctx.fillRect(15, 350, 200 ,250);

  ctx.fillStyle= 'red'
  ctx.globalAlpha=0.6
  ctx.fillRect(400, 20, 200 ,250);

  ctx.globalAlpha= 1;
  ctx.fillStyle= 'lime'
  ctx.shadowBlur=20;
  ctx.shadowColor="blue";
  ctx.fillRect(30, 30, 30 ,15);
for(let i=1; i<40;i++) {
  ctx.fillRect(15 * i, 15 * i, 100,100);
}
  ctx.fillStyle= 'skyblue'
  for(let i=1; i<40;i++) {
    ctx.fillRect(15 * i, 15 * i, 30, 15);
  }



}

draw1()
draw();


const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.strokeRect(10, 10, 200, 150)
ctx.strokeStyle = 'red';
ctx.strokeRect(10, 10, 200, 150)
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 700, 700);
ctx.fillStyle = 'blue';
const spriteW = 48;
const  spriteH = 48;
const shots = 3;
let y = 0;
let cycle = 0;
let downPressed = false;
let upPressed  = false;
let leftPressed = false;
let rightPressed = false;
let pY = 276;
let pX = 276;

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown' ) {
    downPressed = true;
  }
  else  if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = true;
  }
  else if(e.key === 'Left' || e.key === 'ArrowLeft' ) {
    leftPressed = true;
  }
  else  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key === 'Down' || e.key === 'ArrowDown' ) {
    downPressed = false;
  }
  else  if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = false;
  }
  else if(e.key === 'Left' || e.key === 'ArrowLeft' ) {
    leftPressed = false;
  }
  else  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  }
}

document.addEventListener('keydown',keyDownHandler);
document.addEventListener('keyup',keyUpHandler);

const img = document.createElement('img');
img.src = SenseiWalk;


img.addEventListener('load', ()=>{
  setInterval(() => {
    if (downPressed && pY < 550) {
      pY += 10;
      y = 0
      cycle = (cycle + 1)%shots;
    }
    else if(upPressed &&  0 < pY) {
      pY -= 10;
      y= 144;
      cycle = (cycle + 2)%shots;

    }
    else if(leftPressed &&  0 < pX) {
      pX -= 10;
      y= 48
      cycle = (cycle + 1)%shots;
    }
    else if(rightPressed && pX < 548) {
      pX += 10;
      y= 96
      cycle = (cycle + 1)%shots;
    }

    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, y, spriteW, spriteH, pX, pY, 48, 48);
  },120)

})


