class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    let arr = []
    string.split(' ').forEach(word => {
      arr.push(word.replace(/[^A-Za-z0-9-']+/g, ''))
    })
    return arr.join(' ')
  }

  static titleize(string) {
    let arr = string.split(' ')
    let resultArr = []
    if (arr[0] == 'a') {
      arr[0] = this.capitalize(arr[0])
    }
    arr.forEach(word => {
      if (word != 'a' && word != 'the' && word != 'an' && word != 'but' && word != 'of' && word != 'and' && word != 'for' && word != 'at' && word != 'by' && word != 'from' ) {
        resultArr.push(this.capitalize(word))
      } else {
        resultArr.push(word)
      }
        
    })
    return resultArr.join(' ')
  }
}