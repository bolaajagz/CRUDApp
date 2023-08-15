<template>
    <div v-if="!isLoggedOut">
        <div class="logout">
            <button @click="handleLogout">Log Out</button>
        </div>

        <div>
            <form @submit.prevent="handleSubmit">
                <input v-model="newTask" placeholder="I need to...." type="text" ref="focusInput"  />
                <button>Add Task</button>
            </form>
        </div>
    </div>


    <div v-else 
        class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 absolute top-0 right-0"
        role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-medium">Hi User😍!</span> You Are Now Logged Out
        </div>
    </div>
</template>


<script>
import { useRouter } from 'vue-router'
import { useTaskStore } from '../stores/taskStore';
import { ref, onMounted } from 'vue';
export default {
    name: 'taskForm',
    setup() {
        const taskStore = useTaskStore()
        const router = useRouter()

        const isLoggedOut = ref(false)
        const focusInput = ref(null)

        // Button that hanldes the logout
        const handleLogout = () => {
            localStorage.removeItem('user-info')
            setTimeout(() => {
                router.push('/login')
            }, 3000);
            isLoggedOut.value = true
            console.log('click');
        }

        onMounted(() => {
            focusInput.value.focus()
        })

        return { taskStore, handleLogout, router, isLoggedOut, focusInput }
    },
    data() {
        return {
            newTask: ''
        }
    },
    methods: {
        handleSubmit() {
            if (this.newTask.length > 0) {
                this.newTask = this.taskStore.addTask({
                    title: this.newTask,
                    isFav: false,
                    id: Math.floor(Math.random() * 98) + 3
                })
            }
            this.newTask = ''
        }

    },

}
</script>

<style>
button {
    display: inline-block;
    margin-left: 10px;
    background: #ffd859;
    border: 2px solid #555;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 0.8em;
    font-size: 1em;
}

/* new task form */
.new-task-form {
    background: #e7e7e7;
    padding: 20px 0;
}

form {
    max-width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 10px;
}

form button {
    background: #ffd859;
    border: 0;
    padding: 10px;
    font-family: "Poppins";
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
}

form input {
    border: 0;
    padding: 10px;
    border-radius: 6px;
    color: #555;
    font-size: 1em;
}

.logout {
    display: flex;
    justify-content: center;
    margin: 10px 10px 10px 10px
}
</style>