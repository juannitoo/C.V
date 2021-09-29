function title (){
    // header : generate name - job - picture

    const myName = document.createElement('h1')
    const job = document.createElement('h2')
    const picture = document.createElement('img')
    const background = document.createElement('div')
    const row = document.createElement('div')

    myName.textContent = `JEAN BALANGUÉ`
    myName.id = "name"
    job.textContent = `Développeur Full Stack`
    job.id = "job"
    picture.src = "assets/pictures/me.jpg"
    picture.id = "picture"
    background.id = "title-background"

    // animation fade in && out pour avertissement tooltips
    // change job text-content
    let click = 0;
    const papyrus = document.getElementById('papyrus')
    papyrus.addEventListener('click', function(){
        changeJob();
        click++;
    })
    setTimeout(() => {
        changeJob();      
    }, 400);

    function changeJob () {
        // filter touch devices for tootltips "mouseover" event 
        if ( window.matchMedia("(min-width: 992px)").matches && click == 0 ) { 
            
            // text-content fadeout activation 3600ms
            setTimeout(() => {
                job.classList.add('anim-fade-out')      
            }, 3600);

            // iterator to count the interval
            let iter = 0
            let interval = setInterval(() => { 
                iter++

                // four iteration max
                if ( iter < 5) { 
                    job.classList.remove('anim-fade-out')

                    // i change textcontent and add/delete fade-in/out css classes
                    // when needed
                    setTimeout(() => {
                        if (job.textContent == "Développeur Full Stack"){
                            job.classList.add('anim-fade-in')
                            job.textContent = "Survolez les titres des sections pour avoir plus de détails"
                            job.style.fontSize = "2.5em"
                        } else {            
                            job.textContent = "Développeur Full Stack"
                            job.style.fontSize = "3.5em"
                            job.classList.add('anim-fade-in')
                        }
                    }, 400)

                    // 3 first time : normal interval
                    // 3600ms fade out anim
                    // at fourth : i stop the interval 
                    if (iter == 4) {                 
                        // settimeout to neutralize up setTimeout 400ms 
                        // to return to normal state and normal animation on papyrus click
                        setTimeout(() => {
                            // job.classList.remove('anim-fade-in')
                        }, 500);
                        clearInterval(interval)

                    } else {
                        setTimeout(() => {
                            job.classList.remove('anim-fade-in')
                            job.classList.add('anim-fade-out')
                            
                        }, 3600);
                    }
                }
            
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