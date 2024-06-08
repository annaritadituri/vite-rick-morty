<script>

    import CharacterComponent from './CharacterComponent.vue'
    import { store } from '../store';

    export default {
        name: 'Characters List',

        data() {

            return {
                store,
            };

        },
        
        components: {
            CharacterComponent,
        },

        emits: ['prev', 'next'],

    }

</script>

<template>

    <p v-if="store.loading === true">Caricamento in corso...</p>

    <div class="row" v-else>

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

    <div class="found">
        
    </div>

    <p class="fw-bold">Found {{ store.info.count }} characters</p>

    <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link"><button class="border-0 bg-transparent" @click="$emit('prev')">Previous</button></a></li>
        <li class="page-item"><a class="page-link"><button class="border-0 bg-transparent" @click="$emit('next')">Next</button></a></li>
    </ul>

</template>

<style scoped>

</style>