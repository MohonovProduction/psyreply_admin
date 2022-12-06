<template>
  <div class="dashboard">
    <header class="header">
      <div class="header__select">
        <y-left-arrow-button @click="$emit('close')" />
        <h1 class="heading header__heading">{{ block.block_title }}</h1>
      </div>

        <div class="dash__button">
          <div class="dash__button__title">Дашборд</div>
          <img src="@/assets/img/dash.svg" alt="">
        </div>
    </header>
    <div class="user">
      <div class="username">{{ block.username || 'no username' }}</div>
      <div class="line"></div>
      <div class="id">{{ block.user_id || 'no user id' }}</div>
      <div class="line"></div>
      <div class="date">{{ formattedDate }}</div>
      <div class="line"></div>
      <div class="passage">
        <p>Время прохождения: </p> <p class="passage__user passage__user_bad">00:14:50</p><span class="slash"> / </span><p class="passage__test">00:15:00</p>
      </div>
    </div>
    <hr>
    <div class="results__button">
      <y-results-tabel>
        <y-results-tabel-item
          v-for="metric of metrics"
          :id="metric.metric_id"
          :value="metric.value"
          v-model.number="metric.value"
        />
      </y-results-tabel>
        <div class="results__valid">
          <div class="elipce"></div>
          <p>Результаты валидны</p>
        </div>
      <y-cool-button @click="updateBlock"><h1>Сохранить изменения</h1></y-cool-button>
    </div>

  </div>
</template>

<script>
import Results from '@/api/admin/Results';

export default {
  name: "YDashboard",
  created() {
    this.metrics = JSON.parse(this.block.data)
  },
  data() {
    return {
      metrics: []
    }
  },
  methods: {
    updateBlock() {
      const body = this.metrics

      const results = new Results()
      results.update(this.block.id, body)
        .then(res => {
          if (res.ok) {
            this.$store.commit('openPopup', 'Данные сохранены')
          } else {
            this.$store.commit('openErrorPopup', res.msg())
          }
        })
    }
  },
  computed: {
    block() {
      return this.$store.getters.editBlock
    },
    formattedDate() {
      let date = new Date(this.block.createdAt)
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()

      return `${day}/${month}/${year}`
    },
  }
}
</script>

<style scoped>
.dash__button{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 14px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.dash__button__title{
  margin-right: 0.5rem;
}
.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header__select{
  display: grid;
  grid-template-columns: auto max-content;
  justify-content: left;
  grid-gap: 1rem;
}
.user{
  display: flex;
  align-items: center;
  justify-content: left;
  opacity: 0.5;

}
.line{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: rgba(255, 255, 255, 0.36);
  height: 2rem;
  width: 2px;
  justify-self: center;

}
.slash{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

table{
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.26);
  border-top: 1px solid rgba(255, 255, 255, 0.26);

}
hr {
  margin-bottom: 1rem;
  min-width: 30vh;
  border-left: 0px solid white;
  border-right: 0px solid white;
  border-bottom: 0px solid white;
  border-top: 1px solid rgba(255, 255, 255, 0.52);

}
.results__button{
  display: grid;
  grid-template-rows: 1fr 1rem 4rem;
  grid-gap: 3rem;
}
.passage{
  display: flex;
  flex-direction: row;
  align-items: center;

}
.passage__user{
  margin-left: 0.5rem;
  color: rgba(0, 255, 25, 0.66);

}
/*.passage__user_bad{*/
/*  color:red;*/
/*}*/

.elipce{
  background: linear-gradient(200.42deg, #38F9D7 13.57%, #43E97B 98.35%);
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.results__valid{
  display: flex;
  align-items: center;
}

</style>
