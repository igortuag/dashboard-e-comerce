<template>
  <div class="sidebar">
    <div class="top">
      <div class="avatar">
        <span><i class="fa fa-user icon"></i></span>
      </div>
      <div class="info">
        <p class="name">Igor Tuag</p>
        <span class="status">Online</span>
      </div>
    </div>

    <div class="menu">
      <ul>
        <li>
          <router-link :to="{ name: 'home' }"
            ><i class="fa fa-home icon"></i> Inicio</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'products' }"
            ><i class="fa fa-box icon"></i> Produtos</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'clients' }"
            ><i class="fa fa-store icon"></i> Clientes</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'clients' }"
            ><i class="fa fa-store icon"></i> Vendas</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'products' }"
            ><i class="fa fa-chart-bar icon"></i> Relatórios</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent",
};
</script>
<style lang="scss">
@import "@/assets/scss/_main";

.sidebar {
  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 5px;
    margin-top: 60px;

    .avatar {
      margin-right: 10px;

      span {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        color: #666666;
      }
    }

    .info {
      color: $white;
      .name {
        margin: 0px;
        font-size: 14px;
      }
      .status {
        margin: 0px;
        font-size: 10px;
      }
    }
  }

  .menu {
    margin-top: 15px;
    padding: 10px;

    ul li {
      margin: 10px 20px;
      font-size: 16px;
      list-style: none;
      font-weight: 200;

      a {
        color: $white;
        text-decoration: none;
      }
    }
  }
}
</style>
