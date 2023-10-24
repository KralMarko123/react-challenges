import React from "react";
import CountryCapitalGame from "./components/CountryCapitalGame/CountryCapitalGame";
import { countryCapitalData } from "./data/COMPONENT_DATA";

const App = () => {
	return <CountryCapitalGame data={countryCapitalData} />;
};

export default App;
