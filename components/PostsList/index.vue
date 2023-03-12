<template>
  <v-list two-line>
    <v-list-item-group
      v-model="selected"
      multiple
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
            @click="showEditModal()"
          >
            edit
          </v-btn><v-btn color="error" class="mr-2">
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
import { mapActions } from 'vuex'
export default {
  name: 'PostsList',
  data () {
    return {
      selected: [0],
      page: 1,
      itemsVisible: 10
    }
  },
  computed: {
    posts () {
      return this.$store.getters.getPosts
    },
    totalPages () {
      return Math.round((this.posts.length / this.itemsVisible) - 1)
    },
    paginatedPosts () {
      const start = this.page * this.itemsVisible
      const end = start + this.itemsVisible
      return this.posts.slice(start, end)
    }
  },
  methods: {
    ...mapActions({
      setIsShow: 'setShowModal'
    }),
    showEditModal () {
      this.setIsShow(true)
    },
    edit () {
      console.log('edit')
    }
  }
}
</script>
