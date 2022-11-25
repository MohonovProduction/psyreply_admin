<template>
  <article class="list_item">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: "YBlockListItem"
}
</script>

<style scoped>
.list_item {
  background: hsla(0, 0%, 100%, 0.17);
  padding: 1rem;
  border-color: var(--light-opacity);
  border-width: 2px;
  border-style: solid;
  border-radius: .875rem;
}
</style>
