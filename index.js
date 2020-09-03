class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, '')
  }

  static titleize(string){
    let words = string.split(" ")
    for (let word of words){
      if (word.match(/^(the, a, an, but, of, and, for, at, by, from)$/)){
        
      }
    }
    return words.join(" ")
  }
}