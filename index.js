class Formatter {
  //add static methods here
    static capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string){
      return string.replace(/[^0-9a-zA-Z '-]/g, '');
    }

    static titleize(string){
      let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      string = string.toLowerCase().split(' ');
      let arr = string.map((word, i) => {
        if(i === 0){
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else if (!exceptions.includes(word)) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word
        }
      }) 
    return arr.join(" ")
  }


}
