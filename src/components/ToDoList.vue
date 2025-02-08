<script lang="ts" setup>
import { useToDoStore } from '@/stores/todo';
import TodoItem from './ToDoItem.vue';

const store = useToDoStore();

import { storeToRefs } from 'pinia';
const { todoList } = storeToRefs(store);
</script>

<template>
  <ul>
    <!-- Un For para recorrer todo lo que contiene todoList -->
     <template v-for="todo in todoList" :key="todo.Id">
      <!-- Le enviamos al hijo(ToDoItem) el todo -->
       <TodoItem :todo = todo></TodoItem>
     </template>
  </ul>
</template>
