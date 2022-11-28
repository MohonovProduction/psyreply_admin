<template>
  <div class="wrapper">
    <y-left-side-bar />
    <main class="main">
      <y-modal v-if="window === 'main'" class="main__modal">
        <header class="header">
          <div class="header__select">
            <div class="heading header__heading">Тесты</div>
          </div>
          <y-button :plus="true"  @click="this.window = 'createTest'">Новый тест</y-button>
        </header>
        <!--        U can add "items" props to list component. It must be array -->
        <y-list :items="tests" />
      </y-modal>
      <create-test
          v-if="window === 'createTest'"
          @close="this.window = 'main'"
      />
    </main>
  </div>
</template>

<script>
import CreateTest from "@/components/Test/CreateTest";
import Test from '@/api/admin/Test'
export default {
  name: "TestView",
  components: {
    CreateTest,
  },
  data() {
    return {
      window: 'main',
      tests: null
    }
  },
  created() {
    const test = new Test()
    test.getAll({ filters: {  } })
      .then(res => {
        console.log(res)
        this.tests = res
      })
  },
  methods: {
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
.header__heading{
  margin-right: 0.5rem;

  font-size:2rem;
}
.header__arrow__button img{
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
}

</style>
