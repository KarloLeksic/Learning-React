// Nacin na koji mozemo definirati set od imenovanih konstanti
// NJene vrijednosti se mogu koristiti naizmjence

enum WeatherConditions {
  Sunny,
  Cloudy,
  Rainy,
  Snowy,
}

// A mozemo i dati mi neke vrijednosti kako npr
enum WeatherConditions1 {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

// Kako se koriste
const currentWeatherConditions = WeatherConditions.Sunny;
