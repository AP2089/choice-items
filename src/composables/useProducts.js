import { ref } from 'vue';

const useProducts = (props) => {
  const localStorageName = `${props.name}Selected`;
  const items = ref(props.items);
  const selected = ref(JSON.parse(localStorage.getItem(localStorageName)) || []);

  const addItem = (id) => {
    if (selected.value.length < props.limit && selected.value.filter(e => e.id === id).length === 0) {
      const item = items.value.filter(e => e.id === id);

      selected.value = [
        ...selected.value,
        ...item
      ]
    }

    setLocalStorage();
  }

  const removeItem = (id) => {
    selected.value = selected.value.filter(e => e.id !== id);

    setLocalStorage();
  }

  const setLocalStorage = () => {
    localStorage.setItem(localStorageName, JSON.stringify(selected.value));
  }

  return {
    items,
    selected,
    addItem,
    removeItem
  }
}

export default useProducts;