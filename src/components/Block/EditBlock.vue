<template>
  <y-modal class="modal">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1 class="heading">Список тестов</h1>
    </header>
    <y-list
      v-if="block.tests.length > 0"
      key-of-name="title"
      :items="block.tests"
      :selectable="true"
      @select="selectTest"
    />
    <y-cool-button>Сохранить блок</y-cool-button>
  </y-modal>
</template>

<script>
import Block from '@/api/admin/Block';

export default {
  name: "EditBlock",
  props: ['id'],
  data() {
    return {
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
  },
  methods: {
    selectTest(n) {
      console.log(n)
      let test = this.block.tests.filter(el => el.id === n.id)
      test = test[0]
      if ('active' in test) {
        test.active = !test.active
      } else {
        test['active'] = true
      }
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
