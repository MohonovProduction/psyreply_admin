<template>
  <div class="main">
    <y-modal header="true">
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
import YIcon from "@/components/UI/YIcon";
export default {
  name: 'HomeView',
  components: {YIcon},
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

