/*
 * Combination
 */

const combinationBox = document.querySelector('#combinationBox')

const combinationN = document.querySelector('#combinationN')
combinationN.addEventListener('input', calculateCombination)
const combinationK = document.querySelector('#combinationK')
combinationK.addEventListener('input', calculateCombination)

function updateCombinationBox (value, error) {
  combinationBox.innerHTML = value
  MathJax.Hub.Queue(['Typeset', MathJax.Hub, combinationBox])

  if (error) {
    combinationBox.classList = 'text--red'
  } else {
    combinationBox.classList = ''
  }
  return true
}

function calculateCombination () {
  let n = parseInt(combinationN.value)
  let k = parseInt(combinationK.value)

  if (!Number.isInteger(n) || !Number.isInteger(k)) {
    updateCombinationBox('Spełnij warunki: $$n,k \\in \\mathbb{N}  \\land  k \\leq n$$', true)
    return
  }

  if (k > n) {
    updateCombinationBox('$$k > n$$', true)
    return
  }

  let nResult = factNum(n)
  let nkResult = factNum(k) * factNum(n - k) 

  let fullResult = nResult / nkResult

  updateCombinationBox(`$\${\\binom {${n}}{${k}}}={\\frac {${n}!}{${k}!(${n}-${k})!}}={\\frac {${factString(n)}}{${factString(k)}\\cdot${factString(k)}}}=\\dfrac{${nResult}}{${nkResult}}=${fullResult}$$`)
}
function factString (n) {
  let val = 1
  for (var i = 2; i <= n; i++) {
    val += `\\cdot${i}`
  }
  return val
}

function factNum (n) {
  let val = 1
  for (var i = 2; i <= n; i++) {
    val = val * i
  }
  return val
}

/*
 * Pascals'triangle
 */

const pTriangleBox = document.querySelector('#triangle')
const pTriangleLevels = document.querySelector('#pascalsTriangleLevels')
const pTriangleBtn = document.querySelector('#pascalsTriangleBtn')
pTriangleBtn.addEventListener('click', () => {
  createPascalsTriangle(pTriangleBox, pTriangleLevels.value)
  startButtonCycle(pTriangleBtn, pTriangleLevels.value * 1300)
})

function showPascalsTriangle (element) {
  let triangleRows = document.querySelectorAll(`#${element.id} .triangle__row`)

  for (let i = 0; i < triangleRows.length; i++) {
    setTimeout(() => {
      triangleRows[i].classList.add('showed')
      setTimeout(() => {
        triangleRows[i].classList.add('ended')
      }, 1300)
    }, i * 1000)
  }
}

function appendPascalsTriangle (triangle, element) {
  for (var i = 0; i < triangle.length; i++) {
    let row = document.createElement('div')
    row.classList.add('triangle__row')

    let rowNum = document.createElement('div')
    rowNum.classList.add('triangle__row__num')
    rowNum.innerHTML = `${i}`
    row.appendChild(rowNum)

    for (var j = 0; j < triangle[i].length; j++) {
      let block = document.createElement('div')
      block.classList.add('triangle__el')
      block.innerHTML = triangle[i][j]

      if (i + 1 !== triangle.length) {
        let blockAnimLeft = document.createElement('span')
        blockAnimLeft.classList.add('left')
        blockAnimLeft.innerHTML = triangle[i][j]
  
        let blockAnimRight = document.createElement('span')
        blockAnimRight.classList.add('right')
        blockAnimRight.innerHTML = triangle[i][j]
  
        block.appendChild(blockAnimLeft)
        block.appendChild(blockAnimRight)
      }
      row.appendChild(block)
    }
    element.append(row)
  }

  showPascalsTriangle(element)
}

function createPascalsTriangle (element, levels) {
  pTriangleBtn.classList.add('actions__btn--inprocess')
  element.innerHTML = ''

  let triangle = []

  for (var i = 0; i < levels; i++) {
    triangle[i] = new Array(i + 1)

    for (var j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
      }
    }
  }

  appendPascalsTriangle(triangle, element)
}

/*
 * Sierpinski's triangles in Pascal's triangle
 */

const sTriangle = document.querySelector('#sTriangle')
const sTriangleLevels = document.querySelector('#sTriangleLevels')
const sTriangleBtn = document.querySelector('#sTriangleBtn')

sTriangleBtn.addEventListener('click', () => {
  createSierpinskisTriangles(sTriangle, sTriangleLevels)
  startButtonCycle(sTriangleBtn, sTriangleLevels.value * 1300)
})

function createSierpinskisTriangles (element, levels) {
  createPascalsTriangle(element, sTriangleLevels.value)

  setTimeout(() => {
    let triangleElements = document.querySelectorAll(`#sTriangle .triangle__el`)

    for (let i = 0; i < triangleElements.length; i++) {
      triangleElement = triangleElements[i]

      triangleElementValue = parseInt(triangleElement.innerText.split('\n')[0])
      console.log(triangleElementValue)

      if (triangleElementValue % 2 === 0) {
        triangleElement.classList.add('hidden');
      }
    }
  }, sTriangleLevels.value * 1400)
}

/* Basic */
function startButtonCycle (element, time) {
  element.classList.add('actions__btn--inprocess')
  setTimeout(() => {
    element.classList.remove('actions__btn--inprocess')
  }, time)
}

/* Init */
document.addEventListener("DOMContentLoaded", () =>  {
  updateCombinationBox('Wpisz dane')
})