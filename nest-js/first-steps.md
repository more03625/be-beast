# First Step

    - In this step, you will learn the core fundamentals of nest js.

    - Nest is compatible with both TypeScript & Javascript.

    - Here is the main reference [link](https://docs.nestjs.com/first-steps)

### Prerequisites

    - Make sure you have installed node version >= 12

### Project Structure

    - When you create a new project with the CLI node_modules & other few boilerplate files will be installed & an src dir will be created with several core files.

    src
        - app.controller.spec.ts
        - app.controller.ts
        - app.module.ts
        - app.service.ts
        - main.ts : Entry point of the application which uses a core functions *NestFactory* to create a Nest application instance.

### NestFactory

    - To create a Nest Application instance we use *NestFactory* class
    - *NestFactory* exposes a few static methods that allow the creation of application instances.
    - The *create()* method returns an application object, which fulfills the *INestApplication* Interface.
    - In the main.ts file we simply start our HTTP listener which listens to the HTTP request.

    - _Convention of keeping each module in its dedicated directory_

# Platform

    - Nest can work with any NODE HTTP framework, once an adapter is created.

    - There are 2 HTTP platforms supported out of the box:- Express & Fasity

    - Whichever platform you use it exposes its application interface
        - NestExpressApplication
        - NestFasifyApplication

```
npm run start: dev

```

    - This command will watch your files, automatically recompiling & reloading the server.
