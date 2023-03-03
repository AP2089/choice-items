import { defineStore } from 'pinia';
import useProducts from '@/composables/useProducts';
import products from '@/api/products';

const useUserStore = defineStore('userStore', () => {
  const { items, selected, addItem, removeItem } = useProducts({
    name: 'user',
    items: products.user,
    limit: 6
  });

  return {
    items,
    selected,
    addItem,
    removeItem
  }
});

export default useUserStore;