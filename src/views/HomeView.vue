<template>
  <div class="main">
    <y-modal>
      <y-icon class="form__reply__logo"></y-icon>
      <y-form
        v-if="step === 0"
        @submit="firstStep"
      />
      <y-form-content
        v-else-if="step === 1"
        @submit="secondStep"
      />
    </y-modal>
  </div>
</template>

<script>
import Admin from '@/api/admin/Auth'

export default {
  name: 'HomeView',
  data() {
    return {
      step: 0
    }
  },
  methods: {
    firstStep(formData) {
      Admin.auth(formData.email, formData.password)
        .then(res => {
          console.log(res)
          this.step = 1
        })
      console.log(formData)
    },
    secondStep(formData) {
      Admin.authCode(fomrData.code)
        .then(res => {
          this.$router.push('/block')
        })
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
  padding-top: 2rem;
}
</style>

