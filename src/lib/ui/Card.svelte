<div style="background-color: {$card.bg};" class:whiteFont={darkColors.includes($card.bg)}>
    {$card.say}
</div>

<style>
div {
    display: inline-grid;
    place-content: center;
    width: 300px;
    height: 100px;
    font-size: 36px;
}
.whiteFont {
    color: white;
}
</style>
<script>
import { game } from "$lib/data"
import { darkColors } from "$lib/data/Card"
let { card } = game
</script>