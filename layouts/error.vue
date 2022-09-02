<template>
    <div class="relative h-screen flex items-center">
        <div class="container text-center">
            <div class="error-image">
                <!-- <img src="/images/others/error-404.png" alt="Not Found Image"> -->
            </div>
            <h4 v-if="error.statusCode === 404" class="text-xl mt-10">Oops! Page not found!</h4>
            <h4 v-else class="text-xl mt-10">An error occurred</h4>
            <h1 class="text-2xl md:text-4xl !leading-[1.2] mb-7">
                We are sorry for this error.<br />
                Can't find this page.
            </h1>
            <button class="bg-primary text-base text-white px-10 py-3 font-medium rounded transition-all hover:text-heading hover:bg-secondary" @click="$router.go(-1)">
                <i class="icofont-long-arrow-left text-xl align-middle"></i>
                Go back previous page
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
