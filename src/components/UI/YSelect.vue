<template>
  <article class="select">
    <button class="button select__button" @click="list.show = !list.show">
      {{activeSelect[0].name}}
      <img class="button__icon" src="@/assets/img/select_arrow.svg">
    </button>
    <ul v-if="list.show" class="select__list">
      <li v-for="el in notActiveSelects">
        <button @click="select(el.data)" class="list__item button_active">{{el.name}}</button>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "YSelect",
  props: {
    selects: {
      type: Array,
      default: [
        {
          name: 'Test',
          data: 'test',
          active: true
        },
        {
          name: 'Test1',
          data: 'test1',
          active: false,
        },
        {
          name: 'Test2',
          data: 'test2',
          active: false
        }
      ]
    }
  },
  data() {
    return {
      list: {
        show: false
      }
    }
  },
  methods: {
    select(data) {
      this.$emit('select', data)
    }
  },
  computed: {
    activeSelect() {
      return this.selects.filter(el => el.active)
    },
    notActiveSelects() {
      return this.selects.filter(el => !el.active)
    }
  }
}
</script>

<style scoped>

.button {
  cursor: pointer;
  align-self: end;
  position: relative;
  color: var(--light);
  font-size: 1rem;
}

.button__icon {
  width: 1rem;
}

.select__button {
  padding: .3rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.button__icon{
  margin-left: 0.5rem;
}
.select__list{
  position: absolute;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: -4px 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  border-radius: .85rem;
  list-style: none;
  overflow: hidden;
  min-width: 10rem;
}
.list__item{
  width: 100%;
  padding: 1rem;
  color: var(--light);
  font-size: 1rem;
  text-align: left;
}

.list__item:hover{
  background: linear-gradient(200.42deg, #B275FF 13.57%, #DD7EFF 98.35%);
}

</style>
