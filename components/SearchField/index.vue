<template>
  <v-row class="d-flex align-center mx-2">
    <v-text-field v-model="searchValue" clearable>
      <template #label>
        Что хотели <strong>бы</strong> найти? <v-icon style="vertical-align: middle">
          mdi-file-find
        </v-icon>
      </template>
    </v-text-field>
    <v-btn class="mb-2 ml-8" @click="search">
      Поиск
    </v-btn>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchField',
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    ...mapActions({
      setSearch: 'search'
    }),
    search () {
      this.setSearch(this.searchValue)
    }
  }
}
</script>
