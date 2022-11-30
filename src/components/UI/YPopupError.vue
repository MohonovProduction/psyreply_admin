<template>
  <div class="popup">
    <div class="ypopup__error">
      <div class="popup__exit"><img src="@/assets/img/cross.png" width="12rem"  alt=""></div>
      <div class="popup__icon"><img src="@/assets/img/error.svg" alt=""></div>
      <h1 class="popup__title">Что-то пошло не так</h1>
      <div class="popup__fix">Вызывайте фиксиков или попробуйте сново</div>
      <div class="error__code__title">Код ошибки</div>
      <div class="error__code">Fatal error - 12192828234737</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "YPopupError"
}
</script>

<style scoped>
.popup{

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  backdrop-filter: blur(14.5px);
}
.ypopup__error{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: linear-gradient(140.62deg, rgba(255, 255, 255, 0.25) 2.81%, rgba(255, 255, 255, 0.1) 100.82%);
  box-shadow: 0px 4px 52px rgba(143, 0, 255, 0.11);
  border-radius: 16px;
  padding-top: 1rem;
  padding-bottom: 4rem;
  width: 30rem;
  border-top: rgba(255, 255, 255, 0.5);
  border-bottom:rgba(255, 255, 255, 0.5) ;
  border-right:rgba(255, 255, 255, 0);
  border-left:rgba(255, 255, 255, 0) ;

}
.popup__title{

  margin-left: 1rem;

}
.popup__icon{
  margin-top: 2rem;
  width: 10rem;

}
.popup__fix{
  width: 20rem;
}
.popup__exit{
  align-self: end;

}
.error__code__title{
  margin-top: 0.5rem;
  opacity: 0.7;
  font-size: 0.9rem;
}
.error__code{
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color:rgba(251, 128, 255, 0.58);
}
</style>