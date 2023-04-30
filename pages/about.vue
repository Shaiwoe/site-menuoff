<template>
    <div>
        <!-- top -->
        <div class="w-full flex mt-8 lg:mt-24 relative p-2">
            <img class="hidden lg:block absolute right-0 z-10" src="/img/vector-right.png" alt="">
            <img class="absolute w-1/2 lg:w-2/12 lg:right-36 lg:top-24 top-80" src="/img/vector-about.png" alt="">
            <div class="flex flex-col-reverse lg:flex-row gap-8 items-center container mx-auto z-20">
                <div class="flex flex-col w-full space-y-8">
                    <p class="text-3xl lg:text-6xl">منوآف</p>
                    <p class="lg:text-xl leading-8">شرکت منوآف در سال 1401 پس از ماه ها تحقیق و توسعه شروع به فعالیت کرده
                        است.تیم ما با هدف ارائه راهکار های نوین تبلیغاتی و مدیریتی قدم در این راه گذاشته است تا با رفع موانع
                        موجود، ارتباط موثری میان مشتریان و رستوران ها شکل دهد. ما تلاش میکنیم تا با بهبود روش های سنتی،
                        تحولی در تجربه مشتری و رونق رستوران ها ایجاد کنیم. به همین منظور، در کنار شناسایی مشکلات و کاستی ها،
                        از جدید ترین تکنولوژی ها بهره بردیم تا به این مهم دست یابیم. مخاطبین، محوریت کسب و کار ما و سرمایه
                        های گرانبهایی هستند که متعهدانه خود را مسئول ارتقا روز افزون رضایت آنها می دانیم.</p>
                </div>

                <div class="flex w-full">
                    <img src="/img/about.png" alt="">
                </div>
            </div>
        </div>

        <!-- team  -->
        <div class="w-full flex  mt-24 relative">
            <div class="w-full flex flex-col container mx-auto justify-center items-center space-y-20">
                <p class="text-6xl">تیم ما</p>

                <div class="flex flex-col lg:flex-row w-full gap-8 p-2">
                    <div class="w-full shadow-2xl rounded-lg p-4 flex flex-col justify-center items-center  space-y-4">
                        <img src="/img/about-man1.png" alt="">
                        <div class="flex flex-col justify-center items-center gap-2">
                            <p class="text-2xl">مهران</p>
                            <p>مدیر بازاریابی</p>
                        </div>
                    </div>
                    <div class="w-full shadow-2xl rounded-lg p-4 flex flex-col justify-center items-center  space-y-4">
                        <img src="/img/about-man2.png" alt="">
                        <div class="flex flex-col justify-center items-center gap-2">
                            <p class="text-2xl">مهران</p>
                            <p>مدیر بازاریابی</p>
                        </div>
                    </div>
                    <div class="w-full shadow-2xl rounded-lg  p-4 flex flex-col justify-center items-center  space-y-4">
                        <img src="/img/about-man3.png" alt="">
                        <div class="flex flex-col justify-center items-center gap-2">
                            <p class="text-2xl">مهران</p>
                            <p>مدیر بازاریابی</p>
                        </div>
                    </div>
                    <div class="w-full shadow-2xl rounded-lg p-4 flex flex-col justify-center items-center  space-y-4">
                        <img src="/img/about-man4.png" alt="">
                        <div class="flex flex-col justify-center items-center gap-2">
                            <p class="text-2xl">مهران</p>
                            <p>مدیر بازاریابی</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- restaurants  -->
        <div class="flex flex-col w-full p-2 lg:p-4 relative mt-16">
            <div class="flex flex-col w-full justify-between items-center  space-y-20">
                <p class="text-3xl lg:text-6xl">رستوران ها</p>
                <div class="lg:w-6/12 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <img src="/img/resturan.png" alt="">
                    <img src="/img/resturan.png" alt="">
                    <img src="/img/resturan.png" alt="">
                    <img src="/img/resturan.png" alt="">
                </div>
            </div>
        </div>

        <!-- commnets  -->
        <div class="flex flex-col w-full p-2 lg:p-4 relative mt-24">
            <div class="flex flex-col container mx-auto justify-between items-center space-y-20">
                <p class="text-3xl lg:text-6xl">نظرات کاربران</p>
            </div>
        </div>

        <div class="container mx-auto mt-8 p-2">
            <swiper :slidesPerView="1" :spaceBetween="30" :slidesPerGroup="1" :loop="true" :loopFillGroupWithBlank="true"
                :breakpoints="{
                    '640': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '1024': {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="w-full p-4 flex flex-col border border-gray-500 rounded-2xl space-y-8">
                        <p class="flex items-center">
                            <img src="/img/icon-cm.png" alt="">
                            مارال جلالی
                        </p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                            است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="w-full p-4 flex flex-col border border-gray-500 rounded-2xl space-y-8">
                        <p class="flex items-center">
                            <img src="/img/icon-cm.png" alt="">
                            مارال جلالی
                        </p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                            است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="w-full p-4 flex flex-col border border-gray-500 rounded-2xl space-y-8">
                        <p class="flex items-center">
                            <img src="/img/icon-cm.png" alt="">
                            مارال جلالی
                        </p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                            است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="w-full p-4 flex flex-col border border-gray-500 rounded-2xl space-y-8">
                        <p class="flex items-center">
                            <img src="/img/icon-cm.png" alt="">
                            مارال جلالی
                        </p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                            است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
                    </div>
                </swiper-slide>

            </swiper>
        </div>
    </div>
</template>



<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
import { styles } from "dom7";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};

</script>
