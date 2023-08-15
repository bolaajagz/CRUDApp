<template>
    <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas dicta unde mollitia et qui sapiente quo. Eius libero blanditiis officia, omnis deleniti molestiae corrupti voluptate dignissimos laborum, expedita sed.
            <h2>
                {{ username }}
            </h2>
            <h2>
                {{nickname }}{{ firstname }}
            </h2>
            <p>{{ count }}</p>
            <p>{{ thirdname }}</p>
            <button @click="changeName()"> Change Name</button>
             <input v-model="thirdname" type="text" />
             <p>{{ fullName }}</p>

             <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis doloremque suscipit amet sed deleniti numquam saepe facilis, repellendus vel maiores atque tenetur nihil molestias ratione voluptatibus vero obcaecati deserunt omnis.</P>
    </div>
</template>


<script>
import { ref, reactive, toRefs, computed } from 'vue'
export default {
    name: 'Composition-Api',
    setup() {
        const username = ref('clark')
        // username.value = 'diana'
        const count = ref('0')
        function changeName() {
            count.value++
            state.firstname = 'clark '
            state.nickname = ' kent'
        }


        
        const state = reactive({ //reactive can only contain object
            nickname: 'cityboy ',
            firstname: 'boycity',
            thirdname: ''
        })
        setTimeout(() => {
            state.nickname = 'john'
        }, 2000);

        const fullName = computed({
            function () {
                return `${state.firstname}${state.lastname}`
            }
        })

        console.log(state);


        return {
            username, ...toRefs(state), count, changeName, fullName
        }
    }
}
</script>