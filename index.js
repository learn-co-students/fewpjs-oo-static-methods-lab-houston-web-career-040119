class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\s'-]/g, '')
  }

  static titleize(string) {
    let array = []
    string.split(' ').forEach((word) => {
      if(string.split(' ').indexOf(word) == 0) {
        word = this.capitalize(word)
      } else if(word !== 'the' && word !== 'of' && word !== 'and' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
        word = this.capitalize(word)
      }
      array.push(word)
    })

    return array.join(' ')
  }
}