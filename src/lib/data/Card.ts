type RainbowColor = "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet"
export const darkColors = ["red", "green", "indigo", "blue"]
export interface Position {
    x: number
    y: number
}
interface Size {
    width: number
    height: number
}

export class Card {
    say: string
    bg: string

    position: Position = {
        x: 100,
        y: 100
    }
    size: Size = {
        width: 200,
        height: 100
    }

    constructor(position: Position) {
        this.say = this.generateRainbowColor()
        this.bg = this.generateRainbowColor()
        this.position = position
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