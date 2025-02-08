<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  //? Importamos el Store del Counter
  import { useCounterStore } from '../stores/counter'
  const store = useCounterStore();

  //? Importamos el storeToRefs para poder acceder a las propiedades del store
  import { storeToRefs } from 'pinia';
  const { count, name, doubleCount, nameUpperCase } = storeToRefs(store);

  const { increment, reverseName } = store;
</script>

<template>
  <div>
    <p>Counter: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p>Name: {{ name }} - {{ nameUpperCase }}</p>

    <button @click="increment">Increment</button>
    <button @click="reverseName">Reverse Name</button>
  </div>
</template>
