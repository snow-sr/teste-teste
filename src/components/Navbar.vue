<template>
<nav class="bg-transparent border-gray-200 px-2 sm:px-4 rounded">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div class="flex">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="./../assets/bola.png" class="h-14" alt="Flowbite Logo" />
            </a>
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <a 
                            href="#"
                            class="block font-bold py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0">
                            Modalidades
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#"
                            class="block font-bold py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0">
                            Notícias
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#"
                            class="block font-bold py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0">
                            Minha Conta
                        </a>
                    </li>
                </ul>
        </div>
        <button data-collapse-toggle="navbar-default" type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
                class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                    <a href="#" class="block font-bold py-2 pl-3 pr-4 text-gray-700 rounded hover:text-gray-900">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>

<style>
    .bg-nav {
        background: rgba(224, 214, 208, 0.7);
    }
</style>