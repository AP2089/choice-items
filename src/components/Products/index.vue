<template>
  <div class="products">
    <ProductsMultiple
      v-if="type === 'multiple'"
      :selected="selected"
      :items="items"
      @remove="$emit('remove', $event)"
      
    />

    <ProductsSingle
      v-else-if="type === 'single'"
      :selected="selected"
      @remove="$emit('remove', $event)"
    />

    <ProductsList
      :items="items"
      :selected="selected"
      @add="$emit('add', $event)"
    />
  </div>
</template>

<script setup>
import ProductsList from '@/components/Products/ProductsList';
import ProductsMultiple from '@/components/Products/ProductsMultiple';
import ProductsSingle from '@/components/Products/ProductsSingle';

const { items, selected, type, limit } = defineProps({
  items: {
    type: Array,
    required: true
  },
  selected: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});
</script>