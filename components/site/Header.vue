<template>
    <nav>
        <div class="container mx-auto flex flex-wrap items-center justify-between p-2">
            <a href="#" class="flex items-center">
                <img class="w-14 lg:w-full" src="/img/log-header.png" alt="logo" />
            </a>
            <div class="flex md:order-2 items-center gap-2">
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button"
                    class="hidden lg:block bg-yellow-1000 font-semibold p-2 rounded-lg text-lg w-48 text-center">
                    ورود / عضویت
                </button>

                <div class="md:hidden">
                    <img class="w-8" src="/img/Profile.png" alt="">
                </div>

                <button data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-800 rounded-lg md:hidden"
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div class="items-center hidden w-full md:flex md:w-auto md:order-1 z-50" id="navbar-cta">
                <ul
                    class="flex flex-col font-semibold p-2 mt-4 gap-6 border border-gray-100 rounded-lg bg-white-2 md:flex-row md:space-x-8 md:mt-0  md:border-0 md:bg-white">
                    <NuxtLink to="/" class="lg:hover:border-b-2 border-gray-500 p-2 cursor-pointer">صفحه اصلی</NuxtLink>
                    <NuxtLink to="/services" class="lg:hover:border-b-2 border-gray-500 p-2 cursor-pointer">خدمات</NuxtLink>
                    <NuxtLink to="/article" class="lg:hover:border-b-2 border-gray-500 p-2 cursor-pointer">مقالات</NuxtLink>
                    <NuxtLink to="/suppliers" class="lg:hover:border-b-2 border-gray-500 p-2 cursor-pointer">تامین کنندگان
                    </NuxtLink>
                    <NuxtLink to="/about" class="lg:hover:border-b-2 border-gray-500 p-2 cursor-pointer">درباره ما
                    </NuxtLink>
                    <NuxtLink to="/contact" class="lg:hover:border-b-2 border-gray-500 p-2 cursor-pointer">تماس با ما
                    </NuxtLink>
                </ul>
            </div>
        </div>


        <!-- modal  -->

        <!-- Modal toggle -->


        <!-- Main modal -->
        <div id="authentication-modal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div class="relative w-full h-full max-w-md md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-lg">
                    <button type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl text-center text-gray-700">لطفا شماره همراه خود را وارد کنید</h3>
                        <form class="space-y-6" action="#">
                            <div>

                                <input type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                                    required>
                            </div>


                            <button type="submit"
                                class="w-full text-white bg-yellow-1000 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center">
                                ارسال
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>


<script setup>

import { onMounted } from 'vue'
import { initModals } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initModals();
})

</script>