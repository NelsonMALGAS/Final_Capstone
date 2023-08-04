# Author : Nelson Zongezile Malgas

# The Audio Lounge

This is a React-based Podcast App that allows users to browse and search for podcasts, view podcast details, and listen to episodes. The app also provides features for users to mark their favorite shows and submit feedback.

## Features

- Browse and search for podcasts based on title & genre
- Sort shows based on title (A-Z, Z-A) and date updated (Descending, Ascending).
- View podcast details including title, genre, description, and last updated date.
- Listen to episodes within each podcast and view episode details.
- Toggle "Show More" to view the full description of podcasts.
- Mark shows as favorites and see the time and date of marking.
- Submit feedback through a feedback form.

## Technologies Used

- React (with hooks such as useEffect and useState)
- Bootstrap for styling
- Local Storage for storing favorite shows and feedback
- Fetch API to retrieve podcast data from the API
- Superbase storage (store user data during sign-up(Authentication) and favorite episodes)
- React-Slick (corousel slider)
- Fuse.js

## Dependencies

### 1. React and its associated dependencies:

- react & react-dom:: npm install vite@latest

### 2. Fuse.js - A lightweight fuzzy-search library for JavaScript:

- fuse.js: npm install fuse.js

### 3. react-slick - A carousel/slider component for React:

- react-slick: npm install react-slick

### 4. prop-types - Runtime type checking for React props:

- prop-types: npm install prop-types / import PropTypes from prop-types

### 5. Supabase - A real-time and RESTful API service for PostgreSQL:

- @supabase/supabase-js: npm install @supabase/supabase-js

### 6. Bootstrap - A popular CSS framework for building responsive and mobile-first websites:

bootstrap: npm install bootstrap

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run npm install to install the project dependencies.
4. Run npm run dev to start the development server.
5. Open your browser and visit the link provided to access the Podcast App.

## Usage

1. Firstly Sign-Up / Sign-In to have access to the seasons and episodes.
2. Upon opening the app after sign-in / sign-up, you'll see a navbar with a logo and search options.
3. You can search for podcasts by entering keywords in the search bar and selecting a genre from the dropdown menu.
4. You can sort the shows by title (A-Z, Z-A) and date updated (Descending, Ascending) using the sorting dropdown menu.
5. The main content section displays the podcasts based on the search criteria and sorting options.
6. Each podcast card shows the title, genres, a brief description, and the last updated date.
7. Clicking on a podcast card will open a dialog with information about the seasons and episodes of that podcast.
8. Within the dialog, you can listen to individual episodes, toggle the episode description, and close the dialog.
9. You can mark a podcast as a favorite by checking the "Favorite" checkbox. The time and date of marking will be displayed below the checkbox.
10. You can submit feedback by filling out the feedback form at the bottom of the page.
11. After submitting feedback, a confirmation message will be displayed.

## Authentication

This app includes a simple authentication feature. If the user has a valid user token stored at supabase, they will be considered authenticated. The authentication status determines whether to display the main content or the authentication component.

## Feedback

We welcome any feedback you may have about the Podcast App. If you encounter any issues or have suggestions for improvement, please feel free to submit your feedback using the feedback form provided in the app.

🔉Happy podcast listening!
