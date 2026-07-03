<script>
	import { resolve, base } from '$app/paths';
</script>

<footer class="bg-[#FF9600] shadow-xs border ">
    <div class="w-full  max-w-7xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href={resolve('/')} class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="{base}/img/logo-l.png" class="h-30" alt="Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-app-text  sm:mb-0">
                <li>
                    <a href={resolve('/')} class="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href={resolve('/aboutme')} class="hover:underline me-4 md:me-6">About me</a>
                </li>
                <li>
                    <a href={resolve('/projects')} class="hover:underline me-4 md:me-6">Project</a>
                </li>
                  <li>
                    <a href={resolve('/portfolio')} class="hover:underline me-4 md:me-6">CV</a>
                </li>
                  <li>
                    <a href={resolve('/photography')} class="hover:underline me-4 md:me-6">Photography</a>
                </li>
                <li>
                    <a href={resolve('/contact')} class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-default sm:mx-auto lg:my-8" />
        <span class="block text-sm text-body sm:text-center">2026 <a href={resolve('/')} class="hover:underline">TYC</a></span>
    </div>
</footer>
