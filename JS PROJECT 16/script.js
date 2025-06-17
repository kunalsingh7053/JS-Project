let data =  document.querySelector("#caret");
let messages = [
      "Initializing sequence <b>...<b>",
      "Loading data<b>...<b>",
      "Connecting to server<b>...<b>",
      "Authenticating user<b>...<b>",
      "Retrieving information<b>...<b>",
      "Executing command<b>...<b>",
      `Operation successful<b>...<b> <br> Hacker's Terminal active<b style="color:red;">!<b>`
     
  ];
let image =   `<img src="https://pngimg.com/d/devil_PNG30.png" alt="" width="200px"height="300px">`;
  
  let index = 0; // Start with the first message
  console.log(messages);
  
function infinite()
{
    let random = Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000;
    console.log("Next update in: " + random + "ms");
    
    if(index===7)
    {
        data.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;" + image + "<br>";
        console.log("Image printed. Stopping function.");
        return; // Stop the function when the image is printed

    }
    else {
          data.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;" + messages[index] + "<br>";
      }
    index++;
    setTimeout(infinite, random);
  }
  infinite();