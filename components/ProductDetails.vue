<template>
    <div>
        <img :src="product.image" :alt="product.title">
        <h3>{{ product.title }}</h3>
        <p><b>Desription:</b> {{ product.description }}</p>
        <p><b>Price:</b> {{ product.price }}</p>
        <button class="btn flex my-7">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to Cart</span>
        </button>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
    h3 {
        margin-bottom: 20px;
        font-size: 28px;
    }
    p {
        margin: 20px 0;
    }
    img {
        max-width: 200px;
    }
</style>