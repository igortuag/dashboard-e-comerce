<template>
  <div class="list">
    <div class="top">
      <p>
        <strong>{{ description }}</strong>
      </p>
      <div class="content">
        <table class="table table-striped my_table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">{{ columns[0] }}</th>
              <th scope="col">{{ columns[1] }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in data" :key="user.id">
              <th scope="row">
                <p ckass="users">{{ user.id }}</p>
              </th>
              <td>
                <p ckass="users">{{ user.name }}</p>
              </td>
              <td>
                <p ckass="users">{{ user.email }}</p>
              </td>
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
  props: {
    data: Array,
    description: String,
    columns: [],
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 7px;
  background-color: #fff;

  .users {
    font-size: 12px;
  }
}
</style>
