<script lang="ts" setup>
import ToDoForm from '@/components/ToDoForm.vue';
import ToDoList from '@/components/ToDoList.vue';
import { useToDoStore } from '@/stores/todo';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const store = useToDoStore();
const { totalTasks, totalCompleted } = storeToRefs(store);

//? Cuando se imprime {{ totalTasks }} al tener las {} imprime el valor, si quiero usarlo en otra funcion debo agregar el .value
// console.log(totalTasks);
// console.log(totalTasks.value);

const hasTask = computed(() => {
  return totalTasks.value > 0 ? true : false
})

</script>

<template>
  <div>
    <h1>ToDo App</h1>
    <p>Total de Tareas: {{ totalTasks }}</p>
    <!-- Un If donde solo si hay hareas muestra el conteo -->
    <p v-if="hasTask">Tareas Completadas: {{ totalCompleted }}/{{ totalTasks }}</p>
    <ToDoForm></ToDoForm>
    <ToDoList></ToDoList>
    <p v-if="!hasTask"> Sin Tareas Pendientes...</p>
  </div>
</template>
