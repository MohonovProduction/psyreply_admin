<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

:root {
  --font-rubik: 'Rubik', sans-serif;
  font-family: var(--font-rubik);
  font-size: calc(1vw + 1rem);

  --light: hsl(0, 0%, 100%);

  box-sizing: content-box;
}

*,
::before,
::after {
  padding: 0;
  border: none;
  margin: 0;
  background: none;
  user-select: none;
  box-sizing: inherit;
}
</style>
