<template>
  <div class="dashboard">
    <header class="header">
      <div class="header__select">
        <h1 class="heading header__heading">Результаты</h1>
      </div>

        <div class="dash__button">
          <div class="dash__button__title">Дашборд</div>
          <img src="@/assets/img/dash.svg" alt="">
        </div>
    </header>
    <div class="user">
      <div class="username">username</div>
      <div class="line"></div>
      <div class="id">id1488</div>
      <div class="line"></div>
      <div class="date">22/22/22</div>
    </div>
  </div>
  <div class="table">
    <table>
      <tr>
        <th>Метрика 1</th>
        <th>Метрика 2</th>
        <th>Метрика 3</th>
        <th>Метрика 4</th>
      </tr>
      <tr>
        <td>434</td>
        <td>434</td>
        <td>434</td>
        <td>434</td>
      </tr>
      <tr>
        <td>434</td>
        <td>434</td>
        <td>434</td>
        <td>434</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "YDashboard"
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
td{
text-align: center;
  padding-top: 1rem;
}
th{
  padding-top: 1rem;
  padding-bottom: 1rem;

}
table{
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.26);
  border-top: 1px solid rgba(255, 255, 255, 0.26);

}

</style>