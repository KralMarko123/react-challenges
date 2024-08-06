# React Challenges

> A collection of different challenges written in React. Point of the repo is for the author to have a space to practice different skills/solutions explicitly in React

## Link to the live site [here](https://kralmarko123.github.io/react-challenges)

---

## Challenges & Descriptions:

The following list contains a brief description of each challenge and what concept might have been used to make it work. Each title leads to the component corresponding to the challenge.

- ### [ToDo App + Google Sheets](https://github.com/KralMarko123/todo-app)

  - A simple todo app with google sheets paired as the backend. I had to figure out App Scripts and how their API worked in order for me to process each request sent from the react app, but got the job done in the end.

- ### [Country Capital Game](./src/components/CountryCapitalGame/CountryCapitalGame.jsx)

  - A country/capital guessing game. Each value is rendered as a button which can be clicked. Guessing each pair correctly removes them until a success message pops up. Buttons are colored appropriately depending on their state.

- ### [Whac-A-Mole Game](./src/components/WhacAMole/WhacAMole.jsx)

  - A whac-a-mole game. Each mole is rendered as a div which can be clicked. An interval is set in which the mole pops out and then hides. Clicking on it whilst it's shown increases your score and speeds up the moles. A basic example of useEffect paired with an interval/timeout function to have state change continuously.

- ### [Memory Card Game](./src/components/MemoryCardGame/MemoryCardGame.jsx)

  - A simple card game. Opened up cards are closed after a set timeout if they are not matching. Correctly guessed pairs remain face-up. An interval is set which decrements the timer and checks to see if the game has finished.

- ### [File Viewer](./src/components/FileViewer/FileViewer.jsx)

  - A simple tree-like component calling itself recursively depending on whether there are children element to render. Its look is supposed to mimic the view of a file explorer in any modern IDE. Conditional statements and a supporting baseline is used to have each component rendered appropriately.

- ### [Queue Counters](./src/components/QueueCounters/QueueCounters.jsx)

  - Visualization of multiple queues in a store. Each second the first in queue has his items removed until the next customer comes up with their items. A simple challenge with some array manipulation.

- ### [Synonym Finder](./src/components/SynonymFinder/SynonymFinder.jsx)

  - A component which returns synonyms for a typed word or phrase. Each synonym can then be clicked to find other ones as well. The results are fetched from an external API using 'fetch' and the top five are displayed. The logic is extracted into a custom hook located in the same directory [here](./src/components/SynonymFinder/useGetSynonyms.jsx).

- ### [Dot Creator](./src/components/DotCreator/DotCreator.jsx)

  - A drawing board in which users can draw out circles depending on their click. Each dot is given a random color and its coordinates are calculated according to the cursor's position. The Undo/Redo actions are possible due to constant array manipulation and tracking.
