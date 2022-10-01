/**
 * MVP feature app-map:
 * - show random static card
 * - show with interval time
 * - custom interval time
 * - isCardRandomPosition
 * - points and SR
 * - control game (Game.stop)
 * - clap
 */

//////////////////////////////

type RainbowColor = "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet"

class Card {
    say: string
    bg: string
    constructor() {
        this.say = this.generateRainbowColor()
        this.bg = this.generateRainbowColor()
    }
    generateRandomInteger(min: number, max: number): number {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(rand)
    }
    generateRainbowColor(): RainbowColor {
        const rainbowColors: RainbowColor[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
        const colorIndex: number = this.generateRandomInteger(0, 6)
        return rainbowColors[colorIndex]
    }
}
class Game {
    card: Card = new Card()
    showRandomCard() {
        this.card = new Card()
        console.log(`%c${this.card.say}`, `background-color: ${this.card.bg};`)
    }
}

//////////////////////////////

let game = new Game()
game.showRandomCard()