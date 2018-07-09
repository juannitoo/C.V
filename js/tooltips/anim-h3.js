function animh3 (){
    // index.html 112
    // filter touch devices for tootltips "mouseover" event 
    if ( window.matchMedia("(min-width: 992px)").matches ) { 
        const h3 = document.getElementsByTagName('h3')
        // html collection so "array.from"
        Array.from(h3).forEach(function(element) {
            element.classList.add('anim-color');
        });
    }
}