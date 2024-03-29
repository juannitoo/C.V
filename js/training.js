function training() {
    // i create 'article' and html elements
    const articleTrainig = document.createElement('article')
    const trainingTitle = document.createElement('h3')
    const devops = document.createElement('p')
    const devDegree = document.createElement('p')
    const jsBayonne = document.createElement('p')
    const tutorial = document.createElement('p')
    const bac = document.createElement('p')
    const date0 = document.createElement('p')
    const date1 = document.createElement('p')
    const date2 = document.createElement('p')
    const date3 = document.createElement('p')
    const date4 = document.createElement('p')
    const row0 = document.createElement('div')
    const row1 = document.createElement('div')
    const row2 = document.createElement('div')
    const row3 = document.createElement('div')
    const row4 = document.createElement('div')

    articleTrainig.id = "formation"
    trainingTitle.textContent = `FORMATION`
    devops.textContent = `Diplôme chef de projet DevOps
    Estia Bidart`
    devDegree.textContent = `Titre pro développeur logiciel`
    //  "\n" is css linked to work. "pre-line" 137
    jsBayonne.textContent = `Formation Javascript \n Greta Bayonne`
    tutorial.textContent = `Plusieurs tutoriaux online`
    bac.textContent = `Bac ES`
    date0.textContent = `2022`
    date1.textContent = `2017`
    date2.textContent = `2017`
    date3.textContent = `2012 - ...`
    date4.textContent = `2000`

    // bootstrap CSS class
    articleTrainig.className = `col-xs-12 col-xs-offset-1 col-md-offset-0 col-md-6 article-training opacity`
    trainingTitle.className = `art-title`
    trainingTitle.id = "training"
    devops.className = `art-p pre-line margin-plus`
    devDegree.className = `art-p`
    jsBayonne.className = `art-p pre-line margin-plus`
    tutorial.className = `art-p margin-plus`
    bac.className = `art-p margin-plus`
    date0.className = ` col-xs-3 art-p margin-plus`
    date1.className = ` col-xs-3 art-p`
    date2.className = `col-xs-3 art-p margin-plus`
    date3.className = `col-xs-3 art-p margin-plus`
    date4.className = `col-xs-3 art-p margin-plus`
    row0.className = `row`
    row1.className = `row`
    row2.className = `row`
    row3.className = `row`
    row4.className = `row`

    // append to dom
    let container = document.getElementById("container")
    container.appendChild(articleTrainig)
    articleTrainig.appendChild(trainingTitle)

    articleTrainig.appendChild(row0)
    row1.appendChild(date0)
    row1.appendChild(devops);

    articleTrainig.appendChild(row1)
    row1.appendChild(date1)
    row1.appendChild(devDegree);

    articleTrainig.appendChild(row2)
    row2.appendChild(date2)
    row2.appendChild(jsBayonne);

    articleTrainig.appendChild(row3)
    row3.appendChild(date3)
    row3.appendChild(tutorial);

    articleTrainig.appendChild(row4)
    row4.appendChild(date4)
    row4.appendChild(bac);

}