import WeatherService from "@/services/weather-service.service";
import { Options, Vue } from "vue-class-component";
import { State, Mutation } from "vuex-class";
import { Inject } from "vue-property-decorator";

@Options({
  props: {},
})
export default class SearchCity extends Vue {
  @Inject("weatherService")
  public weatherService!: WeatherService;

  // vuex mutations
  @Mutation("setWeather") setWeather: any;
  @Mutation("setLoading") setLoading: any;
  @Mutation("setError") setError: any;

  selectedPlace: { lat: number; lng: number } | null = null;

  /**
   * Handle selecting place from autocomplete
   * @param place
   */
  placeChanged(place: any) {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    this.fetchWeatherData(lat, lng);
  }

  /**
   * Handle selecting from map
   * @param place
   */
  handleClick(place: any) {
    const lat = place.latLng.lat();
    const lng = place.latLng.lng();
    this.fetchWeatherData(lat, lng);
  }

  /**
   * Fetch weather data from backend
   * @param lat
   * @param lng
   */
  fetchWeatherData(lat: number, lng: number) {
    this.selectedPlace = { lat, lng };

    // init loading state
    this.setLoading(true);
    // init error state
    this.setError(false);
    // get the weather data
    this.weatherService
      .getWeatherForecast(lat, lng)
      .then((res) => {
        this.setWeather(res);
      })
      .catch((e) => {
        this.setError(true);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }
}
