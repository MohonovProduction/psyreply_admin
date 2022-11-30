<template>
<div class="popup">
    <div class="ypopup">
      <div class="popup__icon"><img src="@/assets/img/tick.svg" alt=""></div>
        <div class="popup__title">Данные сохранены</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YPopup"
}
</script>

<style scoped>
.popup{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  margin: 0 auto;
}
.ypopup{
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: linear-gradient(140.62deg, rgba(255, 255, 255, 0.25) 2.81%, rgba(255, 255, 255, 0.1) 100.82%);
  box-shadow: 0px 4px 52px rgba(143, 0, 255, 0.11);
  border-radius: 16px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 15rem;
  border-top: rgba(255, 255, 255, 0.5);
  border-bottom:rgba(255, 255, 255, 0.5) ;
  border-right:rgba(255, 255, 255, 0);
  border-left:rgba(255, 255, 255, 0) ;

}
.popup__title{
  margin-left: 1rem;

}
</style>