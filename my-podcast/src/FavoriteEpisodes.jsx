import { useState } from "react";
import PropTypes from "prop-types";

/**
 * A React component that displays a button to view favorite episodes and a modal to show the favorite episodes list.
 * @component
 * @param {Object} props - The properties for the FavoriteEpisodes component.
 * @param {Array} props.episodes - An array of favorite episodes to be displayed in the modal.
 * @returns {JSX.Element} The FavoriteEpisodes component JSX element.
 */
function FavoriteEpisodes(props) {
	const { episodes } = props;
	const [modalOpen, setModalOpen] = useState(false);

	/**
	 * Opens the modal to display the favorite episodes list.
	 * @function
	 * @inner
	 */
	const openModal = () => {
		setModalOpen(true);
	};

	/**
	 * Closes the modal.
	 * @function
	 * @inner
	 */
	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<button
				className="btn btn-primary episodes-modal-btn"
				onClick={openModal}
			>
				View Favorite Episodes
			</button>
			{modalOpen && (
				<div className="modal" style={{ display: "block" }}>
					<div className="modal-dialog modal-dialog-centered modal-md">
						<div className="modal-content">
							<div className="modal-header bg-primary text-white">
								<h5 className="modal-title">Favorite Episodes</h5>
								<button
									className="btn-close"
									onClick={closeModal}
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body bg-white p-4">
								{episodes.map((episode, index) => (
									<div key={index} className="favorite-episode">
										<h4>
											<strong>Season {episode.season}</strong> - Episode{" "}
											{episode.episode}
										</h4>
										<h5>
											<strong>Title:</strong> {episode.title}
										</h5>
										<p>{episode.description}</p>
										<hr />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

/**
 * PropTypes for the FavoriteEpisodes component.
 * @property {Array} episodes - An array of favorite episodes.
 */
FavoriteEpisodes.propTypes = {
	episodes: PropTypes.array,
};

export default FavoriteEpisodes;
