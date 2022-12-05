<template>
  <div class="y-results-table">
    <y-results-tabel-item/>
    <y-results-tabel-item/>
    <y-results-tabel-item/>
    <y-results-tabel-item/>
    <y-results-tabel-item/>
  </div>

</template>

<script>
export default {
  name: "YResultsTabel"
}
</script>

<style scoped>
.y-results-table{
  display: grid;
  grid-gap: 1rem;
}

</style>