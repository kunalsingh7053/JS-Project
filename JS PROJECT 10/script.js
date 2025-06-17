
 
let elem = document.querySelectorAll('.elem');


elem.forEach(function (item){
    console.log(item.childNodes);
   item.addEventListener('mouseenter',function(){
     item.childNodes[3].style.opacity = '1';
   }) 
  
   item.addEventListener('mouseleave',function(){
    item.childNodes[3].style.opacity = '0';

   }) 
   item.addEventListener('mousemove',function(e){
    item.childNodes[3].style.left = e.x+'px';
    // item.childNodes[3].style.top = e.y+'px';
 }) 


})



