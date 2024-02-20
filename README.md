# Application Pokémon - Angular

Cette application Pokémon a été développée dans le cadre de mon apprentissage du framework Angular, en suivant le cours Udemy dédié. Elle représente une étape importante dans mon parcours d'apprentissage, me permettant de mettre en pratique les concepts enseignés tout en explorant les fonctionnalités puissantes offertes par Angular.




## Version d'Angular CLI
Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

```js
ng new ng-pokemon-app --minimal --style=css
```


Il existe d'autres options comme par exemple :

```js
ng new ng-pokemon-app --no-strict --standalone false --routing false
```


Dans le fichier tsconfig.json, ajouter dans "compilerOptions" : 

```js
"compilerOptions" : {
    // ...
    "strictPropertyInitialization": false,
    // ...
}
```


## Commandes CLI

### Composant 
```js
ng generate component list-pokemon
```
ATTENTION : lorsqu'on a ajouté l'option --minimal à la création du projet, 
il faut ajouter l'option --inline-template=false pour avoir le html séparé du ts
```js
ng generate component list-pokemon --inline-template=false
```

### Directive
```js
ng generate directive border-card
```

### Pipe 
```js
ng generate pipe pokemon-type-color
```

### Module 
```js
ng generate module pokemon
```

### Service
```js
ng generate service pokemon/pokemon
```



Pour savoir ce qu'un commande va sortir une commande mais sans le faire, on peut ajouter à la fin de la commande :
```js
--dry-run 
```
Exemple :
```js
ng generate service pokemon/pokemon --dry-run
```


## Librairie

[Materialize](https://materializecss.com/getting-started.html)


## Liens utiles

[Code source](https://angularsenior.fr/ressources-apprendre-angular)

### Pipes

[Les Pipes d'Angular](https://angular.io/guide/pipes)

[Le Pipe natif "Date"](https://angular.io/api/common/DatePipe)

### Formulaires

[Angular Forms Guide - Template Driven and Reactive Forms](https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/)

[FormsModule](https://angular.io/api/forms/FormsModule)

[ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule)

[Reactive Forms](https://angular.io/guide/reactive-forms#!)

[ngForm](https://angular.io/api/forms/NgForm)

[ngModel](https://angular.io/api/forms/NgModel)

### Programmation Réactive

[RxJS](https://rxjs.dev/)

[Bacon.js](https://baconjs.github.io/)



## Simuler une API Web

```js
npm install angular-in-memory-web-api --save-dev
```