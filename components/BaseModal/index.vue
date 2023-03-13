<template>
  <v-dialog v-if="modalParams.isOpen" v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span v-if="modalParams.isStatus === 'new'" class="headline">Создание поста</span>
        <span v-else class="headline">Редактирование поста</span>
      </v-card-title>
      <v-textarea
        v-model="text"
        class="mx-4"
        outlined
        :label="modalParams.isStatus === 'new' ? 'Новый текст' : 'Изменить текущий текст'"
      />
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" @click="close()">
          Close
        </v-btn>
        <v-btn color="blue darken-1" @click="save()">
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
      dialog: true,
      text: ''
    }
  },
  computed: {
    ...mapGetters({
      modalParams: 'getModalParams',
      modalOptions: 'getModalOptions',
      getModalStatus: 'getModalStatus'
    })
  },
  watch: {
    getModalStatus (newValue) {
      newValue === 'new' ? this.text = '' : this.text = this.modalOptions.name
    }
  },
  methods: {
    ...mapActions({
      setModalParams: 'setShowModalParams',
      setModalOptions: 'setModalOptions'
    }),
    close () {
      const payload = { isShow: false, isStatus: 'close' }
      this.setModalParams(payload)
      this.text = ''
    },
    async save () {
      try {
        if (this.modalParams.isStatus === 'new') {
          const payload = {
            id: this.getRandomId(0, 89755738883),
            name: this.text
          }
          await this.setModalOptions(payload)
          this.text = ''
        } else {
          const payload = {
            id: this.modalOptions.id,
            name: this.text
          }
          await this.setModalOptions(payload)
          this.text = ''
        }
        this.$emit('save')
      } catch (e) {
        console.log(e)
      }
    },
    getRandomId (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>
