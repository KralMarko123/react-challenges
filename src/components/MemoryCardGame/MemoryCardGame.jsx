import React, { useEffect, useState } from "react";
import { memoryCards } from "../../data/COMPONENT_DATA";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import "./MemoryCardGame.css";

const MemoryCardGame = () => {
	const navigate = useNavigate();
	const [cards, setCards] = useState(memoryCards);
	const [remainingTime, setRemainingTime] = useState(60);
	const [gameOver, setGameOver] = useState(false);

	const getTitleText = () => {
		if (!gameOver) return `${remainingTime} seconds left`;
		else if (remainingTime === 0) return "Sorry, you can always come back & try again";
		else return `Completed with ${remainingTime} seconds left`;
	};

	const handleCardClick = (position) => {
		if (gameOver) return;
		if (cards[position].isShown) return;
		if (cards.filter((c) => c.isShown && !c.isCompleted).length > 1) return;

		let updatedCards = cards;
		let otherCardOpen = false;

		updatedCards[position].isShown = true;
		setCards([...updatedCards]);

		otherCardOpen = updatedCards.find(
			(c, i) => c.isShown === true && position !== i && c.isCompleted === false
		);

		if (!otherCardOpen) return;
		if (otherCardOpen.image !== updatedCards[position].image) {
			setTimeout(() => {
				updatedCards[position].isShown = false;
				otherCardOpen.isShown = false;
				setCards([...updatedCards]);
			}, 1000);
		} else {
			updatedCards[position].isCompleted = true;
			otherCardOpen.isCompleted = true;
			setCards([...updatedCards]);
		}

		if (updatedCards.every((c) => c.isCompleted)) setGameOver(true);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (gameOver) return;

			if (remainingTime === 0) {
				setGameOver(true);
			} else setRemainingTime((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [remainingTime]);

	return (
		<div className="page memorycard">
			<h1 className="title">{getTitleText()}</h1>

			<div className="card-grid">
				{cards.map((c, i) => {
					return (
						<div
							key={i}
							className={`memory-card ${c.isShown ? "visible" : ""} ${
								c.isCompleted ? "completed" : ""
							}`}
							onClick={() => handleCardClick(i)}
						>
							<div className="card-inner">
								<div className="card-front"></div>
								<div className="card-back">
									<img className="card-cover" src={`${c.image}`} alt="memory-card__cover" />
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<button className="back-button" onClick={() => navigate(ROUTES.HOME)}>
				Back
			</button>
		</div>
	);
};

export default MemoryCardGame;
