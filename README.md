# ember-tds
Bonjour bienvenue sur mes projets ember-js
Principales spécificités d'EmberJs : 

  - Développement en couche par extension du HTML
  - architecture MVC → MRC (Model Route Component)
  - data-binding bidirectionnel
  - data down action up (DDAU)
  - injection de dépendance
  - routage
  - tests
 
Installation EmberJs:
  Vérifier l'Installation de node et npm (en invite de commande) :
    node -v
    
    npm -v
    
    npm install npm@latest -g
    
    npm install -g ember-cli@2.18
    
    ember install ember-bootstrap
    
    ember install ember-font-awesome
    
    ember install semantic-ui-ember
    
    ember install ember-cli-uuid
  Pour créer un projet:
    - ember new Project1
    
  Accéder à votre projet à l'aide de la commande: cd/Project1
  
  Lancez votre serveur à l'aide de la commande: ember serve
  
  Accedez à votre page à l'aide de la commande: http://localhost:4200/lapagesouhaité
  
Les projets:

 Projet1: permets de saisir un text et d'afficher les caractères restants de l'enregistrer et d'effacer le contenu
  
 Projet2: Lister les produits disponibles et en ajouter
 
 Projet3: Gestion d'une liste de contact ( filtrer ,ajouter, modifier , supprimer)
  
 Projet4: Gestion d'une base de données MongoDb à travers une application web permettant de gérer des développeurs et leurs assigner des projets pour faire fonctionner l'application il faudra:
 - Une base de donnée mongo db avec une collection boards contenant une collection developers et projects(la data est contenu dans 
 le dossier)
 - Les prérequis donnés plus haut
 - ember install ember-moment
 - ember install ember-cli-uuid

Debug: si vous n'avez pas réussi l'installation:

* Créer un projet du même nom que celui sur le git ember new nomduprojet
* Insérer l'app du projet git dans votre nouveau projet ( supprimer celui du nouveau avant)
* Relancer tout les commandes citées plus haut
* Lancez votre projet à l'aide de ember serve
* Accedez votre page à l'aide de la commande http://localhost:4200
   
    
