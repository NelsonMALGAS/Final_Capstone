import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import MainContent from "./MainContents";
import "./CSS/App.css";

/**
 * The root component of the Application
 *
 * @returns {JSX.Element} JSX element representing the App component
 */
function App() {
	// State Hook to manage the search term
	const [searchTerm, setSearchTerm] = useState("");

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
			<Header onSearch={handleSearch} />
			<MainContent searchTerm={searchTerm} onSearch={handleSearch} />
		</div>
	);
}

export default App;
