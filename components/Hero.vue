<script setup lang="ts">

</script>

<template>
    <div class="relative flex flex-col w-full h-full">
        <video 
            autoplay 
            muted 
            loop 
            class="rotate-180 absolute top-[-340px] opacity-30 md:opacity-100 left-0 w-full h-full z-[-1] object-cover"
        >
            <source src="/blackhole.webm" type="video/webm">
        </video>
        <HeroContent />
    </div>

</template>


<style scoped>

</style>