
console.log("Test")


     
 const weatherForm = document.querySelector('form')   
 const search = document.querySelector('input')   
 const message1 = document.querySelector('#message-1')   
 const message2 = document.querySelector('#message-2')   

 weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    message1.textContent = "Laoding data..."
    message2.textContent = ""

    fetch("/weather?adress="+ location  ).then((response) => {
        return response.json()}).then((res) => {
            if (!res.data) {
                console.log("Error, Unable to find Location",
                message1.textContent = "Error, Unable to find Location",
                message2.textContent = ""

            )}
    
        else {
            message1.textContent = `Temperature: ${res.data.temperature}°C, Wind Speed: ${res.data.windspeed} km/h, Precipitation: ${res.data.precipitation} mm, Time: ${res.data.heure}`;
        message2.textContent = `Location: ${res["Location "]}`;
              
            
        }
        })
 })

 