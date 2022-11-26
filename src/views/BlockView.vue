<template>
  <div class="wrapper">
    <y-left-side-bar />
    <main class="main">
      <y-modal class="main__modal"
               v-if="step === 0">
        <header class="header">
          <h1 class="heading header__heading">Блоки</h1>
          <y-button :plus="true" @click="firstStep">Новый блок</y-button>
        </header>
<!--        U can add "items" props to list component. It must be array -->
        <y-list  />
      </y-modal>
      <y-modal class="main__modal"
               v-if="step === 1">
        <header class="header">
          <div class="header__arrow__button">
            <img src="@/assets/img/arrow.svg" @click="secondStep">
            <h1 class="heading header__heading">Новый блок</h1>
          </div>
          <y-button :plus="true">Добавить тест</y-button>
        </header>
        <!--        U can add "items" props to list component. It must be array -->
        <y-input placeholder="Название теста..."></y-input>
        <y-list  />
        <y-cool-button>Сохранить</y-cool-button>
      </y-modal>
    </main>
  </div>
</template>

<script>
import YModal from "@/components/UI/YModal";
import YButton from "@/components/UI/YButton";
import Block from '@/api/admin/Block';
import YInput from "@/components/UI/YInput";
export default {
  name: "BlockView",
  created() {
    const block = new Block(12);
    block.remove({})
  },
  components: {YButton, YInput},
  data() {
    return {
      step: 0
    }
  },
  methods: {
    firstStep(formData) {
      console.log(formData)
      this.step = 1
    },
    secondStep(formData) {
      console.log(formData)
      this.step = 0
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
.header__arrow__button{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header__arrow__button img{
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
}

</style>
