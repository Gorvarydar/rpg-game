// import './index.scss';
import SenseiWalk from './assets/Male-3-Walk.png';
import terrainAtlas from './assets/terrain.png';
import worldCfg from './configs/world.json';
import sprites from './configs/sprites';
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
import { io } from 'socket.io-client';
import ClientGame from './client/СlientGame';
import ClientPlayer from './client/ClientPlayer';
import './index.scss';

import { getTime } from './common/util';

window.addEventListener('load', () => {
  const socket = io('https://jsprochat.herokuapp.com');
  const startGame = document.querySelector('.start-game');
  const inputName = document.getElementById('name');
  const form = document.getElementById('nameForm');

  const chatClass = document.querySelector('.chat-wrap');
  const inputChat = document.getElementById('input');
  const formChat = document.getElementById('form');
  const message = document.querySelector('.message');

  const eventSubmit = (e) => {
    e.preventDefault();

    if (inputName.value) {
      ClientGame.init({
        tagId: 'game',
        playerName: inputName.value,
      });
      socket.emit('start', inputName.value);
      chatClass.style.display = 'block';

      form.removeEventListener('submit', eventSubmit);
      startGame.remove();
    }
  };
  form.addEventListener('submit', eventSubmit);

  formChat.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputChat.value) {
      console.dir(inputChat.value);
      socket.emit('chat message', inputChat.value);

      inputChat.value = '';
    }
  });

  socket.on('chat connection', (data) => {
    message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  socket.on('chat disconnect', (data) => {
    message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  socket.on('chat online', (data) => {
    console.log('data', data);
    console.log(data.names);
    message.insertAdjacentHTML(
      'beforeend',
      `<p><strong>${getTime(data.time)}</strong> - 
         <strong> users online: ${data.online} </strong>   `,
    );
  });

  socket.on('chat message', (data) => {
    console.log(socket.id);
    console.log();
    if (socket.id === data.id) {
      message.insertAdjacentHTML(
        'beforeend',
        `<p><strong>${getTime(data.time)} - </strong> <mark>${data.msg}</mark></sup></p>`,
      );
    } else {
      message.insertAdjacentHTML(
        'beforeend',
        `<p><strong>${getTime(data.time)} - </strong><a style="color: #0633ff">${data.msg}</a></p>`,
      );
    }
  });
});
