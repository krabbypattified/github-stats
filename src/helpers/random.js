export function random(thing) {
  if (Array.isArray(thing)) return thing[Math.floor(Math.random()*thing.length)]
}
