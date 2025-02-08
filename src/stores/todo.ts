import { defineStore } from "pinia";
import type { IToDo } from "@/interfaces/IToDo";
import { computed, ref } from "vue";

export const useToDoStore = defineStore('todo', () => {
  //? States
  const todoList = ref<IToDo[]>([]);
  //? Actions
  function AddTodo(task:string){

    //* Formato de Fecha: 08/02/2025, 03:01 p. m.
    const date = new Date().toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    const newTask:IToDo = { Id:todoList.value.length + 1, Task:task, Completed: false, Date: date};

    todoList.value.push(newTask);
  }

  //* Manejar el Completed en true o false
  function ToggleTodo(id:number){
    const task = todoList.value.find(tarea => tarea.Id === id);
    if(task){
      task.Completed = !task.Completed;
    }
  }

  //* Eliminar Task
  function DeleteTodo(id: number){
    todoList.value = todoList.value.filter(tarea => tarea.Id !== id)
  }

  //? Getters
  //* Datos Computados - Son Valores que se calculan automáticamente en función de otros datos reactivos y se actualizan cuando esos datos cambian
  const totalTasks = computed(() => {
    return todoList.value.length;
  });

  const totalCompleted = computed(() => {
    const total = todoList.value.filter(tarea => tarea.Completed);
    return total.length;
  });

  const totalIncompleted = computed(() => {
    const total = todoList.value.filter(tarea => tarea.Completed === false);
    return total.length;
  });

  return {
    todoList, AddTodo, ToggleTodo, DeleteTodo, totalTasks, totalCompleted, totalIncompleted
  }
});
