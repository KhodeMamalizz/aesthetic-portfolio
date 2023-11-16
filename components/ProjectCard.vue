<script setup lang="ts">

interface Props {
    image: String
    title: String
    description: String
}

const props = defineProps<Props>()

</script>

<template>
    <div class="relative overflow-hidden shadow-lg rounded-lg border border-[#2A0E61]">
        <NuxtImg 
            :src="image"
            alt="project banner"
            class="w-full object-contain"
        />
        <div class="relative p-4">
            <h1 class="text-2xl font-semibold text-white">{{ title }}</h1>
            <p class="mt-2 text-gray-300 line-clamp-3">{{ description }}</p>
        </div>
    </div>
</template>


