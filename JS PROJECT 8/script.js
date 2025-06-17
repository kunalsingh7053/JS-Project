let con = document.querySelector('#container');
let like = document.querySelector('i');
con.addEventListener('dblclick',function(){
    like.style.transform = 'translate(-50%, -50%) scale(1)';
   like.style.color = 'red';

    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(0)';
        like.style.color = 'white';

    },1000)

})