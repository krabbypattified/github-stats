import { timeFormat } from 'd3-time-format'


export let chart = {

  // (0, 10, 3) => [0,5,10]
  range(start, end, count) {
    let arr = [], i = 0
    let interval = (end-start) / (count-1)
    while (i++ < count) arr.push(start+(i-1)*interval)
    return arr
  },

  // ([0,5,10], [0...10]) => [3,5,3]
  approximate(axis, data) {
    let arr = axis.slice(0).fill(0)
    data.forEach(d => arr[chart.closest(axis, d)]++)
    return arr
  },

  // Collects similar objects by property => [{ count:50, original:obj }]
  similar(arr, extractor) {
    let collection = {}
    arr.forEach(o => {
      let val = extractor(o)
      if (collection[val]) collection[val].count++
      else collection[val] = { count:1, original:o }
    })
    return Object.values(collection)
  },

  // ([0,5,10], 4) => 1
  closest(arr, value) {
    let diff = arr.map((v, i) => Math.abs(v-value))
    return chart.min(diff)
  },

  // ([1,2,3]) => 2
  max(arr) {
    return arr.reduce((iMax, v, i) => v > arr[iMax] ? i : iMax, 0)
  },

  // ([1,2,3]) => 0
  min(arr) {
    return arr.reduce((iMin, v, i) => v < arr[iMin] ? i : iMin, 0)
  },

  // Zips two arrays into an array or object with custom keys
  zip(arr1, arr2, key1, key2) {
    if (arr1.length !== arr2.length) throw new Error('cannot zip arrays with different lengths')
    return arr1.map((v1, i) =>
      key1 && key2
      ? {
          [key1]: v1,
          [key2]: arr2[i],
        }
      : [v1, arr2[i]]
    )
  },

  formatDate(d) {
    if (d.getMonth() === 1 && d.getDate() === 1) return timeFormat("%Y")(d) // 2017
    if (d.getDate() === 1) return timeFormat("%b")(d) // Jan
    return timeFormat("%a %d")(d) // Sun 28
  },

}
