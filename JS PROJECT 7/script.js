let element = document.querySelector('h5');
let btn = document.getElementById("add");
var check = 0;
btn.addEventListener('click',function(){
           if(check == 0)
           {
                   element.innerHTML = "You have added a friend";
       element.style = "color:green;font-size:20px;";
       btn.innerHTML = 'Remove'
       check = 1;
           }
           else{
            element.innerHTML = "Stranger";
            element.style = "color:red;font-size:20px;";
              btn.innerHTML = 'Add Friend'
            check = 0;
           }
})

