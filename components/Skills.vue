
import type { Skills } from '#build/components';
<script setup lang="ts">
    import { skills, frontendSkills, backendSkills, fullstackSkills, otherSkills } from '@constants'
    const {$gsap: gsap} = useNuxtApp()

    onMounted(() => {
        gsap.from(
                '.skills',
                {
                    opacity: 0,
                    duration: 2,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: '#skills',
                        start: 'top bottom',
                    }
                }
            )
    })
</script>

<template>
    <section 
        id="skills"
        class="flex flex-col items-center justify-center h-full gap-3 pt-20 overflow-hidden scale-90 lg:pb-20"
    >
        <SkillText />
        <div class="flex flex-wrap items-center justify-center gap-6 mt-4 scale-90 md:scale-100">
            <img 
                class="skills"
                v-for="(skill, index) in frontendSkills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>
        <div class="flex flex-wrap items-center justify-center gap-6 mt-4 scale-90 md:scale-100">
            <img 
                class="skills"
                v-for="(skill, index) in backendSkills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>
        <div class="flex flex-wrap items-center justify-center gap-6 mt-4 scale-90 md:scale-100">
            <img 
                class="skills"
                v-for="(skill, index) in fullstackSkills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>
        <div class="flex flex-wrap items-center justify-around gap-5 mt-4 scale-90 md:scale-100">
            <img 
                class="skills"
                v-for="(skill, index) in otherSkills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>

        <div class="absolute w-full h-full">
            <div class="w-full h-full z-[-10] opacity-30 absolute flex justify-center items-center bg-cover">
                <video 
                    class="w-full h-auto"
                    preload="false"
                    playsInline
                    muted
                    loop
                    autoplay
                    src="/cards-video.webm"
                >

                </video>
            </div>
        </div>
    </section>
</template>


<style scoped>

</style>