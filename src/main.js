var splitter = require('canvas-splitter')
var rgbLookUpTable = require('lut')

// returns a <canvas> filled with RGB pixel data
var big = rgbLookUpTable(32, 32, 64)

// uses canvas-splitter to slice up the canvas
var little = splitter(big, {
  width: 32, height: 32, cols: 64, rows: 1
})

// add each slice to the page
little.forEach(function (canvas) {
  canvas.setAttribute('style', 'padding:10px; margin:0;')
  document.body.appendChild(canvas)
})
