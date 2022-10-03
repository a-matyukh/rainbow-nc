<Card />
<p>
    <button on:click={() => game.showRandomCard()}>Show next card</button>
</p>

<style>
:global(body) {
    margin: 0;
    display: grid;
    place-content: center;
    place-items: center;
    height: 100vh;
}
</style>
<script>
import { game } from "$lib/data"
import Card from "$lib/ui/Card.svelte"
</script>