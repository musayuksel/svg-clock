import createSVGElement from './createSVGElement.js'
export default function createMarkers() {
  const markers = createSVGElement({type: "svg", attributes: {
      id: "markers"
  }})
  for(let i = 0; i < 60; i++){
      const angle = i * 6
      const isHourMarker = (i % 5 === 0)
      // console.log(isHourMarker);
      const marker = createSVGElement({
          type: "line",
          attributes: {
              id: "marker",
              x1: 0,
              y1: -130,
              x2: 0,
              y2: -140,
              stroke: isHourMarker ? "#fff" : '#000'
          }
      })
      marker.setAttributeNS(null, "transform", `rotate(${angle})`);
      markers.appendChild(marker)
  }
  return markers
}