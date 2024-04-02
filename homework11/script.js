const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Background Music
const audio = new Audio('song.mp3');
audio.loop = true;
audio.play();

// Object Class
class GameObject {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = Math.random() * 2 - 1; // Random speed for autonomous movement
        this.dy = Math.random() * 2 - 1; // Random speed for autonomous movement
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        // Move object autonomously
        this.x += this.dx;
        this.y += this.dy;

        // Check collision with canvas edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    }

    reset() {
        // Reset object properties
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 50 + 20;
        this.dx = Math.random() * 2 - 1;
        this.dy = Math.random() * 2 - 1;
    }
}

// User-controlled Object
const userObject = new GameObject(100, 100, 30, 'rgb(173, 210, 194');

// Autonomous Object
const autoObject = new GameObject(500, 400, 40, 'rgb(32, 163, 158)');


// Update function
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Check collision between objects
    const dx = userObject.x - autoObject.x;
    const dy = userObject.y - autoObject.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < userObject.radius + autoObject.radius) {
        ctx.fillStyle = 'lightgray'; // Change background color on collision
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Change object size on collision
        userObject.radius += 5;
        autoObject.radius += 5;
    } else {
        ctx.fillStyle = 'white'; // Reset background color if no collision
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    userObject.draw();
    autoObject.draw();
    userObject.update();
    autoObject.update();

    requestAnimationFrame(update);
}

// Event listener for user control
canvas.addEventListener('mousemove', (e) => {
    userObject.x = e.clientX;
    userObject.y = e.clientY;
});

// Reset button event listener
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    userObject.reset();
    autoObject.reset();
});

update();
