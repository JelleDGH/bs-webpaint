let random;
let img_flag = document.querySelectorAll('.img_flag');
let country_title = document.querySelectorAll('.country_title');
async function getData(){
    const response = await fetch('https://restcountries.com/v2/all')
    const data  = await response.json();
    return data
}

getData()
    .then(data=> {
        for (let x = 0; x < img_flag.length; x++) {
            random = Math.floor(Math.random() * data.length);
            img_flag[x].src = data[random].flag;
            country_title[x].innerHTML = data[random].name;


        }
    })

/** IMPORT BOOTSTRAP **/
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";