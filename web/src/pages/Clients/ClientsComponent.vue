<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <p>Clientes</p>
      </header>
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";

export default {
  name: "ClientsComponents",
  components: {
    DashboardComponent,
  },
};
</script>

<style lang="scss" src="./styles.scss" scoped></style>
