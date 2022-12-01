<template>
  <input
    @input="$emit('update:modelValue', $event.target.value)"
    class="input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
  >
</template>

<script>
export default {
  name: "YInput",
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: [String, Number]
  },
}
</script>

<style scoped>
.input {
  background: hsla(0, 0%, 100%, 0.17);
  font-size: 1.3rem;
  padding: .8em;
  color: var(--light);
  border-color: var(--light-opacity);
  border-width: 2px;
  border-style: solid;
  border-radius: .875rem;
  user-select: none;
  outline: none;
  transition: all .3s ease-in-out;
}
.input:hover {
  background: hsla(0, 0%, 100%, 0.5);
}
.input:active {
  background: hsla(0, 0%, 100%, 0.17);
}

::placeholder {
  font-style: italic;
  color: rgba(255, 255, 255, 0.53);
}
</style>
