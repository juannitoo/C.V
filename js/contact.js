function contact (){
    // i create 'article' and elements
    const articleContact = document.createElement('article')
    const titleContact = document.createElement('h1')
    const adress = document.createElement('p')
    const adressText = document.createElement('p')
    const phone = document.createElement('p')
    const phoneNumber = document.createElement('p')
    const email = document.createElement('p')
    const emailText = document.createElement('a')
    const web = document.createElement('p')
    const webText1 = document.createElement('a')
    const webText2 = document.createElement('a')
    const webText3 = document.createElement('a')

    articleContact.id = `contact`
    titleContact.textContent = `CONTACT`
    adress.textContent = `ADRESSE`
    adressText.textContent = `24 Av françois Mitterrand \n 64500 Ciboure`
    phone.textContent = `TÉLÉPHONE`
    phoneNumber.textContent = `06 51 21 35 17`
    email.textContent = `EMAIL`
    emailText.href = `mailto:jeanbalangue@hotmail.fr`
    emailText.textContent = `jeanbalangue@hotmail.fr`
    web.textContent = `SITE WEB / LOGICIEL`
    webText1.href = `http://www.locationsaintjeandeluz.fr`
    webText2.href = `http://www.iparglass.fr`
    webText3.href = `https://github.com/juannitoo`
    webText1.textContent = `www.locationsaintjeandeluz.fr \n`
    webText2.textContent = `www.iparglass.fr \n`
    webText3.textContent = `github : juannitoo \n`    
    webText1.target = `_blank`
    webText2.target = `_blank`
    webText3.target = `_blank`

    // bootstrap CSS class
    articleContact.className = `col-xs-12 col-md-6 article-contact opacity`
    titleContact.className = `col-xs-offset-1 art-title`
    adress.className = `col-xs-offset-1 art-p margin-plus`
    adressText.className = `col-xs-offset-1 art-p pre-line`
    phone.className = `col-xs-offset-1 art-p margin-plus`
    phoneNumber.className = `col-xs-offset-1 art-p`
    email.className = `col-xs-offset-1 art-p margin-plus`
    emailText.className = `col-xs-offset-1 art-p`
    web.className = `col-xs-offset-1 art-p margin-plus`
    webText1.className = `col-xs-offset-1 art-p pre-line`
    webText2.className = `col-xs-offset-1 art-p pre-line`
    webText3.className = `col-xs-offset-1 art-p pre-line`

    let container = document.getElementById("container")
    container.appendChild(articleContact)
    articleContact.appendChild(titleContact)

    articleContact.appendChild(titleContact)
    articleContact.appendChild(adress)
    articleContact.appendChild(adressText)
    articleContact.appendChild(phone)
    articleContact.appendChild(phoneNumber)
    articleContact.appendChild(email)
    articleContact.appendChild(emailText)
    articleContact.appendChild(web)
    articleContact.appendChild(webText1)
    articleContact.appendChild(webText2)
    articleContact.appendChild(webText3)
}