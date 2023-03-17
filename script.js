// Update Loop
import Ball from './Ball.js'
const ball = new Ball(document.getElementById("ball"))
function update(time) {

}
setInterval(update, 10)
window.requestAnimationFrame(update)