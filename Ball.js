export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
    }
    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }
    set x(value) {
        this.ballElem.style.setProperty("--x", value)
    }
    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }
    set y(value) {
        this.ballElem.style.setProperty("--y", value)
    }
    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = {x: 0.75, y: 0.5}
        while (this.direction.x <= .2 || this.direction <= .9) {
            const heading = randomNumberBetween(0.2 * Math.PI)
            this.direction = { x: Math.cosh(heading), y: Math.sin(heading) }
        }
    }
    update(delta) {
        this.x = 5
        this.y = 15
    }
}
