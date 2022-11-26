<template>
  <div class="list_item">
    <div class="text__elipce">
      <div class="elipce active "></div>
      <slot></slot>
    </div>
    <div class="options">
      <img src="@/assets/img/options.svg">
    </div>


  </div>
</template>

<script>
export default {
  name: "YBlockListItem",

}
</script>

<style scoped>
.list_item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: hsla(0, 0%, 100%, 0.17);
  font-size: 2rem;
  border-color: var(--light-opacity);
  border-width: 2px;
  border-style: solid;
  border-radius: .875rem;

}
.elipce {
  width: 25px;
  height: 25px;
  background: linear-gradient(155.31deg, rgba(255, 255, 255, 0.5) 12.33%, rgba(255, 255, 255, 0) 34.31%, rgba(255, 255, 255, 0) 52.66%, rgba(255, 255, 255, 0.54) 74.67%);
  background-blend-mode: overlay;
  border-radius: 50%;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.5);
  margin-right: 30px;
  margin-left: 20px;

}
.text__elipce{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.options{
  padding: 1rem;
  background: rgba(255, 255, 255, 0.16);
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 0px 14px 14px 0px;
}
.active{
  background: linear-gradient(200.42deg, #38F9D7 13.57%, #43E97B 98.35%);
}
</style>
