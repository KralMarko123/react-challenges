import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import { useGetSynonyms } from "./useGetSynonyms";
import "./SynonymFinder.css";

const SynonymFinder = () => {
	const navigate = useNavigate();
	const inputRef = useRef();
	const { synonyms, isLoading, getSynonyms } = useGetSynonyms();

	const handleSynonymClick = async (text) => {
		inputRef.current.value = text;
		await getSynonyms(text);
	};

	return (
		<div className="page synonymfinder">
			<h1 className="title">Enter a word or a phrase to find ones with similar meaning</h1>
			<div className="input-container">
				<input type="text" className="word-input" ref={inputRef} placeholder="word/phrase" />
				<button className="word-button" onClick={() => getSynonyms(inputRef.current.value)}>
					Submit
				</button>
			</div>
			<div className="synonym-container">
				{synonyms?.length > 0 && <h3 className="synonym-title">Top 5 Synonyms:</h3>}
				{isLoading ? (
					<p className="synonym-loader">Loading...</p>
				) : (
					synonyms?.map((s) => (
						<span key={s.word} className="synonym" onClick={() => handleSynonymClick(s.word)}>
							{s.word}
						</span>
					))
				)}
			</div>
			<button className="back-button" onClick={() => navigate(ROUTES.HOME)}>
				Back
			</button>
		</div>
	);
};

export default SynonymFinder;
