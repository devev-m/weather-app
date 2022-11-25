let inputText = document.querySelector('.header__search-input');
let button = document.querySelector('.header__search-button');
let main = document.querySelector('.main');

// Событие на клик по button
button.addEventListener('click', () => {

   
   let inputValue = inputText.value;
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=47d46eb07982f2a463216e329dda65cd&units=metric&lang=ru`;

   // Получение данных погоды через сетевой запрос
   fetch(url)
      .then(response => response.json())
      .then(data => {

         inputText.value = "";

         let name = data.name;
         let icon = data.weather[0].icon;
         let temp = Math.round(data.main.temp);
         let weatherDescr = data.weather[0].description;
         let feelingTemp = Math.round(data.main.feels_like);
         let pressure = Math.round((data.main.pressure) * 0.750063755419211);
         let humidity = data.main.humidity;
         let clouds = data.clouds.all;  

         main.innerHTML = `
               <section class="weather-main">
                  <h2 class="weather-main__name">${name}</h2>
                  <div class="weather-main__inner">
                     <img src="https://openweathermap.org/img/w/${icon}.png" alt="weather icon" class="weather-main__img">
                     <h3 class="weather-main__degree">${temp}</h3>
                     <span class="weather-main__unit">°</span>
                  </div>
                  <p class="weather-main__description">${weatherDescr}</p>
               </section>
         
               <section class="weather-info">
                  <div class="weather-info__item">
                     <h3 class="weather-info__title">Ощущается как</h3>
                     <p class="weather-info__text">${feelingTemp}°</p>
                  </div>
                  <div class="weather-info__item">
                     <h3 class="weather-info__title">Давление</h3>
                     <p class="weather-info__text">${pressure} мм рт. ст.</p>
                  </div>
                  <div class="weather-info__item">
                     <h3 class="weather-info__title">Влажность</h3>
                     <p class="weather-info__text">${humidity}%</p>
                  </div>
                  <div class="weather-info__item">
                     <h3 class="weather-info__title">Облачность</h3>
                     <p class="weather-info__text">${clouds}%</p>
                  </div>
               </section>
            `
      })
})





