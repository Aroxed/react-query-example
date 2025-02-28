# React Infinite Scroll Example

A simple React application demonstrating infinite scrolling functionality using React Query and the JSONPlaceholder API. The application loads posts dynamically as the user scrolls down the page.

## Features

- Infinite scrolling using React Query and Intersection Observer
- Fetches posts from JSONPlaceholder API
- Clean and responsive design
- Efficient data caching and loading states
- Configurable post limit per page

## Technologies Used

- React
- Vite
- @tanstack/react-query
- react-intersection-observer
- JSONPlaceholder API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Aroxed/react-query-example
cd react-query-example
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Configuration

You can modify the following parameters in `src/components/Posts.jsx`:

- `_limit` parameter in the API URL to change posts per page
- `staleTime` and `cacheTime` in React Query options to adjust caching behavior
- Add network delay simulation for testing loading states

## API

The application uses the JSONPlaceholder API to fetch posts:
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Parameters:
  - `_page`: Page number
  - `_limit`: Number of posts per page
