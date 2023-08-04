import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import MainContent from "./MainContents";
import { getFromLocalStorage } from "./localStorage/locaLStorage";
import { Helmet } from "react-helmet";
import "./CSS/App.css";

/**
 * The root component of the Application
 *
 * @returns {JSX.Element} JSX element representing the App component
 */
function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [shows, setShows] = useState(getFromLocalStorage("shows") || []);
	const [favoriteShows, setFavoriteShows] = useState(
		getFromLocalStorage("favoriteShows") || [],
	);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [selectedGenre, setSelectedGenre] = useState("");
	const [filteredShows, setFilteredShows] = useState([]);
	const [seasons, setSeasons] = useState([]);
	const [episodes, setEpisodes] = useState([]);

	/**
	 * Handles the search action by updating the search term state
	 *
	 * @param {string} term -The search term from the user input
	 */
	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	return (
		<div className="app">
			<Helmet>
				<meta name="author" content="Nelson Zongezile Malgas" />
				<link
					rel="icon"
					type="image/svg+xml"
					href="https://the-audio-lounge.netlify.app/src/favicons/radio-outline.svg"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>The Audio Lounge</title>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="https://the-audio-lounge.netlify.app/src/meta/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="https://the-audio-lounge.netlify.app/src/meta/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="https://the-audio-lounge.netlify.app/src/meta/favicon-16x16.png"
				/>
				<link rel="manifest" href="./src/meta/site.webmanifest" />
				<link
					rel="mask-icon"
					href="https://the-audio-lounge.netlify.app/src/meta/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Helmet>
			;
			<Header onSearch={handleSearch} />
			<MainContent
				searchTerm={searchTerm}
				onSearch={handleSearch}
				shows={shows}
				setShows={setShows}
				favoriteShows={favoriteShows}
				setFavoriteShows={setFavoriteShows}
				isAuthenticated={isAuthenticated}
				setIsAuthenticated={setIsAuthenticated}
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
				filteredShows={filteredShows}
				setFilteredShows={setFilteredShows}
				seasons={seasons}
				setSeasons={setSeasons}
				episodes={episodes}
				setEpisodes={setEpisodes}
			/>
		</div>
	);
}

export default App;
