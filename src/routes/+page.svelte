<Card />
<p>
    {#if !$isStart}
        <button on:click={() => game.showRandomCard()}>Show next card</button>
    {/if}
    <button on:click={() => game.toggle()}>
        {!$isStart ? "Show with interval time" : "Stop game"}
    </button>
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
const { isStart } = game
import Card from "$lib/ui/Card.svelte"
</script>