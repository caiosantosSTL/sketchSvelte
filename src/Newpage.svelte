<script>
	export let cont = 0
	function contadorUp(){
		
		cont++
	}
	function contadorDown(){
		
		cont--
	}
</script>

<main>
	<p>contador <span>{cont}</span></p>
	<button on:click={contadorUp}>go up number</button>
	<button on:click={contadorDown}>go down number</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


</style>