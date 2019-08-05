const body = document.body

const redSlider = document.getElementById('RedSlider')
const greenSlider = document.getElementById('GreenSlider')
const blueSlider = document.getElementById('BlueSlider')
const sliderBox = document.getElementById('sliderBox')

const redValue = document.getElementById('RedValue')
const greenValue = document.getElementById('GreenValue')
const blueValue = document.getElementById('BlueValue')
const hexValue = document.getElementById('HexValue')


sliderBox.addEventListener('input', function (event) {
  //取各顏色滑桿的值
  let redInput = redSlider.value
  redValue.innerText = redInput

  let greenInput = greenSlider.value
  greenValue.innerText = greenInput

  let blueInput = blueSlider.value
  blueValue.innerText = blueInput

  //取為Number後轉換為16進制
  hexOutput = rgb2Hex(Number(redInput), Number(greenInput), Number(blueInput))

  //16進制結果寫入背景顏色與h3
  hexValue.innerText = hexOutput
  body.style.backgroundColor = hexOutput
})


function rgb2Hex(red, green, blue) {
  let redInHex = red.toString(16)
  let greenInHex = green.toString(16)
  let blueInHex = blue.toString(16)
  let hexOutput = '#' + fillTwoWord(redInHex) + fillTwoWord(greenInHex) + fillTwoWord(blueInHex)
  return hexOutput
}

//用0來補齊兩個字元
function fillTwoWord(string) {
  let value = string.padStart(2, 0)
  return value
}