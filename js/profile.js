function profile (){
    // i create 'article' and elements
    const articleProfile = document.createElement('article')
    const titleProfile = document.createElement('h1')
    const text = document.createElement('p')

    titleProfile.textContent = `PROFIL`
    text.textContent = `Agé de 38 ans, j’ai été intéressé par le 
    développement informatique sur le tard, 
    j’ai  réalisé une formation au Greta afin de 
    me professionnaliser. J’ai, entre autres,  
    été initié à l’architecture MVC,  Node.js, 
    et à l’utilisation  d’outils comme Git. 
    A la suite de la formation, j’ai réalisé des 
    tutoriaux sur le framework Php Silex ainsi 
    que sur le langage Python pour découvrir
    d’autres outils. Je réalise également 
    un logiciel en JavaScript avec Electron.js .
    Je souhaite maintenant acquérir ma 
    première expérience professionnelle en 
    tant que développeur.`


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