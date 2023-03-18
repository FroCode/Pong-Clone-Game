export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
    }
    get x() {
        return getComputedStyle(this.ballElem).getPropertyValue("--x")
    }
    set x(value) {
        this.ballElem(this.ballElem).setProperty("--x", value)
    }
    update(delta) {
        this.x = 5
    }
}
