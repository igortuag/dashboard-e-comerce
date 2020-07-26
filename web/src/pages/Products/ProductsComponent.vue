<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <p>Produtos</p>
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

<style></style>
