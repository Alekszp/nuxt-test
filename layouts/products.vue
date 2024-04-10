<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <nuxt-link to="/products" class="font-bold">Nuxt Dojo Merch</nuxt-link>
            </nav>
        </header>
        <div class="container mx-auto p-4 shadow-sm">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/products">Products</nuxt-link>
                </li>
            </ul>
        </footer>
    </div>    
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        color: #12b448;
    }
</style>