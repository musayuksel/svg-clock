export default function createSVGElement({ type, attributes }) {
    const svgNameSpace = "http://www.w3.org/2000/svg"
    const svgElement = document.createElementNS(svgNameSpace, type)
    for(const attribute in attributes){
        console.log(attribute,'<<<<<')
        svgElement.setAttributeNS(null, attribute, 
        attributes[attribute]
    )}
    return svgElement
}