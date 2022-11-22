<template>
  <div class="YButton">
    <button class="YButton__button">
      <slot></slot>
      <span v-if="plus">+</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "YButton",
  props:{
    plus:{
      type: Boolean,
      default: false
    }
  }

}

</script>

<style scoped>
  .YButton__button{


  }
  .YButton__button{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 25vh;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 14px;
    border: 1px solid;
    border-bottom-color: rgba(255, 255, 255, 0.54);
    border-left-color: rgba(255, 255, 255, 0) ;
    border-top-color:rgba(255, 255, 255, 0.5) ;
    border-right-color:rgba(255, 255, 255, 0) ;


  }
  span{
    padding: 10px 10px;
    font-size: 26px;
  }
</style>
