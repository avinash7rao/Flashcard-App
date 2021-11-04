## [Click here for the app.](https://flashcard-app-tawny.vercel.app/decks/new)

## Synopsis

This project challenges abstract thinking by requiring a complex outing system. I enjoyed creating this app in an almost stream-of-consciousness first draft. From there, I refactored the code rather significantly until the structure was DRY, reused many components, and required few props and imports.

## NavBar

One key challenge in building this app was designing the NavBar. I opted for a single component that accepts props in accordance with the pages that need to appear in the NavBar. It saved a lot of code, is easy to maintain, and explains itself.

## Organization

One further challenge for myself for this project was to refactor code and set intentionality with variable names and overall direction. This allowed for use of less comments overall and more self-explanatory components.

## Data

The database and backend were created for us, but I had the opportunity to handle object-based data in a way that is useful for the user.

# Project Description

A local school has decided to put together a flashcard application, Flashcard-o-matic, to help their students study online. Teachers will use this application to create decks of flashcards for the subjects they teach, and students will study the decks. The school needs you to build the application that the students and teachers will use.

Bootstrap 4 is included with the starter HTML. You're welcome to use vanilla CSS or Bootstrap 4 for styling your project. However, your finished product does not have to match the styles in the provided screenshots, as you will not be assessed on the styling or responsiveness of your project.

This project is designed to test your ability to work with rendering and state management using React. Before taking on this module, you should be comfortable with the following:

*  Installing packages via NPM.
*  Running tests from the command line.
*  Writing React function components.
*  Creating routes, including nested routes, using React Router
*  Using hooks like useState(), useParams(), and useHistory().
*  Debugging React code through console output and using the VS Code debugger.

## Project setup

Follow the instructions below to get this project up and running on your own machine:

* Sync this Qualified challenge with your computer so that you can work on the project locally.
* Run npm install.

To run the tests, you can run the following command:

`npm test`

Most of the tests in this project wait for content to load via the API before continuing the test. Before the implementation is complete, the content never loads so the test fails with a timeout. As a result, the tests will initially run slowly. It may take perhaps a minute or more for all the tests run. The tests will speed up as the implementation nears completion.

You can run the application using the following command.

`npm start`

The start command will start two servers concurrently:

* An API server, powered by json-server, running on http://localhost:5000
* A React application running on http://localhost:3000

To stop the servers from running, you can press Ctrl + C.

## Instructions

You are tasked with building a number of different screens for the users of the flashcard app, as summarized below:

* Home | / | shows a list of decks with options to create, study, view, or delete a deck
* Study | /decks/:deckId/study | allows the user to study the cards from a specified deck
* Create Deck | /decks/new | allows the user to create a new deck
* Deck | /decks/:deckId | shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen, or delete the deck
* Edit Deck | /decks/:deckId/edit | allows the user to modify information on an existing deck
* Add Card | /decks/:deckId/cards/new | allows the user to add a new card to an existing deck
* Edit Card | /decks/:deckId/cards/:cardId/edit | allows the user to modify information on an existing card

All of the screens above will work on two common datasets. The datasets are related and at times you will need to work with both datasets to get the screens to work properly.

While working on these screens, you have both the tests and the screenshots below to act as a guide. You can create the screens in any order and are encouraged to organize your code using the "Grouping by route" technique you learned earlier.

While working on this project, you should:

* Use well-named variables.
* Build small single responsibility components and functions.
* Display a "Not found" message if the user visits a URL that does not exist.
* Edit only files inside of the public/src/ directory.

While working on this project, you should not:

* Change the names of the API functions.
* Edit any of the files outside of the public/src/ directory.
* Change the location of any of the existing files.

If you feel as though one of your solutions is working but something isn't showing up right on the site or in the tests, reach out for help.

