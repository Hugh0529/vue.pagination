<template>
  <pagination :pagination.sync="pagination"></pagination>
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
