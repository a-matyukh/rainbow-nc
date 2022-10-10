import { get, writable } from "svelte/store"
import { Card, type Position } from "./Card"
import { SR } from "./SR"

class Game {

    screen = {
        width: 0,
        height: 0
    }
    sr = new SR()

    card = writable(<Card>new Card({x: 100, y: 100}))
    timer: undefined | string | number | NodeJS.Timer = undefined

    tick: number = 2000
    isRandomCardPosition = writable(<boolean>false)
    isCheck = false
    points = writable(<number>0)

    isStart = writable(<boolean>false)
    
    init(width: number, height: number) {
        this.screen.width = width
        this.screen.height = height
        this.sr.init()
    }
    toggle() {
        if (!get(this.isStart)) {
            this.timer = setInterval(() => this.gameplay(), this.tick)
            this.isStart.set(true)
            if (this.isCheck) this.sr.instance.start()
        } else {
            clearInterval(this.timer)
            this.isStart.set(false)
            this.sr.instance.stop()
        }
    }
    gameplay() {
        this.isCheck ? this.check() : this.showRandomCard()
    }
    check() {
        console.log(`Need say: ${get(this.card).say}`)
        console.log(`Speech recognizer hear: ${this.sr.hearedWords}`)
        if (this.sr.hearedWords.includes(get(this.card).say)) {
            this.points.update(v => v += 1)
            this.sr.hearedWords = []
            this.showRandomCard()    
        } else {
            this.points.set(0)
            this.toggle()
        }
    }
    showRandomCard() {
        let position: Position = {x: 100, y: 100}
        if (get(this.isRandomCardPosition)) {
            position = this.generateCardRandomPosition()
        }
        this.card.set(new Card(position))
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