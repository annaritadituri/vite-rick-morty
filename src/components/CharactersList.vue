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
            v-show="index >= 0 && index < 4"
        >

            <CharacterComponent
                :image="character.image"
                :name="character.name"
                :status="character.status"
                :species="character.species"
            />

        </div>

    </div>

    <div class="row">

        <div 
            class="col-3"
            v-for="(character, index) in store.results"
            :key="index"
            v-show="index >= 4 && index < 8"
        >

            <CharacterComponent
                :image="character.image"
                :name="character.name"
                :status="character.status"
                :species="character.species"
            />

        </div>

    </div>
    <div class="row">

        <div 
            class="col-3"
            v-for="(character, index) in store.results"
            :key="index"
            v-show="index >= 8 && index < 12"
        >

            <CharacterComponent
                :image="character.image"
                :name="character.name"
                :status="character.status"
                :species="character.species"
            />

        </div>

    </div>
    <div class="row">

        <div 
            class="col-3"
            v-for="(character, index) in store.results"
            :key="index"
            v-show="index >= 12 && index < 16"
        >

            <CharacterComponent
                :image="character.image"
                :name="character.name"
                :status="character.status"
                :species="character.species"
            />

        </div>

    </div>
    <div class="row">

        <div 
            class="col-3"
            v-for="(character, index) in store.results"
            :key="index"
            v-show="index >= 16 && index < 20"
        >

            <CharacterComponent
                :image="character.image"
                :name="character.name"
                :status="character.status"
                :species="character.species"
            />

        </div>

    </div>

</template>

<style scoped>

</style>