<template>
  <v-row justify="center">
    <v-col class="mx-6">
      <BaseModal @save="save()" />
      <SearchField />
      <PostsList />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SearchField from '@/components/SearchField'
import BaseModal from '@/components/BaseModal'
import PostsList from '@/components/PostsList'
export default {
  name: 'IndexPage',
  components: {
    SearchField,
    BaseModal,
    PostsList
  },
  computed: {
    ...mapGetters({
      getModalStatus: 'getModalParams',
      modalOptions: 'getModalOptions'
    })
  },
  methods: {
    ...mapActions({
      setModalParams: 'setShowModalParams',
      setModalOptions: 'setModalOptions',
      addPost: 'setNewPost',
      editPost: 'editPost'
    }),
    save () {
      this.getModalStatus.isStatus === 'new' ? this.addPost(this.modalOptions) : this.editPost(this.modalOptions)
      const payload = { isShow: false, isStatus: 'close' }
      this.setModalParams(payload)
    }
  }
}
</script>
