class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- '/]+/g, '')
  }

  static titleize(string){
    const JOINERS = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(' ')
    for( let n = 0; n < arr.length; n++) {
      if (n == 0) {arr[n] = this.capitalize(arr[n])}
      if (!JOINERS.includes(arr[n])) {arr[n] = this.capitalize(arr[n])}
    }
    return arr.join(' ')
  }
}
