# Giphy App

**Giphy App** is an React Native application designed to allow users to search and explore trending GIFs using the Giphy API. 
The app offers a seamless way to browse, search, and share GIFs in real-time, making it a fun project for practicing iOS development and API integration.

## Features

- Search for GIFs using Giphy API.
- Display trending and popular GIFs.
- Share GIFs via social media or messaging apps.
- User-friendly interface with smooth scrolling and infinite scrolling for a better experience.

## Technologies Used

- **Expo**: Framework for building cross-platform mobile applications.
- **Axios**: For making HTTP requests to the Giphy API.
- **Lottie**: For integrating animations into the app.
- **Zustand**: For state management within the application.
- **Typescript**: For static type checking and improved developer experience.
- **React Query**: For managing server state and handling asynchronous data fetching.
- **Styled-components**: For styling the application components with ease.
- **UIKit**: To build a dynamic and responsive user interface.
- **Giphy API**: Integration for fetching GIFs.
- **Networking**: For handling API requests and responses.
  
## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Welinton-Hoff/giphy-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd giphy-app
    ```
3. Install the Expo CLI:
    ```bash
    npm install
    expo start
    ```
4. Build and run the project on your preferred simulator or physical device.

## API Integration

This app is powered by the Giphy API, allowing users to search and explore GIFs.

### Setup API Key

To run this project, you need to obtain a Giphy API key:

1. Visit [Giphy Developers](https://developers.giphy.com/).
2. Sign up and create an app to get your API key.
3. Create a `.env` file in the root of your project and add the API key there, using the provided `.env.example` file as a template.

### API Response Example

```json
{
  "data": [
    {
      "id": "xT9IgDEI1iZyb2wqo8",
      "url": "https://giphy.com/gifs/funny-cat-xT9IgDEI1iZyb2wqo8",
      "title": "Funny Cat",
      "images": {
        "fixed_height": {
          "url": "https://media.giphy.com/media/xT9IgDEI1iZyb2wqo8/200.gif"
        }
      }
    }
  ]
}
```

## How It Works

- Users can search for GIFs via the search bar or explore trending GIFs on the home screen.
- The app sends search queries to the Giphy API and displays the results in real-time.
- Users can share their favorite GIFs by clicking on them and using the built-in share options.
