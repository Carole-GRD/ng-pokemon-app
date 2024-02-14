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
ATTENTION : lorsqu'on a ajouté l'option --minimal à la création du projet, il faut ajouter l'option --inline-template=false
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



## Librairie

[Materialize](https://materializecss.com/getting-started.html)


## Liens utiles

[Code source](https://angularsenior.fr/ressources-apprendre-angular)

[Les Pipes d'Angular](https://angular.io/guide/pipes)

[Le Pipe natif "Date"](https://angular.io/api/common/DatePipe)

