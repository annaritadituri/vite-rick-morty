import { reactive } from 'vue';

export const store = reactive({
    results: [],
    info: {},
    allStatus: [],
    apiInfo: {
        
        url: 'https://rickandmortyapi.com/api/character',
        name: 'name',
        status: 'status',

    },
    loading: true,
    statusSearch: null,
    charSearch: null,
});