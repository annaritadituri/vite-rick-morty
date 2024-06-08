<script>

    import HeaderComponent from './components/HeaderComponent.vue';
    import Main from './components/AppMain.vue';

    export default {
        name: 'MyApp',
        components: {
            HeaderComponent,
            Main,

        },
    }

</script>

<template>

    <div class="container text-center">

        <HeaderComponent />
        <Main />

    </div>

</template>

<style scoped>
</style>
