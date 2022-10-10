{#if !$isStart}
    <p>
        <button on:click={() => game.showRandomCard()}>Show next card</button>
    </p>
{/if}
<Card />
<p>
    <button on:click={() => game.toggle()}>
        {!$isStart ? "Show with interval time" : "Stop game"}
    </button>
</p>
{#if !$isStart}
    <p>
        Interval tick (ms): <input type="number" bind:value={game.tick} min="100" max="10000">
    </p>
{/if}

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