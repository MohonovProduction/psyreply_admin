<template>
  <article class="question">
    <span class="question__id">{{id}}.</span>
    <y-input v-model="question.title" />
    <div class="question__coins">
      <label class="label">
        Баллы “Да”
      </label>
      <y-input v-model="question.answers[0].value" class="question__input" />
      <label class="label">
        Баллы “Нет”
      </label>
      <y-input v-model="question.answers[1].value" class="question__input" />
    </div>
    <y-button class="question__del">X</y-button>
  </article>
</template>

<script>
export default {
  name: "YTestType1",
  props: {
    id: Number
  },
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
      }
    }
  },
  methods: {

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
  grid-template-rows: repeat(2, auto);
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
</style>
