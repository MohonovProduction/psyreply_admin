<template>
  <y-modal class="modal">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1 class="heading">Новый тест</h1>
    </header>
    <y-list />
    <y-cool-button>Сохранить блок</y-cool-button>
  </y-modal>
</template>

<script>
import YModal from "@/components/UI/YModal";
export default {
  name: "EditBlock",
  components: {YModal}
}
</script>

<style scoped>
.modal {
  display: grid;
  grid-gap: 1rem;
}
.header {
  display: grid;
  grid-template-columns: auto 1fr min-content;
  grid-gap: 2rem;
  justify-content: start;
}
</style>
