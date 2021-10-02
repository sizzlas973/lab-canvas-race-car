let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 1000, 1600) 
  ctx.fillStyle = 'grey';
  ctx.fillRect(100, 0, 800, 1600)
  ctx.fillStyle = 'white';
  ctx.fillRect(125, 0, 25, 1600 )
  ctx.fillStyle = 'white';
  ctx.fillRect(850, 0, 25, 1600 )
  
  ctx.fillStyle = 'white';
  ctx.fillRect(475, 0, 15,50)
  ctx.fillStyle = 'white';
  ctx.fillRect(475, 100, 15,50)
  ctx.fillStyle = 'white';
  ctx.fillRect(475, 200, 15,50)
  //function dessin() {
  //  for(i =0; i< 1600; i++) {
  //    ctx.fillRect(475, i, 15, 50)  
  //  }
  //}
  //  setInterval(function() { dessin(); }, 4000);


  //

  // TODO

  //
  // Iteration 2: car drawing
  //

  // TODO

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  // TODO

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
