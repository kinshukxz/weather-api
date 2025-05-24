<h1 align="center">🌦️ Weather Snapshot API</h1>
<p align="center">
  A simple Node.js & Express REST API that returns real-time weather data for any city using the OpenWeatherMap API.  
  Built for learning APIs, Docker, CI/CD, and cloud deployments.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-brightgreen?style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/kinshukxz/weather-api?style=for-the-badge"/>
  <img src="https://img.shields.io/github/languages/top/kinshukxz/weather-api?style=for-the-badge"/>
</p>

---

## 🚀 Features

- Get real-time weather info by city name
- Easy to use REST API
- Secure `.env` support for API keys
- Dockerized for containerized deployments
- GitHub Actions CI to push images to Google Container Registry (GCR)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Axios
- Docker
- GitHub Actions
- OpenWeatherMap API


---

## 📂 Folder Structure

````
weather-api/
├── server.js
├── .env # not committed (contains your API key)
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── .github/workflows/docker-gcr.yml
````
---

## 🧪 API Usage

**GET `/weather/:city`**

Example:

GET http://localhost:5050/weather/delhi


Response:

```json
{
  "city": "Delhi",
  "temperature": "30°C",
  "description": "haze",
  "humidity": "60%"
}
````

## 🧑‍💻 Run Locally

- 1. Clone the Repo
git clone https://github.com/kinshukxz/weather-api.git
cd weather-api
npm install

- 2. Add .env File
env
````
WEATHER_API_KEY=your_openweathermap_api_key
PORT=5050
````
Get your key from https://openweathermap.org/api

- 3. Run the App

node server.js
- Test:
http://localhost:5000/weather/london

## 🐳 Run in Docker
- 1. Build the Image
docker build -t weather-api .
- 2. Run the Container

docker run -p 5000:5000 --env WEATHER_API_KEY=your_key weather-api

## ☁️ Push to Google Artifact Registry
## ✅ Requirements:

- GCP project

Artifact Registry Docker repo (e.g., weather-api)

- Service account with:

- Artifact Registry Writer

- Storage Admin

## 🔐 GitHub Secrets Needed:
```
GCP_SA_KEY	Full service account JSON key
PROJECT_ID	Your GCP project ID
```

