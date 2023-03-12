<template>
  <v-row justify="center">
    <v-col class="mx-6">
      <BaseModal />
      <SearchField />
      <p>index page</p>
    </v-col>
  </v-row>
</template>

<script>
import SearchField from '@/components/SearchField'
import BaseModal from '@/components/BaseModal'
export default {
  name: 'IndexPage',
  components: {
    SearchField,
    BaseModal
  }
}
</script>
