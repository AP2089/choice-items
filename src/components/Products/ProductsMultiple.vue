<template>
  <div class="products__multiple">
    <div
      class="products__multiple-wrap"
      v-if="selected.length > 0"
    >
      <div class="products__multiple-list">
        <div
          class="products__multiple-item"
          v-for="item in selected"
          :key="item.id"
          @click="$emit('remove', item.id)"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="products__multiple-counter">
        Selected: {{ selected.length }} / {{ items.length }}
      </div>
    </div>

    <ProductsMessage
      v-else
    />
  </div>
</template>

<script setup>
import ProductsMessage from '@/components/Products/ProductsMessage';

const { selected, items } = defineProps([
  'selected',
  'items'
]);
</script>

<style lang="scss" scoped>
.products {
  &__multiple {
    margin-bottom: 3rem;
  }

  &__multiple-list {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    gap: 0 0.5rem;
    margin-bottom: 1rem;
  }

  &__multiple-item {
    border: 0.2rem solid $color-global;
    min-height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    transition: border-color .5s ease 0s, color .5s ease 0s;

    &:hover {
      color: $color-danger;
      border-color: $color-danger;
    }
  }
}
</style>