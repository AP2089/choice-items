<template>
  <LayoutBase>
    <LayoutColumns>
      <Products
        type="multiple"
        :items="userStore.items"
        :selected="userStore.selected"
        @add="userStore.addItem"
        @remove="userStore.removeItem"
        
      />

      <Products
        type="single"
        :items="catalogStore.items"
        :selected="catalogStore.selected"
        @add="catalogStore.addItem"
        @remove="catalogStore.removeItem"
      />
    </LayoutColumns>
  </LayoutBase>
</template>

<script setup>
import LayoutBase from '@/components/LayoutBase';
import LayoutColumns from '@/components/LayoutColumns';
import Products from '@/components/Products';
import useUserStore from '@/store/userStore';
import useCatalogStore from '@/store/catalogStore';

const userStore = useUserStore();
const catalogStore = useCatalogStore();
</script>