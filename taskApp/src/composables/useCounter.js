import { ref } from "vue";

export default function useCounter() {
    const count = ref(0)

    function addCount() {
        count.value = count.value + 2
    }

    return { count, addCount }
}

// Composables/custom hooks: basically means writing your function for reusability case
// emit: emitting events means that you are sending an event listner from parent to child
// props: youre sending data from parent to child