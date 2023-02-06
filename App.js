const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Player's starting position
let playerX = canvas.width / 2;
let playerY = canvas.height - 50;

// Block's starting position
let blockX = canvas.width / 2;
let blockY = 0;

// Block's movement speed
let blockSpeed = 5;

// Player's movement speed
let playerSpeed = 10;

// Draw the player and block on the canvas
function draw() {
  // Clear the canvas before redrawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  ctx.fillRect(playerX, playerY, 50, 50);

  // Draw the block
  ctx.fillRect(blockX, blockY, 50, 50);

  // Move the block down the canvas
  blockY += blockSpeed;

  // Check for a collision between the player and block
  if (
    playerX < blockX + 50 &&
    playerX + 50 > blockX &&
    playerY < blockY + 50 &&
    playerY + 50 > blockY
  ) {
    // Stop the game if there is a collision
    alert("Game Over!");
  }

  // Move the player left or right
  document.onkeydown = function(event) {
    if (event.keyCode === 37) {
      // Move left
      playerX -= playerSpeed;
    } else if (event.keyCode === 39) {
      // Move right
      playerX += playerSpeed;
    }
  };

  // Check if the block has reached the bottom of the canvas
  if (blockY + 50 > canvas.height) {
    // Reset the block's position to the top
    blockY = 0;
    blockX = Math.floor(Math.random() * canvas.width);
  }

  // Redraw the player and block
  requestAnimationFrame(draw);
}

// Start the game
draw();
