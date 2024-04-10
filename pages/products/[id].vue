<template>
    <div>
        <Head>
            <Title>
                Nuxt Dojo | {{ product.title }}
            </Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>

    const { id } = useRoute().params
    const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id })

    if (!product.value) {
        throw createError({statusMessage: 'Product not found', statusCode: 404, fatal: true})
    }

    definePageMeta({
        layout: 'products'
    })

</script>

<style scoped>
    
</style>