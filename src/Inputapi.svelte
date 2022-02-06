<script>

    let value = ''

    const handleInput = (event)=>{value = event.target.value}

    $: if(value < 2){
        fetch(`http://www.omdbapi.com/?s=${value}&apikey=[yourkey]&`)
        .then(res => res.json())
        .then(apiResponse => {console.log(apiResponse);})
    }

</script>

<main>
    <input value={value} on:input={handleInput}>
</main>