# Book Club App – React

Responsive React app for browsing a book collection fetched from a remote API, searching by title or author, saving favorites, and viewing book details in a sliding detail panel.

The UI is built with styled-components, and favorites are stored in localStorage so they persist between sessions.

## Tech Stack

- React
- JavaScript
- Create React App
- styled-components
- Fetch API
- localStorage
- react-transition-group

## Features

### Book Display & Interaction

- Fetches and displays a collection of books from a remote API
- Responsive book grid with cover images, titles, and authors
- Select a book to open a sliding detail panel with description and publication information

### Search

- Search by book title or author
- Results update as the user types
- Empty state shown when there are no books to display

### Favorites Management

- Add and remove favorite books from the detail panel
- Filter to display only favorite books
- Favorites persist between sessions using localStorage

### Responsive UI & Interaction

- Responsive layout built with styled-components
- Smooth detail panel transitions using react-transition-group
- Scroll position is preserved when opening and closing the detail panel

## Screenshots

### Book List – Desktop

<img src="docs/screenshots/book-list-desktop.png" alt="Book list desktop view" width="500">

### Book List – Mobile

<img src="docs/screenshots/book-list-mobile.png" alt="Book list mobile view" width="250">

### Search Results

![Search results](docs/screenshots/search-results.png)

### Search Empty State

![Search empty state](docs/screenshots/search-no-results.png)

### Book Detail View – Favorited

![Book detail view with favorited book](docs/screenshots/book-detail-open-fave.png)

### Book Detail View – Not Favorited

![Book detail view with not favorited book](docs/screenshots/book-detail-open-unfave.png)

### Favorites List

![Favorites list](docs/screenshots/favorites-list.png)

### Favorites Empty State

![Favorites empty state](docs/screenshots/favorites-empty.png)

### Interaction Demo

![Interaction demo](docs/screenshots/interaction-demo.gif)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/JustinaVilcinskaite/book-club-app-react.git
cd book-club-app-react
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the development server

```bash
yarn start
```

The app will be available at:

```bash
http://localhost:3000
```

## Project Structure

```text
book-club-app-react/
├── docs/
│   └── screenshots/           # README screenshots
├── public/                    # Static public assets
├── src/
│   ├── assets/                # SVG icons and UI assets
│   ├── components/            # Reusable UI components
│   │   ├── Book/              # Book card
│   │   ├── BooksContainer/    # Book grid and empty state
│   │   ├── DetailedPanel/     # Sliding book detail panel
│   │   ├── Header/            # Header and logo
│   │   └── Search/            # Search and favorites filter
│   ├── App.jsx                # Main application component and state logic
│   ├── index.js               # React entry point
│   └── styles.js              # Global styles and shared styled components
├── package.json
├── yarn.lock
└── README.md
```
