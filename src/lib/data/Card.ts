type RainbowColor = "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet"
export const darkColors = ["red", "green", "indigo", "blue"]

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