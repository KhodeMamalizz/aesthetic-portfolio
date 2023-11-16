
import type { Skills } from '#build/components';
<script setup lang="ts">
    import { skills } from '@constants'
</script>

<template>
    <section 
        id="skills"
        class="flex flex-col items-center justify-center gap-3 h-full overflow-hidden py-20"
    >
        <div class="flex justify-around flex-wrap mt-4 gap-5 items-center">
            <img 
                v-for="(skill, index) in skills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>
    </section>
</template>


<style scoped>

</style>