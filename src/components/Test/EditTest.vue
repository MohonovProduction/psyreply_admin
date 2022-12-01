<template>
  <y-modal class="main">
    <header class="header">
      <y-left-arrow-button @click="close" />
      <h1>Редактирование: {{test.title}}</h1>
    </header>

    <create-test
      :test-id="id"
      :title="test.title"
    />

    <y-modal class="block" v-if="blocks.length > 0">
      <header>
        <h2 class="heading">Добавить в блок</h2>
      </header>
      <y-list
        key-of-name="name"
        :selectable="true"
        :items="blocks"
        @select="selectBlocks"
      />
      <y-cool-button @click="addToBlock">Добавить в блок</y-cool-button>
    </y-modal>

    <y-modal class="block">
      <h2 class="heading">Опасная зона</h2>
      <y-cool-button @click="removeTest">Удалить тест</y-cool-button>
    </y-modal>
  </y-modal>
</template>

<script>
import CreateTest from '@/components/Test/CreateTest';

import Test from '@/api/admin/Test';
import Block from '@/api/admin/Block';

export default {
  name: "EditTest",
  components: {
    CreateTest
  },
  props: {
    id: Number
  },
  data() {
    return {
      test: {},
      blocks: []
    }
  },
  created() {
    const test = new Test()
    test.get(this.id)
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.test = r)
        } else {
          alert(res.msg())
        }
      })

    const block = new Block()
    block.getAll({ filter: {company_id: null} })
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.blocks = r)
        } else {
          alert(res.msg())
        }
      })
  },
  methods: {
    close() {
      this.$emit('close')
    },
    selectBlocks(n) {
      console.log(n)
      this.blocks.forEach(el => el['active'] = false)
      let block = this.blocks.filter(el => el.id === n.id)
      block = block[0]
      if ('active' in block) {
        block.active = !block.active
      } else {
        block['active'] = true
      }
    },
    addToBlock() {
      const block = this.blocks.filter(el => el.active)
      if (block.length === 0) {
        return alert('Выберите блок, пожалуйста')
      }
      const test = new Test()
      test.addToBlock(this.test.id, block[0].id)
        .then(res => {
          if (res.ok) {
            alert(`Тест ${this.test.title} успешно добавлен в блок ${block[0].name}`)
          } else {
            if (res.err.status === 409) {
              alert('Тест уже добавлен в блок')
            } else {
              alert(res.msg())
            }
          }
        })
    },
    removeTest() {
      const test = new Test()
      test.remove(this.test.id)
        .then(res => {
          if (res.ok) {
            alert('Тест успешно удален')
            this.close()
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
.main {
  display: grid;
  grid-gap: 1rem;
}
.header {
  display: grid;
  grid-template-columns: auto max-content;
  justify-content: left;
  grid-gap: 1rem;
}
.block {
  display: grid;
  grid-gap: .8rem;
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
