export class DethPoint {
    constructor(dino) {
        this.dino = dino
        this.container = document.querySelector('.container')
        this.dethElement = document.createElement('div')
        this.dethElement.className = "deth"
        this.container.prepend(this.dethElement)
        this.dethElement.style.right = `${Math.round(Math.random() * 300 + this.dethElement.offsetWidth) * -1}px`
        this.dethInterval = setInterval(() => {
            this.dethElement.style.right = `${this.getNumberRight() + 1}px`
            if (this.getDistanceWithDino() < 1 && this.getDistanceWithDino() > -10) {
                this.dino.dinoElement.dispatchEvent(new CustomEvent("denger-zone", {
                    detail: this
                }))
            }
            if (this.getNumberRight() === 300) {
                this.dethElement.remove()
                this.clearIntervalDeth()
                delete this
            }
        }, 15);

    }

    getNumberRight() {
        return Number(this.dethElement.style.right.replace(/px/, ''))
    }

    getDistanceWithDino() {
        return this.dethElement.getBoundingClientRect().left + window.pageXOffset + this.dethElement.offsetWidth - 624
    }

    clearIntervalDeth() {
        clearInterval(this.dethInterval)
    }
}