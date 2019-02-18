export default class Time extends Date {
  format () {
    return `${this.getFullYear()}-${(this.getMonth() + 1).toString().padStart(2, 0)}-${(this.getDate()).toString().padStart(2, 0)} ${(this.getHours()).toString().padStart(2, 0)}:${(this.getMinutes()).toString().padStart(2, 0)}:${(this.getSeconds()).toString().padStart(2, 0)}`
  }
}
