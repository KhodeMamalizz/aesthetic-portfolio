<script setup lang="ts">

    import { slideInFromRight, slideInFromLeft } from '../utils/motion'
    import { SparklesIcon } from "@heroicons/vue/20/solid"

</script>

<template>
    <div 
        id="about-me"
        v-motion-fade
        class="flex flex-col gap-20 md:gap-0 md:flex-row justify-center items-center px-10 md:px-20 mt-28 md:mt-40 w-full z-[20]"
    >
        <div class="flex flex-col justify-center w-full h-full gap-5 m-auto text-start">
            <div 
                v-motion-slide-top
                class="Welcome-box py-[1rem] px-[1.4rem] border border-[#7042f88b] opacity-[.9]"
            >
                <SparklesIcon class="text-[#b49bff] mr-[10px] w-5 h-5" />
                <h1 class="Welcome-text text-[13px]">
                    Fullstack Developer Portfolio
                </h1>
            </div>

            <div 
                v-motion="slideInFromLeft(500)"
                class="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold leading-[5rem] md:leading-[5rem] text-[#fff] max-w-[600px] w-auto h-auto"
            >
                <span>
                    Providing
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{{ `${'The Best'}` }}</span>
                    Projects Experience
                </span>
            </div>

            <div 
                v-motion="slideInFromLeft(800)"
                class="text-lg text-gray-400 my-5 max-w-[600px]"
            >
                I&apos;m a Full Stack Software Engineer with experience in Website,
                Mobile, and Software development. Check out my projects and skills.
            </div>

            <div
                v-motion="slideInFromLeft(1000)"
                class="py-2 button-primary text-center text-[#fff] cursor-pointer rounded-lg max-w-[200px]"
            >
                Learn More...
            </div>

        </div>
        <div
            v-motion="slideInFromRight(800)"
            class="flex items-center justify-center w-full h-full"
        >
            <NuxtImg 
                src="/hero-icons.svg"
                alt="hero icon"
                :width="650"    
                :height="650"
            />
        </div>
    </div>
</template>

<style scoped>

</style>