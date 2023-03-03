<template>
  <div
    class="products__list"
    v-if="items.length > 0"
  >
    <div
      v-for="item in items"
      :class="[
        'products__item',
        { active: selected.filter(e => e.id === item.id).length > 0 }
      ]"
      :key="item.id"
      @click="$emit('add', item.id)"
    >
      {{ item.name }}
    </div>
  </div>
  
  <ProductsMessage
    v-else
  />
</template>

<script setup>
import ProductsMessage from '@/components/Products/ProductsMessage';

const { items, selected } = defineProps([
  'items',
  'selected'
]);
</script>

<style lang="scss" scoped>
.products {
  &__list {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    gap: 1rem 1rem;
  }

  &__item {
    border: 0.2rem solid $color-global;
    min-height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    transition: border-color .5s ease 0s, color .5s ease 0s;

    &:hover,
    &.active {
      color: $color-danger;
      border-color: $color-danger;
    }

    &.active {
      cursor: default;
    }
  }
}
</style>