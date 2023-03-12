<template>
  <v-dialog v-if="isShow" v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-textarea
        class="mx-4"
        outlined
        name="input-7-4"
        label="Outlined textarea"
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      />
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" @click="close()">
          Close
        </v-btn>
        <v-btn color="blue darken-1" @click="close()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BaseModal',
  data () {
    return {
      dialog: true
    }
  },
  computed: {
    ...mapGetters({
      isShow: 'getIsShow'
    })
  },
  methods: {
    ...mapActions({
      setIsShow: 'setShowModal'
    }),
    close () {
      this.setIsShow(false)
    }
  }

}
</script>
