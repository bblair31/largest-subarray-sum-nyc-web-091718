function largestSubarraySum(array) {
  let partialMax = 0
  let max = 0

  array.forEach(number => {
    partialMax = Math.max(0, partialMax + number)
    max = Math.max(max,partialMax)
  })
  return max
}
