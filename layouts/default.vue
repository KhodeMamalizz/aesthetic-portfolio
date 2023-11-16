<template>
    <div>
        <Navbar />
        <StarBackground />
        <slot />
        <ClientOnly>
            <Footer />
        </ClientOnly>
    </div>
</template>