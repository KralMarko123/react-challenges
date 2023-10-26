# React Challenges

> A collection of different challenges written in React. Point of the repo is for the author to have a space to practice different skills/solutions explicitly in React

## Link to the live site [here](https://kralmarko123.github.io/react-challenges)

---

## Challenges & Descriptions:

The following list contains a brief description of each challenge and what concept might have been used to make it work. Each title leads to the component corresponding to the challenge.

- ### [Country Capital Game](./src/components/CountryCapitalGame/CountryCapitalGame.jsx)

  - A country/capital guessing game. Each value is rendered as a button which can be clicked. Guessing each pair correctly removes them until a success message pops up. Buttons are colored appropriately depending on their state.

- ### [Whac-A-Mole Game](./src/components/WhacAMole/WhacAMole.jsx)

  - A whac-a-mole game. Each mole is rendered as a div which can be clicked. An interval is set in which the mole pops out and then hides. Clicking on it whilst it's shown increases your score and speeds up the moles. A basic example of useEffect paired with an interval/timeout function to have state change continuously.

- ### [Memory Card Game](./src/components/MemoryCardGame/MemoryCardGame.jsx)

  - A simple card game. Opened up cards are closed after a set timeout if they are not matching. Correctly guessed pairs remain face-up. An interval is set which decrements the timer and checks to see if the game has finished.

- ### [File Viewer](./src/components/FileViewer/FileViewer.jsx)

  - A simple tree-like component calling itself recursively depending on whether there are children element to render. Its look is supposed to mimic the view of a file explorer in any modern IDE. Conditional statements and a supporting baseline is used to have each component rendered appropriately.
