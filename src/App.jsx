import React from "react";
import CountryCapitalGame from "./components/CountryCapitalGame/CountryCapitalGame";
import Home from "./components/Home/Home";
import WhacAMole from "./components/WhacAMole/WhacAMole";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/ROUTES";
import { countryCapitalData, fileViewerData } from "./data/COMPONENT_DATA";
import MemoryCardGame from "./components/MemoryCardGame/MemoryCardGame";
import FileViewer from "./components/FileViewer/FileViewer";
import QueueCounters from "./components/QueueCounters/QueueCounters";

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route
					path={ROUTES.COUNTRYCAPITAL}
					element={<CountryCapitalGame data={countryCapitalData} />}
				/>
				<Route path={ROUTES.WHACAMOLE} element={<WhacAMole />} />
				<Route path={ROUTES.MEMORYCARDS} element={<MemoryCardGame />} />
				<Route path={ROUTES.FILEVIEWER} element={<FileViewer files={fileViewerData} />} />
				<Route path={ROUTES.QUEUECOUNTERS} element={<QueueCounters />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
