<template>
  <v-list two-line>
    <v-list-item-group
      v-model="selected"
    >
      <v-list-item v-for="(item) in paginatedPosts" :key="item.title" class="pr-0">
        <v-list-item-content>
          <v-list-item-title>{{ item.id }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="flex-row">
          <v-btn
            color="warning"
            class="mr-2"
            @click="showEditModal(item)"
          >
            edit
          </v-btn><v-btn color="error" class="mr-2" @click="deletePost(item.id)">
            delete
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
    <v-pagination
      v-model="page"
      :length="totalPages"
      :total-visible="7"
      class="mt-4"
    />
  </v-list>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PostsList',
  data () {
    return {
      selected: [],
      page: 1,
      itemsVisible: 10
    }
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
      getModalStatus: 'getModalStatus'
    }),
    totalPages () {
      return Math.round((this.posts.length / this.itemsVisible) + 1)
    },
    currentPage () {
      return this.page + 1
    },
    paginatedPosts () {
      const start = (this.page - 1) * this.itemsVisible
      const end = start + this.itemsVisible
      return this.posts.slice(start, end)
    }
  },
  watch: {
    getModalStatus () {
      this.selected = []
    }
  },
  methods: {
    ...mapActions({
      setModalParams: 'setShowModalParams',
      setModalOptions: 'setModalOptions',
      delete: 'deletePost'
    }),
    async showEditModal (item) {
      const payload = { isOpen: true, isStatus: 'edit' }
      await this.setModalOptions(item)
      this.setModalParams(payload)
    },
    deletePost (id) {
      this.delete(id)
    }
  }
}
</script>
