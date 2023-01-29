function profile() {
    // i create 'article' and elements
    const articleProfile = document.createElement('article')
    const titleProfile = document.createElement('h3')
    const text = document.createElement('p')

    titleProfile.id = `profile-title`
    titleProfile.textContent = `PROFIL`

    text.textContent = `Agé de 42 ans, j’ai été intéressé par le 
    développement informatique sur le tard, et
    j’ai réalisé une formation au Greta afin de 
    valider mes acquis. J’ai ensuite travaillé
    3 ans au sein d'une entreprise de recouvrement 
    où nous étions 2 développeurs, et où 
    j'ai utilisé Python, Django, Javascript 
    et Bash quotidiennement pour maintenir et enrichir
    l'ERP mise à disposition des gestionnaires
    et des créanciers, entièrement créé 
    en interne avec une grosse base de données SQL.
    Suite à ça, j'ai entrepris une formation DevOps 
    à l'ESTIA Bidart, puis j'ai suivi les formations 
    AdminSys et Angular d'Openclassrooms.`

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