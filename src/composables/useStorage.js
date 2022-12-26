import { ref, watch } from "vue";

export function useStorage(key, val = null) {
  let storedValue = read();
  if (storedValue) {
    val = ref(storedValue);
  } else {
    val = ref(val);
    writ();
  }

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  watch(val, writ, { deep: true });

  function writ() {
    if (val.value === "" || val.value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(val.value));
    }
  }

  return val;
}
