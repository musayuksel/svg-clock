import cartesianGrid from './cartesianGrid.js'

const clock = document.querySelector('.clock')

const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
rect.setAttributeNS(null, "width", 50)
rect.setAttributeNS(null, "height", 50)
rect.setAttributeNS(null, "x", 0)
rect.setAttributeNS(null, "y", 0)

rect.setAttributeNS(null, "fill", "#f00")

const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
line.setAttributeNS(null, "x1", 0)
line.setAttributeNS(null, "y1", 0)
line.setAttributeNS(null, "x2", 100)
line.setAttributeNS(null, "y2", 100)
line.setAttributeNS(null, "stroke", "#000")

clock.appendChild(rect) 
// console.log(clock);

clock.appendChild(cartesianGrid)