# My Watchlist

A movie watchlist web application where users can search for movies, view movie details, and manage their personal watchlist.

## Tech Stack

### Frontend
- React
- Material UI (MUI)
- React Router
- Axios

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### External API
- OMDb API

### Version Control
- Git
- GitHub

## Features

The application will allow users to:

- Search for movies by title
- View movie details including plot, cast, and rating
- Add movies to their personal watchlist
- View saved movies
- Rate movies from 1–5
- Mark movies as watched
- Remove movies from their watchlist

## Project Structure

```text
movie-watchlist/
├── client/       # React frontend
├── server/       # Node.js + Express backend
├── .gitignore
├── .env.example
└── README.md

Database

PostgreSQL will be used as the application's database.

It is a good fit for this project because the application has structured data and clear relationships between watchlist entries and their associated movie information. PostgreSQL also provides strong data validation and reliable CRUD operations.

API

The application will use the OMDb API to retrieve movie search results and movie details.

Movies added to the watchlist will be stored in the application's own PostgreSQL database rather than in the external movie API.

Backend API Routes

The backend will provide the following REST API endpoints:

Method	Route	Purpose
GET	/api/watchlist	List saved movies
POST	/api/watchlist	Add a movie
PUT	/api/watchlist/:id	Update rating/watched status
DELETE	/api/watchlist/:id	Remove a movie
Environment Variables

Environment variables will be used for sensitive configuration such as:

PostgreSQL connection details
OMDb API key
Server configuration

A .env.example file will be provided with the required variable names.

Actual secrets will not be committed to the repository.

Getting Started

Setup and installation instructions will be added as development progresses.

Future Improvements

Potential improvements will be documented here after the core requirements have been completed.

Assignment

This project is being developed as part of an intern assignment.

The goal is to demonstrate clean and understandable fundamentals rather than adding unnecessary features.