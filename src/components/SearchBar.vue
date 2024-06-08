<script>

    import { store } from '../store';

    export default {
        name: 'Search Bar',
        emits: ['search', 'searchAll', 'reset'],

        data() {

            return {
                store,
            }

        },

    }

</script>

<template>

    <div class="search-bar d-flex justify-content-center my-4">

        <div class="row g-2 align-items-center w-50">

            <div class="col">

                <div class="form-floating">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInputGrid"
                    placeholder="Character"
                    v-model="store.charSearch"
                    @change="$emit('search')"
                >
                <label for="floatingInputGrid">Select character</label>
                </div>

            </div>
            <div class="col">

                <div class="form-floating">
                <select
                    class="form-select"
                    id="floatingSelectGrid"
                    @change="$emit('search')"
                    v-model="store.statusSearch"
                >

                    <option
                        v-for="status in store.allStatus"
                    >
                        {{ status }}
                    </option>

                </select>
                <label for="floatingSelectGrid">Select status</label>

                </div>
            </div>

            <div class="col-3 d-flex flex-row">

                <button
                    type="button"
                    class="btn btn-primary mx-3"
                    @click="$emit('searchAll')"
                >
                    Search
                </button>
                <button
                    type="button"
                    class="btn btn-warning"
                    @click="$emit('reset')"
                >
                    Reset
                </button>

            </div>

        </div>

        

    </div>

    

</template>