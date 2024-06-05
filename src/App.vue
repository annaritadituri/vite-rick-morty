<script>

    import HeaderComponent from './components/HeaderComponent.vue';
    //import SearchBar from './components/SearchBar.vue';
    import CharactersList from './components/CharactersList.vue';

    export default {
        name: 'MyApp',
        components: {
            HeaderComponent,
            //SearchBar,
            CharactersList,
        },
    }

</script>

<template>

    <div class="container text-center">

        <HeaderComponent />
        <CharactersList />

    </div>

</template>

<style scoped>
</style>
