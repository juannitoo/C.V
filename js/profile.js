function profile (){
    // i create 'article' and elements
    const articleProfile = document.createElement('article')
    const titleProfile = document.createElement('h3')
    const text = document.createElement('p')

    titleProfile.id = `profile-title`
    titleProfile.textContent = `PROFIL`
    // text.textContent = `Agé de 38 ans, j’ai été intéressé par le 
    // développement informatique sur le tard, 
    // j’ai  réalisé une formation au Greta afin de 
    // me professionnaliser. J’ai, entre autres,  
    // été initié à l’architecture MVC,  Node.js, 
    // et à l’utilisation  d’outils comme Git. 
    // A la suite de la formation, j’ai réalisé des 
    // tutoriaux sur le framework Php Silex ainsi 
    // que sur le langage Python pour découvrir
    // d’autres outils. Je réalise également 
    // un logiciel en JavaScript avec Electron.js .
    // Je souhaite maintenant acquérir ma 
    // première expérience professionnelle en 
    // tant que développeur.`
    text.textContent =`Agé de 41 ans, j’ai été intéressé par le 
    développement informatique sur le tard, et
    j’ai réalisé une formation au Greta afin de 
    valider mes acquis. J’ai ensuite travaillé
    3 ans au sein d'une entreprise de recouvrement 
    où nous étions 2 développeurs, et où 
    j'ai utilisé Python, Django, Javascript 
    et Bash quotidiennement pour maintenir et enrichir
    l'application mise à disposition des gestionnaires
    et des créanciers. Application web entièrement créé 
    en interne avec une très grosse base de données SQL.`

    // bootstrap CSS class
    articleProfile.className = `col-xs-11 col-xs-offset-1 col-md-offset-0 col-md-6 opacity`
    articleProfile.id = `profile`
    titleProfile.className = `art-title`
    text.className = `art-p text-p`

    let container = document.getElementById("container")
    container.appendChild(articleProfile)
    articleProfile.appendChild(titleProfile) 
    articleProfile.appendChild(text)

}