<template>
  <div class="wrapper">
    <y-left-side-bar />
    <main class="main">
      <y-modal class="main__modal">
        <header class="header">
          <h1 class="heading header__heading">Блоки</h1>
          <y-button :plus="true">Новый блок</y-button>
        </header>
<!--        U can add "items" props to list component. It must be array -->
        <y-list />
        <y-input placeholder="testik" />
      </y-modal>
    </main>
  </div>
</template>

<script>
import YModal from "@/components/UI/YModal";
import YButton from "@/components/UI/YButton";
export default {
  name: "BlockView",
  components: {}
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: min-content 1fr;
  width: 100%;
}

.main {
  padding: 4.125rem;
}
.main__modal {
  display: grid;
  grid-gap: 2.5625rem;
}

.header {
  display: grid;
  grid-template-columns: auto min-content;
}

</style>
