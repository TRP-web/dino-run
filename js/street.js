export class Street {
    constructor(street) {
        this.street = street
        setInterval(() => {
            this.street.style.left = `${this.getNumberLeft() - 1}px`
            if (this.getNumberLeft() === -300) {
                this.street.style.left = "0px"
            }
        }, 15)
    }

    getNumberLeft() {
        return Number(this.street.style.left.replace(/px/, ""))
    }

    getRightoverflou
}