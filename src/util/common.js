export default class Time extends Date{

  format(type = 'YYYY-MM-DD HH:mm:ss'){
    let year = this.getFullYear()
    let month = this.getMonth().toString().padStart(2,0)
    let day = this.getDate().toString().padStart(2,0)
    let hours = this.getHours().toString().padStart(2,0)
    let minute = this.getMinutes().toString().padStart(2,0)
    let second = this.getSeconds().toString().padStart(2,0)

    return type.replace(/YYYY([^\d])MM([^\d])DD([^\d])HH([^\d])mm([^\d])ss/,`${year}$1${month}$2${day}$3${hours}$4${minute}$5${second}`)
  }

}

