{#if !$isStart}
    <h3>Say the text on this card:</h3>
{/if}
<Card />
<div>
    {#if !$isStart}
        <p>
            <button on:click={() => game.showRandomCard()}>Show next card</button>
        </p>
    {/if}
    <p class:footer={$isStart}>
        <button on:click={() => game.toggle()}>
            {!$isStart ? "Show with interval time" : "Stop game"}
        </button>
    </p>
</div>
{#if !$isStart}
    <p>Interval tick (ms): <input type="number" bind:value={game.tick} min="100" max="10000"></p>
    <p><label for="isRandomCardPosition">Random card position: <input type="checkbox" id="isRandomCardPosition" bind:checked={$isRandomCardPosition}></label></p>
    <p><label for="isCheck">Check answers: <input type="checkbox" id="isCheck" bind:checked={game.isCheck}></label></p>
{:else}
    {#if game.isCheck}
        <p>Points: {$points}</p>
    {/if}
{/if}

<style>
div {
    display: flex;
    gap: 10px;
}
.footer {
    position: fixed;
    bottom: 10px;
}
</style>
<script>
import { onMount } from "svelte"
import { game } from "$lib/data"
let { isStart, isRandomCardPosition, points } = game
import Card from "$lib/ui/Card.svelte"

onMount(() => {
    const {innerWidth, innerHeight} = window
    game.init(innerWidth, innerHeight)
})
</script>