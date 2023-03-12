<template>
  <v-app light>
    <BaseHeader />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import BaseHeader from '@/components/BaseHeader'
export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader
  }
}
</script>
