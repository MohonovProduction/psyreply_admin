<template>
<div class="YForm">
  <form>
    <div class="form__box">
      <label class="box__lable">Логин</label>
      <input class="box__input">
    </div>
    <div class="form__box">
      <label class="box__lable">Пароль</label>
      <input class="box__input">
    </div>
    <div class="form__button">
      <button type="submit" class="btn btn__login">Войти</button>
    </div>

  </form>
</div>
</template>

<script>
export default {
  name: "YForm"
}
</script>

<style>
.form__box {
  color: white;
  display: flex;
  flex-direction: column;

}
input.box__input {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.23);
  border: 2px solid rgba(255, 255, 255, 0.38);
  border-radius: 14px;
  color: white;
  align-self: center;
  height: 3em;
  width: 15rem;
  padding: 18px 16px;
  font-size: 18px;


}
input.box__input:focus {
  background: rgba(255, 255, 255, 0.17);
  border-radius: 14px;
  color: white;
  box-shadow: 2px 2px 20px rgb(221 126 255 / 35%);
  border: 2px solid rgba(255, 255, 255, 0.24);
}
.box__lable{
  margin-top: 15px;
  font-size:18px;
}
.form__button{
  margin-top: 40px;
}
.btn__login {
  text-align: center;
  align-self: center;
  background: linear-gradient(200.42deg, #B275FF 13.57%, #DD7EFF 98.35%);
  border-radius: 12px;
  color: white;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  padding: 18px 16px;
  font-size: 18px;
}
.btn__login:hover {
  background: linear-gradient(200.42deg, #B275FF 13.57%, #C247ED 98.35%);
  box-shadow: 0px 0px 20px rgba(221, 126, 255, 0.35);
  border-radius: 12px;
  color: white;

}
.btn__login:focus {
  background: linear-gradient(200.42deg, #B275FF 13.57%, #DD7EFF 98.35%);
  box-shadow: 0px 0px 20px rgba(221, 126, 255, 0.35);
  border-radius: 12px;
  color: white;

}
</style>