const tombolCari = document.querySelector('#button-addon2');
const masukkanKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(https://awsimages.detik.net.id/community/media/visual/2022/04/22/bmkg-hari-ini-prakiraan-cuaca-besok-23-april-jabodetabek-waspada-hujan_169.jpeg?w=700&q=90)'

tombolCari.addEventListener('click', () => {

    // fetch("https://api.openweathermap.org/data/2.5/weather?q="
    // +masukkanKeyword.value+"&appid=a0c16e9549cdc0b1098190f1a612a465&units=metric")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${masukkanKeyword.value}&appid=a0c16e9549cdc0b1098190f1a612a465&units=metric`)

        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

            result.innerHTML = `<h2 style="margin-bottom: 4px;">${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                                <h5>Kecepatan angin : ${response.wind.speed} m/s</h5>
                                <h5 style="margin-bottom: 17px;">Kelebatan awan : ${response.clouds.all}%</h5>
                                <h4 style="color: #012443;">Titik koordinat : [${response.coord.lat}, ${response.coord.lon}]</h4>` 
        })
    masukkanKeyword.value = null;

})