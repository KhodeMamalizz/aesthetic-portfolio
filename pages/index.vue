<script setup lang="ts">

</script>

<template>
    <main class="w-full h-full">
        <div class="flex flex-col gap-20">
            <Hero />
            <Skills />
            <ClientOnly>
                <Encryption />
            </ClientOnly>
            <Projects />
        </div>
    </main>
</template>