import React from "react";
import CountryCapitalGame from "./components/CountryCapitalGame/CountryCapitalGame";
import Home from "./components/Home/Home";
import WhacAMole from "./components/WhacAMole/WhacAMole";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/ROUTES";
import { countryCapitalData } from "./data/COMPONENT_DATA";

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route
					path={ROUTES.COUNTRYCAPITAL}
					element={<CountryCapitalGame data={countryCapitalData} />}
				/>
				<Route path={ROUTES.WHACKAMOLE} element={<WhacAMole />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
