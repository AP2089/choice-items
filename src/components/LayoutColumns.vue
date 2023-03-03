<template>
  <div class="layout-columns">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.layout-columns {
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 0 5rem;
}
</style>