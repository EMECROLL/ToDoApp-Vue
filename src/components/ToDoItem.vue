<script setup lang="ts">
import type { IToDo } from '../interfaces/IToDo';
import { toRefs } from 'vue';
import { useToDoStore } from '@/stores/todo';
const store = useToDoStore();

//? El hijo (ToDoItem) recibe del Padre (ToDoList) las propiedades
const props = defineProps<{todo: IToDo}>();

//? Descompononemos el props
const { todo } = toRefs(props); //* Para no tener que usar: {{ props.todo.Task }} y solo usar: {{ todo.Task }}

function ToggleTodo(id: number){
  store.ToggleTodo(id);
}

function DeleteTodo(id: number){
  store.DeleteTodo(id);
}

</script>

<template>
  <!-- <li>{{ props.todo.Task }}</li> -->
  <li>
    {{ todo.Task }} -- {{ !todo.Completed ? "Pendiente" : "Completado" }} -- {{ todo.Date }}
    <button @click="ToggleTodo(todo.Id)">{{ !todo.Completed ? "Marcar" : "Desmarcar" }}</button>
    <button @click="DeleteTodo(todo.Id)">Eliminar</button>
  </li>
</template>
