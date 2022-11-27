<template>
  <y-modal class="modal">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1 class="heading">Новая компания</h1>
      <y-button :plus="true">Добавить блок</y-button>
    </header>
    <y-input
        v-model="testName"
        placeholder="Название компании"
    />
    <y-list />
    <y-cool-button>Создать компанию</y-cool-button>
  </y-modal>
</template>

<script>
export default {
  name: "CreateCompany",
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
