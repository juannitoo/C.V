function tooltipPrint(domElement, tooltipId){
    // thi function print the selected tooltip on screen
    domElement.addEventListener('mouseover', function(event) {
        const tooltipToPrint = document.getElementById(tooltipId)
        let posY = event.clientY
        // scrollTop doesn't work. return 0. So position is under element
        // May be cause by papyrus animation
        // let scroll = domElement.scrollTop
        tooltipToPrint.style.display = "block"
        tooltipToPrint.style.position = "fixed"
        tooltipToPrint.style.left = "20%"
        tooltipToPrint.style.top = posY+50+"px"
    })
    domElement.addEventListener('mouseout', function(event) {
        const tooltipToPrint = document.getElementById(tooltipId)
        tooltipToPrint.style.display = "none"
    })
}