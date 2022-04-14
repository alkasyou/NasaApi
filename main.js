let key = "rlM49uC5s1i02ZDenCZUC9Am8LoW6xUBBL3Ry30V"

https://api.nasa.gov/planetary/apod?api_key=rlM49uC5s1i02ZDenCZUC9Am8LoW6xUBBL3Ry30V


function getNasa(){

   const choice = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${choice}`)

    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.media_type === 'image') {
            document.querySelector('img').src = data.hdurl
        }else if (data.media_type === 'video') {
            document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
        document.getElementById('wraper-hdurl').href = data.hdurl
    })
    .catch(err => {
        console.log(`error${err}`)
    })
     
    
}
