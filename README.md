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

## Librairie

[Materialize](https://materializecss.com/getting-started.html)