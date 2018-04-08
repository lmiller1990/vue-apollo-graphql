class Language {
  constructor(id, name, frameworksById) {
    this.id = id
    this.name = name
    this.frameworksById = frameworksById
  }

  frameworks() {
    return this.frameworksById.map(id => frameworks.find(y => y.id === id))
  }
}

class Framework {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}


const frameworks = [
  new Framework(1, 'Vue'),
  new Framework(2, 'React'),
  new Framework(3, 'Ember'),
  new Framework(4, 'Angular'),
  new Framework(5, 'Preact'),

  new Framework(6, 'Rails'),
  new Framework(7, 'Phoenix'),
  new Framework(8, 'Laravel'),
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
