<template>
    <div>
<input v-model="firstname" type="text" />
<input v-model="lastname" type="text" />
    </div>

    <PersonGreetingChild :firstname="firstname"  :lastname="lastname" @callHeroes="callHeroes"/>

    <button @click="addCount">count</button>
    {{ count }}
   
</template>

<script setup>
import { ref } from 'vue';
import PersonGreetingChild from './PersonGreetingChild.vue';
import useCounter from '../composables/useCounter'

const firstname = ref('')
const lastname = ref('')
function callHeroes(hero) {
    alert(`calling ${hero}`)
}
// const count = ref(0)
const { count, addCount } = useCounter()

// function counter() {
//     addCount
//     console.log('clicked');
// }

</script>

<style lang="scss" scoped>

</style>