<script>

    import CharacterComponent from './CharacterComponent.vue'
    import { store } from '../store';
    import axios from 'axios';

    export default {
        name: 'Characters List',
        components: {
            CharacterComponent,
        },

        data() {

            return {
                store,
            }

        },

        created() {

            axios.get(this.store.apiUrl).then( (response) => {
                this.store.info = response.data.info;
                this.store.results = response.data.results;
            });
        }
    }

</script>

<template>

    <div class="row">

        <div 
            class="col-3"
            v-for="(character, index) in store.results"
            :key="index"
        >

            <CharacterComponent
                :image="character.image"
                :name="character.name"
                :status="character.status"
                :species="character.species"
            />

        </div>

    </div>

    <p class="fw-bold">Found 20 of {{ store.info.count }} characters</p>

</template>

<style scoped>

</style>