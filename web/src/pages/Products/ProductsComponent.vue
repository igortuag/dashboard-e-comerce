<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <p>Produtos</p>
      </header>
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";

export default {
  name: "ProductsComponents",
  components: {
    DashboardComponent,
  },
};
</script>

<style lang="scss" src="./styles.scss" scoped></style>
