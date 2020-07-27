<template>
  <div class="list">
    <div class="top">
      <p><strong>Clientes</strong></p>
      <div class="content">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 7px;
  background-color: #fff;
}
</style>
