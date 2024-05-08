const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');

// Define colors
const colors = ['#FFBE0B', '#FB5607', '#0000ff', '#FF006E', '#8338EC', '#3A86FF'];

// Function to draw a random shape
function drawShape(x, y, size, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size / 2, y + size * Math.sqrt(3) / 2);
    ctx.closePath();
    ctx.fill();
}

// Function to animate
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw random shapes at random positions
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 100 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        drawShape(x, y, size, color);
    }
}

// Start animation with setInterval to slow down
const animationInterval = setInterval(animate, 100); // Adjust the interval as needed (e.g., 100 milliseconds)
