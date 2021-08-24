import cartesianGrid from './cartesianGrid.js'
import createSVGElement from './createSVGElement.js'
import createMarkers from './clockFace.js'//lines for mins and hours

const clock = document.querySelector(".clock")
const clockFace = createSVGElement({
    type: "circle",
    attributes: {
        r: 140,
        fill: "#f00"
    }
})



const markers = createMarkers()



const handsSVG = drawHands();
setInterval(runClock,100);
let secDeg=0;
function drawHands(){
    const handsSVG = createSVGElement({type: "svg", attributes: {
        id: "handsSVG"
    }})

    const sec =createSVGElement({
        type: "line",
        attributes: {
            id: "sec",
            x1: 0,
            y1: 0,
            x2: 0,
            y2: -140,
            stroke: '#fff',
            "stroke-width":"3"
        }
    })
    
   


    const min =createSVGElement({
            type: "line",
            attributes: {
                    id: "min",
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: -120,
                    stroke: '#fff',
                    "stroke-width":"3"
                }
            })
  

    const hour =createSVGElement({
            type: "line",
            attributes: {
                    id: "hour",
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: -100,
                    stroke: '#fff',
                    "stroke-width":"3"
                }
            })
    
    handsSVG.appendChild(sec);
    handsSVG.appendChild(min);
    handsSVG.appendChild(hour);
    return handsSVG;
}

function runClock(){
     secDeg = (secDeg+6);
    const sec = document.getElementById('sec');
    sec.setAttributeNS(null, "transform", `rotate(${secDeg+=6})`);
    min.setAttributeNS(null, "transform", `rotate(${secDeg/60})`);
    hour.setAttributeNS(null, "transform", `rotate(${secDeg/3600})`);
}







clock.appendChild(clockFace)
clock.appendChild(markers)
clock.appendChild(handsSVG)
// clock.appendChild(cartesianGrid)