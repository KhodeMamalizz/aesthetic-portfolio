
<script setup lang="ts">

    import { projects } from '@constants' 

    interface Props {
        src?: String
        title?: String
        description?: String
    }

    const props = defineProps<Props>()

    const { $gsap: gsap } = useNuxtApp()
    onMounted(() => {
        gsap.from(
                '.project',
                { 
                    opacity: 0,
                    stagger: 0.1, 
                    scrollTrigger: {
                        trigger: '#projects',
                        start: 'top bottom',
                        scrub: true,
                    } 
                }
            )
    })

</script>

<template>
    <section id="projects" class="flex flex-col justify-center items-center md:py-20 mt-28 z-[10]">
        <h1 class="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My projects
        </h1>
        <div class="flex flex-col w-full h-full gap-10 px-10 md:flex-row">
            <ProjectCard 
                v-for="(project, index) in projects"
                :key="index"
                :title="project.title"
                :image="project.image"
                :description="project.description"
                class="project"
            />
        </div>
    </section>
</template>


