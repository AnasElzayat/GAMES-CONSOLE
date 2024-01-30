//define html elements
const board = document.getElementById("game-board");
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');
// define game variables
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let highScore = 0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

//draw game map,snake,food
function draw() {
    board.innerHTML = '';
    drawSnake();
    dawFood();
    updateScore();
}

//draw the snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = creatGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });

}

// creating a snake or food
function creatGameElement(tag, cName) {
    const element = document.createElement(tag);
    element.className = cName;
    return element;
}

// set the position of the snake or the food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//test draw function
// draw();

// this is draw food function
function dawFood() {
    if (gameStarted) {
        const foodElement = creatGameElement('div', 'food');
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }

}

// generating food
function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

//moving the snake
function move() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }
    snake.unshift(head);
    // snake.pop();
    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        increaseSpeed();
        clearInterval(gameInterval); //clear past interval 
        gameInterval = setInterval(() => {
            move();
            checkCollision();
            draw();

        },gameSpeedDelay);
    } else {
        snake.pop();
    }
}

// //test moving
// setInterval(() => {
//     move(); //move first
//     draw(); //draw again
// },200);

// start game fuction
function startGame() {
    gameStarted = true; // keeping track of the running of the game
    instructionText.style.display = 'none';
    logo.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}

// key press event listener
function handleKeyPress(event) {
    if (
        (!gameStarted && event.code === 'Space') ||
        (!gameStarted && event.key === ' ')
    ) {
        startGame();
    } else {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
            
        }
    }
}

// keydown listener
document.addEventListener('keydown', handleKeyPress);

function increaseSpeed() {
    if (gameSpeedDelay > 150) {
        gameSpeedDelay -= 5;
    } else if (gameSpeedDelay > 100) {
        gameSpeedDelay -= 3;
    } else if (gameSpeedDelay > 50) {
        gameSpeedDelay -= 2;
    }else if (gameSpeedDelay > 25) {
        gameSpeedDelay -= 1;
    }
}

// collision treatment
function checkCollision() {
    const head = snake[0];
    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        resetGame();
    }

    for (let i = 1; i < snake.length; i++){
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
        }
    }
}

// play again
function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{ x: 10, y: 10 }];
    food = generateFood();
    direction = 'right';
    gameSpeedDelay = 200;
    updateScore();
}

// update game scores
function updateScore() {
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart(3, '0');
}

// stop the game
function stopGame() {
    clearInterval(gameInterval);
    gameStarted = false;
    instructionText.style.display = 'block';
    logo.style.display = 'block';
    alert("game over press space to play again");
}

function updateHighScore() {
    const currentScore = snake.length - 1;
    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreText.textContent = highScore.toString().padStart(3, '0');
        highScoreText.style.display = 'block';
    }

}

// prevent arrows from scrolling page
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
    }
});