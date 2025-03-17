"use client";

import { fetchWeather } from "./data";
import { useActionState } from "react";

export default function Page() {
  const [weather, setWeather] = useActionState(fetchWeather, "");
  
  return (
    <>
      <form action={setWeather}>
        <input
          type="text"
          name="place"
          placeholder="都市名を入力してください"
        />
        <button type="submit">データを取得する</button>
      </form>
      {weather && (
        <>
          <h1>{weather.name}の天気</h1>
          <div>最高気温：{weather.main.temp_max}</div>
          <div>最低気温：{weather.main.temp_min}</div>
        </>
      )}
    </>
  );
}
