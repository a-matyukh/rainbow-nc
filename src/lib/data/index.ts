import { get, writable } from "svelte/store"
import { Card, type Position } from "./Card"

class Game {

    screen = {
        width: 0,
        height: 0
    }

    card = writable(<Card>new Card({x: 100, y: 100}))
    timer: undefined | string | number | NodeJS.Timer = undefined

    tick: number = 2000
    isRandomCardPosition = writable(<boolean>false)

    isStart = writable(<boolean>false)
    
    init(width: number, height: number) {
        this.screen.width = width
        this.screen.height = height
    }
    showRandomCard() {
        let position: Position = {x: 100, y: 100}
        if (get(this.isRandomCardPosition)) {
            position = this.generateCardRandomPosition()
        }
        this.card.set(new Card(position))
    }
    toggle() {
        if (!get(this.isStart)) {
            this.timer = setInterval(() => this.showRandomCard(), this.tick)
            this.isStart.set(true)
        } else {
            clearInterval(this.timer)
            this.isStart.set(false)
        }
    }
    generateCardRandomPosition() {
        let x = Math.floor(Math.random() * this.screen.width)
        let y = Math.floor(Math.random() * this.screen.height)
        let { width, height } = get(this.card).size
        if (x > this.screen.width - width - 20) x -= width
        if (y > this.screen.height - (height + 50)) y -= (height + 70)
        return {x, y}
    }
}

let game = new Game()

export { game }