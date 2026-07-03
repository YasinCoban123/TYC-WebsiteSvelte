<script>
	import { resolve, base } from '$app/paths';
</script>

<nav class="bg-[#FF9600]  w-full z-20 top-0 inset-s-0  border-default">
  <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto">
  <a href={resolve('/')} class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="{base}/img/logo-l.png" class="h-35" alt="Logo" />
  </a>
  <div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <!-- <button type="button" class="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Get started</button> -->
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false"> -->
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="font-medium text-app-text flex  flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
      <li>
        <a href={resolve('/')} class="block py-2 px-3 md:hover:text-fg-brand  bg-brand rounded md:bg-transparent font-bold md:p-0" aria-current="page">Home</a>
      </li>
      <li>
        <a href={resolve('/aboutme')} class="block py-2 px-3 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About me</a>
      </li>
      <li>
        <a href={resolve('/projects')} class="block py-2 px-3 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Projects</a>
      </li>
      <li>
        <a href={resolve('/portfolio')} class="block py-2 px-3 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">CV</a>
      </li>
      <li>
        <a href={resolve('/photography')} class="block py-2 px-3 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Photography</a>
      </li>
      <li>
        <a href={resolve('/contact')} class="block py-2 px-3  rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
