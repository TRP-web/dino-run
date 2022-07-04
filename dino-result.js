class Street {
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

}
class DethPoint {
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
class Dino {
    constructor(dinoElement) {
        this.dinoElement = dinoElement
        document.addEventListener('keydown', (event) => {
            if (event.key === " " && !this.dinoElement.classList.contains('dino-jump')) {
                this.jump()
            }
        })
        document.addEventListener("click", () => {
            if (!this.dinoElement.classList.contains('dino-jump')) {
                this.jump()
            }
        })
        this.dinoElement.addEventListener("denger-zone", (event) => {
            let topDethPoint = event.detail.dethElement.getBoundingClientRect().top + window.pageXOffset + event.detail.dethElement.offsetHeight
            let topDino = this.dinoElement.getBoundingClientRect().top + window.pageXOffset + this.dinoElement.offsetHeight
            if (Math.abs(topDino - topDethPoint) > event.detail.dethElement.offsetHeight) {
            } else {
                window.location.reload()
            }
        })
    }

    jump() {
        this.dinoElement.classList.add('dino-jump')
        setTimeout(() => {
            this.dinoElement.classList.remove("dino-jump")
        }, 1300)
    }
}
class Score {
    constructor(htmlTeg) {
        this.htmlTeg = htmlTeg
        this.score = 0
        setInterval(() => {
            this.score++
            this.htmlTeg.innerHTML = this.score
        }, 50);
    }
}

const street = new Street(document.querySelector('.street'))
const dino = new Dino(document.querySelector('.dino'))
const score = new Score(document.querySelector(".score span"))

setInterval(() => {
    new DethPoint(dino)
}, 5000)