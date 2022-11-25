<template>
  <div class="main">
    <y-modal header="true">
      <y-form
        @submit="firstStep"
        v-if="step === 0"
      />
      <y-form-content
        @submit="secondStep"
        v-else-if="step === 1"
      />
    </y-modal>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      step: 0
    }
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
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

