// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach((driver) => console.log(driver.name))
}

function logDriversByHometown(drivers, homeTown) {
  newArr = drivers.filter((driver) => driver.hometown === homeTown)
  newArr.forEach((diver) => console.log(diver.name))
}

function driversByRevenue(rev) {
  let newArr = rev.slice()
  newArr.sort((a, b) => a.revenue - b.revenue)
  return newArr
}

function driversByName(drivers) {
  let newArr = drivers.slice()
  newArr.sort((a, b) => a.name.localeCompare(b.name))

  return newArr
}
function totalRevenue(drivers) {
  // drivers.reduce((a, c) => a.revenue + c.revenue)

  let count = 0
  drivers.forEach((item) => count += item.revenue)

  return count
}
function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
