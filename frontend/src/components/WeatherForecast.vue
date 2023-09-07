<template>
  <div class="hello">
    <h3 class="text-2xl font-semibold mb-4">Weather forecast for city</h3>

    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>Oops! Something went wrong. Please try again.</p>
    </div>
    <div
      v-else-if="weatherData"
      class="grid grid-cols-2 gap-4 justify-center items-center px-40"
    >
      <div class="relative bg-blue-200 p-4 rounded-lg">
        <p class="text-gray-600">Temperature</p>
        <p class="text-3xl font-semibold">
          {{ weatherData?.temperature }} &deg;C
        </p>
      </div>
      <div class="relative bg-blue-200 p-4 rounded-lg">
        <p class="text-gray-600">Wind Speed</p>
        <p class="text-3xl font-semibold">{{ weatherData?.windspeed }} km/h</p>
      </div>
      <div class="relative bg-blue-200 p-4 rounded-lg">
        <p class="text-gray-600">Wind Direction</p>
        <p class="text-3xl font-semibold">{{ weatherData?.winddirection }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style></style>
