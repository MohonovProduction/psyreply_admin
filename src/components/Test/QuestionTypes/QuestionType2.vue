<template>
  <article class="question">
    <span class="question__id">{{relativeId+1}}</span>
    <y-input @input="giveData" v-model="question.title" />
    <div class="question__coins">
      <label class="label">Баллы “Да”</label>
      <y-input @input="giveData" v-model="question.answers[0].value" class="question__input" />
      <label class="label">Баллы “Нет”</label>
      <y-input @input="giveData" v-model="question.answers[1].value" class="question__input" />
      <label class="label">Монеты</label>
      <y-input @input="giveData" v-model="question.coins" class="question__input" />
    </div>
    <y-button @click="$emit('remove')" class="question__del">X</y-button>
  </article>
</template>

<script>
export default {
  name: "QuestionType2",
  props: [ 'id', 'relativeId'],
  data() {
    return {
      question: {
        title: null,
        picture: null,
        answers: [
          {
            id: 1,
            title: 'Да',
            value: null
          },
          {
            id: 2,
            title: 'Нет',
            value: null
          }
        ],
        coins: null
      },
    }
  },
  methods: {
    giveData() {
      this.$emit('giveData', this.question)
    },
  }
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
.question__coins {
  display: grid;
  grid-template-columns: max-content minmax(50px, 100px);
  align-items: center;
  grid-gap: .3em .5em;
}
.question__input {
  padding: .3em;
}
.question__del {
  color: red;
  width: min-content;
}
</style>
