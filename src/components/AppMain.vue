<script>

    import SearchBar from './SearchBar.vue';
    import CharactersList from './CharactersList.vue';
    import { store } from '../store';
    import axios from 'axios';


    export default {
        name: 'Main',

        data() {

            return {
                store,
            };

        },

        components: {
            SearchBar,
            CharactersList,
        },

        methods: {

            searchCards() {

                this.store.loading = true;

                if(this.store.statusSearch) {
                    this.filterCardsStatus();
                } else if(this.store.charSearch) {
                    this.filterCardsChar();
                } else {

                    axios.get(this.store.apiInfo.url).then((response) => {
                    
                        this.store.info = response.data.info;
                        this.store.results = response.data.results;
                        this.store.loading = false;
                        this.filterAllStatus();

                    });

                };

            },

            filterAllStatus() {

                for (let i = 0; i < this.store.results.length; i++) {

                    if (!this.store.allStatus.includes(this.store.results[i].status)) {
                        this.store.allStatus.push(this.store.results[i].status);
                    };

                };

            },

            filterCardsStatus() {
                
                axios.get(this.store.apiInfo.url, {
                    params: {
                        status: this.store.statusSearch,
                    }  
                }).then((response) => {
                    
                    this.store.info = response.data.info;
                    this.store.results = response.data.results;
                    this.store.loading = false;
                    this.filterAllStatus();

                });
            },

            filterCardsChar() {
                
                axios.get(this.store.apiInfo.url, {
                    params: {
                        name: this.store.charSearch,
                    }  
                }).then((response) => {
                    
                    this.store.info = response.data.info;
                    this.store.results = response.data.results;
                    this.store.loading = false;

                });
            },

            searchFilter() {

                axios.get(this.store.apiInfo.url, {
                    params: {
                        name: this.store.charSearch,
                        status: this.store.statusSearch,
                    }  
                }).then((response) => {
                    
                    this.store.info = response.data.info;
                    this.store.results = response.data.results;
                    this.store.loading = false;
                    this.filterAllStatus();

                });

            },

            resetValues() {
                this.store.statusSearch = null;
                this.store.charSearch = null;
                this.searchCards();
            },

            nextPage() {

                if(this.store.info.next) {

                    axios.get(this.store.info.next).then((response) => {
                    
                        this.store.info = response.data.info;
                        this.store.results = response.data.results;
                        this.store.loading = false;
                        this.filterAllStatus();

                    });

                }

            },

            prevPage() {

                if(this.store.info.prev) {

                    axios.get(this.store.info.prev).then((response) => {
                    
                        this.store.info = response.data.info;
                        this.store.results = response.data.results;
                        this.store.loading = false;
                        this.filterAllStatus();

                    });

                }

            }

        },

        created() {

            this.searchCards();

        }
    }

</script>

<template>

    <SearchBar
        @search="searchCards()"
        @searchAll="searchFilter()"
        @reset="resetValues()"
    />
    <CharactersList
        @next="nextPage()"
        @prev="prevPage()"
    />

</template>

<style scoped>
</style>