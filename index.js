var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
    katzDeliLine.slice(1)
  }
}

function currentLine(katzDeliLine) {
  var lineCall = "The line is currently: "
  var customers = []
  for (let i = 1; i <= katzDeliLine.length; i++) {
    if (i === katzDeliLine.length) {
      customers.push(` ${i}. ${katzDeliLine[i-1]}`)
    } else {
      customers.push(` ${i}. ${katzDeliLine[i-1]},`)
    }
  }
  return lineCall.concat(customers)
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return 
  }
}