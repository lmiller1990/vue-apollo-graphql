class Language {
  constructor(id, name, frameworksById) {
    this.id = id
    this.name = name
    this.frameworksById = frameworksById
  }
}

class Framework {
  constructor(id, name, similarById) {
    this.id = id
    this.name = name
    this.similarById = similarById
  }
}


const frameworks = [
  new Framework(1, 'Vue', 2),
  new Framework(2, 'React', [1, 5]),
  new Framework(3, 'Ember', [4]),
  new Framework(4, 'Angular', [1, 3]),
  new Framework(5, 'Preact', [2]),

  new Framework(6, 'Rails', [3, 7, 8]),
  new Framework(7, 'Phoenix', [3, 6, 8]),
  new Framework(8, 'Laravel', [6, 7]),
]

const languages = [
  new Language(1, 'JavaScript', [1, 2, 3, 4, 5]),
  new Language(2, 'Ruby', [6]),
  new Language(3, 'Elixir', [7]),
  new Language(4, 'PHP', [8]),
]

module.exports = {
  Language,
  Framework,
  languages,
  frameworks,
}
