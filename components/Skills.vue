
import type { Skills } from '#build/components';
<script setup lang="ts">
    import { skills, frontendSkills, backendSkills, fullstackSkills, otherSkills } from '@constants'
    const {$gsap: gsap} = useNuxtApp()

    onMounted(() => {
        gsap
            .from(
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
        class="flex flex-col items-center justify-center gap-3 h-full overflow-hidden lg:pb-20 pt-20 scale-90"
    >
        <SkillText />
        <div class="flex justify-around flex-wrap mt-4 gap-5 items-center">
            <img 
                class="skills"
                v-for="(skill, index) in frontendSkills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>
        <div class="flex justify-around flex-wrap mt-4 gap-5 items-center">
            <img 
                class="skills"
                v-for="(skill, index) in backendSkills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>
        <div class="flex justify-around flex-wrap mt-4 gap-5 items-center">
            <img 
                class="skills"
                v-for="(skill, index) in fullstackSkills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>
        <div class="flex justify-around flex-wrap mt-4 gap-5 items-center">
            <img 
                class="skills"
                v-for="(skill, index) in otherSkills" 
                :key="index"
                :width="skill.width"
                :height="skill.height"
                :src="skill.src" 
                :alt="skill.skill_name">
        </div>

        <div class="w-full h-full absolute">
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