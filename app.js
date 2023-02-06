const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
  setInterval(update, 30);
});



const player = {
  x: canvas.width / 2,
  y: canvas.height - 20,
  width: 20,
  height: 20,
  color: "#fff"
};

const blocks = [];

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    ctx.fillStyle = blocks[i].color;
    ctx.fillRect(blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);
  }
}

function update() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player and blocks
  drawPlayer();
  drawBlocks();

  // Move the blocks
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].y += 1;
  }
}

setInterval(update, 30);
