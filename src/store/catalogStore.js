import { defineStore } from 'pinia';
import useProducts from '@/composables/useProducts';
import products from '@/api/products';

const useCatalogStore = defineStore('catalogStore', () => {
  const { items, selected, addItem, removeItem } = useProducts({
    name: 'catalog',
    items: products.catalog,
    limit: 1
  });

  return {
    items,
    selected,
    addItem,
    removeItem
  }
});

export default useCatalogStore;