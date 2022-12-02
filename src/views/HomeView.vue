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
import router from '@/router';

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
          if (res.ok) {
            this.step = 1
          } else {
            this.$store.commit('openErrorPopup', 'Неверный логин или пароль, чайка')
          }
        })
      console.log(formData)
    },
    secondStep(formData) {
      Admin.authCode(formData.code)
        .then(res => {
          console.log(res)
          if (res.ok) {
            console.log(res)
            router.push('/company')
          } else {
            this.$store.commit('openErrorPopup', 'Неверный код')
          }
        })
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

