import { get, writable } from "svelte/store"
import { Card } from "./Card"

class Game {
    card = writable(<Card>new Card())
    timer: undefined | string | number | NodeJS.Timer = undefined
    isStart = writable(<boolean>false)
    showRandomCard() {
        this.card.set(new Card())
    }
    toggle() {
        if (!get(this.isStart)) {
            this.timer = setInterval(() => this.showRandomCard(), 2000)
            this.isStart.set(true)
        } else {
            clearInterval(this.timer)
            this.isStart.set(false)
        }
    }
}

let game = new Game()

export { game }