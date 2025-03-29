WeatherApp

Introduction

WeatherApp is a simple and intuitive React Native application that provides real-time weather updates for any city worldwide. 
The app fetches weather data from the OpenWeather API and displays details such as temperature, humidity, and weather conditions. It also includes features like:
  Search and Fetch Weather: Enter a city name to retrieve real-time weather details.
  Dark Mode Toggle: Switch between light and dark themes.
  Persistent Last Search: The app stores the last searched city and reloads it when reopened.
  Error Handling: Displays user-friendly messages if the city is not found or if there is a network error.

Installation
Prerequisites

Ensure you have the following installed before proceeding:
Homebrew (for macOS users)
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Node.js (LTS version recommended)
  Install via Homebrew:
  brew install node
  Alternatively, download and install from Node.js official site

Verify installation:
  node -v
  npm -v

Watchman (recommended for React Native development)
  brew install watchman

React Native Community CLI
  npm install -g @react-native-community/cli

Android Studio (for Android development)
Xcode (for iOS development)
CocoaPods (for iOS dependencies: sudo gem install cocoapods)
Java Development Kit (JDK 17) (for Android build)
  brew install openjdk@17

Add JDK 17 to your environment:
  echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
  source ~/.zshrc

Verify installation:
  java -version

Clone the Repository
git clone https://github.com/GitRGKumar/WeatherApp.git
 cd WeatherApp

Install Dependencies
  npm install

Running on iOS
  cd ios && pod install && cd ..
  npx react-native run-ios

Running on Android
  npx react-native run-android

Architectural Decisions
  React Native with Context API: Used for state management to avoid prop drilling.
  AsyncStorage: Stores the last searched city persistently.
  Axios: Handles API requests to OpenWeather.
  Modular Component-Based Design: Ensures code reusability and scalability.

