<template>
    <div>
<!-- <p>hello {{ props.firstname }}  {{ props.lastname }}</p> -->
<p> hello {{ fullname }}</p>
<button @click="sendEvent">Call Hero</button>
    </div>
</template>

<script setup>

import {computed } from 'vue'

const props = defineProps(['firstname', 'lastname'])
// const fullname = computed({
//  `${props.firstname}-${props.lastname}`
// })
const fullname = computed(() => {
    return `${props.firstname}-${props.lastname}`
})
const emit =defineEmits(['callHeroes'])
function sendEvent() {
    emit('callHeroes', fullname.value)
}

</script>

<style lang="scss" scoped>

</style>