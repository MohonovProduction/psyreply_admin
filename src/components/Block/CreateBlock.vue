<template>
  <y-modal class="modal">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1 class="heading">Новый блок</h1>
      <y-button :plus="true">Добавить тест</y-button>
    </header>
    <y-input
      v-model="testName"
      placeholder="Название теста..."
    />
    <y-list />
    <y-cool-button>Сохранить блок</y-cool-button>
  </y-modal>
</template>

<script>
export default {
  name: "CreateBlock",
  components: {},
  data() {
    return {
      testName: null
    }
  }
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
  align-items: center;
}
</style>
