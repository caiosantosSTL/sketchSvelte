//import App from './App.svelte';
import App from './Pagex.svelte';

const app = new App({ // component
	target: document.body,
	props: { //props
		name: 'User'
	}
});



export default app;