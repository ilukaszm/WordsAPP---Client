# WordsAPP

<p align="center">
<img src="https://i.imgur.com/DOCBw0C.png">
</p>

## Application in user's eyes 🧑

WordsAPP is a simple application to remember foreign words. The application has two functionality which will help you in teaching new words. We have here **flashcards** and **game**.

### Flashcards ⬜

<p align="center">
<img src="https://media.giphy.com/media/om3TOfpH4vXYT02NIU/giphy.gif">
</p>

### Game 🎮

You can guess translations of your words,
which you added to repeat from your list of words. The game has two modes: typing by keyboard like on the first picture and using words list like on the second picture.

<p align="center">
<img src="https://media.giphy.com/media/pVdWZQkU3MY9RTMp0Q/giphy.gif">
</p>
<p align="center">
<img src="https://media.giphy.com/media/FE5CdPdUZ1CPbB6tz5/giphy.gif">
</p>
You can compete with your friends as well, because the game has stats with the best players.
<p align="center">
<img src="https://i.imgur.com/Pnl3Mr7.jpg">
</p>

### Words List 📘

**WordsList** is your personal list of your words. Here you can:

- Add new words,
- Edit words,
- Add chosen words to repeat in flashcards and game.
<p align="center">
<img src="https://i.imgur.com/rpbpcq3.jpg">
</p>

### Profile settings 🔧

Here you can change your password, email, avatar and game preferences.

<p align="center">
<img src="https://i.imgur.com/UxuhDOS.jpg">
</p>

## Application in programmer's eyes 👨‍💻

**WordsAPP** is a simple application wrote in **React** and **TypeScript**, that communicate with services of **Firebase** like **Authentication**, **Cloud Firestore** and **Storage**. The Application store her global states in **Redux** and uses **Redux Toolkit** for simpler development and better readability code.

### Technology stack:

| Technology            | Description                               |
| --------------------- | ----------------------------------------- |
| React                 | Library for building user interfaces      |
| Typescript            | Javascript superset language              |
| Redux Toolkit         | Library to manage global state of React   |
| React Router Dom      | Declarative Routing for React             |
| Styled Components     | Visual primitives for the component age   |
| Storybook             | Development environment for UI components |
| React Hook Form       | Library to creating forms                 |
| Yup                   | Library to fields validation              |
| React Testing Library | Testing Library for React                 |
| Husky                 | Pre\-commit tool                          |
| Lint\-staged          | Pre\-commit tool                          |
| Eslint                | JavaScript Linter                         |
| Prettier              | Code formatter                            | ` |
| Firabase              | Serveless services from Google            |

## Install 💾

To use the application you have to an account on **Firebase** with created a project. When you already have an account and project you must copy your firebase config with api key to **.env** file in **src** directory. When you have done it you can start the project with command:

> npm start

In order to build application you can use command:

> npm run build

## Demo

https://words-app.vercel.app/

## License 📝

Under license (MIT, Apache etc)

MIT © [Łukasz Michalak](https://github.com/ilukaszm)
