<template>
    <div class="container">
        <Navbar />
        <StarBackground />
        <!-- <Aesthete /> -->
        <slot />
        <ClientOnly>
            <Footer />
        </ClientOnly>
    </div>
</template>