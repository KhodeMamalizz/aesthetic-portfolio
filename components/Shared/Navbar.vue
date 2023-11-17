<script setup lang="ts">

    import { socials } from '@constants'

</script>

<template>
    <div class="w-full h-[4.063rem] fixed top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-5 md:px-10">
        <div class="w-full h-full flex items-center justify-between gap-5 md:gap-0 m-auto md:px-[10px]">
            <a href="#about-me" class="w-auto flex gap-2 h-auto items-center font-thin tracking-widest text-white">
                <NuxtImg 
                    src="/logo.png"
                    alt="logo"
                    :width="60"    
                    :height="60"
                    class="cursor-pointer hover:animate-spin"
                />
                <span class="font-bold hidden md:inline-block text-gray-300">
                    Mamalizz
                </span>
            </a>

            <div class="w-[500px] h-full flex items-center justify-between md:mx-auto">
                <div class="w-full h-auto flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-[1.2rem] py-[10px] rounded-full text-gray-200">
                    <a href="#about-me" class="cursor-pointer">About me</a>
                    <a href="#skills" class="cursor-pointer">Skills</a>
                    <a href="#projects" class="cursor-pointer">Projects</a>
                </div>
            </div>

            <div class="hidden md:flex gap-5 items-center">
                <i 
                    v-for="(social, index) in socials" 
                    :key="index" 
                    class="w-[26px] h-[26px] text-white flex items-center justify-center cursor-pointer"
                    :class="social.class"
                />
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>