import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/ROUTES';
import CountryCapitalGame from './components/CountryCapitalGame/CountryCapitalGame';
import Home from './components/Home/Home';
import WhacAMole from './components/WhacAMole/WhacAMole';
import {
	binaryTreeData,
	correctPasscode,
	countryCapitalData,
	fileViewerData
} from './data/COMPONENT_DATA';
import MemoryCardGame from './components/MemoryCardGame/MemoryCardGame';
import FileViewer from './components/FileViewer/FileViewer';
import QueueCounters from './components/QueueCounters/QueueCounters';
import SynonymFinder from './components/SynonymFinder/SynonymFinder';
import DotCreator from './components/DotCreator/DotCreator';
import BinaryTree from './components/BinaryTree/BinaryTree';
import Passcode from './components/Passcode/Passcode';

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
				<Route path={ROUTES.SYNONYMFINDER} element={<SynonymFinder />} />
				<Route path={ROUTES.DOTCREATOR} element={<DotCreator />} />
				<Route path={ROUTES.BINARYtREE} element={<BinaryTree root={binaryTreeData} />} />
				<Route path={ROUTES.PASSCODE} element={<Passcode passcode={correctPasscode} />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
