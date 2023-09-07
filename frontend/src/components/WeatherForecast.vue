<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>Oops! Something went wrong. Please try again.</p>
    </div>
    <div v-else-if="weatherData">
      <div>
        <p>Temperature: {{ weatherData?.temperature }}</p>
      </div>
      <div>
        <p>Wind Direction: {{ weatherData?.winddirection }}</p>
      </div>
      <div>
        <p>Wind Speed: {{ weatherData?.windspeed }}</p>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style></style>
