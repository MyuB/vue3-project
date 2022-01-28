<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div 
      class="user"
      @click="toAbout">
      <span>이미지</span>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
// 나중에 vuex import 해서 name같은거랑 이미지 가져와야함

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Table',
          href: '/table'
        },
        {
          name: 'Food',
          href: '/food'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  methods: {
    isMatch(path) {
      if (!path) return false;
      console.log(this.$route)
      return path.test(this.$route.fullPath)
    },
    toAbout() {
      console.log("moving to about page");
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';

header {
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;
    &:hover {
      background-color: darken($gray-200, 10%);
    }
  }
}

</style>