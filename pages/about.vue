<template>
    <div>
        <h2>About</h2>
        <p>About about about about about about about about about about about about about about about about about about about about about about about about about</p>
        <!-- <p>api call data message: {{ message }}</p>
        <p>api call data currencies: {{ data }}</p> -->
        <p>{{ USD }}</p>
    </div>
</template>

<script setup>
    // const { data: { value: { message, currencies: { data } } } } = await useFetch('/api/server?name=alex', {
    //     method: 'POST',
    //     body: { age: 30 }
    // })
    const { data: {value:  { data: { USD } }} } = await useFetch('/api/currency/USD')
    
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>