import { writable } from "svelte/store"

type RainbowColor = "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet"

export class Card {
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
    card = writable(<Card>new Card())
    showRandomCard() {
        this.card.set(new Card())
    }
}

let game = new Game()

export { game }