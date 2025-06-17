
function submit(){
  let title  = document.getElementById("tname").value; 
  let cname = document.getElementById("cname").value; 
  let views = document.getElementById("views").value; 
  let monthold = document.getElementById("fdate").value; 
  let duration = document.getElementById("ttime").value; 
 let thumbail = document.getElementById("img").value; 
 console.log("ksjdjfl");
  createcard(title,cname,views, monthold, duration,thumbail);

}
function createcard(title,cname,views,monthold,duration,thumbail)
{
 //start function
  let str;
  if(views<1000000)
  {
    str = views/1000+"k";
  }
  else if(views>1000000)
  {
    str = views/1000000+"m";
  }
  else{
    str = views/1000+"K";
  }

    let text = 
` <div class="card">
      <div class="image">
        <img src="${thumbail}" alt="">
        <div class="time">
          ${duration}
        </div>
      </div>
      <div class="text">
        <h2>${title}</h2>
        <p>${cname} . ${str}. ${monthold}</p>
      </div>
    </div>`;
    document.querySelector(".container").innerHTML  += text;
}




