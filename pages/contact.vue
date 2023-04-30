<template>
    <div>
        <!-- top -->
        <div class="w-full flex mt-8 lg:mt-24 relative p-2">
            <img class="hidden lg:block absolute right-0 z-10" src="/img/vector-right-yellow.png" alt="">
            <div class="flex flex-col-reverse lg:flex-row gap-8 items-center container mx-auto z-20">
                <div class="flex flex-col w-full space-y-8">
                    <p class="text-3xl lg:text-6xl">تماس با ما</p>
                    <p class="flex gap-2 items-center">
                        <img src="/img/loction.png" alt="">
                        آدرس : تهران، انتهای بزرگراه شهید ستاری، خیابان سیمون بولیوار، خیابان مخابرات، کوچه میخک، سرای
                        نوآوری دانشگاه آزاد اسلامی واحد تهران غرب،
                    </p>
                    <p class="flex gap-2 items-center">
                        <img src="/img/Message.png" alt="">
                        کد پستی: ۱۴۷۵۹۱۹۸۵۱
                    </p>
                    <p class="flex gap-2 items-center">
                        <img src="/img/Call.png" alt="">
                        تلفن تماس : ۴۴۸۰۸۳۵۲_۰۲۱
                    </p>
                    <p class="flex gap-2 items-center">
                        <img src="/img/Call.png" alt="">
                        تلفن پشتیبانی : ۴۴۸۰۸۳۵۲_۰۲۱
                    </p>
                </div>

                <div class="flex w-full items-center">
                    <img src="/img/contact.png" alt="">
                </div>
            </div>
        </div>

        <!-- map  -->
        <div class="w-full flex  mt-24 relative p-2">
            <div class="w-full flex flex-col container mx-auto justify-center items-center space-y-4 lg:space-y-10">
                <p class="lg:text-xl">صمیمانه منتظر دیدار و آشنایی با شما عزیزان هستیم</p>
                <img src="/img/map.png" alt="">
            </div>
        </div>

        <!-- form contact  -->
        <div class="flex flex-col w-full p-2 lg:p-4 relative mt-24">

            <div class="hidden lg:block absolute left-0">
                <img src="/img/vector-left.png" alt="">
            </div>

            <div class="absolute right-0 bottom-0">
                <img src="/img/vector-m1.png" alt="">
            </div>

            <div class="flex flex-col container mx-auto justify-between items-center lg:space-y-20 z-50">
                <p class="text-3xl lg:text-6xl">فرم تماس با ما</p>
                <div class="flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-2">
                    <div class="flex flex-col w-full lg:w-1/3 space-y-4">
                        <input class="border border-gray-500 p-2 rounded-lg" type="text" name="" id=""
                            placeholder="نام و نام خانوادگی">
                        <input class="border border-gray-500 p-2 rounded-lg" type="text" name="" id=""
                            placeholder="شماره موبایل">
                        <input class="border border-gray-500 p-2 rounded-lg" type="text" name="" id="" placeholder="ایمیل">
                        <input class="border border-gray-500 p-2 rounded-lg" type="text" name="" id="" placeholder="موضوع">
                        <textarea class="border border-gray-500 p-2 rounded-lg" name="" id="" cols="30" rows="10"
                            placeholder="توضیحات"></textarea>
                        <a class="bg-yellow-1000 p-2  rounded-lg text-center text-xl shadow-lg shadow-yellow-300"
                            href="#">ارسال</a>
                    </div>
                    <div>
                        <img src="/img/contact-form.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
