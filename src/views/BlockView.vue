<template>
  <div class="wrapper">
    <y-left-side-bar />
    <main class="main">
      <y-modal>
        <y-list />
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

</style>
