<script>
    let numbers = [1, 2, 3, 4]

    function addNumbers(params) {
        numbers = [...numbers, numbers.length + 1]

    }
    $: sum = numbers.reduce((t, n)=> t + n, 0)
</script>

<main>
    <p>{numbers.join(' + ')} = {sum}</p>
    <button on:click={addNumbers}>add</button>
</main>