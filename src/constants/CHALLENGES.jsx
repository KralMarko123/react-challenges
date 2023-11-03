import moleThumbnail from "../assets/images/whacamole/mole thumbnail.png";
import countryCapitalThumbnail from "../assets/images/countryCapitals/countrycapital thumbnail.png";
import memoryCardsThumbnail from "../assets/images/memoryCards/memory cards thumbnail.png";
import fileViewerThumbnail from "../assets/images/fileViewer/file viewer thumbnail.png";
import queueCountersThumbnail from "../assets/images/queueCounters/queue counters thumbnail.png";
import synonymFinderThumbnail from "../assets/images/synonymFinder/synonym finder thumbnail.png";
import dotCreatorThumbnail from "../assets/images/dotCreator/dot creator thumbnail.png";
import { ROUTES } from "./ROUTES";

export const CHALLENGES = [
	{
		title: "Countries & Capitals",
		description:
			"A country/capital guessing game. Guessing each pair correctly removes them until the game is finished",
		thumbnail: countryCapitalThumbnail,
		thumbnailAlt: "country-capitals",
		route: ROUTES.COUNTRYCAPITAL,
	},
	{
		title: "Whac-A-Mole",
		description:
			"The classic whac-a-mole game. An interval is set in which the mole pops out and then hides. Clicking on it whilst it's shown increases your score and speeds up the moles",
		thumbnail: moleThumbnail,
		thumbnailAlt: "whac-a-mole",
		route: ROUTES.WHACAMOLE,
	},
	{
		title: "Memory Cards",
		description: "A simple card game to test your memory, featuring some fascinating faces",
		thumbnail: memoryCardsThumbnail,
		thumbnailAlt: "memory-cards",
		route: ROUTES.MEMORYCARDS,
	},
	{
		title: "File Viewer",
		description: "A simple tree-like component mimicking the file explorer in any modern IDE",
		thumbnail: fileViewerThumbnail,
		thumbnailAlt: "file-viewer",
		route: ROUTES.FILEVIEWER,
	},
	{
		title: "Queue Counters",
		description:
			"Visualization of multiple queues in a store. Each second the first in queue has his items removed until the next customer comes up with their items.",
		thumbnail: queueCountersThumbnail,
		thumbnailAlt: "queue-counters",
		route: ROUTES.QUEUECOUNTERS,
	},
	{
		title: "Synonym Finder",
		description:
			"A component which returns synonyms for a typed word or phrase. Each synonym can then be clicked to find other ones as well. The results are fetched from an external source and the top five are displayed.",
		thumbnail: synonymFinderThumbnail,
		thumbnailAlt: "synonym-finder",
		route: ROUTES.SYNONYMFINDER,
	},
	{
		title: "Dot Creator",
		description:
			"A drawing board in which users can draw out circles depending on their click. Each dot is given a random color and its coordinates are calculated according to the cursor's position.",
		thumbnail: dotCreatorThumbnail,
		thumbnailAlt: "dot-creator",
		route: ROUTES.DOTCREATOR,
	},
];
