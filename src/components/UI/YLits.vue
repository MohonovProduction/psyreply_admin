<template>
  <ul class="list">
    <template v-for="item in items" class="list__item">
      <y-block-list-item >
        {{ item.name }}
      </y-block-list-item>
    </template>
  </ul>

</template>

<script>
export default {
  name: "YList",
  components: {},

  props: {
    items: {
      type: Array,
      default: [
        { name: 'Block_1' },
        { name: 'Block_2' },
        { name: 'Block_3' },
      ]
    }}
}
</script>

<style scoped>
.list {
  display: grid;
  grid-gap: 2.5625rem;
  list-style: none;
}
</style>
