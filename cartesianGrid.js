function createSVGElement({type, attributes}) {
    const svgNameSpace = "http://www.w3.org/2000/svg"
    const svgElement = document.createElementNS(svgNameSpace, type)
    for(let attribute in attributes) {
        type = "text" ? 
            svgElement.setAttribute(attribute, attributes[attribute]) 
        :   svgElement.setAttributeNS(null, attribute, attributes[attribute])
    }
    return svgElement
}

export default (function() {
    const svgNameSpace = "http://www.w3.org/2000/svg"
    
    const parentEl = createSVGElement({type: "svg", attributes: { overflow: "visible", opacity: 1 }})
    const gridSize = 1000
    const font = "sans-serif"
    const fontWeight = "bold"

    for(let i = 0; i < gridSize; i++) {
        const gridResolution = i * 10 
        const strokeWidth = i % 5 === 0 ? 1 : 0.25
        const strokeColor = "#000"
        const opacity = i === 0 ? 1 : .125
        const markerSize = 5
    
        const negativeVerticalLine = createSVGElement({
            type: "line",
            attributes: {
                x1: -gridResolution, y1: -gridSize,
                x2: -gridResolution, y2: gridSize,
                stroke: strokeColor, "stroke-width": strokeWidth,
                opacity: opacity,
            }
        })

        const positiveVerticalLine = createSVGElement({
            type: "line",
            attributes: {
                x1: gridResolution, y1: -gridSize,
                x2: gridResolution, y2: gridSize,
                stroke: strokeColor, "stroke-width": strokeWidth,
                opacity: opacity,
            }
        })
    
        const negativeHorizontalLine = createSVGElement({
            type: "line", 
            attributes: {
                x1: -gridSize, y1: -gridResolution,
                x2: gridSize, y2: -gridResolution,
                stroke: strokeColor, "stroke-width": strokeWidth,
                opacity: opacity,
            }
        })
    
        const positiveHorizontalLine = createSVGElement({
            type: "line",
            attributes: {
                x1: -gridSize, y1: gridResolution,
                x2: gridSize, y2: gridResolution,
                stroke: strokeColor, "stroke-width": strokeWidth,
                opacity: opacity,
            }
        })
    
        parentEl.appendChild(negativeVerticalLine)
        parentEl.appendChild(positiveVerticalLine)
        parentEl.appendChild(negativeHorizontalLine)
        parentEl.appendChild(positiveHorizontalLine)

        // Grid Values

        let 
            posXValue, negXValue, 
            posYValue, negYValue 

        if(i % 5 === 0 && i !== 0) {
            posXValue = document.createElementNS(svgNameSpace, "text")
            posXValue.textContent = i * 10
            posXValue.setAttributeNS(null, "x", -6 + i * 10)
            posXValue.setAttributeNS(null, "y", -5)
            posXValue.setAttributeNS(null, "font-size", 10)
            posXValue.setAttributeNS(null, "font-family", font)
            posXValue.setAttributeNS(null, "font-weight", fontWeight)

            negXValue = document.createElementNS(svgNameSpace, "text")
            negXValue.textContent = -i * 10
            negXValue.setAttributeNS(null, "x", -10 + i * -10)
            negXValue.setAttributeNS(null, "y", -5)
            negXValue.setAttributeNS(null, "font-size", 10)
            negXValue.setAttributeNS(null, "font-family", font)
            negXValue.setAttributeNS(null, "font-weight", fontWeight)

            posYValue = document.createElementNS(svgNameSpace, "text")
            posYValue.textContent = i * 10
            posYValue.setAttributeNS(null, "y", 4 + i * 10)
            posYValue.setAttributeNS(null, "x", -20)
            posYValue.setAttributeNS(null, "font-size", 10)
            posYValue.setAttributeNS(null, "font-family", font)
            posYValue.setAttributeNS(null, "font-weight", fontWeight)

            negYValue = document.createElementNS(svgNameSpace, "text")
            negYValue.textContent = -i * 10
            negYValue.setAttributeNS(null, "y", 4 + i * -10)
            negYValue.setAttributeNS(null, "x", -20)
            negYValue.setAttributeNS(null, "font-size", 10)
            negYValue.setAttributeNS(null, "font-family", font)
            negYValue.setAttributeNS(null, "font-weight", fontWeight)

            parentEl.appendChild(posXValue)
            parentEl.appendChild(negXValue)
            parentEl.appendChild(posYValue)
            parentEl.appendChild(negYValue)

        }
    }
    return parentEl
}())