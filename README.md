<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  

## Description
CRUD recette avec Swagger
## Installation

```bash
$ npm install
```

## Running the app

```bash
# lancer volume DB 
$ docker-compose up -d 
# developpement
$ npm run start

# watch mode dev
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Creation

0. Prérequis

*Si NESTCLI non installé*

```bash
$ npm i -g @nestjs/cli
```
1. Création du project 

```bash
$ nest new recipe
```
2. Création volume DB Docker

```bash
$ touch docker-compose.yml
```
3. Compose Up du file

```bash
$ docker-compose up -d
# pour stopper
$ docker-compose down
```

4. Setup Prisma

```bash
$ npm install prisma -D
# init primsam
$ npx prisma init
```
5. Set variable Environnement 
6. Une fois modele créer migrer la DB
```bash
$ npx prisma migrate dev --name init
```
7. (Optionnel) creer une seed
```bash
$ touch prisma/seed.ts
# dans le fichier 
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy recipes
  const recipe1 = await prisma.recipe.upsert({
    where: { title: 'Spaghetti Bolognese' },
    update: {},
    create: {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian dish',
      ingredients:
        'Spaghetti, minced beef, 
        tomato sauce, onions, garlic, olive oil, salt, pepper',
      instructions:
        '1. Cook the spaghetti. 2. Fry the minced beef. 3.
        Add the tomato sauce to the beef.
        4. Serve the spaghetti with the sauce.'
    }
  });

  const recipe2 = await prisma.recipe.upsert({
    where: { title: 'Chicken Curry' },
    update: {},
    create: {
      title: 'Chicken Curry',
      description: 'A spicy Indian dish',
      ingredients:
        'Chicken, curry powder, onions, garlic, 
        coconut milk, olive oil, salt, pepper',
      instructions:
        '1. Fry the chicken. 2. Add the curry powder to the
        chicken. 3. Add the coconut milk.
        4. Serve the curry with rice.'
    }
  });

  console.log({ recipe1, recipe2 });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

  # package.json
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }

  # puis 
  npx prisma db seed
```



