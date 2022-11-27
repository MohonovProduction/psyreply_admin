<template>
  <y-modal class="modal">
      <header class="header">
        <y-left-arrow-button @click="$emit('close')" />
        <h1 class="heading">Новый тест</h1>
      </header>

      <article class="main"> <!-- We can use main единожды !-->
        <div class="main__input_coins">
          <y-input v-model="newTest.title" placeholder="Название теста..."/>
          <div class="coins">
            <img src="@/assets/img/coins.svg" alt="">
            <div class="count">200</div>
          </div>
        </div>

        <div class="types">
          <div class="type__test">
            <div class="type__test__title">Тип теста</div>
            <y-mini-button
              v-for="type in types"
              :key="`${type.name}${type.id}`"
              @click="selectType(type.id)"
            >{{type.name}}</y-mini-button>
          </div>
          <div class="type__test">
            <div class="type__test__title">Тип метрики</div>
            <y-mini-button
              v-for="metric in metrics"
              :key="`${metric.name}${metric.id}`"
              @click="selectMetric(metric.id)"
              class="type__test__type"
            >{{metric.name}}</y-mini-button>
          </div>
        </div>
      </article>

      <hr/>

      <section class="questions">
        <div class="header__plus">
          <h2 class="heading">Вопросы</h2>
          <button @click="addQuestion" class="plus">+</button>
        </div>

        <y-test-type1 :id="1" />

        <div class="questions__list">
          <div class="state_1" v-if="newTest.questions.length === 0">Здесь будет отображаться список вопросов. <span
            @click="this.window
          ='newtest'">Начните с создание нового вопроса</span></div>
          <div v-else>
            <y-test-type1
              v-for="test in newTest.questions"
              :test="test"
            />
          </div>
        </div>

      </section>
  </y-modal>
</template>

<script>
class Answer {
  id = null
  title = null
  value = null //count of balls

  constructor(id, title, value) {
    this.id = id
    this.title = title
    this.value = value
  }

}

class Question {
  title = null
  metric = null
  coins = null
  answer = null
  formula = null

  constructor(title = null, metric = null, coins = null, answer = null, formula = null) {
    this.title = title
    this.metric = metric
    this.coins = coins
    this.answer = answer
    this.formula = formula
  }

  checkFormula(formula) {

  }
}

import YMiniButton from "@/components/UI/YMiniButton";
import YTestType1 from "@/components/UI/YTestType1";
import Metric from '@/api/admin/Metric';
import QuestionType from '@/api/admin/QuestionType';
export default {
  name: "CreateTest",
  components: {YTestType1, YMiniButton},
  data(){
    return{
      types: [],
      metrics: [],
      window:"default",
      newTest: {
        type: null,
        title: null,
        formula: null,
        metric: null,
        questions: []
      }
    }
  },
  created() {
    const metric = new Metric
    metric.getOne()
      .then(res => {
        console.log(res)
        this.metrics = res
      })
    const types = new QuestionType
    types.getOne()
      .then(res => {
        console.log(res)
        this.types = res
      })
  },
  methods: {
    selectType(id) {
      this.newTest.type = id
    },
    selectMetric(id) {
      this.newTest.metric = id
    },
    addQuestion() {
      this.newTest.questions.push(new Question())
    }
  }
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
.coins{
  display: grid;
  grid-template-columns: auto 1fr min-content;
  grid-gap: 0.5rem;
  align-items: center;
}
.main__input_coins{
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 4rem;
  align-items: center;
  grid-gap: 1rem;

}
.type__test {
  margin-top: 40px;
  display: flex;
  align-items: center;
}
.types__test{
  display: grid;
  grid-template-columns: repeat(4,9rem);
  grid-gap: 1rem;
}
.type__test__title{
  font-size: 1rem;
  margin-right: .5rem;
}
.type__test__type {
  margin-right: .5rem;
}
.type__test__type:last-child {
  margin: 0;
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
.header__plus{
  display: flex;
  align-items: center;

}
.questions__list{
  margin-top:30px ;
  display: flex;
  align-items: center;
  justify-content: center;
}
.state_1{
  color: rgba(255, 255, 255, 0.66);
}
.state_1 span{
  color:  #B275FF ;
  text-decoration: underline;
  cursor: pointer;
}





</style>
