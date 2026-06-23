<script lang="ts">
  let showModal = $state(false);
  let sending = $state(false);

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    sending = true;

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgoqpeow", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        showModal = true;
        form.reset();
      } else {
        alert("Er ging iets mis bij het versturen.");
      }
    } catch (error) {
      alert("Netwerk fout. Probeer later opnieuw.");
    } finally {
      sending = false;
    }
  }
</script>

<head>
    <title>Contact</title>
</head>
<div class="px-4 py-16">
  <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

		    <!-- Cards -->
    <div class="flex flex-col gap-8 lg:items-end order-1 lg:order-2">

      <div class="flex flex-col md:flex-row items-center bg-neutral-primary-soft p-6 border-default rounded-base shadow-xs max-w-lg w-full">
        <img class="object-contain w-full md:w-40 h-40 rounded-base mb-3 md:mb-0" src="/img/mailimg.png" alt="">
        <div class="flex flex-col justify-between md:p-4 leading-normal">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-heading">Telefoonnummer:</h5>
          <a href="" class="mb-4 text-body font-bold">06 12 34 56 78</a>
					<h5 class="mb-2 text-xl font-semibold tracking-tight text-heading">Email:</h5>
          <a href="" class="mb-4 text-body font-bold">cobanyasin234@gmail.com</a>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center bg-neutral-primary-soft p-6 border-default rounded-base shadow-xs max-w-lg w-full">
        <img class="object-contain w-full md:w-40 h-40 rounded-base mb-3 md:mb-0" src="/img/socialsimg.png" alt="">
        <div class="flex flex-col justify-between md:p-4 leading-normal">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-heading">Socials:</h5>
          <a href="https://www.linkedin.com/in/taha-yasin-coban-790716268/" class="text-body font-bold">LinkedIn</a>
					<a href="https://www.instagram.com/yasin3074/" class="text-body font-bold">Instagram</a>
					<a href="" class="text-body font-bold">lorem impsum...</a>
        </div>
      </div>

    </div>
<!-- Form -->
		<div class="order-2 lg:order-1">
			<h2 class="font-semibold text-2xl text-center mb-2">Contact Formulier (work in progress)</h2>
			<p class="text-m mb-4 text-center">Wilt u via email een bericht versturen naar ons? Dan kan je dat hier doen</p>
			<form id="contact-form" class="space-y-6 bg-[#0f172a] p-10 rounded-xl max-w-xl" onsubmit={handleSubmit}>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-[#FFF9E8]">Email</label>
					<input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3" placeholder="uwemail@gmail.com" required>
				</div>
				<div>
					<label for="subject" class="block mb-2 text-sm font-medium text-[#FFF9E8]">Onderwerp</label>
					<input type="text" name="subject" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Hier het onderwerp zetten van het bericht" required>
				</div>
				<div>
					<label for="message" class="block mb-2 text-sm font-medium text-[#FFF9E8]">Bericht</label>
					<textarea name="message" id="message" rows="6" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder="Hier het bericht plaatsen"></textarea>
				</div>
				<button type="submit" disabled={sending} class="py-3 px-6 text-sm font-medium text-center text-[#FFF9E8] rounded-lg bg-[#45516E] hover:bg-[#596A8F] disabled:opacity-50">
					{sending ? "Versturen..." : "Bericht versturen"}
				</button>
			</form>
		</div>

		<!-- Success Modal -->
		{#if showModal}
		<div class="fixed inset-0 bg-black/50 flex items-center justify-center">
			<div class="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
				<h3 class="text-xl font-semibold mb-2">Bericht verzonden</h3>
				<p class="text-gray-600 mb-4">Bedankt! We nemen zo snel mogelijk contact met u op.</p>
				<button onclick={() => (showModal = false)} class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
					Sluiten
				</button>
			</div>
		</div>
		{/if}
	</div>
</div>