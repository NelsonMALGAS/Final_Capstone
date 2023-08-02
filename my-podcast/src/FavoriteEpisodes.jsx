import { useState } from "react";
import PropTypes from "prop-types";

function FavoriteEpisodes(props) {
	const { episodes } = props;
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

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

FavoriteEpisodes.propTypes = {
	episodes: PropTypes.array,
	FavoriteEpisodes: PropTypes.array,
};

export default FavoriteEpisodes;
