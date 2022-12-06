import { createStore } from 'vuex'

export default createStore({
  state: {
    app: {
      popupError: {
        show: false,
        message: null
      },
      popup: {
        show: false,
        message: null
      }
    },
    newTest: {
      questionsCount: 0,
      questions: []
    },
  },
  getters: {
    questions(state) {
      return state.newTest.questions
    },
    question: (state) => (id) => {
      return state.newTest.questions[id]
    },
    test: (state) => {
      return state.newTest
    },
    popupError(state) {
      return state.app.popupError
    },
    popup(state) {
      return state.app.popup
    }
  },
  mutations: {
    addQuestion(state, question) {
      question.id = state.newTest.questionsCount
      state.newTest.questions.push(question)
      state.newTest.questionsCount++
    },
    editQuestion(state, question) {
      state.newTest.questions.map((el, index) => {
        if (el.id === question.id) {
          state.newTest.questions[index] = question
        }
      })
    },
    removeQuestion(state, question) {
      state.newTest.questions.splice(question, 1)
    },
    fillQuestions(state, questions) {
      state.newTest.questions = questions
    },
    addAnswer(state, data) {
      console.log(data)
      state.newTest.questions[data.questionId].answers.push(data.answer)
    },
    editAnswer(state, data) {
      state.newTest.questions[data.questionId].answers[data.id] = data.answer
    },
    removeAnswer(state, data) {
      state.newTest.questions[data.questionId].answers.splice(data.id, 1)
    },
    clearNewTest(state) {
      state.newTest = {
        questionsCount: 0,
        questions: []
      }
    },
    fillTest(state, test) {
      state.newTest = test
    },
    openErrorPopup(state, message) {
      state.app.popupError.show = true
      state.app.popupError.message = message
    },
    closeErrorPopup(state) {
      state.app.popupError.show = false
      state.app.popupError.message = ''
    },
    openPopup(state, message) {
      state.app.popup.show = true
      state.app.popup.message = message
      setTimeout(() => {
        state.app.popup.show = false
        state.app.popup.message = ''
      }, 3000)
    },
  },
  actions: {
  },
  modules: {
  }
})
