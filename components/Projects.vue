
import type { ProjectCard } from '#build/components';
<script setup lang="ts">

    import { projects } from '@constants' 

    interface Props {
        src: String
        title: String
        description: String
    }

    const props = defineProps<Props>()

</script>

<template>
    <section id="projects" class="flex flex-col justify-center items-center py-20">
        <h1 class="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My projects
        </h1>
        <div class="w-full h-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard 
                v-for="(project, index) in projects"
                :key="index"
                :title="project.title"
                :image="project.image"
                :description="project.description"
            />
        </div>
    </section>
</template>


