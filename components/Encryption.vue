<script setup>

</script>

<template>
    <section className="flex flex-row relative items-center justify-center w-full pt-80 min-h-max scale-90">
        <div className="absolute w-auto h-auto top-0 z-[5] mb-40">
            <div
                v-motion="slideInFromTop"
                className="text-[40px] font-medium text-center text-gray-200"
            >
                Performance
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {{ ` & ` }}
                </span>
                Security
            </div>
        </div>

        <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
            <div className="flex flex-col items-center group cursor-pointer w-auto h-auto mt-12">
                <NuxtImg
                    src="/LockTop.png"
                    alt="Lock top"
                    :width="50"
                    :height="50"
                    className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
                />
                <NuxtImg
                    src="/LockMain.png"
                    alt="Lock Main"
                    :width="70"
                    :height="70"
                    className=" z-10"
                />
            </div>
        </div>

        <div className="w-full h-full z-[-10] opacity-30 absolute flex justify-center items-center bg-cover">
            <video
                loop
                muted
                autoPlay
                playsInline
                preload="false"
                className="w-full h-auto"
                src="/encryption.webm"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>