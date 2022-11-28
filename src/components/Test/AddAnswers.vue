<template>
  <y-modal class="modal">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1 class="heading">Добавить ответы</h1>
    </header>
    <artical class="answers__add">
    <y-input placeholder="Введите ответ"></y-input>
      <div class="question__coins">
        <label class="label">
          Баллы за ответ
        </label>
        <y-input class="question__input" />

      </div>
      <y-button class="question__del">X</y-button>
    </artical>



    <hr/>
    <div class="anw__add__button">
      <button class="plus">+</button>
    </div>

  </y-modal>
</template>

<script>
import YInput from "@/components/UI/YInput";
export default {
  name: "AddAnswers",
  components: {YInput}
}
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: auto 1fr min-content;
  grid-gap: 2rem;
  justify-content: start;
  align-items: center;
}
.answers__add{
  display: grid;
  grid-template-columns: 60% 1fr 1fr;
  align-items: center;
  margin-top: 50px;
  grid-gap: 1.875rem;
}
.question__coins {
  display: grid;
  grid-template-columns: max-content minmax(50px, 100px);
  align-items: center;
  grid-gap: .3em;
}
.question__input {
  padding: .3em;
}
.question__del {
  color: red;
  width: min-content;
}
hr {
  margin-top: 30px;
  margin-bottom: 30px;
  min-width: 30vw;
  border-left: 0px solid white;
  border-right: 0px solid white;
  border-bottom: 0px solid white;
  border-top: 1px solid rgba(255, 255, 255, 0.52);
}
.anw__add__button{
  display: flex;
  align-items: center;
  justify-content: center;
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