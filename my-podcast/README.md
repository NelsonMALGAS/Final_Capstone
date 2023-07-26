# Podcast App

This is a React-based Podcast App that allows users to browse and search for podcasts, view podcast details, and listen to episodes. The app also provides features for users to mark their favorite shows and submit feedback.

## Features

- Browse and search for podcasts based on title, genre, and updated date.
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
- Superbase storage (store user data during sign-up)
- React-Slick
- Fuse.js

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run npm install to install the project dependencies.
4. Run npm start to start the development server.
5. Open your browser and visit http://localhost:3000 to access the Podcast App.

## Usage

1. Upon opening the app, you'll see a navbar with a logo and search options.
2. You can search for podcasts by entering keywords in the search bar and selecting a genre from the dropdown menu.
3. You can sort the shows by title (A-Z, Z-A) and date updated (Descending, Ascending) using the sorting dropdown menu.
4. The main content section displays the podcasts based on the search criteria and sorting options.
5. Each podcast card shows the title, genres, a brief description, and the last updated date.
6. Clicking on a podcast card will open a dialog with information about the seasons and episodes of that podcast.
7. Within the dialog, you can listen to individual episodes, toggle the episode description, and close the dialog.
8. You can mark a podcast as a favorite by checking the "Favorite" checkbox. The time and date of marking will be displayed below the checkbox.
9. You can submit feedback by filling out the feedback form at the bottom of the page.
10. After submitting feedback, a confirmation message will be displayed.

## Authentication

This app includes a simple authentication feature. If the user has a valid user token stored in local storage, they will be considered authenticated. The authentication status determines whether to display the main content or the authentication component.

Please note that the authentication implementation here is simplified for demonstration purposes. In a real-world application, you should use a proper authentication system and handle user authentication securely.

## Feedback

We welcome any feedback you may have about the Podcast App. If you encounter any issues or have suggestions for improvement, please feel free to submit your feedback using the feedback form provided in the app.

Happy podcast listening!
