import React, { useEffect, useState } from "react";
import { whacAMoleData } from "../../data/COMPONENT_DATA";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import "./WhacAMole.css";

const WhacAMole = () => {
	const navigate = useNavigate();
	const [moles, setMoles] = useState(whacAMoleData);
	const [score, setScore] = useState(0);

	const toggleMole = (index, flag) => {
		let updatedMoles = moles;

		updatedMoles[index].isVisible = flag;
		setMoles([...updatedMoles]);
	};

	const handleMoleClick = (index) => {
		if (!moles[index].isVisible) {
			if (score > 0) setScore((prev) => prev - 1);
			return;
		}

		setScore((prev) => prev + 1);
		toggleMole(index, false);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * moles.length);

			toggleMole(randomIndex, true);
			setTimeout(() => toggleMole(randomIndex, false), 800 - score * 10);
		}, 1000 - score * 10);

		return () => clearInterval(interval);
	}, [moles]);

	return (
		<div className="page whacamole">
			<h1 className="title"> Your score: {score}</h1>
			<div className="container whacamole">
				{moles.map((m, i) => (
					<div
						key={i}
						className={`mole ${m.isVisible ? "shown" : ""}`}
						onClick={() => handleMoleClick(i)}
					></div>
				))}
			</div>
			<button className="back-button" onClick={() => navigate(ROUTES.HOME)}>
				Back
			</button>
		</div>
	);
};

export default WhacAMole;
