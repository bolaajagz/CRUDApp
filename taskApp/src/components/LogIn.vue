<template>
    <div v-if="!isloggedIn">
        <form @submit.prevent="handleSignUp">
            <input v-model="username" type="text" placeholder="Username" />

            <input v-model="password" type="password" placeholder="Password" />

            <button @click="handleLogin">Log In</button>

            <RouterLink to="/">
                <button>Not A Member? Create Account</button>
            </RouterLink>
        </form>
    </div>

    <div v-else
        class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 absolute top-0 right-0"
        role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-medium">Hi {{ username }}😍!</span> Welcome Back
        </div>
    </div>
</template>

<script setup>

import { ref,  } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const username = ref('ajagz')
const password = ref('pass')
const isloggedIn = ref(false)

// onMounted(() => {
//     console.log(`the component is now mounted.`)
//     let user =   localStorage.getItem('user-info')
//     if (user) {
//       router.push('/')
//     }
// })
// const show = fetch('http://localhost:3000/signUp/1')
// console.table(router.params.id);
// console.log(show);
const handleLogin = async () => {
    const resp = await fetch('http://localhost:3000/signUp')

    const data = await resp.json()
    const userDetails = data.map(user => ({ username: user.username, password: user.password }));
    // console.table(userDetails);

    const userInfoExists = userDetails.some(user => user.username === username.value && user.password === password.value);


    if (userInfoExists) {
        setTimeout(() => {
            router.push('/task-form')
        }, 3000);
        isloggedIn.value = true
        localStorage.setItem('user-info', userInfoExists)

    } else {
        alert("User does not exist")
}



}

</script>

<!-- <style lang="scss" scoped></style> -->