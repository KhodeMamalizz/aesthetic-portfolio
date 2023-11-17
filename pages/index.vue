<script setup lang="ts">

</script>

<template>
    <main class="w-full h-full overflow-x-hidden">
        <div class="flex flex-col gap-16">
            <Hero />
            <Skills />
            <ClientOnly>
                <Encryption />
                <Projects />
            </ClientOnly>
        </div>
    </main>
</template>