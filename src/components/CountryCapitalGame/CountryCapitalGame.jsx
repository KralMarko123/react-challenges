import { React, useEffect, useState } from "react";
import { shuffle } from "../../util/HELPER_FUNCTIONS";
import "./CountryCapitalGame.css";

const CountryCapitalGame = ({ data }) => {
	const [buttons, setButtons] = useState([]);

	const handleButtonClick = (clickedButton, index) => {
		clickedButton.isSelected = true;

		let updatedButtons = buttons;
		updatedButtons[index] = clickedButton;

		if (buttons.some((b) => b.text !== clickedButton.text && b.isSelected)) {
      const otherSelectedButton = buttons.find(b => b.);
			if (data[`${b.text}`] === clickedButton.text || data[`${clickedButton.text}` === b.text]) {
				updatedButtons = updatedButtons.filter(
					(e) => e.text !== b.text && e.text !== clickedButton.text
				);
			}
		}

		setButtons([...updatedButtons]);
	};
	const setupButtons = () => {
		let buttonsToBeSet = [];

		for (const [key, value] of Object.entries(data)) {
			buttonsToBeSet.push({
				text: key,
				isSelected: false,
			});

			buttonsToBeSet.push({
				text: value,
				isSelected: false,
			});
		}

		buttonsToBeSet = shuffle(buttonsToBeSet);
		setButtons(buttonsToBeSet);
	};

	useEffect(() => {
		setupButtons();
	}, []);

	return (
		<div className="page">
			<div className="container">
				{buttons.map((b, i) => (
					<button
						key={b.text}
						className={`button ${b.isSelected ? "selected" : ""}`}
						onClick={() => handleButtonClick(b, i)}
					>
						{b.text}
					</button>
				))}
			</div>
		</div>
	);
};

export default CountryCapitalGame;
