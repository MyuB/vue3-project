<template>
  <RouterLink
    to="/"
    class="logo">
    <span>육식맨</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import '~/scss/main';

.logo {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 25px;
  color: $red;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: $primary
  }
}
</style>