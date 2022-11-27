<template>
  <div class="main">
    <y-modal>
      <y-icon class="form__reply__logo"></y-icon>
      <y-form
        v-if="step === 0"
      />
      <y-form-content
        v-else-if="step === 1"
      />
    </y-modal>
  </div>
</template>

<script>
import Block from '@/api/admin/Block';

export default {
  name: 'HomeView',
  data() {
    return {
      step: 0
    }
  },
  mounted() {
    const block = new Block(0)
    block.getAll({}).then(res => console.log(res))
  },
  methods: {
    firstStep(formData) {
      console.log(formData)
      this.step = 1
    },
    secondStep(formData) {
      console.log(formData)
    }
  }
}
</script>

<style>
.form__reply__logo{
  margin-bottom: 5%;
}
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

