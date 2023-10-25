import React from "react";
import { useNavigate } from "react-router-dom";
import { CHALLENGES } from "../../constants/CHALLENGES";
import "./Home.css";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="page home">
			<h1 className="title">React Challenges</h1>
			<p className="subtitle">
				// A collection of different challenges written in React. Each card is a small project that
				can be navigated to
			</p>

			<div className="card-container">
				{CHALLENGES.map((c, i) => (
					<div key={i} className="card" onClick={() => navigate(c.route)}>
						<img src={c.thumbnail} alt={c.thumbnailAlt} className="card-image" />
						<h3 className="card-title">{c.title}</h3>
						<p className="card-description">{c.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
