{#if !$isStart}
    <p>
        <button on:click={() => game.showRandomCard()}>Show next card</button>
    </p>
{/if}
<Card />
<p class:footer={$isStart}>
    <button on:click={() => game.toggle()}>
        {!$isStart ? "Show with interval time" : "Stop game"}
    </button>
</p>
{#if !$isStart}
    <p>Interval tick (ms): <input type="number" bind:value={game.tick} min="100" max="10000"></p>
    <p>Random card position: <input type="checkbox" bind:checked={$isRandomCardPosition}></p>
{/if}

<style>
:global(body) {
    margin: 0;
    display: grid;
    place-content: center;
    place-items: center;
    height: 100vh;
}
.footer {
    position: fixed;
    bottom: 10px;
}
</style>
<script>
import { onMount } from "svelte"
import { game } from "$lib/data"
const { isStart, isRandomCardPosition } = game
import Card from "$lib/ui/Card.svelte"

onMount(() => {
    const {innerWidth, innerHeight} = window
    game.init(innerWidth, innerHeight)
})
</script>