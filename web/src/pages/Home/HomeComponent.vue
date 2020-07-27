<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title_pages">
        <p>Início</p>
      </header>

      <div>
        <div class="row">
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Clientes'"
              :percentage="'7%'"
              :icon="'fa-users'"
              :qtd="'7590'"
            />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Produtos'"
              :percentage="'12%'"
              :icon="'fa-box'"
              :qtd="'350'"
            />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Serviços'"
              :percentage="'3%'"
              :icon="'fa-store'"
              :qtd="'350'"
            />
          </div>

          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Relatórios'"
              :percentage="'25%'"
              :icon="'fa-chart-bar'"
              :qtd="'30'"
            />
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <ListsComponent
              :data="data"
              :description="'Clientes'"
              :columns="['Nome', 'Email']"
            ></ListsComponent>
          </div>
          <div class="col-12 col-md-6">
            <ListsComponent
              :data="data"
              :description="'Produtos'"
              :columns="['Nome', 'Descrição']"
            ></ListsComponent>
          </div>
        </div>
      </div>
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";
import CardsComponent from "../../components/CardsComponent";
import ListsComponent from "../../components/ListsComponent";
const axios = require("axios");

export default {
  name: "HomeComponent",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const responseUsers = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      if (responseUsers.status == 200) {
        this.data = responseUsers.data;
      }
    },
    async getProducts() {
      const responseUsers = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      if (responseUsers.status == 200) {
        this.data = responseUsers.data;
      }
    },
  },
  components: {
    DashboardComponent,
    CardsComponent,
    ListsComponent,
  },
};
</script>

<style lang="scss" src="./styles.scss" scoped></style>
