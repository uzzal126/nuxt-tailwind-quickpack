<template>
    <div class="header-main relative py-3 md:py-2.5 bg-white shadow-[0_10px_26px_rgba(0,0,0,5%)]">
        <div class="container">
            <!-- Header Main Wrapper Start -->
            <div class="flex items-center justify-between">
                <!-- Header Logo Start -->
                <div class="header-logo w-36 mr-7">
                    <n-link to="/">
                        <img src="/images/logo/dark-logo.png" alt="Logo" />
                    </n-link>
                </div>
                <!-- Header Logo End -->

                <!-- Header Inner Start -->
                <div class="header-inner flex items-center justify-end flex-grow">
                    <!-- Header Navigation Start -->
                    <div class="header-navigation hidden xl:block">
                        <Navigation />
                    </div>
                    <!-- Header Navigation End -->

                    <!-- Header Mobile Toggle Start -->
                    <div class="header-toggle flex items-center">
                        <button class="ml-5 xl:hidden group" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileMenu">
                            <span class="block w-6 h-0.5 my-1.5 bg-primary group-hover:bg-primary"></span>
                            <span class="block w-6 h-0.5 my-1.5 bg-primary group-hover:bg-primary"></span>
                            <span class="block w-6 h-0.5 my-1.5 bg-primary group-hover:bg-primary"></span>
                        </button>
                        <button class="ml-5 flex md:hidden group">
                            <span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-primary group-hover:bg-primary"></span>
                            <span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-primary group-hover:bg-primary"></span>
                            <span class="inline-block w-1.5 h-1.5 rounded-full mx-0.5 my-2.5 bg-primary group-hover:bg-primary"></span>
                        </button>
                    </div>
                    <!-- Header Mobile Toggle End -->
                </div>
                <!-- Header Inner End -->
            </div>
            <!-- Header Main Wrapper End -->
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Navigation: () => import("~/components/header/Navigation"),
    },
};
</script>
