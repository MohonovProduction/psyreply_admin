<template>
  <y-modal class="modal">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1 class="heading">Редактирование блока</h1>
    </header>

    <y-modal>
      <header class="header">
        <h2 class="heading">Изменение названия</h2>
      </header>
      <y-input v-model="block.name" />
      <y-cool-button @click="updateBlock">Сохранить новое название</y-cool-button>
    </y-modal>

    <y-modal v-if="block.tests.length > 0">
      <header class="header">
        <h2 class="heading">Редактирование тестов блока</h2>
      </header>
      <y-list
        v-if="block.tests.length > 0"
        key-of-name="title"
        :items="block.tests"
        :selectable="true"
        @select="selectTest"
      />
      <y-cool-button @click="removeTests">Удалить тесты</y-cool-button>
    </y-modal>

    <y-modal v-if="tests.length > 0">
      <header class="header">
        <h2 class="heading">Добавление тестов в блок</h2>
      </header>
      <y-list
        :selectable="true"
        @select="selectTest"
        :items="tests"
      />
    </y-modal>
    <y-modal>
      <header class="header">
        <h2 class="heading">Опасная зона</h2>
      </header>
      <y-cool-button @click="removeBlock">Удалить блок</y-cool-button>
    </y-modal>
  </y-modal>
</template>

<script>
import Block from '@/api/admin/Block';
import YCoolButton from '@/components/UI/YCoolButton';
import Test from '@/api/admin/Test';

export default {
  name: "EditBlock",
  components: {YCoolButton},

  props: ['id'],
  data() {
    return {
      tests: [],
      block: {
        tests: []
      }
    }
  },
  created() {
    const block = new Block()
    block.get(this.id)
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.block = r)
        } else {
          alert(res.msg())
        }
      })

    const test = new Test()
    test.getAll({ filters: { block_id: null } })
      .then(res => {
        if (res.ok) {
          res.json(r => this.tests = r)
        } else {
          alert(res.msg())
          console.log(res)
        }
      })
  },
  methods: {
    update() {
      const block = new Block()
      block.get(this.id)
        .then(res => {
          if (res.ok) {
            res.json().then(r => this.block = r)
          } else {
            alert(res.msg())
          }
        })

      const test = new Test()
      test.getAll({ filters: { block_id: null } })
        .then(res => {
          if (res.ok) {
            res.json(r => this.tests = r)
          } else {
            alert(res.msg())
            console.log(res)
          }
        })
    },
    selectTest(n) {
      console.log(n)
      let test = this.block.tests.filter(el => el.id === n.id)
      test = test[0]
      if ('active' in test) {
        test.active = !test.active
      } else {
        test['active'] = true
      }
    },
    removeTests() {

    },
    addTests() {

    },
    updateBlock() {
      const block = new Block()
      const body = {
        name: this.block.name
      }
      block.update(this.id, body)
        .then(res=> {
          if (res.ok) {
            alert('Название блока успешно изменено')
          } else {
            alert(res.msg())
            console.log(res)
          }
        })
    },
    removeBlock() {

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
