(function () {
  const body = document.querySelector('body')
  const slider = document.querySelectorAll('.slider')
  const sliders = document.querySelector('.sliders')
  const result = document.getElementById('result')
  let colorValue = {
    red: 0,
    green: 0,
    blue: 0
  }

  // change event in eventListener for input HTML tag

  sliders.addEventListener('change', e => {

    let colorNumberTag = e.target.nextElementSibling
    getColorValue()
    if (colorNumberTag.dataset.color === 'r') {
      colorNumberTag.innerHTML = `${colorValue.red}`
    } else if (colorNumberTag.dataset.color === 'g') {
      colorNumberTag.innerHTML = `${colorValue.green}`
    } else if (colorNumberTag.dataset.color === 'b') {
      colorNumberTag.innerHTML = `${colorValue.blue}`
    }
    // change background color
    body.style.background = `#${showHex(colorValue.red, colorValue.green, colorValue.blue)}`
    // change HEX button content
    result.innerHTML = `#${showHex(colorValue.red, colorValue.green, colorValue.blue)}`
  })


  // get each color value
  let getColorValue = function () {

    slider.forEach(function (item) {
      if (item.dataset.color === 'r') {
        colorValue.red = item.value
      } else if (item.dataset.color === 'g') {
        colorValue.green = item.value
      } else if (item.dataset.color === 'b') {
        colorValue.blue = item.value
      }
    })
    return colorValue
  }

  // mouse on the button to see HEX value
  result.addEventListener('mouseover', e => {
    result.innerHTML = `#${showHex(colorValue.red, colorValue.green, colorValue.blue)}`
  })

  // click on button copy to clipboard
  result.addEventListener('click', e => {
    let input = document.createElement('input')
    document.body.appendChild(input)
    input.value = result.textContent
    input.select()
    document.execCommand('copy', false)
    input.remove()
    result.innerHTML = "Copied: " + input.value

  })

  // mouse out to show copy to clipboard
  result.addEventListener('mouseout', e => {
    result.innerHTML = "Copy to clipboard";
  })


  // RGB to Hex
  let rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16)
    if (hex.length < 2) {
      hex += "0"
    }
    return hex
  }
  // show Hex
  let showHex = function (r, g, b) {
    let red = rgbToHex(r)
    let green = rgbToHex(g)
    let blue = rgbToHex(b)
    return red + green + blue
  }

})()