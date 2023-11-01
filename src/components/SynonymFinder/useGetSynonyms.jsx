import { useState } from "react";

const DATAMUSE_ENDPOINT = "https://api.datamuse.com/words?";

// custom hook just to practice
export const useGetSynonyms = () => {
	// state
	const [isLoading, setIsLoading] = useState(false);
	const [synonyms, setSynonyms] = useState([]);

	// logic
	const getSynonyms = async (text) => {
		if (text.length === 0 || !text || /\d/.test(text)) return;

		setIsLoading(true);

		const queryStringParams = new URLSearchParams({
			ml: text,
		});

		const response = await fetch(`${DATAMUSE_ENDPOINT}${queryStringParams}`, {
			method: "GET",
		}).then((response) => response.json());

		const topFive = response.slice(0, 5);

		setSynonyms([...topFive]);
		setIsLoading(false);
	};

	// destructured results
	return { synonyms, isLoading, getSynonyms };
};
