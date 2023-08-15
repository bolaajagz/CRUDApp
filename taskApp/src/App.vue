<template>
  <header class="flex justify-center content-center p-10 bg-[#e7e7e7] ">
    <RouterLink to="/">
      <img src="https://pinia.vuejs.org/logo.svg" class="max-w-[60px]" />
      <h1 class="self-center text-3xl px-5 text-[#777]">Task App</h1>
    </RouterLink>
  </header>

  

  <main>
    <!-- <TaskForm /> -->

    <div v-if="filter">
      <button @click="toggleList()">Task List</button>
      <!-- Task List -->
      <h2>TASK LIST</h2>
      <p>You have {{ taskStore.totalCount }} {{ taskStore.totalCount < 2 ? 'task' : 'tasks' }} left</p>
          <div v-for="task in taskStore.tasks" :key="task.id">
            <TaskDetails :task="task" />
          </div>
    </div>

    <div v-else>
      <!-- Fav List -->
      <button @click="toggleList()">Fav List</button>
      <H2>FAV LIST</H2>
      <p> You have {{ taskStore.favsCount }} {{ taskStore.favsCount < 2 ? 'task' : 'tasks' }} left</p>
          <div class="task-list">
            <div v-for="task in taskStore.favs" :key="task.id">
              <TaskDetails :task="task" />
            </div>
          </div>
    </div>

    <!-- <div class="bg-white dark:bg-gray-800">
    <1 class="text-gray-900 dark:text-white">Dark Mode!!</1>
    <p class="text-gray-600 dark:text-gray-300">
      Example Text
    </p>
  </div> -->
  </main>
  <!-- <div>
    <p>{{ count }}</p>
    <button @click="button()">increase</button>
  </div> -->

  <!-- <DataC /> -->
  <!-- <SignUp /> -->
 <PersonParent />
  <RouterView />
</template>








<script>
import { RouterLink } from 'vue-router';
import { useTaskStore } from './stores/taskStore';
import TaskDetails from '@/components/TaskDetails.vue';
import { onMounted, onUnmounted, onUpdated } from 'vue';
import PersonParent from '@/components/PersonParent.vue';
// import TaskForm from '@/components/TaskForm.vue';
// import DataC from '@/components/DataC.vue';
// import SignUp from '@/components/SignUp.vue';

export default {
  name: 'Task-App',
  components: { TaskDetails, RouterLink, PersonParent },

  setup() {
    const taskStore = useTaskStore()
    taskStore.getTasks()

    onMounted(() => {
      console.log('mounted');
    })

    onUnmounted(() => {
      console.log(
        'unmounted'
      );
    })

    onUpdated(() => {
      console.log('updated');
    })


    return { taskStore, }
  },

  data() {
    return {
      filter: true
    }
  },
  methods: {
    toggleList() {
      this.filter = this.filter === true ? false : true
    }
  },
  // mounted() {
  //     console.log(`the component is now mounted.`)
  //     let user = localStorage.getItem('user-info')
  //     if (!user) {
  //       this.$router.push('/')
  //     }

  // }
  // mounted() {
  //   this.$refs.input.focus()
  // }

}

</script>
