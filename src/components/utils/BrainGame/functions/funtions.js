export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function checkRandomExistance(UsedRandoms, randomNumber, exist) {
  if (!UsedRandoms.includes(randomNumber)) {
    UsedRandoms.push(randomNumber)
  } else {
    exist = !exist
    while (exist) {
      randomNumber = getRandomInt(0, 15)
      if (!UsedRandoms.includes(randomNumber)) {
        UsedRandoms.push(randomNumber)
        exist = !exist
      }
    }
  }
  return randomNumber
}
