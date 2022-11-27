<template>
  <y-modal class="main">
    <header class="header">
      <y-left-arrow-button @click="$emit('close')" />
      <h1>Редактирование: {{company.name}}</h1>
    </header>
    <y-modal class="block" v-if="company.blocks.length > 0">
      <header>
        <h2 class="heading">Блоки в компании</h2>
      </header>
      <y-list
        key-of-name="name"
        :editable="true"
        :items="company.blocks"
        @edit="removeBlock"
      />
    </y-modal>
    <y-modal class="block">
      <header>
        <h2 class="heading">Блоки, которые можно добавить</h2>
      </header>
      <y-list
        @select="selectBlock"
        v-if="blocks.length > 0"
        key-of-name="name"
        :items="blocks"
        :editable="true"
        @edit="addBlock"
      />
    </y-modal>
  </y-modal>
</template>

<script>
import Block from '@/api/admin/Block';

export default {
  name: "EditCompany",
  components: {},
  props: {
    company: {
      type: Object
    }
  },
  data() {
    return {
      blocks: []
    }
  },
  created() {
    const block = new Block()
    block.getAll({ filters: { "company_id": null }})
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.blocks = r)
        }
      })
  },
  methods: {
    addBlock(n) {
      console.log(n)
      const block = new Block(n.id)
      block.create(`${n.id}/copy/${this.company.id}`)
        .then(res => {
          if (res.ok) {
            console.log(res)
            alert('Блок успешно доавлен')
            this.$emit('close')
          }
        })
    },
    removeBlock(n) {
      console.log(n)
      const block = new Block(n.id)
      block.remove(n.id)
        .then(res => {
          if (res.ok) {
            console.log(res)
            alert('Блок удалён')
            this.$emit('close')
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
  grid-gap: .5rem;
}
</style>
