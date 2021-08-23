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


const minuteSVG = createSVGElement({type: "svg", attributes: {
    id: "minuteSVG"
}})
setInterval(runMin,100);
let secDeg=0;
function runMin(){
    //create min and add appendChild to clock
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
    
    secDeg = (secDeg+6);
    sec.setAttributeNS(null, "transform", `rotate(${secDeg})`);


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
    min.setAttributeNS(null, "transform", `rotate(${secDeg/60})`);

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
    hour.setAttributeNS(null, "transform", `rotate(${secDeg/3600})`);
 
    document.getElementById('minuteSVG').innerHTML=''//every sec delete before 
    minuteSVG.appendChild(sec);
    minuteSVG.appendChild(min);
    minuteSVG.appendChild(hour);
}








clock.appendChild(clockFace)
clock.appendChild(markers)
clock.appendChild(minuteSVG)
// clock.appendChild(cartesianGrid)