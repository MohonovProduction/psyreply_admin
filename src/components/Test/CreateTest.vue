<template>
  <y-modal class="modal">
      <header class="header">
        <y-left-arrow-button @click="close" />
        <h1 class="heading">Новый тест</h1>
      </header>

      <article class="main"> <!-- We can use main единожды !-->
        <div class="main__input_coins">
          <y-input v-model="test.title" placeholder="Название теста..."/>
          <div class="coins">
            <img src="@/assets/img/coins.svg" alt="">
            <div class="count">200</div>
          </div>
        </div>

        <div class="types">
          <div class="type__test">
            <div class="type__test__title">Тип теста</div>
            <y-mini-button
              v-for="type of questionTypes"
              :key="`${type.id}${type.name}`"
              @click="this.test.type = type.id"
            >
              {{ type.name }}
            </y-mini-button>
          </div>
          <div class="type__test">
            <div class="type__test__title">Тип метрики</div>
            <y-mini-button
              class="type__test__type"
              v-for="metric of metrics"
              :key="`${metric.id}${metric.name}`"
              @click="this.test.metric = metric.id"
            >
              {{ metric.name }}
            </y-mini-button>
          </div>
          <div class="type__test">
            <div class="type__test__title">Формула</div>
            <y-input v-model="test.formula" />
          </div>
        </div>
      </article>

      <section v-if="test.metric > 0 && test.type > 0" class="questions">
        <hr/>
        <div class="header__plus">
          <h2 class="heading">Вопросы</h2>
          <button @click="addQuestion" class="plus">+</button>
        </div>

        <template v-if="questions.length > 0">

          <template v-for="(question, id) in questions" :key="`${id}${question.id}`">
            <question
              :question-id="id"
              :type="test.type"
              @remove="removeQuestion(id)"
            />
          </template>

          <y-cool-button @click="saveTest">Сохранить тест</y-cool-button>
        </template>

        <div v-else class="questions__list">
          <div class="state_1">Здесь будет отображаться список вопросов.
            <span>Начните с создание нового вопроса</span>
          </div>
        </div>

<!--        <hr>
        <y-test-type1 />
        <hr>
        <y-test-type2 />
        <hr>-->
      </section>
  </y-modal>
</template>

<script>
import AddAnswers from "@/components/Test/AddAnswers";
import Question from '@/components/Test/Question';

import Metric from '@/api/admin/Metric';
import QuestionType from '@/api/admin/QuestionType';
import Test from '@/api/admin/Test'

export default {
  name: "CreateTest",
  components: {
    AddAnswers, Question
  },
  emits: ['close'],
  props: {
    testId: {
      type: Number,
      default: -1
    }
  },
  data(){
    return {
      questionTypes: [],
      metrics: [],
      test: {
        type: null,
        title: null,
        formula: null,
        metric: null,
      },
    }
  },
  mounted() {
    if (this.testId !== -1) {
      const test = new Test()
      test.get(this.testId)
        .then(res => {
          if (res.ok) {
            res.json().then(r => {
              this.test.type = r.type.id
              this.test.title = r.title
              this.test.formula = r.formula
              this.test.metric = r.metric.id
              this.$store.commit('fillQuestions', r.questions)
            })
          } else {
            alert(res.msg())
            console.log(res)
          }
        })
    }

    const metric = new Metric
    metric.getOne()
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.metrics = r)
        } else {
          alert('Произошла ошибка')
        }
      })
    const types = new QuestionType
    types.getOne()
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.questionTypes = r)
        } else {
          alert('Произошла ошибка')
        }
      })
  },
  methods: {
    close() {
      this.$emit('close')
      this.$store.commit('clearNewTest')
    },
    update() {
      const test = new Test()
      test.get(this.testId)
        .then(res => {
          if (res.ok) {
            res.json().then(r => {
              this.test.type = r.type.id
              this.test.title = r.title
              this.test.formula = r.formula
              this.test.metric = r.metric.id
              this.$store.commit('fillQuestions', r.questions)
            })
          } else {
            alert(res.msg())
            console.log(res)
          }
        })
    },
    addQuestion() {
      let question = {}

      switch (this.test.type) {
        case 1:
          question = {
            title: null,
            picture: null,
            answers: [],
            coins: null
          }
          break
        case 2:
          question = {
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

      this.$store.commit('addQuestion', question)
    },
    saveTest() {
      const test = new Test()

      const body = this.test

      body.questions = this.questions
      console.log(body)

      if (this.testId !== -1) {
        test.update(this.testId, body)
          .then(res => {
            if (res.ok) {
              alert('Тест успешно изменён')
              this.$store.commit('clearNewTest')
              this.test.type = null
              this.test.formula = null
              this.test.metric = null
              this.test.title = null
              this.update()
            } else {
              alert(res.msg())
            }
          })
      } else {
        test.create('', body)
          .then(res => {
            if (res.ok) {
              alert('Тест успешно сохранён')
              this.$store.commit('clearNewTest')
              this.test.type = null
              this.test.formula = null
              this.test.metric = null
              this.test.title = null
            } else {
              alert(res.msg())
            }
          })
      }
    },
    removeQuestion(id) {
      this.$store.commit('removeQuestion', id)
    }
  },
  computed: {
    questions() {
      return this.$store.getters.questions
    },
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

hr {
  margin-top: 30px;
  margin-bottom: 30px;
  min-width: 30vw;
  border-left: 0px solid white;
  border-right: 0px solid white;
  border-bottom: 0px solid white;
  border-top: 1px solid rgba(255, 255, 255, 0.52);
}

</style>
