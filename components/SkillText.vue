<script setup lang="ts">
    import { slideInFromRight, slideInFromLeft } from '../utils/motion'
    import { SparklesIcon } from "@heroicons/vue/20/solid"
</script>

<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <div 
            v-motion-slide-top
            class="Welcome-box py-[1rem] px-[1.4rem] border border-[#7042f88b] opacity-[.9]"
        >
            <SparklesIcon class="text-[#b49bff] mr-[10px] w-5 h-5" />
            <h1 class="Welcome-text text-[13px]">
                Modern Technologies i use   
            </h1>
        </div>
        <div 
            v-motion="slideInFromLeft(500)"
            class="text-[30px] text-white font-medium mt-10 text-center mb-[1rem]"
        >
            Making Websites, Web apps, Mobile apps
        </div>
        <div 
            v-motion="slideInFromRight(500)"
            class="cursive text-[20px] text-gray-200 my-10 text-center"
        >
            Also know how to center a div LOL
        </div>
    </div>
</template>

<style scoped>

</style>