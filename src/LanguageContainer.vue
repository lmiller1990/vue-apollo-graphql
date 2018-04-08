<template>
  <div v-if="language">
    <h3>{{ language.name }}</h3>
    <div 
      v-for="framework in language.frameworks"
      :key="framework.id"
    >
      {{ framework.name }}
    </div>
  </div>
</template>
  </div>
</template>

<script>
export default {
  name: 'LanguageContainer',

  computed: {
    language() {
      return this.$store.state.languages[this.$route.params.id]
    }
  },

  watch: {
    '$route.params.id': { 
      handler (val) {
        this.$store.dispatch('getLanguage', val)
      },
      immediate: true
    }
  }
}
</script>
