import andrej from "../assets/images/memoryCards/andrej.jpg";
import bojan from "../assets/images/memoryCards/bojan.jpg";
import bube from "../assets/images/memoryCards/bube.jpg";
import dadi from "../assets/images/memoryCards/dadi.jpg";
import dame from "../assets/images/memoryCards/dame.jpg";
import ivanovski from "../assets/images/memoryCards/ivanovski.jpg";
import jovan from "../assets/images/memoryCards/jovan.jpg";
import luka from "../assets/images/memoryCards/luka.png";
import mance from "../assets/images/memoryCards/mance.jpg";
import marko from "../assets/images/memoryCards/marko.jpg";
import petar from "../assets/images/memoryCards/petar.jpg";
import simon from "../assets/images/memoryCards/simon.png";
import { shuffle } from "../util/HELPER_FUNCTIONS";

export const countryCapitalData = {
	Germany: "Berlin",
	Azerbaijan: "Baku",
	Macedonia: "Skopje",
};

export const whacAMoleData = [
	{ isVisible: false },
	{ isVisible: false },
	{ isVisible: false },
	{ isVisible: false },
	{ isVisible: false },
	{ isVisible: false },
	{ isVisible: false },
	{ isVisible: false },
	{ isVisible: false },
];

const randomizedImages = shuffle([
	andrej,
	andrej,
	bojan,
	bojan,
	bube,
	bube,
	dadi,
	dadi,
	dame,
	dame,
	ivanovski,
	ivanovski,
	jovan,
	jovan,
	luka,
	luka,
	mance,
	mance,
	marko,
	marko,
	petar,
	petar,
	simon,
	simon,
]);

export const memoryCards = randomizedImages.map((image) => {
	return {
		image: image,
		isShown: false,
		isCompleted: false,
	};
});

export const fileViewerData = [
	{
		name: "build",
		children: [
			{
				name: "static",
				children: [
					{
						name: "css",
					},
					{
						name: "js",
					},
					{ name: "media" },
				],
			},
		],
	},
	{
		name: "public",
		children: [
			{
				name: "index.html",
			},
		],
	},
	{
		name: "src",
		children: [{ name: "App.jsx" }, { name: "index.js" }],
	},
	{ name: ".gitignore" },
	{ name: "package.json" },
	{ name: "README.md" },
];

export const queueData = [[5, 3], [5, 5, 2, 1], [10], [9, 10, 5, 9], [1, 2, 3, 4, 5]];

export const binaryTreeData = {
	value: 5,
	left: {
		value: 6,
		left: {
			value: 3,
			left: { value: 10 },
			right: { value: 100 },
		},
		right: {
			value: 4,
			left: {
				value: 99,
				left: {
					value: 12,
				},
				right: { value: 24 },
			},
		},
	},
	right: {
		value: 2,
		left: {
			value: 12,
			left: { value: 10 },
		},
		right: {
			value: 90,
			left: {
				value: 5,
			},
			right: {
				value: 26,
			},
		},
	},
};


export const correctPasscode = '1234'