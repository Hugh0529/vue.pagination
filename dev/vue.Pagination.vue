<template>
  <div id="paging" v-if="pageCount > 1">
    <ul class="pagination">
      <li><a @click="goPrevious()" :class="{disabled: pagination.page === 1}">&#9664;</a></li>

      <li :class="isActive(1)"><a @click="goFirst()">1</a></li>
      <li v-if="isPrevDotShow()" class="disabled"><a>...</a></li>

      <li :class="isActive(item)" v-for="item in items">
        <a @click="goToPage(item)">{{item}}</a>
      </li>

      <li v-if="isNextDotShow()" class="disabled"><a>...</a></li>
      <li :class="isActive(pageCount)"><a @click="goLast()">{{pageCount}}</a></li>

      <li><a @click="goNext()" :class="{disabled: pagination.page === pageCount}">&#9654;</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    el: '#paging',
    data: function () {
      var pageCount = Math.ceil(this.pagination.total / this.pagination.limit)
      this.pageCount = pageCount
      var items = []
      var initItems = function () {
        if (this.pagination.page - 1 <= 4) {
          for (let i = 0; i < 6 && i < this.pageCount - 2; i = i + 1) {
            items.push(i + 2)
          }
        } else if (this.pageCount - this.pagination.page <= 4) {
          for (let i = 0; i < 6 && i < this.pageCount - 2; i = i + 1) {
            items.push(this.pageCount - 6 + i)
          }
        } else {
          for (let i = 0; i < 5 && i < this.pageCount - 2; i = i + 1) {
            items.push(this.pagination.page - 2 + i)
          }
        }
      }.bind(this)
      initItems()

      var setItems = function (page) {
        this.items = []
        if (page - 1 <= 4) {
          for (let i = 0; i < 6 && i < this.pageCount - 2; i = i + 1) {
            this.items.push(i + 2)
          }
        } else if (this.pageCount - page <= 4) {
          for (let i = 0; i < 6 && i < this.pageCount - 2; i = i + 1) {
            this.items.push(this.pageCount - 6 + i)
          }
        } else {
          for (let i = 0; i < 5 && i < this.pageCount - 2; i = i + 1) {
            this.items.push(page - 2 + i)
          }
        }
      }.bind(this)

      return {
        pageCount: pageCount,
        items: items,
        setItems: setItems
      }
    },

    props: {
      pagination: {
        type: Object,
        required: true,
        twoWay: true
      }
    },

    components: {
    },

    watch: {
      'pagination': {
        handler: function (pagination, oldVal) {
          this.pagination.total = pagination.total
          this.pagination.limit = pagination.limit
          this.pageCount = Math.ceil(this.pagination.total / this.pagination.limit)
          this.setItems(pagination.page)
        },
        deep: true
      }
    },

    methods: {
      goFirst: function () {
        this.pagination.page = 1
        this.setItems(this.pagination.page)
      },

      goPrevious: function () {
        if (this.pagination.page > 1) {
          this.pagination.page -= 1
          this.setItems(this.pagination.page)
        }
      },

      goToPage: function (page) {
        if (page >= 1 && page <= this.pageCount) {
          this.pagination.page = page
          this.setItems(this.pagination.page)
        }
      },

      goNext: function () {
        if (this.pagination.page < this.pageCount) {
          this.pagination.page += 1
          this.setItems(this.pagination.page)
        }
      },

      goLast: function () {
        this.pagination.page = this.pageCount
        this.setItems(this.pagination.page)
      },

      isActive: function (page) {
        return {
          active: page === this.pagination.page
        }
      },

      isPrevDotShow: function () {
        return this.pageCount >= 10 && (this.pagination.page - 1) > 4
      },

      isNextDotShow: function () {
        return this.pageCount >= 10 && (this.pageCount - this.pagination.page) > 4
      }
    }
  }
</script>

<style scoped>
  .disabled {
    cursor: not-allowed;
  }
  .pagination {
    margin: 0;
  }
</style>
