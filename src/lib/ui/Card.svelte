<div style="background-color: {$card.bg};" class:whiteFont={darkColors.includes($card.bg)}>
    {$card.say}
</div>

<style>
.whiteFont {
    color: white;
}
</style>
<script>
import { game } from "$lib/data"
import { darkColors } from "$lib/data/Card"
let { card } = game
</script>