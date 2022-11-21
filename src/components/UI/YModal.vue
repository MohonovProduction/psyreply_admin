<template>
<div class="YModal">
  <div class="modal">
    <div class="container modal_content">
      <div class="modal_header">
        <img class="logo reply__logo" src="@/assets/img/logo.png">
        <h3>Reply 2.0</h3>
        <span class="logo__subtext">| Admin</span>
      </div>
      <hr />
      <div class="modal__main">
        <slot></slot>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import YFormContent from "@/components/UI/YFormContent";
import YForm from "@/components/UI/YForm"


export default {
  name: "YModal",
  components: {YFormContent,YForm}

}

</script>

<style scoped>
.YModal {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

}

modal__main{
  display: flex;
  flex-direction: column;
  align-items:center ;
  justify-content: center;

}

.modal_header{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

}
.modal {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  width: 45vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}
.modal_content {
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-items: center;
  justify-content: space-evenly;
  min-height: 70vh;
  background: linear-gradient(140.62deg, rgba(255, 255, 255, 0.13) 2.81%, rgba(255, 255, 255, 0.03) 100.82%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0px 4px 52px rgba(143, 0, 255, 0.11);
}
.modal_header {
  color: white;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
}
hr {
  min-width: 30vw;
  border-left: 0px solid white;
  border-right: 0px solid white;
  border-bottom: 0px solid white;
  border-top: 1px solid rgba(255, 255, 255, 0.52);
}
.reply__logo {
  width: 40px;
  margin-right: 5px;
  width: 2.5em;

}
.logo__subtext {
  margin-left: 5px;
  opacity: 0.51;}

</style>
