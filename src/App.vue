<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

:root {
  --font-rubik: 'Rubik', sans-serif;

  --light: hsl(0, 0%, 100%);
  font-family: var(--font-rubik);
  font-size: calc(1vw + .2rem);
  color: var(--light);

  box-sizing: border-box;

  background-image: url('@/assets/img/bg.png');
  background-size: cover;
  background-attachment: fixed;
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
  text-decoration: none;
}

.link:link,
.link:visited,
.link:hover,
.link:active {
  color: var(--light);
}
</style>
