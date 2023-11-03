import React, { useState } from "react";
import { getRandomItemFromArray } from "../../util/HELPER_FUNCTIONS";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import "./DotCreator.css";

const DotCreator = () => {
	const DOT_COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "white"];
	const DOT_SIZE_IN_PIXELS = 20;
	const navigate = useNavigate();
	const [dots, setDots] = useState([]);
	const [removedDots, setRemovedDots] = useState([]);

	const handleDotClick = (e) => {
		const newDot = {
			x: e.clientX - DOT_SIZE_IN_PIXELS / 2,
			y: e.clientY - DOT_SIZE_IN_PIXELS / 2,
			color: getRandomItemFromArray(DOT_COLORS),
		};

		let updatedDots = dots;

		updatedDots.push(newDot);
		setDots([...updatedDots]);
	};

	const handleReset = (e) => {
		e.stopPropagation();

		setDots([]);
		setRemovedDots([]);
	};

	const handleUndo = (e) => {
		e.stopPropagation();

		let updatedDots = dots;
		let updatedRemovedDots = removedDots;

		const removedDot = updatedDots.pop();
		setDots([...updatedDots]);

		updatedRemovedDots.push(removedDot);
		setRemovedDots([...updatedRemovedDots]);
	};

	const handleRedo = (e) => {
		e.stopPropagation();

		let updatedDots = dots;
		let updatedRemovedDots = removedDots;

		const readdedDot = removedDots.pop();
		setRemovedDots([...updatedRemovedDots]);

		updatedDots.push(readdedDot);
		setDots([...updatedDots]);
	};

	return (
		<div className="page dotcreator">
			<h1 className="title">Click anywhere on the box to draw a dot</h1>
			<div className="dot-controls">
				<button className="dot-control" onClick={(e) => handleReset(e)}>
					Reset
				</button>
				<button
					disabled={dots.length === 0}
					className={`dot-control ${dots.length === 0 ? "disabled" : ""}`}
					onClick={(e) => handleUndo(e)}
				>
					Undo
				</button>
				<button
					disabled={removedDots.length === 0}
					className={`dot-control ${removedDots.length === 0 ? "disabled" : ""}`}
					onClick={(e) => handleRedo(e)}
				>
					Redo
				</button>
			</div>

			<div className="dot-container" onClick={(e) => handleDotClick(e)}>
				{dots.map((d, i) => (
					<span
						className="dot"
						key={i}
						style={{
							width: DOT_SIZE_IN_PIXELS,
							height: DOT_SIZE_IN_PIXELS,
							top: d.y,
							left: d.x,
							backgroundColor: d.color,
						}}
					></span>
				))}
			</div>
			<button className="back-button" onClick={() => navigate(ROUTES.HOME)}>
				Back
			</button>
		</div>
	);
};

export default DotCreator;
