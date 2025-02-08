<script lang="ts" setup>
import { useToDoStore } from '@/stores/todo';
import { ref } from 'vue';

const store = useToDoStore();

//? Creamos la Referencia
const task = ref<string>("");

//? Agregar la Tarea
function addNewTask(){
  store.AddTodo(task.value);
  task.value = "";
}

</script>

<template>
  <form @submit.prevent="addNewTask">
    <input type="text" v-model="task" required>
    <button type="submit">Add Task</button>
  </form>
</template>
