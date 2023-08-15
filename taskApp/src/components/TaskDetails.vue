<template >
  <div class="task w-1/2">
    <h3> {{ task.title }} </h3>
    <div class="icons">

      <i @click="taskStore.deleteTask(task.id)" class="material-icons ">delete</i>

      <i :class="{ active: task.isFav }" @click="taskStore.toggleFavStatus(task.id)" class="material-icons">favorite</i>

  
     <i  @click="taskStore.editTask(task.id)" class="material-icons ">edit</i>
     

    </div>


  </div>
</template>



<script>
import { useTaskStore } from '../stores/taskStore';

export default {
  name: 'TaskDetails',
  props: ['task'],
  setup() {
    const taskStore = useTaskStore()
    return { taskStore }
  }
}
</script>






<style >
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task h3,
.task .icons {
  display: inline-block;
}

.task .icons {
  text-align: right;
}

.task i {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}

.task i.active {
  color: #ff005d;
}

.task-list {
  max-width: 640px;
  margin: 20px auto;
}</style>