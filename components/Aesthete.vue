<script setup>

</script>

<template>
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-[-10]">
        <div class="[perspective:1000px] absolute inset-0">
            <div class="absolute inset-0 plane">
                <div class="absolute w-[200vw] -ml-[50%] overflow-hidden inset-[-100%_0]">
                </div>
            </div>
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(0, 0, 0, 0) 0px, rgb(0, 0, 0) 50%);"></div>
        </div>
    </div>
</template>

<style scoped>

.plane {
    transform: rotateX(75deg);
}

.plane>div {
    transform: translateY(0);
    background-image: linear-gradient(to right,transparent 30%,#0c0341 50%,transparent 70%);
    background-position-y: 100%;
    -webkit-mask-image: linear-gradient(90deg,#000 2px,transparent 0),linear-gradient(180deg,#000 2px,transparent 0);
    mask-image: linear-gradient(90deg,#000 2px,transparent 0),linear-gradient(180deg,#000 2px,transparent 0);
    -webkit-mask-size: 60px 60px;
    mask-size: 60px 60px;
    -webkit-mask-repeat: repeat;
    mask-repeat: repeat;
    -webkit-mask-position: 50% 0;
    mask-position: 50% 0;
    animation: moveBack 50s linear infinite
}

@keyframes moveBack {
    0% {
        transform: translateY(0)
    }

    to {
        transform: translateY(calc(50% + 28px))
    }
}

</style>