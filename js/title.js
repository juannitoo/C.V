function title (){
    // header : generate name - job - picture

    const myName = document.createElement('h1')
    const job = document.createElement('h2')
    const picture = document.createElement('img')
    const background = document.createElement('div')
    const row = document.createElement('div')

    myName.textContent = `JEAN BALANGUÉ`
    myName.id = "name"
    job.textContent = `développeur web`
    job.id = "job"
    picture.src = "assets/pictures/me.jpg"
    picture.id = "picture"
    background.id = "title-background"

    // animation fade in && out pour avertissement tooltips
    let click = 0;
    const papyrus = document.getElementById('papyrus')
    papyrus.addEventListener('click', function(){
        changeJob();
        click++;
    })

    function changeJob () {
        // filter touch devices for tootltips "mouseover" event 
        if ( window.matchMedia("(min-width: 992px)").matches && click == 0 ) { 
            
            setTimeout(() => {
                job.classList.add('anim-fade-out')      
            }, 3600);

            setInterval(() => { 
                job.classList.remove('anim-fade-out')

                setTimeout(() => {
                    if (job.textContent == "développeur web"){
                        job.classList.add('anim-fade-in')
                        job.textContent = "Survolez les titres des sections pour avoir plus de détails"
                        job.style.fontSize = "3em"
                    } else {            
                        job.textContent = "développeur web"
                        job.style.fontSize = "5em"
                        job.classList.add('anim-fade-in')
                    }
                }, 500)

                setTimeout(() => {
                    job.classList.remove('anim-fade-in')
                    job.classList.add('anim-fade-out')
                    
                }, 3600);
                
            }, 4000)
        }

    }


    picture.className = "col-xs-3 opacity"
    myName.className = "col-xs-7 opacity"
    job.className = "col-xs-offset-1 col-xs-6 opacity"
    row.className = "row"

    let container = document.getElementById("container")
    container.appendChild(background)
    background.appendChild(row)
    row.appendChild(picture)
    row.appendChild(myName)
    row.appendChild(job);
   
}