import cartesianGrid from './cartesianGrid.js'
import createSVGElement from './createSVGElement.js'

const clock = document.querySelector(".clock")
const clockFace = createSVGElement({
    type: "circle",
    attributes: {
        r: 140,
        fill: "#f00"
    }
})

function createMarkers() {
    const markers = createSVGElement({type: "svg", attributes: {
        id: "markers"
    }})
    for(let i = 0; i < 60; i++){
        const angle = i * 6
        const isHourMarker = (i % 5 === 0)
        console.log(isHourMarker);
        const marker = createSVGElement({
            type: "line",
            attributes: {
                id: "marker",
                class: isHourMarker ? "hourMarker" : "minuteMarker",
                x1: 0,
                y1: -130,
                x2: 0,
                y2: -140,
                stroke: "#000"
            }
        })
        marker.setAttributeNS(null, "transform", `rotate(${angle})`);
        markers.appendChild(marker)
    }
    return markers
}

const markers = createMarkers()


clock.appendChild(clockFace)
clock.appendChild(markers)
// clock.appendChild(cartesianGrid)