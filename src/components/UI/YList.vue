<!--<template>
<div class="YList">
  <div class="list_item">
    <div class="elipce"></div>
    <div class="name">Name</div>
    <div class="options"><img src="@/assets/img/options.svg"></div>
  </div>
  <div class="list_item">
    <div class="elipce"></div>
    <div class="name">Name</div>
    <div class="options"><img src="@/assets/img/options.svg"></div>
  </div>
  <div class="list_item">
    <div class="elipce"></div>
    <div class="name">Name</div>
    <div class="options"><img src="@/assets/img/options.svg"></div>
  </div>
</div>
</template>-->

<template>
  <ul class="list">
    <y-list-item
      v-for="item in items"
      :key="`${item.id}${item[keyOfName]}`"
      @select="$emit('select', item)"
      :active="item.active">
      {{ item[keyOfName] }}
    </y-list-item>
  </ul>
</template>

<script>
export default {
  name: "YList",
  props: {
    items: {
      type: Array,
      default: [
        { name: 'test1' },
        { name: 'test2' },
        { name: 'test3' },
      ]
    },
    keyOfName: {
      type: String,
      default: name
    }
  }
}
</script>

<style scoped>
.list {
  display: grid;
  grid-gap: 1rem;
  list-style: none;
}
</style>

<!--
<style scoped>
.YList{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.elipce {
  box-sizing: border-box;

  position: absolute;
  width: 25px;
  height: 25px;
  background: linear-gradient(155.31deg, rgba(255, 255, 255, 0.5) 12.33%, rgba(255, 255, 255, 0) 34.31%, rgba(255, 255, 255, 0) 52.66%, rgba(255, 255, 255, 0.54) 74.67%);
  background-blend-mode: overlay;
  border-radius: 50%;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.5);

}
.name{
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-indent: 40px;
  color: #FFFFFF;

}
.list_item{
  display: grid;
  grid-template-rows:1fr;
  grid-template-columns:1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  width: 50vh;

}
.list_item:nth-child(1){
  grid-column-start: 1;
}
.list_item:nth-child(2){
  grid-column-start: 2;
}
.list_item:nth-child(3){
  grid-column-start: 3;
}

</style>-->
