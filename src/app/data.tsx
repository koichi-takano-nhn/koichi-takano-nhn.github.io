"use server";

type WeatherData = {
  coord: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};


export async function fetchWeather(formData:WeatherData) {
  console.log(formData)
  const place = "Tokyo";
  try {
    console.log("データ取得中です...");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=ja&appid=${process.env.API_TOKEN}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("データ取得エラー");
  }
}