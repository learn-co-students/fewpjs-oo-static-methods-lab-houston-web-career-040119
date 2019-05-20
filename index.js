class Formatter {
  //add static methods here
  static capitalize(str) {
    if( str.length === 0 ) {
      return "";
    } else {
      return str[0].toUpperCase() + str.slice(1);
    }
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9\s'-]+/g,"");
  }

  static titleize(str) {
    let words = str.split(/\s/);
    let nonCapWords = ["the","a","an","but","of","and","for","at","by","from"];
    let newWords = []
    for(let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i === 0) {
        newWords.push(Formatter.capitalize(word));
      } else {
        if ( !nonCapWords.includes(word) ) {
          newWords.push(Formatter.capitalize(word));
        } else {
          newWords.push(word);
        }
      }
    }
    return newWords.join(" ");
  }
}