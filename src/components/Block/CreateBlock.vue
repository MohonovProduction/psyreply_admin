<template>
  <y-modal class="modal" v-if="window === 'main'">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1 class="heading">Новый блок</h1>
      <y-button @click="window = 'createTest'" :plus="true">Добавить тест</y-button>
    </header>
    <y-input v-model="block.name" placeholder="Название блока" />
    <y-input
      placeholder="Название теста..."
    />
    <y-list
      :items="tests"
      key-of-name="title"
      :selectable="true"
      @select="selectTest"
    />
    <y-cool-button @click="saveBlock">Сохранить блок</y-cool-button>
  </y-modal>

  <create-test
    v-if="window === 'createTest'"
  />
</template>

<script>
import CreateTest from '@/components/Test/CreateTest';
import Test from '@/api/admin/Test'
import Block from '@/api/admin/Block';

export default {
  name: "CreateBlock",
  components: {
    CreateTest
  },
  data() {
    return {
      window: 'main',
      block: {
        name: null,
      },
      tests: []
    }
  },
  created() {
    const test = new Test()
    test.getAll({ filters: {  } })
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.tests = r)
        } else {
          alert(res.msg())
        }
      })
  },
  methods: {
    selectTest(n) {
      let test = this.tests.filter(el => el.id === n.id)
      test = test[0]
      if ('active' in test) {
        test.active = !test.active
      } else {
        test['active'] = true
      }
    },
    saveBlock() {
      console.log('asfsadf')
      const body = this.block
      const tests = this.tests.filter(el => el.active)

      body.tests = []

      tests.map(el => body.tests.push(el.id))

      console.log(body.test)

      const block = new Block()
      block.create('', body)
        .then(res => {
          console.log(res)
          if (res.ok) {
            alert('Блок успешно создан')
          } else {
            alert(res.msg())
            console.log(res)
          }
        })
    }
  }
}
</script>

<style scoped>
.modal {
  display: grid;
  grid-gap: 1rem;
}
.header {
  display: grid;
  grid-template-columns: auto 1fr min-content;
  grid-gap: 2rem;
  justify-content: start;
  align-items: center;
}
</style>
