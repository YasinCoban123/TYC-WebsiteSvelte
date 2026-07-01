<script>
	let { data } = $props();

	const COLUMNS = 4;
	let photoColumns = $derived(
		Array.from({ length: COLUMNS }, (_, col) =>
			data.photos.filter((_, i) => i % COLUMNS === col)
		)
	);

	let selectedImage = $state(/** @type {string | null} */ (null));

	$effect(() => {
		document.body.style.overflow = selectedImage ? 'hidden' : 'auto';
	});

	function closeImage() {
		selectedImage = null;
	}

	/** @param {KeyboardEvent} e */
	function handleKeydown(e) {
		if (e.key === 'Escape') closeImage();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<head>
    <title>Photography</title>
</head>

<main class="min-h-screen bg-app p-8 text-app-text">

    <div class="p-10 text-center">
        <p class="mb-3 text-2xl text-app-text font-bold">Fotografie</p>
        <p class="text-body">Naast programmeren is fotografie een van mijn favoriete hobby's. Hieronder vind je een kleine selectie van foto's die ik in mijn vrije tijd heb gemaakt.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each photoColumns as column}
            <div class="grid gap-4">
                {#each column as src}
                    <div>
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                        <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                            {src} alt="" loading="lazy" decoding="async" onclick={() => (selectedImage = src)}>
                    </div>
                {/each}
            </div>
        {/each}
    </div>

    <!-- Modal -->
    {#if selectedImage}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            onclick={(e) => { if (e.target === e.currentTarget) closeImage(); }}
        >
            <button
                class="absolute top-5 right-5 text-white text-4xl font-bold hover:text-gray-300"
                onclick={closeImage}
            >
                &times;
            </button>

            <img class="max-w-[90vw] max-h-[90vh] rounded-base shadow-xl" src={selectedImage} alt="">
        </div>
    {/if}

</main>
