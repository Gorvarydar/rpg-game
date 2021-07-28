// import './index.scss';
// import SenseiWalk from './assets/Male-3-Walk.png';
// import terrainAtlas from './assets/terrain.png';
// import worldCfg from './configs/world.json';
// import sprites from "./configs/sprites";
//
//
// const spriteW = 48;
// const spriteH = 48;
// const shots = 3;
//
//
// function drawArea() {
//   const canvas = document.getElementById('area');
//   const ctx = canvas.getContext('2d');
//   const terrain = document.createElement('img');
//   terrain.src = terrainAtlas;
//
//   terrain.addEventListener('load', () => {
//     const { map } = worldCfg;
//     map.forEach((cfgRow, y) => {
//       cfgRow.forEach((cfgCell, x) => {
//           const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//           ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//         }
//       )
//     })
//   })
// }
//
//   function drawHero() {
//     const canvas = document.getElementById('element');
//     const ctx = canvas.getContext('2d');
//
//     let y = 0;
//     let cycle = 0;
//     let downPressed = false;
//     let upPressed = false;
//     let leftPressed = false;
//     let rightPressed = false;
//     let pY = (game.width - spriteW) / 2;
//     let pX = (game.height - spriteH) / 2;
//
//     function keyDownHandler(e) {
//       if (e.key === 'Down' || e.key === 'ArrowDown') {
//         downPressed = true;
//       } else if (e.key === 'Up' || e.key === 'ArrowUp') {
//         upPressed = true;
//       } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//         leftPressed = true;
//       } else if (e.key === 'Right' || e.key === 'ArrowRight') {
//         rightPressed = true;
//       }
//     }
//
//     function keyUpHandler(e) {
//       if (e.key === 'Down' || e.key === 'ArrowDown') {
//         downPressed = false;
//       } else if (e.key === 'Up' || e.key === 'ArrowUp') {
//         upPressed = false;
//       } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//         leftPressed = false;
//       } else if (e.key === 'Right' || e.key === 'ArrowRight') {
//         rightPressed = false;
//       }
//     }
//
//     document.addEventListener('keydown', keyDownHandler);
//     document.addEventListener('keyup', keyUpHandler);
//
//     const img = document.createElement('img');
//     img.src = SenseiWalk;
//
//     function walk (timestamp) {
//       if (downPressed && pY < (game.height - spriteH)) {
//         pY += 10;
//         y = 0;
//         cycle = (cycle + 1) % shots;
//         console.log(cycle)
//       } else if (upPressed && pY > 0) {
//         pY -= 10;
//         y = 144;
//         cycle = (cycle + 1) % shots;
//       } else if (leftPressed && pX > 0) {
//         pX -= 10;
//         y = 48;
//         cycle = (cycle + 1) % shots;
//       } else if (rightPressed && pX < (game.width - spriteW)) {
//         pX += 10;
//         y = 96;
//         cycle = (cycle + 1) % shots;
//       }
//       ctx.clearRect(0, 0, 600, 600);
//       ctx.drawImage(img, cycle * spriteW, y, spriteW, spriteH, pX, pY, 48, 48);
//
//       window.requestAnimationFrame(walk);
//     }
//
//     img.addEventListener('load', () => {
//      window.requestAnimationFrame(walk);
//     });
//   }
//
//
// drawHero();
// drawArea();
//
//
//
//
//
import ClientGame from './client/СlientGame';
import './index.scss';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});
