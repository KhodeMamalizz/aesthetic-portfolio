<script setup lang="ts">

</script>

<template>
    <div class="w-full h-full flex flex-col relative">
        <video 
            autoplay 
            muted 
            loop 
            class="rotate-180 absolute top-[-21.25rem] left-0 w-full h-full z-[-1] object-cover"
        >
            <source src="/blackhole.webm" type="video/webm">
        </video>
        <HeroContent />
    </div>

</template>


<style scoped>

</style>