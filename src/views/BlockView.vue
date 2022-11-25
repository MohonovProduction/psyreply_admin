<template>
  <div class="wrapper">
    <y-left-side-bar />
    <main class="main">
      <y-block-list-item>
        Абоба
      </y-block-list-item>
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
  grid-template-columns: min-content max-content;
}

</style>
