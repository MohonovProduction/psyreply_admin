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
        :selectable="true"
        :items="company.blocks"
        @select="selectRemoveBlock"
      />
      <y-cool-button @click="removeBlock">Удалить блок из {{ company.name }}</y-cool-button>
    </y-modal>
    <y-modal class="block">
      <header>
        <h2 class="heading">Блоки, которые можно добавить</h2>
      </header>
      <y-list
        v-if="blocks.length > 0"
        key-of-name="name"
        :items="blocks"
        :selectable="true"
        @select="selectAddBlock"
      />
      <y-cool-button @click="addBlocks">Добавить блок в {{ company.name }}</y-cool-button>
    </y-modal>
  </y-modal>
</template>

<script>
import Company from '@/api/admin/Company';
import Block from '@/api/admin/Block';
import YCoolButton from '@/components/UI/YCoolButton';

export default {
  name: "EditCompany",
  components: {YCoolButton},
  props: {
    companyId: Number
  },
  data() {
    return {
      blocks: [],
      company: {
        id: null,
        name: null,
        createdAt: null,
        updatedAt: null,
        blocks: []
      }
    }
  },
  created() {
    const company = new Company()
    company.get(this.companyId)
      .then(res => {
        if (res.ok) {
          res.json().then(r => {
            for (let key in r) this.company[key] = r[key]
          })
        }
      })

    const block = new Block()
    block.getAll({ filters: { "company_id": null }})
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.blocks = r)
        }
      })
    block.getAll({ filters: { "company_id": this.companyId }})
      .then(res => {
        if (res.ok) {
          res.json().then(r => this.company.blocks = r)
        }
      })
  },
  methods: {
    selectAddBlock(n) {
      this.blocks.forEach(el => el['active'] = false)
      let block = this.blocks.filter(el => el.id === n.id)
      block = block[0]
      if ('active' in block) {
        block.active = !block.active
      } else {
        block['active'] = true
      }
    },
    selectRemoveBlock(n) {
      this.company.blocks.forEach(el => el['active'] = false)
      let block = this.company.blocks.filter(el => el.id === n.id)
      block = block[0]
      if ('active' in block) {
        block.active = !block.active
      } else {
        block['active'] = true
      }
    },
    addBlocks() {
      const blockRemove = this.blocks.filter(el => el.active)

      if (blockRemove.length === 0) {
        return this.$store.commit('openErrorPopup', 'Выберите блок для добавления')
      }

      const blockId= blockRemove[0].id
      const block = new Block()
      block.create(`${blockId}/copy/${this.companyId}`)
        .then(res => {
          if (res.ok) {
            console.log(res)
            alert('Блок успешно доавлен')
            this.update()
          } else {
            alert(res.msg())
          }
        })
    },
    removeBlock() {
      const blockRemove = this.company.blocks.filter(el => el.active)
      if (blockRemove.length === 0) {
        return alert('Выберите блок для удаления')
      }
      const blockId= blockRemove[0].id
      const block = new Block()
      block.remove(blockId)
        .then(res => {
          if (res.ok) {
            console.log(res)
            alert('Блок удалён')
            this.update()
          } else {
            alert(res.msg())
          }
        })
    },
    update() {
      const block = new Block()
      block.getAll({ filters: { "company_id": this.companyId }})
        .then(res => {
          if (res.ok) {
            res.json().then(r => this.company.blocks = r)
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
