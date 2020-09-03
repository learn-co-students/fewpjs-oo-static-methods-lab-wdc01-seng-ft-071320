class Formatter {
  //add static methods here

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence){
    let preps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let final = [];
    let arr = sentence.split(" ")

    for (let i = 0; i < arr.length; i++){
      if (i == 0){
        final.push(this.capitalize(arr[i]))
      }
      else {
        if (preps.includes(arr[i])){
          final.push(arr[i])
        }
        else{
          final.push(this.capitalize(arr[i]))
        }
      }
    }
    return final.join(" ")
  }
}