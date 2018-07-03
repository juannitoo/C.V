function title (){
    const name = document.createElement('h1')
    const job = document.createElement('h2')
    const picture = document.createElement('img')
    const background = document.createElement('div')
    const row = document.createElement('div')

    name.textContent = `JEAN BALANGUÉ`
    name.id = "name"
    job.textContent = `développeur web`
    job.id = "job"
    picture.src = "assets/pictures/me.jpg"
    picture.id = "picture"
    background.id = "title-background"

    picture.className = "col-xs-3"
    name.className = "col-xs-7"
    job.className = "col-xs-offset-1 col-xs-6 "
    row.className = "row"

    let container = document.getElementById("container")
    container.appendChild(background)
    background.appendChild(row)
    row.appendChild(picture)
    row.appendChild(name)
    row.appendChild(job);

}