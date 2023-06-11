import { Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Error404 from './views/error404/Error404';
import './scss/global.scss';
import Project from './views/project/Project';
import projectsData from '/@json/projects.json';

function App() {
	// CHANGE PAGE TITLE
	// Detect when the user changes tabs
	document.addEventListener('visibilitychange', function () {
		if (document.hidden) {
			// The user is in another tab
			document.title = 'I miss u 💔'; // Change the tab title
		} else {
			// The user returned to the current tab
			document.title = 'Celudirosa'; // Restore the original title
		}
	});

	return (
		<>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* Te faltaba añadir la ruta, y como no tienes un context, le tienes que pasar por aqui el listado de proyectos */}
					<Route path="/project/:id" element={<Project projects={projectsData} />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
