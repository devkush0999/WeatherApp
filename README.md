
## WeatherApp

### Description
WeatherApp is a React Native application that provides weather details for the user's current location using the OpenWeatherMap API. The app requests location permissions on startup and displays the weather based on the user's current location. Additionally, users can search for weather in specific cities.

### Features
- Displays current weather based on the user's location.
- Allows users to search for the weather of any city.
- Refresh button to update the current location weather.
- Handles location permission requests and gracefully handles errors.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A valid API key from [OpenWeatherMap](https://openweathermap.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/WeatherApp.git
   cd WeatherApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add OpenWeatherMap API key:**
   - Open `App.js` and replace `'YOUR_OPENWEATHERMAP_API_KEY'` with your actual API key.

4. **Run the app:**
   ```bash
   npx expo start
   ```
   You can run the app in Expo Go on a physical device or in an emulator.

### Usage

- The app will ask for location permissions on startup.
- If granted, it will display the current weather for your location.
- Use the search bar to look up the weather for a different city.
- Tap the **Refresh** button to refresh the current location's weather.

### Building APK

To build the APK file for Android:
```bash
expo build:android
```

### Project Structure

```
.
├── App.js            # Main application file
├── package.json      # Dependencies and scripts
├── node_modules      # Installed node modules
├── assets/           # Project assets (if any)
├── README.md         # This file
└── ...
```

### Screenshots

Add screenshots of your app here (optional).

### License

This project is licensed under the MIT License - see the LICENSE file for details.

---

### How to Push to GitHub:

1. **Initialize Git (if not already initialized):**
   ```bash
   git init
   ```

2. **Add files to the repository:**
   ```bash
   git add .
   ```

3. **Commit the changes:**
   ```bash
   git commit -m "Initial commit"
   ```

4. **Create a repository on GitHub** (if you haven’t already):
   - Go to GitHub and create a new repository called `WeatherApp`.

5. **Add the remote repository URL:**
   ```bash
   git remote add origin https://github.com/your-username/WeatherApp.git
   ```

6. **Push the code to GitHub:**
   ```bash
   git push -u origin main
   ```

