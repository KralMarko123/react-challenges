# React Challenges

> A collection of different challenges written in React. Point of the repo is for the author to have a space to practice different skills/solutions explicitly in React

## Challenges & Descriptions:

The following list contains a brief description of each challenge and what concept might have been used to make it work. Each title leads to the component corresponding to the challenge.

- ### [Country Capital Game](./src/components/CountryCapitalGame/CountryCapitalGame.jsx)

  - A country/capital guessing game. Each value is rendered as a button which can be clicked. Guessing each pair correctly removes them until a success message pops up. Buttons are colored appropriately depending on their state.

- ### [Whac-A-Mole Game](./src/components/WhacAMole/WhacAMole.jsx)

  - A whac-a-mole game. Each mole is rendered as a div which can be clicked. An interval is set in which the mole pops out and then hides. Clicking on it whilst it's shown increases your score and speeds up the moles. A basic example of useEffect paired with an interval/timeout function to have state change continuously.
