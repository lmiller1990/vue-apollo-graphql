<template>
  <div>
    {{ languageName }}
  </div>
</template>

<script>
export default {
  name: 'LanguageContainer',

  computed: {
    languageName() {
      const lang = this.$store.getters['getLanguageById'](this.$route.params.id)
      return lang ? lang.name : ''
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
