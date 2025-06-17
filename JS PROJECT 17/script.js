let boxs = document.querySelectorAll('.box');
boxs.forEach(box => {
    box.addEventListener('click',function(){
        deactive();
        box.classList.add("active");
    })
});

function deactive(){
    boxs.forEach(box =>{
        box.classList.remove("active")
    })
}