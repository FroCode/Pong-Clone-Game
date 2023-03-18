export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
    }
    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }
    set x(value) {
        this.ballElem(this.ballElem).setProperty("--x", value)
    }
    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }
    set y(value) {
        this.ballElem(this.ballElem).setProperty("--y", value)
    }
    update(delta) {
        this.x = 5
        this.y = 15
    }
}
