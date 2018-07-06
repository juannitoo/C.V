function tooltipPrint(domElement, tooltipId){
    // this function print the selected tooltip on screen

    domElement.addEventListener('mouseover', function(event) {
        const tooltipToPrint = document.getElementById(tooltipId)
        let posY = event.clientY
        tooltipToPrint.style.visibility = "visible"
        tooltipToPrint.style.position = "fixed"
        tooltipToPrint.style.left = "20%"
        tooltipToPrint.style.top = posY+50+"px"

        // this is needed here to have various papyrus tooltip text-content
        let windowScroll = window.scrollY;
        const ttPapyrus = document.getElementById('tooltip-papyrus')   
        if ( windowScroll > 1000 ){
            ttPapyrus.textContent = `L'UX voudrait que vous puissiez refermer le papyrus en cliquant ici,
            mais moi je préfère que vous relisiez mon nom. Alors il faut cliquer sur le papyrus vert du haut
            pour le refermer.`
            ttPapyrus.style.textAlign = "left";
        } else {          
            ttPapyrus.textContent = "Cliquez sur le papyrus blanc pour le dérouler et découvrir mon CV"
            ttPapyrus.style.textAlign = "center";
        }

    })

    domElement.addEventListener('mouseout', function(event) {
        const tooltipToPrint = document.getElementById(tooltipId)
        tooltipToPrint.style.visibility = "hidden"
    })
}