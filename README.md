# The Audio Lounge


Author: Nelson Zongezile Malgas

Welcome to The Audio Lounge, a React-based Podcast App that brings the world of podcasts to your fingertips. Dive into a world of audio content, discover new shows, and enjoy your favorite episodes—all in one place.

## Features

- **Browse and Search**: Easily find podcasts by title and genre.
- **Sorting**: Sort shows by title (A-Z, Z-A) and date updated.
- **Detailed Info**: Explore podcast details, including genre, description, and last update.
- **Episode Playback**: Listen to episodes and view episode details.
- **Show More**: Expand descriptions to get the full scoop on podcasts.
- **Favorites**: Mark shows as favorites and see when you did.
- **Feedback**: Share your thoughts and suggestions with us through our feedback form.

## Technologies

We've used cutting-edge technologies to create The Audio Lounge:

- React (with hooks like useEffect and useState)
- Bootstrap for a sleek and responsive design
- Local Storage to save your favorite shows and feedback
- Fetch API to fetch podcast data
- Superbase for user authentication and favorite episodes storage
- React-Slick for a smooth carousel/slider experience
- Fuse.js for lightning-fast fuzzy searching

## Dependencies

Here are the main dependencies we've used:

- **React**: `npm install react react-dom`
- **Fuse.js**: `npm install fuse.js`
- **react-slick**: `npm install react-slick`
- **prop-types**: `npm install prop-types` (Runtime type checking for React props)
- **Supabase**: `npm install @supabase/supabase-js` (A real-time and RESTful API service for PostgreSQL)
- **Bootstrap**: `npm install bootstrap` (A popular CSS framework for responsive design)

## Installation

Getting started is easy:

1. **Clone the Repository**: `git clone your-repo-url`
2. **Navigate to the Project Directory**: `cd your-project-directory`
3. **Install Dependencies**: `npm install`
4. **Run the Development Server**: `npm run dev`
5. **Access the App**: Open your browser and visit the provided link.

## Usage

1. **Sign-Up or Sign-In**: Get started by creating an account or signing in.
2. **Explore**: Use the search bar and dropdown to discover podcasts.
3. **Sort**: Sort shows by title or date updated.
4. **Discover**: Click on a podcast card to explore its seasons and episodes.
5. **Listen**: Enjoy episodes, toggle episode descriptions, and close the dialog.
6. **Favorite**: Mark your favorite podcasts and see when you did.
7. **Feedback**: Share your thoughts with us through the feedback form.

## Authentication

Our app includes user authentication. If you have a valid user token stored at Supabase, you'll be authenticated. Your authentication status determines what you see in the app.

## Feedback

We value your feedback! If you encounter issues or have suggestions, please let us know through the feedback form in the app.

🎧 Happy podcast listening at The Audio Lounge! 🎙️
