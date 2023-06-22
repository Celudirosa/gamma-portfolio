import { Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Error404 from './views/error404/Error404';
import './scss/global.scss';
import Project from './views/project/Project';
import projectsData from '/@json/projects.json';

function App() {
	// CHANGE PAGE TITLE
	// get the html title
	var originalTitle = document.title;

	// detect when the user changes tabs
	document.addEventListener('visibilitychange', function () {
		if (document.hidden) {
			// the user is in another tab
			document.title = 'I miss u 💔'; // change the tab title
		} else {
			// the user returned to the current tab
			document.title = originalTitle; // restore the original title
		}
	});

	return (
		<>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project/:id" element={<Project projects={projectsData} />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
