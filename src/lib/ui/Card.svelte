<div style="background-color: {$card.bg};" class:whiteFont={darkColors.includes($card.bg)}>
    {$card.say}
</div>

<style>
.whiteFont {
    color: white;
}
</style>
<script>
import { game, darkColors } from "$lib/data"
let { card } = game
</script>