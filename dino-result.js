import { Street } from "./js/street.js";
import { DethPoint } from "./js/deth-point.js"
import { Dino } from "./js/dino.js"
import { Score } from "./js/score.js";

const street = new Street(document.querySelector('.street'))
const dino = new Dino(document.querySelector('.dino'))
const score = new Score(document.querySelector(".score span"))


setInterval(() => {
    new DethPoint(dino)
}, 5000)

