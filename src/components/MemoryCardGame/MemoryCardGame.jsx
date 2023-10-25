import React, { useEffect, useState } from "react";
import { CARDS } from "../constants/URLs";
import "../styles/MemoryCardGame.css";

const MemoryCardGame = () => {
	const [cards, setCards] = useState(CARDS);
	const [cardsUpdated, setCardsUpdated] = useState(false);
	const [remainingTime, setRemainingTime] = useState(60);
	const [gameOver, setGameOver] = useState(false);

	const handleCardClick = (position) => {
		if (cards.every((card) => card.isCompleted) || remainingTime === 0) {
			setGameOver(true);
			return;
		}

		let updatedCards = cards;
		let otherCardOpen = false;
		let numberOfCardsOpen = 0;

		updatedCards.forEach((card) => {
			if (card.isShown && !card.isCompleted) numberOfCardsOpen++;
		});

		if (numberOfCardsOpen > 1) {
			return;
		}

		otherCardOpen = updatedCards.find(
			(c, i) => c.isShown === true && position !== i && c.isCompleted === false
		);

		if (!otherCardOpen) {
			updatedCards[position].isShown = true;
			setCards(updatedCards);
			// setCardsUpdated(true);
			return;
		}

		if (otherCardOpen.image !== updatedCards[position].image) {
			updatedCards[position].isShown = true;
			setCards(updatedCards);
			// setCardsUpdated(true);

			setTimeout(() => {
				updatedCards[position].isShown = false;
				otherCardOpen.isShown = false;

				setCards(updatedCards);
				// setCardsUpdated(true);
			}, 1000);
		} else {
			updatedCards[position].isShown = true;
			updatedCards[position].isCompleted = true;
			otherCardOpen.isCompleted = true;

			setCards(updatedCards);
			// setCardsUpdated(true);
		}
	};

	// useEffect(() => {
	// 	if (cardsUpdated) {
	// 		setCardsUpdated(false);
	// 	}
	// }, [cards, cardsUpdated]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!gameOver) setRemainingTime((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [remainingTime]);

	return (
		<>
			<div className="timer">
				{cards.every((card) => card.isCompleted) && `Completed with ${remainingTime} seconds left.`}
				{remainingTime === 0 && "Sorry, you can always try again"}
			</div>

			<div className="memory-grid">
				{cards.map((c, i) => {
					return (
						<div
							key={i}
							className={`card ${c.isShown ? "shown" : ""} ${c.isCompleted ? "completed" : ""}`}
							onClick={() => handleCardClick(i)}
						>
							<div className="card-inner">
								<div className="card-front"></div>
								<div className="card-back">
									<img className="card-image" src={`${c.image}`} alt="memory-card__image" />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default MemoryCardGame;
