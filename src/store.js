import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag'
import apollo from './apolloClient'

const delay = () => new Promise(res => {
  setTimeout(() => {
    res(true)
  }, 1000)
})


Vue.use(Vuex)

const state = {
  languageIds: [],
  languages: {}
}

const mutations = {
  SET_LANGUAGES (state, { languages }) {
    const ids = languages.map(x => x.id)
    for (let id in ids) {
      if (!state.languageIds.includes(ids[id])) {
        state.languageIds.push(ids[id])
      }
    }
    console.log(state.languageIds)

    for (let l in languages) {
      const language = languages[l]
      state.languages = {
        ...state.languages, 
        [language.id]: {...state.languages[language.id], ...language},
      }
    }
  },

  UPDATE_LANGUAGE(state, { id, data }) {
    if (!state.languageIds.includes(id)) {
      state.languageIds.push(id)
    }
    state.languages = {...state.languages, [id]: {...data}}
    console.log(state.languages)
  }
}

const actions = {
  async getLanguage({ commit }, id) {
    await delay()
    console.time(`getLangById ${id}`)

    const query = gql`
      query GetLanguage($id: ID!) {
        getLanguage(id: $id) {
          id
          name
          frameworks {
            name
          }
        }
      }`

    const variables = {
      id: id 
    }

    const response = await apollo.query({
      query, variables
    })

    commit('UPDATE_LANGUAGE', { id, data: response.data.getLanguage })

    console.timeEnd(`getLangById ${id}`)
  },

  async getLanguages({ commit }) {
    await delay()
    console.time('getLanguages')

    const response = await apollo.query({
      query: gql`
      query Languages {
        languages {
          id
          name
        }
      }
      `
    })

    const { languages } = response.data
    commit('SET_LANGUAGES', { languages })

    console.timeEnd('getLanguages')
  }
}

const getters = {
  getLanguageById: (state) => (id) => {
    return state.languages.find(x => x.id === id)
  }
}

export default new Vuex.Store({
  state, mutations, actions, getters
})

