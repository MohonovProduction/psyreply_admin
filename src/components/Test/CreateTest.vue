<template>
  <y-modal class="modal">
      <header class="header">
        <y-left-arrow-button @click="$emit('close')" />
        <h1 class="heading">Новый тест</h1>
      </header>
      <main class="main">
          <div class="main__input_coins">
            <y-input placeholder="Название теста..."/>
            <div class="coins">
              <img src="@/assets/img/coins.svg" alt="">
              <div class="count">200</div>
            </div>
          </div>
        <div class="types">
          <div class="type__test">
            <div class="type__test__title">Тип теста</div>
            <div class="types__test">
              <y-mini-button v-for="type in types">{{type.name}}</y-mini-button>
            </div>
          </div>
          <div class="type__test">
            <div class="type__test__title">Тип метрики</div>
            <div class="types__test">
              <y-mini-button v-for="type in types">{{type.name}}</y-mini-button>
            </div>
          </div>
        </div>
      </main>
      <hr/>
      <section class="questions">
        <div class="header__plus">
          <h2 class="heading">Вопросы</h2>
          <div class="plus" @click="this.window ='newtest'">
           +
          </div>
        </div>
<!--        Хуевое преключение, переделаем-->
        <div class="questions__list">
          <div class="state_1" v-if="window === 'default'">Здесь будет отображаться список вопросов. <span @click="this.window ='newtest'">Начните с создание нового вопроса</span></div>
          <div v-if="window=== 'newtest'">
            <y-test-type1/>
          </div>
        </div>

      </section>

  </y-modal>

</template>

<script>
import YModal from "@/components/UI/YModal";
import YInput from "@/components/UI/YInput";
import YButton from "@/components/UI/YButton";
import YMiniButton from "@/components/UI/YMiniButton";
import YTestType1 from "@/components/UI/YTestType1";
export default {
  name: "CreateTest",
  components: {YTestType1, YMiniButton, YButton, YInput, YModal},
  data(){
    return{
        types:[
          {name:"Тип 1"},
          {name:"Тип 2"},
          {name:"Тип 3"},
          {name:"Тип 4"},
        ],
      window:"default",
    }
  }


}
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: auto 1fr min-content;
  grid-gap: 2rem;
  justify-content: start;
  align-items: center;
}
.coins{
  display: grid;
  grid-template-columns: auto 1fr min-content;
  grid-gap: 0.5rem;
  align-items: center;
}
.main__input_coins{
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 4rem;
  align-items: center;
  grid-gap: 1rem;

}
.type__test{
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.types__test{
  display: grid;
  grid-template-columns: repeat(4,9rem);
  grid-gap: 1rem;
}
.type__test__title{
  font-size: 1rem;
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
.plus{
  margin-left:10px ;
  background: rgba(255, 255, 255, 0.17);
  border-radius: 7px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  width: 26px;
  height: auto;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;

}
.header__plus{
  display: flex;
  align-items: center;

}
.questions__list{
  margin-top:30px ;
  display: flex;
  align-items: center;
  justify-content: center;
}
.state_1{
  color: rgba(255, 255, 255, 0.66);
}
.state_1 span{
  color:  #B275FF ;
  text-decoration: underline;
  cursor: pointer;
}





</style>