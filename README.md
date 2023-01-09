# LOCALISATION DES PHARMACIES
Le projet de localisation des pharmacies vise à créer une interface en ligne permettant aux utilisateurs de trouver facilement les pharmacies en fonction de leurs villes et leurs zones ainsi que les gardes disponibles.

Pour la partie front-end, nous utilisons Ajax, JQuery et ReactJS pour fournir une expérience utilisateur fluide et interactive. Lorsqu'un utilisateur entre une ville et une zone en specifiant le type de garde, nous utilisons Ajax pour envoyer une requête HTTP au serveur et récupérer les données de localisation des pharmacies sans avoir à recharger la page. JQuery est utilisé pour traiter ces données et mettre à jour la page avec les résultats de la recherche. ReactJS nous permet de rendre l'interface utilisateur de manière efficace en ne mettant à jour que les parties de la page qui ont changé .

Pour la partie back-end, nous utilisons Spring Boot pour gérer les requêtes HTTP et accéder à la base de données de pharmacies. Spring Boot fournit également un certain nombre d'outils pour faciliter le développement et la maintenance du projet, tels que l'injection de dépendances et la gestion des erreurs. Nous utilisons également Hibernate pour la gestion de la base de données et l'accès aux données de localisation des pharmacies.

# Fonctionalités
## Administrateur : (Spring boot + Jquery + Ajax)

• Gestion des villes

• Gestion des zones

• Gestion des gardes

• Afficher la liste des pharmacies

• Validation des pharmacies (Ajouter le champ etat dans pharmacie : etat = 0 : en attente de
validation ; etat = 1 : validée ; etat = 2 : refusé)

• Afficher l’historique des gardes d’une pharmacie

• Statistiques :
o Afficher le nombre de pharmacies par ville et zone

## Pharmacien : (Jquery Ajax / Thymeleaf)

• Inscription

• Création de sa pharmacie

• Visualiser l’état de la pharmacie

• Mentionner une garde

• Afficher l’historique des gardes de sa pharmacie

# Architecture
Front-end :

Pour l'administrateur et le pharmacien :

Utilisation de AJAX et de jQuery pour la gestion des événements et des interactions avec le serveur et la mise à jour de l'interface utilisateur de manière asynchrone.

Pour le client :

Utilisation de ReactJS pour la création de composants réutilisables et la gestion de l'état de l'application.

Back-end :

Utilisation de Spring Boot comme framework de développement pour la couche de backend, qui permet de simplifier la configuration et le déploiement de l'application.

Base de données :

Utilisation de MySQL comme système de gestion de base de données relationnelles pour stocker les données de l'application, comme les informations sur les clients, les médicaments, etc.
Voici comment cela pourrait fonctionner en termes de flux de données :

L'utilisateur de l'administrateur ou du pharmacien envoie une requête en utilisant une interface Web basée sur AJAX et jQuery.
La requête est envoyée au serveur Spring Boot via un contrôleur REST.
Le contrôleur interroge la base de données MySQL et obtient les données requises.
Les données sont envoyées de retour à l'interface utilisateur de l'administrateur ou du pharmacien en utilisant AJAX.
L'utilisateur du client envoie une requête en utilisant une interface Web basée sur ReactJS.
La requête est envoyée au serveur Spring Boot via un contrôleur REST.
Le contrôleur interroge la base de données MySQL et obtient les données requises.
Les données sont envoyées de retour à l'interface utilisateur du client en utilisant ReactJS pour mettre à jour l'état de l'application et afficher les données dans l'interface utilisateur.


![App Screenshot](https://github.com/Ilyasskarrouche/hh/blob/master/a.jpeg?raw=true)


# Installation

Téléchargez ou clonez le code source du projet depuis son dépôt Git ou téléchargez-le sous forme de fichier archive.

Assurez-vous d'avoir une version récente de Java (8 ou supérieure) et d'un IDE tel que IntelliJ, Eclipse ou STS.

Importez le projet dans votre IDE en sélectionnant le fichier pom.xml du projet.

Le projet utilise un gestionnaire de dépendances comme Maven ou Gradle, assurez-vous que toutes les dépendances du projet sont correctement téléchargées.

Assurez-vous que vous avez une base de données compatible configurée et accessible.

Exécutez la classe principale du projet, annotée avec @SpringBootApplication et contient la méthode main. Cela démarrera le serveur web embarqué et votre application sera accessible à l'adresse http://localhost:9090.

# Auteurs

Karrouche Ilyass
Housni Zakaria 
Zakaria sehoui
