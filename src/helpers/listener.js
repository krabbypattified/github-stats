export let listener = {

  addNegative(target, type, callback) {
    document.addEventListener(type, event => {
      if (!event.path.some(el => el === target)) callback(event)
    })
  },

  removeNegative(type, callback) {
    document.removeEventListener(type, callback)
  },

  add(target, type, callback) {
    target.addEventListener(type, callback)
  },

  remove(target, type, callback) {
    target.removeEventListener(type, callback)
  },

}
