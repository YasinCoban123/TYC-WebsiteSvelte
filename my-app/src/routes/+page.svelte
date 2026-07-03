
<script>
	import { resolve, base } from '$app/paths';
</script>

<head>
    <title>Home</title>
</head>
<section class="bg-white dark:bg-[#0f172a]">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-7xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full hidden dark:block border-4 border-amber-500" src="{base}/img/headbghome.jpeg" alt="header">
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-[#FFF9E8]">Taha Yasin Coban, Programmeur.</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Welkom op mijn website. Hier vindt u meer informatie over mij en mijn vaardigheden als Full-Stack of Back-end programmeur. Wilt u meer weten over mijn kennis en ervaring? Neem dan een kijkje in mijn CV. Voor vragen of contact kunt u terecht op de contactpagina.</p>
            <a href={resolve('/portfolio')} class="inline-flex items-center text-[#FFF9E8] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                CV
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href={resolve('/contact')} class="inline-flex items-center text-[#FFF9E8] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Contact
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>

		<div class="p-10">
    <p class="mb-3 text-2xl text-app-text font-bold">Website structuur</p>
    <p class="mb-3 text-body">Deze website is opgebouwd uit een aantal duidelijke onderdelen, zodat u snel kunt vinden wat u zoekt. Op de pagina "Over mij" leest u wie ik ben en wat mijn achtergrond en ervaring als programmeur zijn. Onder "Portfolio" en "Projecten" vindt u een overzicht van werk dat ik heb gerealiseerd, inclusief de technieken en talen die ik daarbij heb gebruikt.</p>
    <p class="text-body">Daarnaast bevat de website een fotografiesectie met een selectie van mijn foto's, en een contactpagina waar u eenvoudig met mij in contact kunt komen voor vragen, samenwerkingen of opdrachten. Via het navigatiemenu kunt u op elk moment naar deze onderdelen doorklikken.</p>
    </div>
    		<div class="p-10">
    <p class="mb-3 text-2xl text-app-text font-bold">Conclusie</p>
    <p class="mb-3 text-body">Deze website geeft een persoonlijk en overzichtelijk beeld van mij als programmeur: mijn vaardigheden, mijn ervaring en het werk dat ik heb gemaakt. Het doel is om bezoekers, opdrachtgevers en geïnteresseerden snel inzicht te geven in wat ik kan en hoe wij eventueel kunnen samenwerken.</p>
    <p class="text-body">Heeft u na het bekijken van mijn portfolio nog vragen, of wilt u een project bespreken? Neem dan gerust contact met mij op via de contactpagina, ik hoor graag van u.</p>
    </div>
