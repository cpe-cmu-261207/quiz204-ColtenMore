const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here

}

// more codes for Search and Reset buttons here
function highlight(text) {
  var inputText = document.getElementById("length")
  var innerHTML = inputText.innerHTML
  var index = innerHTML.indexOf(text)
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length)
   inputText.innerHTML = innerHTML
  }
}

const sBtn = document.querySelector('#search')
sBtn.onclick = () => {
  highlight(length)
}