<template>
  <v-row justify="center">
    <v-col class="mx-6">
      <BaseModal />
      <SearchField />
      <PostsList />
    </v-col>
  </v-row>
</template>

<script>
import SearchField from '@/components/SearchField'
import BaseModal from '@/components/BaseModal'
import PostsList from '@/components/PostsList'
export default {
  name: 'IndexPage',
  components: {
    SearchField,
    BaseModal,
    PostsList
  }
}
</script>
