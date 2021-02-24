let first = 0
let second = 0
let total = 0

document.getElementById('results').addEventListener('click', report)

function report () {
  first = document.getElementById('box1').value
  second = document.getElementById('box2').value
  first = parseInt(first)
  second = parseInt(second)
  for (let i = 0; i < first; i++) {
    total = total + second
  }
  document.getElementById('report').innerHTML = total
  total = 0
}
