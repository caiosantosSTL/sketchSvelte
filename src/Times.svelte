<script>
    let count = 0
    $: doubled = count * 2 // dinamic state

    function actionClick(params) {
        count = count + 1
    }
</script>

<main>
    <button on:click={actionClick}>Clicou {count} {count === 1 ? 'vez' : 'vezes'}</button>

    <p>{count} duplicado é {doubled}</p>

</main>