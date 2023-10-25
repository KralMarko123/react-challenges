import React, { useEffect, useState } from "react";
import { whackAMoleData } from "../../data/COMPONENT_DATA";
import "./WhackAMole.css";

const WhackAMole = () => {
	const [moles, setMoles] = useState(whackAMoleData);
	const [score, setScore] = useState(0);

	const toggleMole = (index, flag) => {
		let updatedMoles = moles;

		updatedMoles[index].isVisible = flag;
		setMoles([...updatedMoles]);
	};

	const handleMoleClick = (index) => {
		if (!moles[index].isVisible) return;

		setScore((prev) => prev + 1);
		toggleMole(index, false);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * moles.length);

			toggleMole(randomIndex, true);
			setTimeout(() => toggleMole(randomIndex, false), 600);
		}, 800);

		return () => clearInterval(interval);
	}, [moles]);

	return (
		<div className="page">
			<h1 className="title"> Your score: {score}</h1>
			<div className="container">
				{moles.map((m, i) => (
					<div
						key={i}
						className={`mole ${m.isVisible ? "shown" : ""}`}
						onClick={() => handleMoleClick(i)}
					></div>
				))}
			</div>
		</div>
	);
};

export default WhackAMole;
