import { React, useEffect, useState } from "react";
import { shuffle } from "../../util/HELPER_FUNCTIONS";
import "./CountryCapitalGame.css";

const CountryCapitalGame = ({ data }) => {
	const [buttons, setButtons] = useState([]);
	const [wrongPairSelected, setWrongPairSelected] = useState(false);

	const handleButtonClick = (clickedButton) => {
		let updatedButtons = buttons;

		if (wrongPairSelected) {
			updatedButtons.forEach((b) => (b.isSelected = false));
			setWrongPairSelected(false);
		}

		if (buttons.some((b) => b.text !== clickedButton.text && b.isSelected)) {
			const otherSelectedButton = buttons.find(
				(b) => b.text !== clickedButton.text && b.isSelected
			);

			const isCorrectPair =
				data[`${clickedButton.text}`] === otherSelectedButton.text ||
				data[`${otherSelectedButton.text}`] === clickedButton.text;

			if (isCorrectPair) {
				updatedButtons = updatedButtons.filter(
					(b) => b.text !== clickedButton.text && b.text !== otherSelectedButton.text
				);
			} else {
				setWrongPairSelected(true);
			}
		}

		const indexOfClickedButton = updatedButtons.findIndex((b) => b.text === clickedButton.text);

		clickedButton.isSelected = true;
		updatedButtons[indexOfClickedButton] = clickedButton;
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
			{buttons.length > 0 && <h1 className="title">Connect each country with its capital</h1>}
			<div className="container">
				{buttons.length > 0 ? (
					buttons.map((b) => (
						<button
							key={b.text}
							className={`button ${b.isSelected ? "selected" : ""} ${
								wrongPairSelected ? "incorrect" : ""
							}`}
							onClick={() => handleButtonClick(b)}
						>
							{b.text}
						</button>
					))
				) : (
					<p className="title success">Congratulations</p>
				)}
			</div>
		</div>
	);
};

export default CountryCapitalGame;
