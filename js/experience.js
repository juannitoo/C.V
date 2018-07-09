function experience (){
    // i create 'article' and elements
    const articleExp = document.createElement('article')
    const expTitle = document.createElement('h3')
    const interim = document.createElement('p')
    const nego = document.createElement('p')
    const commercial = document.createElement('p')
    const date1 = document.createElement('p')
    const date2 = document.createElement('p')
    const date3 = document.createElement('p')
    const row1 = document.createElement('div')
    const row2 = document.createElement('div')
    const row3 = document.createElement('div')

    articleExp.id = `experience`
    expTitle.id = `experience-title`
    expTitle.textContent = `EXPÉRIENCES`
    // "\n" is css linked to work "pre-line" 137
    interim.textContent = `Ouvrier Bâtiment - Industrie \n Manpower -Adecco`
    nego.textContent = `Negociateur immobilier \n Demeurimo Loiret`
    commercial.textContent = `Vendeur Délégué Commercial \n Cegetel`
    date1.textContent = `2007 - 2017`
    date2.textContent = `2004 - 2006`
    date3.textContent = `2002 - 2003`

    // bootstrap CSS class
    articleExp.className = `col-xs-12 col-xs-offset-1 col-md-offset-0 col-md-6 opacity`
    expTitle.className = `art-title`
    interim.className = `art-p`
    nego.className = `art-p pre-line`
    commercial.className = `art-p`
    date1.className = `col-xs-4 art-p`
    date2.className = `col-xs-4 art-p`
    date3.className = `col-xs-4 art-p`
    row1.className = `row`
    row2.className = `row`
    row3.className = `row`

    // append to dom
    let container = document.getElementById("container")
    container.appendChild(articleExp)
    articleExp.appendChild(expTitle)
    
    articleExp.appendChild(row1)
    row1.appendChild(date1)
    row1.appendChild(interim);

    articleExp.appendChild(row2)
    row2.appendChild(date2)
    row2.appendChild(nego);

    articleExp.appendChild(row3)
    row3.appendChild(date3)
    row3.appendChild(commercial);

}