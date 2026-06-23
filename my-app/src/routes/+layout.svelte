<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { initFlowbite } from 'flowbite';
	import '../app.css';

	let { children } = $props();

	afterNavigate(() => {
		initFlowbite();
	});
</script>

<svelte:head>
	<link rel="icon" href="/img/favicon.svg" />
</svelte:head>

<Navbar />

<main>
	{@render children()}
</main>

<Footer />
