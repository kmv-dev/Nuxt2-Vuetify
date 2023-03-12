<template>
  <v-row justify="center">
    <v-col class="mx-6">
      <SearchField />
      <p>index page</p>
    </v-col>
  </v-row>
</template>

<script>
import SearchField from '@/components/SearchField'
export default {
  name: 'IndexPage',
  components: {
    SearchField
  }
}
</script>
