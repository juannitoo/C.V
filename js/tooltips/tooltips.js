function tooltips () {
    // not responsive. mouseover event

    // locationsaintjeandeluz.fr
    const tooltipStJean = document.createElement('p')
    tooltipStJean.id = `tooltip-st-jean`
    tooltipStJean.className = `tooltips`
    tooltipStJean.innerHTML =`C'est le premier site que j'ai réalisé en 2013, 
    et qui permet à n'importe quel francophone de réaliser un contrat de location 
    saisonnière via mon template. Ce site m'aura fait connaître les parties back-end et 
    front-end d'un projet. J'ai tout fait tout seul, pour apprendre.`
    tooltipStJean.innerHTML += ` L'espace membre de ce site, qui permettait la sauvegarde 
    de leur contrat aux internautes, est actuellement fermé pour des problèmes d'encodage de 
    caractères dû au paramétrage de mon serveur mutualisé. La correction et la migration vers 
    une nouvelle architecture de cette base ont néanmoins été réalisé pour soutenir mon 
    titre professionnel et m'ont valu "les félicitations du jury". Le besoin d'une refonte totale, 
    ainsi que mes nouvelles idées et capacités font que je n'ai pas encore relancé ce service. 
    Côté technique, serveur mutualisé, Php en version 4, base de données Mysql avec du jQuery 
    pour mes requêtes ajax et la gestion du dom. L'encodage est en iso, dû a la l'utilisation 
    de la classe Php Fpdf qui génère le pdf, et lorsque mon hébergeur a passé la connexion 
    à la base en UTF-8 ( pour php7 ), mes données sauvegardées ne fonctionnaient plus. 
    Je vais m'orienter vers un framework Js (Angular, React, Vue) pour repartir de zéro,
    quand j'en aurais le temps.`     

    // Iparglass
    const tooltipIparglass = document.createElement('p')
    tooltipIparglass.id = `tooltip-iparglass`
    tooltipIparglass.className = `tooltips`
    tooltipIparglass.textContent = `C'est le dernier site que j'ai réalisé avant ma formation au Greta.
    C'est un site vitrine pour l'entreprise de mon voisin, avec formulaire de contact. 
    Je l'ai codé moi-même, sans CMS ni framework. On est sur du php4 pour le formulaire et
    sur du jQuery pour le Dom. Le code est déjà mieux structuré.`

    // github.
    const tooltipGithub = document.createElement('p')
    tooltipGithub.id = `tooltip-github`
    tooltipGithub.className = `tooltips`
    tooltipGithub.textContent = `Visitez mon compte github pour voir des exemples de code que j'ai réalisé.
    Il s'agit en grande partie de travaux pratiques liés à des tutoriaux onlines. Mais également de ce C.V 
    que je réalise avec mes dernières capacités, et de quelques scripts que j'ai codé et sélectionné 
    mais qui ne marcheront pas hors contexte.`

    // formation
    const tooltipFormation = document.createElement('p')
    tooltipFormation.id = `tooltip-training`
    tooltipFormation.className = `tooltips`
    tooltipFormation.innerHTML = `Tituliare d'un Bac ES, J'ai débuté ma formation seul en 2012 par 
    l'intermédiaire de tutoriaux online, essentiellement openClassroom. 
    J'ai commencé par apprendre le HTML, avant de passer au Php en procédural et à jQuery, le Javascript natif 
    m'ayant résister au début. J'ai pu réaliser mes différents projets et me rendre compte que j'y "arrivais".`
    tooltipFormation.innerHTML += '<br />'+
    `5 ans plus tard, en 2017, j'ai décidé de faire de ma passion mon métier en me professionnalisant par 
    l'intermédiaire d'une formation JavaScript au greta de Bayonne. J'y ai revu mes bases et poser des questions
    sur des sujets qui me posaient problèmes. J'ai pu voir comment coder certains professionnels et rencontrer 
    des gens qui partagent la même passion que moi. J'ai également découvert quelques techniques où outils 
    comme le MVC, l'éditeur VScode, les frameworks, la console ou encore Git et Github.`

    // competences
    const tooltipSkills = document.createElement('p')
    tooltipSkills.id = `tooltip-skills`
    tooltipSkills.className = `tooltips`
    tooltipSkills.innerHTML = `C'est difficile de se juger. Je me suis attribué ces notes en toute 
    subjectivité et selon mes connaissances. 1 étoile pour "je sais faire des choses mais il reste 
    beaucoup de choses à apprendre". 3 étoiles pour "j'arrive à faire tous ce dont j'ai envie mais 
    je passe trop de temps sur la doc ou les moteurs de recherche", et 5 étoiles quand "on est comme 
    sur les videos Youtube de Grafikart, on connait tout par coeur et on peut discuter en même temps". 
    Je ne me suis pas mis 4 étoiles en HTML-CSS parce que je débute avec Bootstrap, que je ne me 
    sers pas de SAAS ou LESS.`
    tooltipSkills.innerHTML += '<br />'+
    `Côté technique, je comprend le concept de classe en Php même si je ne l'ai pas beaucoup pratiqué,
    La compréhension d'Angular et de Silex m'ont fait beaucoup avancé dans la manière de 
    structurer mon code. Je comprend les enjeux du SQL, et je connais les bases du Python et de Git. 
    J'ai pratiqué Photoshop et illustrator pour mes besoins personnels.`
    tooltipSkills.innerHTML += '<br />'+
    `En JavaScript, côté Front-end, la formation m'a donné les éléments essentiels, mais c'est à moi de me
    perfectionner. Je peux dire que globalement je peux faire tout ce dont j'ai envie en natif, avec plus ou 
    moins d'effort selon ce qui est à faire, et que je dois encore apprendre les 2 principaux frameworks 
    que je ne connais pas, Vuejs et ReactJs. Je sais utilisé les API REST, le Json et des bibliothèques 
    tierces comme sortablesJs.`
    tooltipSkills.innerHTML += '<br />'+ 
    `En ce qui concerne le back-end avec NodeJs, j'ai des connaissances basiques qui me permettent de réaliser
    actuellement un logiciel de videos en boucle avec le framework ElectronJs pour l'importation-suppression 
    de videos et d'images par l'utilisateur. J'ai quelques connaissances avec ExpressJs acquises lors de la formation.
    Enfin, je sais me servir de npm et chercher des modules tiers pour les utiliser.`

    // profil
    const tooltipProfile = document.createElement('p')
    tooltipProfile.id = `tooltip-profile`
    tooltipProfile.className = `tooltips`
    tooltipProfile.textContent = `Domicilié à Ciboure sur la Côte Basque, je cherche mon premier emploi
    de développeur. Vu le manque d'annonces d'emploi IT sur le secteur qui me correspondent, 
    et étant célibataire sans enfant, je me suis décidé à chercher un emploi ailleurs, 
    et la région Parisienne me parait toute indiquée, en terme de salaire, de nombre d'opportunité, 
    et de moyen de retour rapide au pays (avion-train) pour pouvoir voir ma famille. 
    Voilà pourquoi vous avez reçu mon CV.`

    // experience
    const tooltipExperience = document.createElement('p')
    tooltipExperience.id = `tooltip-experience`
    tooltipExperience.className = `tooltips`
    tooltipExperience.textContent = `Je n'ai pas d'expérience en entreprise IT, mais j'ai des connaissances
    techniques qui me permettent de postuler à votre offre d'emploi. Mon parcours m'a permis 
    d'avoir les qualités nécessaires pour travailler en équipe, et je connais également les principes 
    de la relation client ainsi que l'analyse de leur besoin.`

    // papyrus
    const tooltipPapyrus = document.createElement('p')
    tooltipPapyrus.id = `tooltip-papyrus`
    tooltipPapyrus.className = `tooltips`
    // textContent in tooltipsprint.js 

    // append elements with timeout for smooth papyrus animation
    setTimeout(() => {
        document.body.appendChild(tooltipStJean)
        document.body.appendChild(tooltipIparglass)
        document.body.appendChild(tooltipGithub)
        document.body.appendChild(tooltipFormation)
        document.body.appendChild(tooltipSkills)
        document.body.appendChild(tooltipProfile)
        document.body.appendChild(tooltipExperience)      
    }, 1000);
    
    // timeout not wanted
    document.body.appendChild(tooltipPapyrus)

}