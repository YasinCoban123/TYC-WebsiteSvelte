<script>
	import { asset } from '$app/paths';
</script>

<head>
    <title>Portfolio</title>
</head>
<main class="bg-app text-app-text flex justify-between min-h-screen">
<aside
    id="separator-sidebar"
    class="z-40 w-80 min-h-screen"
    aria-label="Sidebar"
>
    <div class="h-full px-3 py-4 pr-40 overflow-y-auto bg-app-text border-default rounded-4">
        <ul class="space-y-2 font-medium">
            <li>
                <p class="flex items-center text-2xl px-2 py-1.5 font-bold text-app rounded-base ">
                    Skills: 
                </p>
            </li>

            <li>
                <p class="flex items-center px-2 py-1.5 text-app rounded-base ">
                    ∘ Goede communicatieve vaardigheden
                </p>
            </li>

            <li>
                <p class="flex items-center px-2 py-1.5 text-app rounded-base ">
                    ∘ Klantgericht en servicegericht
                </p>
            </li>

            <li>
                <p class="flex items-center px-2 py-1.5 text-app rounded-base ">
                    ∘ Gemotiveerde werkhouding
                </p>
            </li>

            <li>
                <p class="flex items-center px-2 py-1.5 text-app rounded-base ">
                    ∘ Betrouwbaar
                </p>
            </li>
                <li>
                <p class="flex items-center pt-5 text-2xl px-2 py-1.5 font-bold text-app rounded-base ">
                    Talen: 
                </p>
            </li>

            <li>
                <p class="flex items-center px-2 py-1.5 text-app rounded-base  ">
                    ∘ Nederlands
                </p>
            </li>
                        <li>
                <p class="flex items-center px-2 py-1.5 text-app rounded-base ">
                    ∘ Engels
                </p>
            </li>
                        <li>
                <p class="flex items-center px-2 py-1.5 text-app rounded-base ">
                    ∘ Turks
                </p>
            </li>
        </ul>
    </div>
</aside>

<div class="flex flex-col">
    <div class="p-10 pt-20">
        <p class="mb-3 text-2xl text-app-text font-bold">Korte Intro</p>
    <p class="mb-3 text-body">Hey, ik ben Taha Yasin, 21 jaar en student Informatica aan de Hogeschool Rotterdam. Coderen is iets wat ik al een tijdje doe en nog steeds met veel plezier blijf doen, of het nou gaat om een klein scriptje of een groter project voor een klant.</p>
    <p class="text-body">Op deze pagina laat ik graag zien wat ik tot nu toe heb opgepikt: van mijn werkervaring tot de skills die ik onderweg heb opgebouwd. Scroll gerust verder of download mijn CV onderaan de pagina.</p>
    </div>
        <div class="p-10">
    <p class="mb-3 text-2xl text-app-text font-bold">Ervaring</p>
    <p class="mb-3 text-body">In 2023 en 2024 heb ik ruim een jaar stage gelopen als software developer bij Xeniox, waar ik 32 uur per week meedraaide in een echt ontwikkelteam. Dankzij mijn stagebegeleider Stefan Jamal Fransen heb ik daar niet alleen technisch veel bijgeleerd, maar ook hoe je je professioneel opstelt op de werkvloer.</p>
    <p class="text-body">Tijdens deze stage heb ik aan verschillende projecten meegewerkt, zoals Activum, AyHair, Haagse Budget Uitvaart, Quicklicense, Randstad Budget Uitvaart en Yildiz Stukadoors. Daarnaast werk ik al een aantal jaar als verkoopmedewerker in het familiebedrijf, waar ik klanten adviseer en help — een baan waar ik mijn communicatieve en klantgerichte kant goed kan inzetten.</p>
    </div>
            <div class="p-10">
    <p class="mb-3 text-2xl text-app-text font-bold">CV</p>
    <p class="mb-3 text-body">Wil je iets uitgebreider weten over mijn opleiding, werkervaring en vaardigheden? In mijn CV staat dit allemaal netjes op een rij.</p>
    <p class="text-body">Klik op de knop hieronder om mijn CV te downloaden.</p>
    <a
        href={asset('/img/cv.pdf')}
        download="TYC_CV.pdf"
        class="inline-block mt-4 px-6 py-3 bg-app-text text-white font-semibold rounded-lg shadow-md hover:bg-app-text-muted hover:scale-105 transition-all duration-200"
    >
        📄 Download CV
    </a>
    </div>
</div>


</main>
