import WeatherService from "@/services/weather-service.service";
import { Options, Vue } from "vue-class-component";
import { Inject } from "vue-property-decorator";
import { State, Getter } from "vuex-class";

@Options({
  props: {},
})
export default class WeatherForecast extends Vue {
  @Inject("weatherService")
  public weatherService!: WeatherService;

  // vuex state
  @State("weather") weather: any;
  @State("loading") loading: any;
  @State("error") error: any;

  // vuex getters
  @Getter("getWeather") weatherData: any;

  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    // this.weatherService.getWeatherForecast(52.52, 13.419998).then((res) => {
    //   console.log(res);
    // });
  }
}
