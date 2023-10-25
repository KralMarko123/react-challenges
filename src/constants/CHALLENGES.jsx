import moleThumbnail from "../assets/images/mole_thumbnail.png";
import countryCapitalThumbnail from "../assets/images/countrycapital_thumbnail.png";
import { ROUTES } from "./ROUTES";

export const CHALLENGES = [
	{
		title: "Countries & Capitals",
		description:
			"A country/capital guessing game. Guessing each pair correctly removes them until the game is finished.",
		thumbnail: countryCapitalThumbnail,
		thumbnailAlt: "country-capitals",
		route: ROUTES.COUNTRYCAPITAL,
	},
	{
		title: "Whac-A-Mole",
		description:
			"The classic whac-a-mole game. An interval is set in which the mole pops out and then hides. Clicking on it whilst it's shown increases your score and speeds up the moles.",
		thumbnail: moleThumbnail,
		thumbnailAlt: "whac-a-mole",
		route: ROUTES.WHACKAMOLE,
	},
];
