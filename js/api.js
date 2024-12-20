let clima = document.getElementById('clima')

// fetch('https://www.meteosource.com/api/v1/free/nearest_place?lat=34.732S&lon=58.277W&language=en&key=g61toq79ut0u17grv1mdypurj1ts06tp6n9ixbov')

fetch("https://www.meteosource.com/api/v1/free/point?place_id=quilmes&sections=current&timezone=UTC&language=en&units=metric&key=g61toq79ut0u17grv1mdypurj1ts06tp6n9ixbov", {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
// .then((response)=> response.json())
// .then((data)=>{
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        // data.current((elemento)=>{

        const contenedorCreado = document.createElement("div")
        
        contenedorCreado.innerHTML = "<h4>Temperatura "+ data.current.temperature + "</h4>"+
        "<img src='imagenes/clima/" + data.current.icon_num +".png'>"+
        "<p>" +data.current.summary + "</p>";
        

        clima.append(contenedorCreado);
    //  });


    });
    //console.log(data)
    // console.log(data.results)
    

    
// })



// Change this to your actual API key
// let apiKey = 'g61toq79ut0u17grv1mdypurj1ts06tp6n9ixbov'
// // Change this to your actual tier
// let tier = 'flexi'

// let m = new meteosource.Meteosource(apiKey, tier)

// let forecast = await m.getPointForecast({
//     lat:-34.732,  // Latitude of the point
//     lon: -58.277,  // Longitude of the point
//     placeId: null,  // You can specify place_id instead of lat+lon
//     sections: ["current"],  // is converted to "current,hourly"
//     tz: 'US/Pacific',
//     lang: 'en',
//     // units: 'us',  // Defaults to 'auto'
// })