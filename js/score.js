export class Score {
    constructor(htmlTeg) {
        this.htmlTeg = htmlTeg
        this.score = 0
        setInterval(() => {
            this.score++
            this.htmlTeg.innerHTML = this.score  
        }, 50);
    }
}