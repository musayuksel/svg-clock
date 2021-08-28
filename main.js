import cartesianGrid from './cartesianGrid.js'
import createSVGElement from './createSVGElement.js'
import createMarkers from './clockFace.js'//lines for mins and hours

const clock = document.querySelector(".clock")
const clockFace = createSVGElement({
    attributes: {
        r: 140,
        fill: "#f00"
    },
    type: "circle"
})



const markers = createMarkers()



const handsSVG = drawHands();
requestAnimationFrame(runClock);


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
    const date = new Date();

    const ms = (date.getMilliseconds());
    const second = (date.getSeconds()*6+(ms*6/1000));
    //between 2 seconds angle will change acording to ms
    const minutes = date.getMinutes()*6 + (second/60)%6//for middle angle
    const hourdeg = date.getHours()*30+(minutes/6)%30

    const sec = document.getElementById('sec');
    const min = document.getElementById('min');
    const hours = document.getElementById('hour');
 
    sec.setAttributeNS(null, "transform", `rotate(${second})`);
    min.setAttributeNS(null, "transform", `rotate(${minutes})`);
    hours.setAttributeNS(null, "transform", `rotate(${hourdeg})`);
    requestAnimationFrame(runClock)
}







clock.appendChild(clockFace)
clock.appendChild(markers)
clock.appendChild(handsSVG)
// clock.appendChild(cartesianGrid)
// runClock();