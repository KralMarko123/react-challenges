import moleThumbnail from "../assets/images/whacamole/mole thumbnail.png";
import countryCapitalThumbnail from "../assets/images/countryCapitals/countrycapital thumbnail.png";
import memoryCardsThumbnail from "../assets/images/memoryCards/memory cards thumbnail.png";
import fileViewerThumbnail from "../assets/images/fileViewer/file viewer thumbnail.png";
import queueCountersThumbnail from "../assets/images/queueCounters/queue counters thumbnail.png";
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
];
