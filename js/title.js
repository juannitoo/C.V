function title (){
    // header : generate name - job- picture
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