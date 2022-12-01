<template>
  <y-modal class="modal">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1 class="heading">Редактирование: {{ block.name }}</h1>
    </header>

    <y-modal>
      <header class="header">
        <h2 class="heading">Изменение названия</h2>
      </header>
      <y-input v-model.trim="block.name" />
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
        @select="selectAddTest"
      />
      <y-cool-button @click="removeTests">Удалить тест из блока</y-cool-button>
    </y-modal>

    <y-modal v-if="tests.length > 0">
      <header class="header">
        <h2 class="heading">Добавление тестов в блок</h2>
      </header>
      <y-list
        :selectable="true"
        @select="selectRemoveTest"
        :items="tests"
        key-of-name="title"
      />
      <y-cool-button @click="addTests">Добавить в блок</y-cool-button>
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
    test.getAll({ filters: {  } })
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.tests = r)
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
      test.getAll({ filters: {  } })
        .then(res => {
          if (res.ok) {
            res.json().then(r => this.tests = r)
          } else {
            alert(res.msg())
            console.log(res)
          }
        })
    },
    selectAddTest(n) {
      console.log(n)
      this.block.tests.forEach(el => el.active = false)
      let test = this.block.tests.filter(el => el.id === n.id)
      test = test[0]
      if ('active' in test) {
        test.active = !test.active
      } else {
        test['active'] = true
      }
    },
    selectRemoveTest(n) {
      console.log(n)
      this.tests.forEach(el => el.active = false)
      let test = this.tests.filter(el => el.id === n.id)
      test = test[0]
      if ('active' in test) {
        test.active = !test.active
      } else {
        test['active'] = true
      }
    },
    removeTests() {
      const test = new Test()

      const removeTest = this.block.tests.filter(el => el.active)

      if (removeTest.length === 0) {
        alert('Пожалуйста, выберите тест для удаления')
      }

      test.removeFromBlock(removeTest[0].id, this.id)
        .then(res => {
          if (res.ok) {
            this.$store.commit('openPopup', `${removeTest[0].title} успешно удалён из ${this.block.name}`)
            this.update()
          } else {
            this.$store.commit('closeErrorPopup', res.msg())
          }
        })
    },
    addTests() {
      const test = new Test()

      const addTest = this.tests.filter(el => el.active)

      if (addTest.length === 0) {
        return this.$store.commit('openErrorPopup', 'Выберите тест для добавления')
      }

      test.addToBlock(addTest[0].id, this.id)
        .then(res => {
          if (res.ok) {
            this.$store.commit('openPopup', `${addTest[0].title} добавлен в ${this.block.name}`)
            this.update()
          } else {
            this.$store.commit('closeErrorPopup', res.msg())
          }
        })
    },
    updateBlock() {
      if (this.block.name.length < 1) {
        return this.$store.commit('openErrorPopup', 'Название слишком короткое')
      }

      const block = new Block()
      const body = {
        name: this.block.name
      }
      block.update(this.id, body)
        .then(res=> {
          if (res.ok) {
            this.$store.commit('openPopup', 'Название блока успешно изменено')
            this.update()
          } else {
            this.$store.commit('closeErrorPopup', res.msg())
          }
        })
    },
    removeBlock() {
      const block = new Block()

      block.remove(this.id)
        .then(res => {
          if (res.ok) {
            alert('Блок успешно удалён')
            this.$emit('close')
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
