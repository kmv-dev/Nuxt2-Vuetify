<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      color="primary"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-row class="align-center justify-space-between mx-4">
        <v-toolbar-title class="title">
          Welcome to the Vuetify + Nuxt.js template
        </v-toolbar-title>
        <v-btn
          color="success"
          class="ma-2 white--text"
          @click="showAddModal()"
        >
          Новый пост
          <v-icon
            right
          >
            mdi-plus
          </v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BaseHeader',
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      miniVariant: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-arrow-right',
          title: 'Some page',
          to: '/somepage'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      setModalParams: 'setShowModalParams',
      setModalOptions: 'setModalOptions'
    }),
    showAddModal () {
      const payload = { isOpen: true, isStatus: 'new' }
      this.setModalParams(payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  @media (max-width: 900px) {
    font-size: 16px !important;
  }
  @media (max-width: 600px) {
    display: none
  }
}
</style>
