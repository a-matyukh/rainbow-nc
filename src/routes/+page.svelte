<Card />
<button on:click={() => game.showRandomCard()}>Show</button>

<script>
import { game } from "$lib/data"
import Card from "$lib/ui/Card.svelte"
</script>