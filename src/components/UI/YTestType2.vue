<template>
  <article class="question">
    <span class="question__id">2.</span>
    <y-input/>
   <div class="question__title__add">
    <h3>Ответы</h3>
     <button class="question__add plus">+</button>
   </div>
    <y-button class="question__del">X</y-button>
  </article>
</template>

<script>
import YButton from "@/components/UI/YButton";
export default {
  name: "YTestType2",
  components: {YButton}
}
</script>

<style scoped>
.question {
  display: grid;
  grid-template-columns: auto auto auto min-content;
  grid-gap: 1.3rem;
  align-items: center;
}
.question__id {
  font-size: 2rem;
}

.question__del {
  color: red;
  width: min-content;
}
.question__title__add{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.question__add{
  width: min-content;
}
.plus{
  margin-left:10px ;
  background: rgba(255, 255, 255, 0.17);
  border-radius: 7px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  width: 26px;
  height: auto;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;

}
</style>