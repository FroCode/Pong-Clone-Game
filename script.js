// Update Loop
import Ball from './Ball.js'
const ball = new Ball(document.getElementById("ball"))
let last_time
function update(time) {
    if (last_time != null ) {
        const delta = time - last_time
        // Update Code
        ball.update(delta)

    }
    last_time = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)