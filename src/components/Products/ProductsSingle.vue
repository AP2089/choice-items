<template>
  <div class="products__single">
    <div
      class="products__single-wrap"
      v-if="selected.length > 0"
    >
      <div
        class="products__single-item"
        v-for="item in selected"
        :key="item.id"
        @click="$emit('remove', item.id)"
      >
        {{ item.name }}
      </div>
    </div>

    <ProductsMessage
      v-else
    />
  </div>
</template>

<script setup>
import ProductsMessage from '@/components/Products/ProductsMessage';

const { items } = defineProps([
  'selected'
]);
</script>

<style lang="scss" scoped>
.products {
  &__single {
    margin-bottom: 3rem;
  }

  &__single-wrap {
    display: flex;
    justify-content: flex-end;
  }

  &__single-item {
    width: 50%;
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