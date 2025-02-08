import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter",() => {

    //? States - Estados
    const count = ref<number>(0);
    const name = ref<string>("Manuel Pasos");

    //? Getters - Obtenedores
    const doubleCount = computed(() =>
      count.value * 2
    );

    const nameUpperCase = computed(() => {
      return name.value.toUpperCase();
    })

    //? Actions - Acciones
    function increment() {
        count.value++;
    }

    function reverseName (){
      const reverse = name.value.split("").reverse().join("");
      name.value = reverse;
    }

    return {
      count, name, increment, reverseName, doubleCount, nameUpperCase
    }
});
