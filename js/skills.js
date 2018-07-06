function skills (){
    // i create skils article
    const skillsArticle = document.createElement('article')
    skillsArticle.id = "skills"

    // i create bootstrap rows
    const rowHtml = document.createElement('div')
    const rowJs = document.createElement('div')
    const rowVanilla = document.createElement('div')
    const rowJquery = document.createElement('div')
    const rowNode = document.createElement('div')
    const rowPhp = document.createElement('div')
    const rowPython = document.createElement('div')
    const rowPhotoshop = document.createElement('div')
    const rowRef = document.createElement('div')
    const rowGit = document.createElement('div')

    // needed for bootstrap
    rowHtml.className = "row"
    rowJs.className = "row"
    rowVanilla.className = "row"
    rowJquery.className = "row"
    rowNode.className = "row"
    rowPhp.className = "row"
    rowPython.className = "row"
    rowPhotoshop.className = "row"
    rowRef.className = "row"
    rowGit.className = "row"

    // i create éléments with assignation
    const skillsTitle = document.createElement('h3')
    const html = document.createElement('p')
    const js = document.createElement('p')
    const vanilla = document.createElement('p')
    const jquery = document.createElement('p')
    const nodeJs = document.createElement('p')
    const php = document.createElement('p')
    const python = document.createElement('p')
    const photoshop = document.createElement('p')
    const referencement = document.createElement('p')
    const git = document.createElement('p')

    skillsTitle.id = `skills-title`
    skillsTitle.textContent = `COMPETENCES`
    html.textContent = `Html - CSS - Bootstrap`
    js.textContent = `JavaScript`
    vanilla.textContent = `Vanilla`
    jquery.textContent = `jQuery`
    nodeJs.textContent = `NodeJs Angular`
    php.textContent = `Php-Sql`
    python.textContent = `Python`
    photoshop.textContent = `Photoshop Illustrator`
    referencement.textContent = `Referencement`
    git.textContent= `Git`

    const imgHtml = document.createElement('img')
    const imgJs = document.createElement('img')
    const imgVanilla = document.createElement('img')
    const imgJquery = document.createElement('img')
    const imgNode = document.createElement('img')
    const imgPhp = document.createElement('img')
    const imgPython = document.createElement('img')
    const imgPhotoshop = document.createElement('img')
    const imgRef = document.createElement('img')
    const imgGit = document.createElement('img')

    imgHtml.src = "assets/pictures/3etoiles.png"
    imgJs.src = "assets/pictures/3etoiles.png"
    imgVanilla.src = "assets/pictures/3etoiles.png"
    imgJquery.src = "assets/pictures/3etoiles.png"
    imgNode.src = "assets/pictures/1etoiles.png"
    imgPhp.src = "assets/pictures/2etoiles.png"
    imgPython.src = "assets/pictures/1etoiles.png"
    imgPhotoshop.src = "assets/pictures/2etoiles.png"
    imgRef.src = "assets/pictures/2etoiles.png"
    imgGit.src = "assets/pictures/1etoiles.png"

    // bootstrap class and mine
    skillsArticle.className = `col-xs-12 col-md-6 article-skills opacity`
    skillsTitle.className = `col-xs-offset-1 art-title`
    html.className = `col-xs-offset-1 col-xs-6 art-p`
    js.className = `col-xs-offset-1 col-xs-6 art-p margin-plus`
    vanilla.className = `col-xs-offset-2 col-xs-5 art-p margin-moins`
    jquery.className = `col-xs-offset-2 col-xs-5 art-p margin-moins`
    nodeJs.className = `col-xs-offset-2 col-xs-5 art-p margin-moins`
    php.className = `col-xs-offset-1 col-xs-6 art-p margin-plus`
    python.className = `col-xs-offset-1 col-xs-6 art-p margin-plus`
    photoshop.className = `col-xs-offset-1 col-xs-6 art-p margin-plus`
    referencement.className = `col-xs-offset-1 col-xs-6 art-p margin-moins`
    git.className = `col-xs-offset-1 col-xs-6 art-p margin-moins`

    imgHtml.className = `col-xs-4`
    imgJs.className = `col-xs-4 margin-plus`
    imgVanilla.className = `col-xs-4 margin-moins`
    imgJquery.className = `col-xs-4 margin-moins`
    imgNode.className = `col-xs-4 margin-moins`
    imgPhp.className = `col-xs-4 margin-plus`
    imgPython.className = `col-xs-4 margin-plus`
    imgPhotoshop.className = `col-xs-4 margin-plus`
    imgRef.className = `col-xs-4 margin-moins`
    imgGit.className = `col-xs-4 margin-moins`

    let container = document.getElementById('container')
    container.appendChild(skillsArticle)
    skillsArticle.appendChild(skillsTitle)

    skillsArticle.appendChild(rowHtml)
    rowHtml.appendChild(html)
    rowHtml.appendChild(imgHtml)

    skillsArticle.appendChild(rowJs)
    rowJs.appendChild(js)
    rowJs.appendChild(imgJs)

    skillsArticle.appendChild(rowVanilla)
    rowVanilla.appendChild(vanilla)
    rowVanilla.appendChild(imgVanilla)

    skillsArticle.appendChild(rowJquery)
    rowJquery.appendChild(jquery)
    rowJquery.appendChild(imgJquery)

    skillsArticle.appendChild(rowNode)
    rowNode.appendChild(nodeJs)
    rowNode.appendChild(imgNode)

    skillsArticle.appendChild(rowPhp)
    rowPhp.appendChild(php)
    rowPhp.appendChild(imgPhp)

    skillsArticle.appendChild(rowPython)
    rowPython.appendChild(python)
    rowPython.appendChild(imgPython)

    skillsArticle.appendChild(rowPhotoshop)
    rowPhotoshop.appendChild(photoshop)
    rowPhotoshop.appendChild(imgPhotoshop)

    skillsArticle.appendChild(rowRef)
    rowRef.appendChild(referencement)
    rowRef.appendChild(imgRef)

    skillsArticle.appendChild(rowGit)
    rowGit.appendChild(git)
    rowGit.appendChild(imgGit)

}