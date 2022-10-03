import { writable } from "svelte/store"
import { Card } from "./Card"

class Game {
    card = writable(<Card>new Card())
    showRandomCard() {
        this.card.set(new Card())
    }
}

let game = new Game()

export { game }