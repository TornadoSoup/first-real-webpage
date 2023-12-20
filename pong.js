// Pong Game
const pongContainer = document.getElementById('gameContainer');
const pong = document.getElementById('pong');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const ball = document.getElementById('ball');

let ballX = 190;
let ballY = 90;
let ballSpeedX = 5;
let ballSpeedY = 5;
let leftPaddleY = 60;
let rightPaddleY = 60;

function movePaddles() {
  document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowUp' && rightPaddleY > 0) {
      rightPaddleY -= 10;
    } else if (event.code === 'ArrowDown' && rightPaddleY < pong.clientHeight - rightPaddle.clientHeight) {
      rightPaddleY += 10;
    }
  });

  if (leftPaddleY < ballY - leftPaddle.clientHeight / 2) {
    leftPaddleY += 2;
  } else if (leftPaddleY > ballY - leftPaddle.clientHeight / 2) {
    leftPaddleY -= 2;
  }
}

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Bounce off the top and bottom
  if (ballY < 0 || ballY > pong.clientHeight - ball.clientHeight) {
    ballSpeedY = -ballSpeedY;
  }

  // Bounce off the paddles
  if (
    (ballX < leftPaddle.clientWidth && ballY > leftPaddleY && ballY < leftPaddleY + leftPaddle.clientHeight) ||
    (ballX > pong.clientWidth - rightPaddle.clientWidth && ballY > rightPaddleY && ballY < rightPaddleY + rightPaddle.clientHeight)
  ) {
    ballSpeedX = -ballSpeedX;
  }

  // Check for scoring
  if (ballX < 0 || ballX > pong.clientWidth) {
    resetBall();
  }
}

function resetBall() {
  ballX = pong.clientWidth / 2;
  ballY = pong.clientHeight / 2;
  ballSpeedX = 5;
  ballSpeedY = 5;
}

function updateGame() {
  movePaddles();
  moveBall();

  // Update paddle positions
  leftPaddle.style.top = leftPaddleY + 'px';
  rightPaddle.style.top = rightPaddleY + 'px';

  // Update ball position
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  requestAnimationFrame(updateGame);
}

resetBall(); // Initialize the ball position

// Start the game loop
updateGame();
