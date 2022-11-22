<template>
  <div class="wrapper">
    <y-left-side-bar />
    <main class="main">
    <y-modal>
      <y-button :plus="false">Новый блок</y-button>
    </y-modal>
    </main>
  </div>
</template>

<script>
import YModal from "@/components/UI/YModal";
import YButton from "@/components/UI/YButton";
export default {
  name: "BlockView",
  components: {YButton, YModal}
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: min-content max-content;
}

</style>
