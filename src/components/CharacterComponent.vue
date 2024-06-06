<script>

    export default {

        name: 'CharacterComponent',
        props: ['name', 'image', 'status', 'species'],

    }

</script>

<template>

    <div class="character mb-5">

        <img :src="image" alt="avatar" class="rounded-circle">
        <h2 class="fs-4 fw-light py-4 m-0">{{ name }}</h2>
        <p class="m-0 fw-light">{{ status }}</p>
        <p class="m-0 fw-light">{{ species }}</p>

    </div>

</template>

<style scoped>

img {
    width: 100%;
    box-shadow: 0px 0px 19px 6px rgba(145,145,145,0.39)
}

</style>