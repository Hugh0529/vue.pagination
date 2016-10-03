<template>
  <div class="pagination-wrapper">
    <pagination :pagination.sync="pagination"></pagination>
    第{{pagination.page}}页,&nbsp;&nbsp;&nbsp;&nbsp;共{{pagination.total}}项
  </div>
</template>

<script>
  import Pagination from '../../pagination/vue.Pagination.vue'

  export default {
    components: {
      Pagination: Pagination
    },

    data: function () {
      return {
        pagination: {
          page: 1,
          limit: 10,
          total: 88
        }
      }
    },

    watch: {
      'pagination.page': {
        handler: function (val, oldVal) {
          alert(this.pagination.page)
        },
        deep: true
      }
    }
  }
</script>

<style>
  .pagination-wrapper {
    padding: 10px;
  }

  .pagination li a {
    cursor: pointer;
  }
</style>
