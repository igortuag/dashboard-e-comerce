<template>
  <div class="navbar">
    <h3 class="logo"><i class="fa fa-star"></i> Logo Marca</h3>
    <a class="logout" @click.prevent="logout"
      >Sair <i class="fa fa-sign-out-alt"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "NavBarComponent",
  methods: {
    logout() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_main";

.navbar {
  .logo {
    color: $white;
  }
  .logout {
    color: $white;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
