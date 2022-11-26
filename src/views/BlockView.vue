<template>
  <div class="wrapper">
    <y-left-side-bar />
    <main class="main">
      <y-modal v-if="window === 'main'" class="main__modal">
        <header class="header">
          <div class="header__select">
            <h1 class="heading header__heading">Блоки</h1>
            <y-select @select="selectHandle" />
          </div>
          <y-button :plus="true" @click="this.window = 'createBlock'">Новый блок</y-button>
        </header>
<!--        U can add "items" props to list component. It must be array -->
        <y-list  />
      </y-modal>
      <create-block
        v-if="window === 'createBlock'"
        @close="this.window = 'main'"
      />
      <edit-block
        v-if="window === 'editBlock'"
        @close="this.window = 'main'"
      />
    </main>
  </div>
</template>

<script>
import CreateBlock from '@/components/Block/CreateBlock';
import EditBlock from '@/components/Block/EditBlock';

export default {
  name: "BlockView",
  components: {
    CreateBlock, EditBlock
  },
  data() {
    return {
      window: 'main',
    }
  },
  methods: {
    createBlock() {

    },
    selectHandle(n) {
      console.log(n)
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: min-content 1fr;
  width: 100%;
}

.main {
  padding: 4.125rem;
}
.main__modal {
  display: grid;
  grid-gap: 2.5625rem;
}

.header {
  display: grid;
  grid-template-columns: auto min-content;
}
.header__select{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}
.header__heading{
  margin-right: 1rem;
}
.header__arrow__button img{
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
}

</style>
