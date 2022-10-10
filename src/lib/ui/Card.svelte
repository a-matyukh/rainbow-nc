<div
    style="
        width: {$card.size.width}px;
        height: {$card.size.height}px;
        left: {$card.position.x}px;
        top: {$card.position.y}px;
        background-color: {$card.bg};
    "
    class:isRandomCardPosition = {$isStart&&$isRandomCardPosition}
    class:whiteFont={darkColors.includes($card.bg)}>
    {$card.say}
</div>

<style>
div {
    position: static;
    display: inline-grid;
    place-content: center;
    font-size: 36px;
}
.isRandomCardPosition {
    position: fixed;
}
.whiteFont {
    color: white;
}
</style>
<script>
import { game } from "$lib/data"
import { darkColors } from "$lib/data/Card"
let { card, isRandomCardPosition, isStart } = game
</script>