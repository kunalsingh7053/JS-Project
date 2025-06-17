let url = 'https://dog.ceo/api/breeds/image/random';

let catfact = document.querySelector('#para');

// FETCH API USING ASYNC&WAITE 
// async function getdata(){
// console.log('getting data......')
//     let response = await fetch(url);
//     console.log(response); //GET RESPONSE FROM SERVER
//     let data = await  response.json(); //CONVERT TO JSON FORMATE
//     console.log(data.message);  //SHOW DATA IN CONSOLE
//     catfact.src = data.message;
// }
// let button = document.querySelector('#btn'); //SELECT BUTTON FROM HTML FILE USING QUERY SELECTOR
// button.addEventListener('click',getdata);

// FETCH API USING PROMISE
function getdata(){
    fetch(url).then((response)=>{
        return  response.json();
    }).then((data)=>{
        console.log(data);
        catfact.src = data.message;
    })
}
let button = document.querySelector('#btn'); //SELECT BUTTON FROM HTML FILE USING QUERY SELECTOR
button.addEventListener('click',getdata);