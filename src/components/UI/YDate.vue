<template>
  <div class="YDate">
    <y-button><div class="date__img"><p class="date__title">Дата</p><img src="@/assets/img/cathedral.svg" alt=""></div></y-button>
  </div>
</template>

<script>
import YButton from "@/components/UI/YButton";
export default {
  name: "YDate",
  components: {YButton}
}
</script>

<style scoped>
.date__img{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}
.date__title{
  margin-right:1rem ;
  font-size: 1rem;
}
</style>