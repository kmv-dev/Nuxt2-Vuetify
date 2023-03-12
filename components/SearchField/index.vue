<template>
  <v-row class="d-flex align-center">
    <v-text-field clearable>
      <template #label>
        Что хотели <strong>бы</strong> найти? <v-icon style="vertical-align: middle">
          mdi-file-find
        </v-icon>
      </template>
    </v-text-field>
    <v-btn class="mb-2 ml-8">
      Поиск
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'SearchField'
}
</script>
