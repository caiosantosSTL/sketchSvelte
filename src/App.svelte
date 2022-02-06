<script>
	export let name; // this is props
	function actionChange(params) {
		name = 'Change'
	}

	export let cont = 0
	function contadorUp(){
		
		cont++
	}
	function contadorDown(){
		
		cont--
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={actionChange}>chage name</button>

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

	h1 {
		color: #e5ff00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: bold;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>