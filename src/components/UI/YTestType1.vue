<template>
<div class="test__type__1">
  <y-input placeholder="Введите вопрос"/>
  <div class="scors">
    <div class="scor__item scors__yes">
      <div>Баллы "Да" </div>
      <y-input></y-input>
    </div>
    <div class="scor__item scors__no">
      <div>Баллы "Нет" </div>
      <y-input></y-input>
    </div>
  </div>
</div>
</template>

<script>
import YInput from "@/components/UI/YInput";
export default {
  name: "YTestType1",
  components: {YInput}
}
</script>

<style scoped>
.test__type__1{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

}
.scors{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scor__item{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:row;
}

</style>