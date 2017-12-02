export let storage = {

  get(key, fallback) {
    let result = JSON.parse(localStorage.getItem(key))
    return result || fallback
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

}
