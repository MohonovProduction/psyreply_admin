<template>
  <div class="tabel__item">
    <h2 class="item__metric">Метрика 1</h2>
    <h3 class="item__status">Текущее</h3>
    <y-input type="text"/>
  </div>
</template>

<script>
export default {
  name: "YResultsTabelItem"
}
</script>

<style scoped>
.tabel__item{
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  align-items: center;



}
.item__metric{
  color:  rgba(255, 255, 255, 0.66);
}

</style>