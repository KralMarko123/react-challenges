import React from "react";
import CountryCapitalGame from "./components/CountryCapitalGame/CountryCapitalGame";

const data = {
	Germany: "Berlin",
	Azerbaijan: "Baku",
	NorthMacedonia: "Skopje",
};

const App = () => {
	return <CountryCapitalGame data={data} />;
};

export default App;
