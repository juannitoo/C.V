function tooltips () {
    // not responsive. mouseover event

    // locationsaintjeandeluz.fr
    const tooltipStJean = document.createElement('div')
    tooltipStJean.id = `tooltip-st-jean`
    tooltipStJean.className = `tooltips`
    tooltipStJean.innerHTML = `<h2>locationsaintjeandeluz</h2>`
    tooltipStJean.innerHTML +=`C'est le premier site que j'ai réalisé en 2013, 
    et qui permet à n'importe quel francophone de générer un contrat de location 
    saisonnière via mon template. Ce site m'aura fait connaître les parties back-end et 
    front-end d'un projet. J'ai tout fait tout seul, pour apprendre.`
    tooltipStJean.innerHTML += '<br />'+`L'espace membre de ce site, qui permettait la sauvegarde 
    de leur contrat aux internautes, est actuellement fermé pour des problèmes d'encodage de 
    caractères dûs au paramétrage de mon serveur mutualisé. La correction et la migration vers 
    une nouvelle architecture de cette base ont néanmoins été réalisés pour soutenir mon 
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
    tooltipIparglass.innerHTML = `<h2>Iparglass</h2>`
    tooltipIparglass.innerHTML += `C'est le dernier site que j'ai réalisé avant ma formation au Greta.
    C'est un site vitrine pour l'entreprise de mon voisin, avec formulaire de contact. 
    Je l'ai codé moi-même, sans CMS ni framework. On est sur du php4 pour le formulaire et
    sur du jQuery pour le Dom. Le code est déjà mieux structuré.`

    // github.
    const tooltipGithub = document.createElement('p')
    tooltipGithub.id = `tooltip-github`
    tooltipGithub.className = `tooltips`
    tooltipGithub.innerHTML = `<h2>Github</h2>`
    tooltipGithub.innerHTML += `Visitez mon compte Github pour voir des exemples de code que j'ai réalisé.
    Il s'agit en grande partie de travaux pratiques liés à des tutoriaux onlines. Mais également de ce C.V 
    que je réalise avec mes dernières capacités, et de quelques scripts que j'ai codé et sélectionné 
    mais qui ne marcheront pas hors contexte.`

    // formation
    const tooltipFormation = document.createElement('p')
    tooltipFormation.id = `tooltip-training`
    tooltipFormation.className = `tooltips`
    tooltipFormation.innerHTML = `<h2>Formation</h2>`
    tooltipFormation.innerHTML += `Titulaire d'un Bac ES, J'ai débuté ma formation IT seul en 2012 par 
    l'intermédiaire de tutoriaux online, essentiellement openClassroom. 
    J'ai commencé par apprendre le HTML, avant de passer au Php en procédural et à jQuery. 
    J'ai pu réaliser mes différents projets et me rendre compte que j'y "arrivais".`
    tooltipFormation.innerHTML += '<br />'+
    `5 ans plus tard, en 2017, j'ai décidé de faire de ma passion mon métier en me professionnalisant par 
    l'intermédiaire d'une formation JavaScript au greta de Bayonne. J'y ai revu mes bases et posé des questions
    sur des sujets qui me posaient problèmes. J'ai pu voir comment codaient certains professionnels et rencontrer 
    des gens qui partagent la même passion que moi. J'ai également découvert quelques techniques ou outils 
    comme le MVC, VScode, les frameworks, la console ou encore Git et Github.
    </p>`

    // competences
    const tooltipSkills = document.createElement('p')
    tooltipSkills.id = `tooltip-skills`
    tooltipSkills.className = `tooltips`
    tooltipSkills.innerHTML = `<h2>Compétences</h2>`
    tooltipSkills.innerHTML += `C'est difficile de se juger. Je me suis attribué ces notes en toute 
    subjectivité et selon mes connaissances. 1 étoile pour "je sais faire des choses mais il reste 
    beaucoup de choses à apprendre". 3 étoiles pour "j'arrive à faire tous ce dont j'ai envie mais 
    je passe trop de temps sur la doc ou les moteurs de recherche", et 5 étoiles quand "on est comme 
    sur les videos Youtube de Grafikart, on connait tout par coeur et on peut discuter en même temps". 
    Je ne me suis pas mis 5 étoiles en HTML-CSS car je ne me sers pas de SAAS ou LESS et que je ne 
    connais pas tout par coeur.`

    // profil
    const tooltipProfile = document.createElement('p')
    tooltipProfile.id = `tooltip-profile`
    tooltipProfile.className = `tooltips`
    tooltipProfile.innerHTML = `<h2>Profil</h2>`
    tooltipProfile.innerHTML += `Domicilié à Saint-Jean-de-Luz sur la Côte Basque, je cherche un emploi
    de développeur. Vu le manque d'annonces d'emploi IT sur le secteur qui me correspondent, 
    et étant célibataire sans enfant, je me suis décidé à chercher un emploi ailleurs, 
    et la région Parisienne et Genèvoise me paraissent toutes indiquées, en terme de salaire, de nombre 
    d'opportunités, et de moyen de retour rapide au pays (avion-train) pour pouvoir voir ma famille. 
    Voilà pourquoi vous avez reçu mon CV.
    Pour me décrire en quelques mots, je suis ponctuel, travailleur, d'un naturel souriant, et on peut 
    dire que je favorise la cohésion dans une équipe.`

    // experience
    const tooltipExperience = document.createElement('p')
    tooltipExperience.id = `tooltip-experience`
    tooltipExperience.className = `tooltips`
    tooltipExperience.innerHTML = `<h2>Expérience</h2>`
    tooltipExperience.innerHTML += `Côté technique, 3 ans d'expérience sur le framework Python Django, 
    m'ont permis de connaitre le MVC. J'ai utilisé intensément l'ORM de Django à la place du SQL. J'ai 
    été améné à concevoir des évolutions de l'application de la conception à la réalisation.
    J'ai pratiqué Photoshop et illustrator pour mes besoins personnels et je suis meilleur pour faire
    un fichier xlsx programmatiquement que pour m'en servir.` 
    tooltipExperience.innerHTML += '<br />'+ 
    `En ce qui concerne le Front-end, en Javascript la formation m'a donné les éléments essentiels. Je peux 
    dire que globalement je peux faire tout ce dont j'ai envie en natif, avec plus ou moins d'effort selon ce 
    qui est à faire, je connais jQuery et je sais utiliser les API REST, le Json et des bibliothèques 
    tierces. Je dois encore apprendre les principaux frameworks que je ne connais pas ou peu, Angular 
    Vuejs et ReactJs. L'essentiel du front-end de l'application utilisée dans mon précédent emploi était 
    issu de Django et de son modèle MVC appelé MVT (Model View Template), et je suis donc familiarisé à ce 
    type de pattern.`
    tooltipExperience.innerHTML += '<br />'+
    `En ce qui concerne le Back-end en Python avec ou sans Django, j'ai été amené à réaliser des tâches 
    des plus diverses. Création de fichier Excell pour les créanciers à multiples onglets et stylisés, 
    création de graphiques, scrapping, création de scripts d'intégration des datas dans la base de 
    données SQL, réparer des échanges automatiques quotidiens qui n'avaient pas été concus par mes soins, 
    requêtes diverses à la base de données selon les problèmes du jour, CRUD, veille constante pour vérifier 
    que le système fonctionne normalement, réalisation de nouveaux outils, nouvelles pages web, 
    intéraction avec des APIs, et je dois encore en oublier beaucoup. Nous n'étions que 2 développeurs 
    à pourvoir intéragir avec les datas et "la machine", un centre d'appels de recouvrement d'une grosse
    trentaine de salariés, et nous étions donc parfois seuls le temps des congés à pouvoir gérer n'importe 
    quel problème potentiel lié à l'informatique.
    Avec NodeJs, j'ai des connaissances basiques qui me permettent de réaliser actuellement un logiciel 
    de videos en boucle avec le framework ElectronJs pour l'importation-suppression de videos et d'images 
    par l'utilisateur. J'ai quelques connaissances avec ExpressJs. Je sais me servir de npm et 
    chercher des modules tiers pour les utiliser.
    Enfin j'ai les connaissances de base en Bash et j'utilise WSL.
    `

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