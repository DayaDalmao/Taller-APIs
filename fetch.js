const apiKey = '64ec1d8d84ba0569b44fad12466ce947';  // Clave dada por la API
const city = 'Madrid';  // La ciudad que quieras consultar
const url = `https://api.openweathermap.org/data/2.5/weather?q=${Madrid}&appid=${'64ec1d8d84ba0569b44fad12466ce947'}&units=metric&lang=es`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Aquí obtienes los datos y puedes manipularlos
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    console.log(`En ${city}, la temperatura es de ${temperatura}°C con ${descripcion}.`);
  })
  .catch(error => console.error('Error al realizar la solicitud:', error));