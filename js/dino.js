export class Dino {
    constructor(dinoElement) {
        this.dinoElement = dinoElement
        document.addEventListener('keydown', (event) => {
            if (event.key === " " && !this.dinoElement.classList.contains('dino-jump')) {
                this.dinoElement.classList.add('dino-jump')
                setTimeout(() => {
                    this.dinoElement.classList.remove("dino-jump")
                }, 1300)
            }
        })
        this.dinoElement.addEventListener("denger-zone", (event) => {
            let topDethPoint = event.detail.dethElement.getBoundingClientRect().top + window.pageXOffset + event.detail.dethElement.offsetHeight
            let topDino = this.dinoElement.getBoundingClientRect().top + window.pageXOffset + this.dinoElement.offsetHeight
            if (Math.abs(topDino - topDethPoint)  > 22) {
            } else {
                window.location.reload()
            }
        })
    }
}